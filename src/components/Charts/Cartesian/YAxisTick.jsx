// YAxisTick is for use as component for the tick property in XAxis.
// This render the placement of the tick label.  See XAxis.jsx on how
// it is being used.
//
import React from 'react'
import PropTypes from 'prop-types'

import './YAxisTick.less'

export default class YAxisTick extends React.Component {
  render() {
    // Don't need index or verticalAnchor but extracting it
    // out of props since <text> complaints about them.
    /* eslint-disable no-unused-vars, react/prop-types */
    const {
      index,
      paddingLeftRight,
      paddingTopBottom,
      payload,
      verticalAnchor,
      visibleTicksCount,
      ...rest
    } = this.props

    return (
      <text
        className={`recharts-text recharts-cartesian-axis-tick-value
        rtc rtc-chart-yaxis-tick`}
        dx={paddingLeftRight}
        {...rest}
      >
        <tspan x={this.props.x} dy={`${4 - paddingTopBottom}px`}>
          {payload.value}
        </tspan>
      </text>
    )
  }
}

YAxisTick.defaultProps = {
  paddingLeftRight: -6,
  paddingTopBottom: 15
}

YAxisTick.propTypes = {
  /**
   * The starting x position
   */
  x: PropTypes.number,
  /**
   * The start y position
   */
  y: PropTypes.number,
  /**
   * Position of the text - 'middle', 'end', or 'begin' ?
   * default is end.
   */
  textAnchor: PropTypes.string,
  /**
   * payload.value contains the value for the label
   */
  payload: PropTypes.object,
  /**
   * Number of pixels to pad away from YAxis line.
   * Negative value to move left and positive value to move right from the Axis
   */
  paddingLeftRight: PropTypes.number,
  /**
   * Number of pixels to pad away from YAxis line.
   * negative value move below the axis and positive value move above the axis
   */
  paddingTopBottom: PropTypes.number
}
