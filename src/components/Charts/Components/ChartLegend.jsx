// Chart Legend component for Rechart charts that sets default legend behavior.
//
import React from 'react'
import PropTypes from 'prop-types'
import { Legend as RechartLegend } from 'recharts'

import ChartLegendContent from './ChartLegendContent'

export default class ChartLegend extends RechartLegend {}

ChartLegend.defaultProps = {
  ...RechartLegend.defaultProps,
  content: <ChartLegendContent />
}

ChartLegend.propTypes = {
  ...RechartLegend.propTypes,
  /**
   * Array of active item data keys. This can be used to control which series
   * are shown as active.
   */
  activeItems: PropTypes.arrayOf(PropTypes.string),
  /**
   * Custom class to add to the legend.
   */
  className: PropTypes.string,
  /**
   * onChange event handler for each item.
   */
  onChange: PropTypes.func
}
