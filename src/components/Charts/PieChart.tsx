// PieChart is a custom rechart PieChart
//
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'
import {
  PieChart as RPieChart,
  Tooltip,
  Pie,
  Cell,
  ResponsiveContainer
} from 'recharts'

import ChartTooltipContent from './Components/ChartTooltipContent'
import { getChartLinearColorByIndex } from '../../utils/ColorUtils'
import './PieChart.less'
import { InferPropTypes } from 'utils/types'

const PIE_DEFAULT_PROPS = {
  isAnimationActive: false,
  paddingAngle: 2,
  // This position the first slice starts at the top center.
  startAngle: 90,
  endAngle: -360
}

export default function PieChart(
  props: InferPropTypes<typeof PieChart.propTypes, typeof PieChart.defaultProps>
) {
  /**
   * Render the Pie element.
   * @param {object} pies - Array of Pie items props.
   * @returns {element} - Array of Pies
   */
  function renderPie(pies) {
    // Override the color of the cell.
    return pies.map((pie, index) => {
      // The data is the array of pie slice (cell)
      const { data } = pie

      // Here we pre-calculate percent
      const sum = data.reduce((res, entry, rIndex) => {
        const value = entry[pie.dataKey]
        if (!_.isNumber(value)) {
          // Recharts PieChart ignore non number value.
          // eslint-disable-next-line no-console, max-len
          console.warn(
            `data[${rIndex}].${pie.dataKey} : ${value} is not a number.  Item will be ignored`
          )
          return res
        }
        return res + entry[pie.dataKey]
      }, 0)
      const mergedData: any[] = []
      const nodeCells: any[] = []
      data.forEach((cell, cellIndex) => {
        const value = cell[pie.dataKey]
        // Ignore data item that doesn't contain number.
        if (!_.isNumber(value)) {
          return
        }

        const __percentage = value / sum
        const fill =
          cell.fill || getChartLinearColorByIndex(cellIndex, data.length)

        mergedData.push({
          ...cell,
          __percentage
        })

        nodeCells.push(
          <Cell key={`cell-${index}`} {...cell} fill={fill} stroke={fill} />
        )
      })

      return (
        <Pie
          key={`${pie.name}-${index}`}
          {...PIE_DEFAULT_PROPS}
          {...pie}
          data={mergedData}
        >
          {nodeCells}
        </Pie>
      )
    })
  }
  const {
    className,
    pies,
    responsiveContainerProps,
    tooltipProps,
    ...pieChartProps
  } = props

  let tooltipNode
  if (tooltipProps) {
    // @ts-ignore
    const { innerTooltipContent } = tooltipProps
    tooltipNode = (
      <Tooltip
        content={
          <ChartTooltipContent
            type="pieChart"
            innerTooltipContent={innerTooltipContent}
          />
        }
        {...tooltipProps}
      />
    )
  }

  const pieChartNode = (
    <RPieChart
      className={classnames(className, 'rtc rtc-pie-chart')}
      {...pieChartProps}
    >
      {renderPie(pies)}
      {tooltipNode}
    </RPieChart>
  )

  if (!pieChartProps.width || !pieChartProps.height) {
    // If no width or height is specified then
    // we will use responsiveContainer to get the
    // parent container width and height.
    return (
      <ResponsiveContainer {...responsiveContainerProps}>
        {pieChartNode}
      </ResponsiveContainer>
    )
  }

  return pieChartNode
}

PieChart.defaultProps = {
  pies: [],
  width: 200,
  height: 200,
  responsiveContainerProps: {
    minWidth: 200,
    minHeight: 200
  },
  tooltipProps: {}
}

PieChart.propTypes = {
  /**
   * Customize additional class name.
   */
  className: PropTypes.string,
  /**
   * Array of  pie items See http://recharts.org/#/en-US/api/Pie.
   * required:
   * {
   *   data: Array of slice of pie cell. example [{name: 'group1', value: 300}
   *         See http://recharts.org/#/en-US/api/Cell
   * }
   */
  pies: PropTypes.arrayOf(
    /**
     * Each Pie
     * See http://recharts.org/en-US/api/Pie for other properties.
     */
    PropTypes.shape({
      /**
       * The value key in the data object.
       */
      dataKey: PropTypes.string.isRequired,
      /**
       * The name key in the data object.  Default is 'name'
       */
      nameKey: PropTypes.string,
      /**
       * Array of slices of the pie.
       *
       * The object must contain the following attribute keys:
       *  - the string defined in dataKey above.  (the value for this
       *  attribute must be a number)
       *  - the string defined in nameKey above.
       */
      data: PropTypes.arrayOf(PropTypes.object).isRequired
    })
  ),
  /**
   * PieChart width
   * See http://recharts.org/#/en-US/api/PieChart
   * For using in responsive size container set both width
   * and height to 0.
   * NOTE: This is actually the container size.  The pie chart size
   * is roughtly width - 40
   */
  width: PropTypes.number,
  /**
   * PieChart height
   * http://recharts.org/#/en-US/api/PieChart
   */
  height: PropTypes.number,
  /**
   * See http://recharts.org/#/en-US/api/PieChart margin
   * By default 20px margin is already added by ReChart.  to
   * add more margin use this.
   * { top: 5, bottom: 5, left: 5, right: 5 }
   * Note the 5px is added to the default 20px to give a 25px margin.
   */
  margin: PropTypes.object,
  /**
   * Properties for the ResponsiveContainer component.
   * See http://recharts.org/api/#/en-US/api/ResponsiveContainer
   */
  responsiveContainerProps: PropTypes.object,
  /**
   * By default tooltip enable.  To disable assign to null.
   * To provide custom content for the tooltip
   * {
   *   innerTooltipContent: call back function to return a react element.
   * }
   */
  tooltipProps: PropTypes.object
}
