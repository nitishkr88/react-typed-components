// XAxis is for use with AreaChart, LineChart and other Rechart charts
// that can utilize XAxis.
//
import React from 'react'
import PropTypes from 'prop-types'
import { XAxis as RechartXAxis } from 'recharts'

import XAxisTick from './XAxisTick'

export default class XAxis extends RechartXAxis {
  // With the way Recharts XAxis code was written there isn't
  // any way to override any of the component functions.  You
  // are only allow to override the propTypes and defaultProps which we are
  // doing below.
  render() {
    return super.render()
  }
}

XAxis.defaultProps = {
  ...RechartXAxis.defaultProps,
  axisLine: false,
  dataKey: 'name',
  interval: 'preserveStartEnd',
  minTickGap: 20,
  tick: <XAxisTick />,
  tickCount: 10,
  tickLine: false
}

XAxis.propTypes = {
  ...RechartXAxis.propTypes,
  /**
   * The data key to display at bottom of the XAxis
   */
  dataKey: PropTypes.string
}
