// Component for a single series in the chart tooltip.
//
import React from 'react'
import PropTypes from 'prop-types'

import FlexLayout from '../../Layouts/FlexLayout'

export default class ChartTooltipListItem extends React.PureComponent {
  static propTypes = {
    color: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }

  render() {
    const { color, name, value } = this.props
    let colorNode = null
    if (color) {
      colorNode = (
        <span
          className="tooltip-list-item-color"
          style={{ backgroundColor: color }}
        />
      )
    }

    return (
      <FlexLayout
        className="tooltip-list-item"
        justifyContent="space-between"
        alignItems="center"
      >
        <FlexLayout alignItems="center" itemSpacing="10px">
          {colorNode}
          <div className="tooltip-list-item-name">{name}</div>
        </FlexLayout>
        <span className="tooltip-list-item-value">{value}</span>
      </FlexLayout>
    )
  }
}
