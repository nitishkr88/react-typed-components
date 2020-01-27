// YAxis is for use with AreaChart, LineChart and other Rechart charts
// that can utilize YAxis.
//
import React from 'react'
import { YAxis as RechartYAxis } from 'recharts'

import YAxisTick from './YAxisTick'

export default class YAxis extends RechartYAxis {
  // With the way Recharts YAxis code was written there isn't
  // any way to override any of the component functions.  You
  // are only allow to override the propTypes and defaultProps which we are
  // doing below.
  render() {
    return super.render()
  }
}

YAxis.defaultProps = {
  ...RechartYAxis.defaultProps,
  axisLine: false,
  interval: 'preserveStartEnd',
  minTickGap: 15,
  mirror: true,
  tick: <YAxisTick />,
  tickCount: 10,
  tickLine: false
}

YAxis.propTypes = {
  ...RechartYAxis.propTypes
}
