// Area component is based off of Rechart Area which can be use
// as a child of AreaChart.
//
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Area as RechartArea } from 'recharts'

export default class Area extends RechartArea {
  render() {
    const { className, ...rest } = this.props

    return (
      <RechartArea
        className={classnames(className, 'rtc rtc-chart-cartesian-area')}
        {...rest}
      />
    )
  }
}

Area.defaultProps = {
  ...RechartArea.defaultProps,
  isAnimationActive: false,
  type: 'monotone'
}

Area.propTypes = {
  /**
   * Customize with additional class name.
   */
  className: PropTypes.string,
  /**
   * Animation of the area. By default it is turned off.
   */
  isAnimationActive: PropTypes.bool,
  /**
   * See http://recharts.org/#/en-US/api/Area for the list of
   * valid strings
   */
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}
