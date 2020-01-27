// XAxisTick is for use as component for the tick property in XAxis.
// This render the placement of the tick label.  See XAxis.jsx on how
// it is being used.
//
import React from 'react'
import PropTypes from 'prop-types'

import {
  SHORT_DATE_TIME_FORMAT,
  timeseriesLabelFormatter
} from '../../../utils/ChartUtils'
import './XAxisTick.less'

export default class XAxisTick extends React.Component {
  render() {
    // Don't need index or verticalAnchor but extracting it
    // out of props since <text> complaints about them.
    // eslint-disable-next-line no-unused-vars, react/prop-types
    const {
      paddingTopBottom,
      type,
      verticalAnchor,
      index,
      visibleTicksCount,
      payload,
      ...rest
    } = this.props
    const className = `recharts-text recharts-cartesian-axis-tick-value
      rtc rtc-chart-xaxis-tick`

    let value = payload.value
    if (type === 'timeseries') {
      value = timeseriesLabelFormatter(value, SHORT_DATE_TIME_FORMAT)
    }

    return (
      <text className={className} {...rest}>
        <tspan x={this.props.x} dy={-paddingTopBottom}>
          {value}
        </tspan>
      </text>
    )
  }
}

XAxisTick.defaultProps = {
  paddingTopBottom: -12
}

XAxisTick.propTypes = {
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
   * default is middle
   */
  textAnchor: PropTypes.string,
  /**
   * payload.value contains the value for the label
   */
  payload: PropTypes.object,
  /**
   * This is the index of the data related to the payload.
   */
  index: PropTypes.number,
  /**
   * Number of pixels to pad away from XAxis line.
   * negative value move below the axis and positive value move above the axis
   */
  paddingTopBottom: PropTypes.number,
  /**
   * See XAxisTick.TYPE.
   */
  type: PropTypes.string
}
