// BarChart is based off of recharts.BarChart.
//
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {
  BarChart as RechartBarChart,
  ResponsiveContainer,
  Tooltip
} from 'recharts'

import Bar from './Cartesian/Bar'
import CartesianGrid from './Cartesian/CartesianGrid'
import ChartTooltipContent from './Components/ChartTooltipContent'
import XAxis from './Cartesian/XAxis'
import YAxis from './Cartesian/YAxis'
import { colors, getChartCategorialColorsByIndex } from '../../utils/ColorUtils'

import './BarChart.less'
import { InferPropTypes } from 'utils/types'

export default function BarChart(
  props: InferPropTypes<typeof BarChart.propTypes, typeof BarChart.defaultProps>
  & {data: object[]}
) {
  const {
    className,
    bars,
    xAxisProps,
    yAxisProps,
    tooltipProps,
    cartesianGridProps,
    responsiveContainerProps,
    ...rest
  } = props

  // @ts-ignore
  const barNodes = bars && bars.map((barProps, index) => {
    const { cells, ..._barProps } = barProps
    return (
      <Bar
        key={barProps.dataKey}
        {..._barProps}
        fill={
          _barProps.fill || getChartCategorialColorsByIndex(index)
        }
      >
        {cells}
      </Bar>
    )
  })

  let tooltipNode
  if (tooltipProps) {
    // @ts-ignore
    const { innerTooltipContent } = tooltipProps
    tooltipNode = (
      <Tooltip
        active={false}
        content={
          <ChartTooltipContent
            type="barChart"
            innerTooltipContent={innerTooltipContent}
          />
        }
        {...tooltipProps}
      />
    )
  }

  let cartesianGridNode
  if (cartesianGridProps) {
    cartesianGridNode = <CartesianGrid {...cartesianGridProps} />
  }

  let barChartNode = (
    <RechartBarChart
      className={classnames('rtc rtc-bar-chart', className)}
      {...rest}
    >
      <XAxis
        axisLine={{
          stroke: colors['light-gray-3']
        }}
        padding={{
          left: 30,
          right: 0
        }}
        {...xAxisProps}
      />
      <YAxis {...yAxisProps} />
      {cartesianGridNode}
      {tooltipNode}
      {barNodes}
    </RechartBarChart>
  )

  if (!props.width || !props.height) {
    // If no width or height is specified then
    // we will use responsiveContainer to get the
    // parent container width and height.
    barChartNode = (
      <ResponsiveContainer {...responsiveContainerProps}>
        {barChartNode}
      </ResponsiveContainer>
    )
  }

  return barChartNode
}

BarChart.defaultProps = {
  bars: [{ dataKey: 'value' }],
  responsiveContainerProps: {
    minWidth: 100,
    minHeight: 100
  },
  tooltipProps: null,
  cartesianGridProps: null
}

BarChart.propTypes = {
  /**
   * Customize additional class name.
   */
  className: PropTypes.string,
  /**
   * See http://recharts.org/api/#/en-US/api/BarChart for the format
   * Example:
   * By default 'name' is required.
   * [{name: 'a', value: '10'},{name: 'b', value: '15'},{name: 'c', value: '9'}]
   */
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * See http://recharts.org/api/#/en-US/api/BarChart for the format
   * If width isn't provided then width of chart will be responsive
   * to the parent element width and height
   */
  width: PropTypes.number,
  /**
   * See http://recharts.org/api/#/en-US/api/BarChart for the format
   * If height isn't provided then height of chart will be responsive
   * to the parent element width and height
   */
  height: PropTypes.number,
  /**
   * Array of bar props.  See http://recharts.org/api/#/en-US/api/Bar
   * Additional properties:
   * bar.cells - See http://recharts.org/api/#/en-US/api/Cell.  This allows
   *   control of color of each bar in a group.
   */
  bars: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * The key of a group of data which should be unique in an bar chart.
       * default is 'value'
       */
      dataKey: PropTypes.string.isRequired,
      /**
       * Props for LabelList.  See http://recharts.org/en-US/api/LabelList
       */
      labelListProps: PropTypes.object
    })
  ),
  /**
   * See Cartesian/XAxis.jsx for all supported properties
   */
  xAxisProps: PropTypes.object,
  /**
   * See Cartesian/YAxis.jsx for all supported properties
   */
  yAxisProps: PropTypes.object,
  /**
   * See Cartesian/CartesianGridProps for all supported properties
   */
  cartesianGridProps: PropTypes.object,
  /**
   * Properties for the Tooltip component.
   * See http://recharts.org/api/#/en-US/api/Tooltip for all
   * support properties.
   */
  tooltipProps: PropTypes.object,
  /**
   * Properties for the ResponsiveContainer component.
   * See http://recharts.org/api/#/en-US/api/ResponsiveContainer
   */
  responsiveContainerProps: PropTypes.object
}
