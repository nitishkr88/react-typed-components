// Line component is based off of Rechart Line which can be used
// as a child of LineChart.
//
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Line as RechartLine } from 'recharts'

import colors from '../../../utils/less-variables'

export default class Line extends RechartLine {
  render() {
    const { className, ...rest } = this.props
    return (
      <RechartLine
        className={classnames('rtc rtc-chart-cartesian-line', className)}
        {...rest}
      />
    )
  }
}

Line.defaultProps = {
  ...RechartLine.defaultProps,
  dot: {
    r: 0
  },
  isAnimationActive: false,
  dataKey: 'value',
  stroke: colors['@light-gray-2'],
  type: 'monotone'
}

Line.propTypes = {
  /**
   * Animation of the area.  By default is false.
   */
  isAnimationActive: PropTypes.bool,
  /**
   * The fill color for the bar.
   */
  stroke: PropTypes.string,
  /**
   * The data key to get the value for the bar.
   */
  dataKey: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.func
  ]).isRequired,
  /**
   * See http://recharts.org/#/en-US/api/Line for the list of
   * valid strings
   */
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}
