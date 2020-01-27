// Bar component is based off of Rechart Bar which can be used
// as a child of BarChart.
//
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Bar as RechartBar, LabelList } from 'recharts'

import colors from '../../../utils/less-variables'
import './Bar.less'

const labelListPropsDefault = {
  position: 'top',
  fill: colors['@dark-gray-1']
}

export default class Bar extends RechartBar {
  render() {
    const { className, labelListProps, ...rest } = this.props
    let mergedLabelListProps
    if (labelListProps) {
      mergedLabelListProps = {
        ...labelListPropsDefault,
        ...labelListProps
      }
    }

    return (
      <RechartBar
        className={classnames('rtc rtc-chart-cartesian-bar', className)}
        {...rest}
      >
        {labelListProps ? <LabelList {...mergedLabelListProps} /> : undefined}
      </RechartBar>
    )
  }
}

Bar.defaultProps = {
  ...RechartBar.defaultProps,
  isAnimationActive: false,
  fill: colors['@light-gray-2'],
  dataKey: 'value'
}

Bar.propTypes = {
  /**
   * Animation of the area.  By default is false.
   */
  isAnimationActive: PropTypes.bool,
  /**
   * The fill color for the bar.
   */
  fill: PropTypes.string,
  /**
   * The data key to get the value for the bar.
   */
  dataKey: PropTypes.string.isRequired,
  /**
   * Props for LabelList.  See http://recharts.org/en-US/api/LabelList
   */
  labelListProps: PropTypes.object
}
