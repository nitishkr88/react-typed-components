// CartesianGrid is based off of Recharts CartesianGrid.
//
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { CartesianGrid as RechartCartesianGrid } from 'recharts'

import colors from '../../../utils/less-variables'

export default class CartesianGrid extends RechartCartesianGrid {
  render() {
    const { className } = this.props
    // The Recharts CartesianGrid code doesn't take additional className
    // properties, so we can't rely on using JSX component calling.
    // Here we are calling the parent render and then clone the element
    // to inject the className.
    const element = RechartCartesianGrid.prototype.render.apply(this)
    return React.cloneElement(element, {
      className: classnames(
        'rtc rtc-chart-cartesian-grid',
        className,
        element.props.className
      )
    })
  }
}

CartesianGrid.defaultProps = {
  ...RechartCartesianGrid.defaultProps,
  horizontal: true,
  vertical: false,
  stroke: colors['@light-gray-3'],
  strokeDasharray: '0'
}

CartesianGrid.propTypes = {
  ...RechartCartesianGrid.propTypes,
  /**
   * This is the svg line stroke-dasharray attribute.
   * See https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray
   * for examples.
   */
  strokeDasharray: PropTypes.string
}
