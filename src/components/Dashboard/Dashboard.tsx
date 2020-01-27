// Dashboard is a component to display a responsive dashboard of widgets.
//
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'
import { Responsive, WidthProvider } from 'react-grid-layout'

import 'react-grid-layout/css/styles.css'
import './Dashboard.less'
import { InferPropTypes } from 'utils/types'

const ReactGridLayoutResponsive = WidthProvider(Responsive)

const DEFAULT_ROW_HEIGHT = 295
const DASHBOARD_HOME_PAGE_BREAK_POINTS = {
  lg: 1700,
  md: 1280,
  sm: 965,
  xsm: 650,
  xxsm: 439
}
const DASHBOARD_HOME_PAGE_COLS = {
  lg: 4,
  md: 4,
  sm: 3,
  xsm: 2,
  xxsm: 1
}
const LAYOUT_DEFAULT_PROPS = {
  x: 0,
  y: 0,
  w: 1,
  h: 1,
  static: true
}

export default function Dashboard(
  props: InferPropTypes<
    typeof Dashboard.propTypes,
    typeof Dashboard.defaultProps
  >
) {
  const [layoutsState, setLayoutsState] = useState(initLayouts(props.layouts))

  function initLayouts(layouts) {
    // Fills in the default grid item properties for each of the layout.
    const initLayouts = {}
    _.each(layouts, (layout, breakpoint) => {
      const initLayout = layout.map(layoutItem => {
        return {
          ...LAYOUT_DEFAULT_PROPS,
          ...layoutItem
        }
      })
      initLayouts[breakpoint] = sortLayoutItems(initLayout)
    })

    // The initial layouts from props doesn't require all the various
    // breakpoint layout defined.  This will fill in those gap.
    const firstLayout = initLayouts[Object.keys(initLayouts)[0]]
    const mergedLayouts = {}
    _.each(props.cols, (cols, breakpoint) => {
      mergedLayouts[breakpoint] = initLayoutPositioning(
        initLayouts[breakpoint] || firstLayout,
        cols
      )
    })

    return mergedLayouts
  }

  function initLayoutPositioning(layout, cols) {
    let currX = 0,
      currY = 0,
      currH = 0

    return layout.map(layoutItem => {
      const newLayoutItem = { ...layoutItem }

      if (newLayoutItem.w > cols) {
        newLayoutItem.w = cols
      }
      // If the current X position + the layout item width
      // is larger than the max columns then bump this item
      // down to the next Y position.
      if (currX + newLayoutItem.w > cols) {
        currX = 0
        newLayoutItem.x = 0
        newLayoutItem.y = currH
        currY = currH
        currH = 0
      } else {
        newLayoutItem.x = currX
        newLayoutItem.y = currY
      }
      currX += newLayoutItem.w

      if (currH < newLayoutItem.h) {
        currH = currY + newLayoutItem.h
      }

      return newLayoutItem
    })
  }

  function sortLayoutItems(layout) {
    // Each item in the layouts has a x(col) and y(row) position.
    // 0, 0 is top left corner on the dashboard.
    // This is doing a sort by row in ascending order followed by sort by column
    // in ascending order.
    const sorted = _.orderBy(layout, ['y', 'x'], ['asc', 'asc'])
    return sorted
  }

  function handleOnLayoutChange(layout, layouts) {
    setLayoutsState(initLayouts(layouts))
    if (props.onLayoutChange) {
      props.onLayoutChange(layout, layouts)
    }
  }

  const { className, layouts, onLayoutChange, ...rest } = props

  return (
    // @ts-ignore
    <ReactGridLayoutResponsive
      className={classnames('rtc rtc-dashboard', className)}
      layouts={layoutsState}
      onLayoutChange={handleOnLayoutChange}
      {...rest}
    >
      {props.children}
    </ReactGridLayoutResponsive>
  )
}

Dashboard.defaultProps = {
  rowHeight: DEFAULT_ROW_HEIGHT,
  margin: [20, 20],
  breakpoints: DASHBOARD_HOME_PAGE_BREAK_POINTS,
  cols: DASHBOARD_HOME_PAGE_COLS
}

Dashboard.propTypes = {
  /**
   * Customize additional class name.
   */
  className: PropTypes.string,
  /**
   * Each object must contain individual layout for
   * each responsive screen size lg, md, sm, xs, xxs.
   * See https://github.com/STRML/react-grid-layout#responsive-grid-layout-props
   * format.
   *
   * {lg: Layout, md: Layout...}  At least one of the size is needed.
   *
   * Layout is an array of items where each item shape as follow
   * {h: height unit, w: width unit, x: column position, y: position}
   * https://github.com/STRML/react-grid-layout#grid-item-props
   *
   * NOTE: x, y positioning in the layout item is only used as hint for the
   * placement and not meant to be exact position.  By default if x and y
   * position is not specified then it will be assigned to 0, 0(top left corner)
   * The responsive dashboard will attempt to place these items starting
   * at the top left corner and fill each item in as it move down the row.
   */
  layouts: PropTypes.object.isRequired,
  /**
   * Each children element in the array must contains a unique 'key'
   * that matches with the layout.i key.
   */
  children: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
  /**
   * Number of px.  The actual height of the item is rowHeight per unit layout.h
   * See https://github.com/STRML/react-grid-layout#grid-layout-props
   * for a list of other properties.
   */
  rowHeight: PropTypes.number,
  /**
   * This is the breakpoint -> cols map.
   * https://github.com/STRML/react-grid-layout#responsive-grid-layout-props
   */
  cols: PropTypes.object,
  /**
   * Responsive object breakpoints
   * See https://github.com/STRML/react-grid-layout#responsive-usage
   * for more details.
   */
  breakpoints: PropTypes.objectOf(PropTypes.number),
  /**
   * The [vertical, horizontal] margin in pixel placed between each widget.
   */
  margin: PropTypes.array,
  /**
   * Callback for when a layout is changed.
   * onLayoutChange(layout = this is the layout that changed, layouts)
   */
  onLayoutChange: PropTypes.func
}
