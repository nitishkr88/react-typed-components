// NOTE: This can be used as the title of our Ant Tooltip component if you want
// to show data in the same format that Charts do.
//
import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import ChartTooltipListItem from './ChartTooltipListItem'
import FlexLayout from '../../Layouts/FlexLayout'
import './ChartTooltipContent.less'

/**
 * Customized tooltip content for Rechart chart tooltips.
 */
export default class ChartTooltipContent extends React.Component {
  render() {
    const {
      active,
      formatter,
      innerTooltipContent,
      label,
      labelFormatter,
      nameFormatter,
      payload,
      type,
      style
    } = this.props

    if (!active) {
      return null
    }

    if (innerTooltipContent) {
      return (
        <div className="rtc rtc-chart-tooltip">
          {innerTooltipContent(this.props)}
        </div>
      )
    }

    // Render default tooltip...
    let tooltipLabel = null,
      tooltipLabelContent = null,
      tooltipList = null

    if (type === 'pieChart') {
      const { name } = payload[0]
      const { __percentage } = payload[0].payload
      const formattedName = nameFormatter ? nameFormatter(name) : name
      const formattedValue = formatter
        ? formatter(payload[0])
        : `${Math.round(__percentage * 100)} %`
      tooltipList = (
        <ChartTooltipListItem name={formattedName} value={formattedValue} />
      )
    } else {
      tooltipLabelContent = labelFormatter ? labelFormatter(label) : label
      tooltipList = payload.map(function(item, i) {
        const { dataKey, color, name, value } = item
        const formattedName = nameFormatter ? nameFormatter(name) : name
        const formattedValue = formatter ? formatter(value) : value

        if (_.isUndefined(formattedValue) || _.isNull(formattedValue)) {
          return null
        }

        return (
          <ChartTooltipListItem
            key={dataKey}
            color={color}
            name={formattedName}
            value={formattedValue}
          />
        )
      })
    }

    if (tooltipLabelContent) {
      tooltipLabel = <div className="tooltip-label">{tooltipLabelContent}</div>
    }

    return (
      <div className="rtc rtc-chart-tooltip" style={style}>
        <FlexLayout
          className="tooltip-container"
          flexDirection="column"
          itemSpacing="10px"
        >
          {tooltipLabel}
          <FlexLayout
            className="tooltip-list"
            flexDirection="column"
            itemSpacing="5px"
          >
            {tooltipList}
          </FlexLayout>
        </FlexLayout>
      </div>
    )
  }
}

ChartTooltipContent.propTypes = {
  /**
   * See http://recharts.org/#/en-US/api/Tooltip
   */
  active: PropTypes.bool,
  /**
   * Value formatter callback to allow custom rendering of the value.
   * See http://recharts.org/#/en-US/api/Tooltip
   */
  formatter: PropTypes.func,
  /**
   * Callback function to return a rendered react element.
   * innerTooltipContent(props: See http://recharts.org/#/en-US/api/Tooltip)
   */
  innerTooltipContent: PropTypes.func,
  /**
   * See http://recharts.org/#/en-US/api/Tooltip
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * See http://recharts.org/#/en-US/api/Tooltip
   */
  labelFormatter: PropTypes.func,
  /**
   * Custom function to format the name of each series in the series list.
   * NOTE: This is different from props.labelFormatter, which formats the
   * tooltip's title, and props.formatter, which formats the tooltip's values.
   */
  nameFormatter: PropTypes.func,
  /**
   * See http://recharts.org/#/en-US/api/Tooltip
   */
  payload: PropTypes.array,
  /**
   * Type of chart this tooltip is for. This list indicates the charts with
   * tooltip support.
   */
  type: PropTypes.oneOf(['areaChart', 'barChart', 'lineChart', 'pieChart'])
    .isRequired,
  /**
   * Custom styles to apply to tooltip content wrapper.
   */
  style: PropTypes.object
}
