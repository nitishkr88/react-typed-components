// PieLabel - Renders custom labels for pie charts.
//
import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

const RADIAN = Math.PI / 180
const ADDITIONAL_PX_AWAY_FROM_OUTERRADIUS = 8

export const PIE_LABEL_FORMATS = {
  PERCENTAGE: 'percentage',
  VALUE: 'value'
}

const LABEL_RENDERERS = {
  [PIE_LABEL_FORMATS.PERCENTAGE]: (payload, percent) =>
    `${Math.round(percent * 100)}%`,
  [PIE_LABEL_FORMATS.VALUE]: payload => `${payload.name}`
}

export default class PieLabel extends React.Component {
  render() {
    const position = this.getLabelPosition()
    const formatter = _.isFunction(this.props.formatter)
      ? this.props.formatter
      : LABEL_RENDERERS[this.props.formatter]

    return (
      <text
        x={position.x}
        y={position.y}
        textAnchor={position.x > position.cx ? 'start' : 'end'}
      >
        {formatter(this.props.payload, this.props.percent)}
      </text>
    )
  }

  /**
   * Calculates the position of the label.
   * @returns {object} - Position object.
   */
  getLabelPosition() {
    const { cx, cy, outerRadius, midAngle, position } = this.props
    let { x, y } = this.props

    switch (position) {
      case 'closeOuter':
        x =
          cx +
          (ADDITIONAL_PX_AWAY_FROM_OUTERRADIUS + outerRadius) *
            Math.cos(-midAngle * RADIAN)
        y =
          cy +
          (ADDITIONAL_PX_AWAY_FROM_OUTERRADIUS + outerRadius) *
            Math.sin(-midAngle * RADIAN)
        break
      default:
      // Noop
    }

    return {
      x,
      y,
      cx,
      cy
    }
  }
}

PieLabel.defaultProps = {
  formatter: PIE_LABEL_FORMATS.PERCENTAGE
}

PieLabel.propTypes = {
  /**
   * Used to customize the label content. If it is a function, the arguments
   * below will be passed to the function.
   * @param {Object} payload - See payload below for payload properties.
   * @param {Number} percent - The percent value (e.g. 0.5 for 50%).
   */
  formatter: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /**
   * Used to change the position calculation for the labels.
   */
  position: PropTypes.oneOf([
    'closeOuter' // Used to pull the labels in closer to the border of the pie.
  ]),
  /**
   * @namespace
   * @property {object} payload - Data that defines a pie chart slice.
   * @property {String} payload.fill - Hex color string of a pie chart slice.
   * @property {String} payload.name - Text label of a pie chart slice.
   * @property {Number} payload.value - Value of a pie chart slice.
   */
  payload: PropTypes.object,
  /**
   * See http://recharts.org/#/en-US/api/Pie
   */
  percent: PropTypes.number,
  /**
   * See http://recharts.org/#/en-US/api/Pie
   */
  x: PropTypes.number,
  /**
   * See http://recharts.org/#/en-US/api/Pie
   */
  y: PropTypes.number,
  /**
   * See http://recharts.org/#/en-US/api/Pie
   */
  cx: PropTypes.number,
  /**
   * See http://recharts.org/#/en-US/api/Pie
   */
  cy: PropTypes.number,
  /**
   * See http://recharts.org/#/en-US/api/Pie
   */
  outerRadius: PropTypes.number,
  /**
   * See http://recharts.org/#/en-US/api/Pie
   */
  midAngle: PropTypes.number
}
