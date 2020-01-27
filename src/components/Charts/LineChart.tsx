// LineChart is a customized version of rechart LineChart.
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import {
  LineChart as RechartLineChart,
  ResponsiveContainer,
  Tooltip
} from 'recharts'
import classnames from 'classnames'

import CartesianGrid from './Cartesian/CartesianGrid'
import ChartLegend from './Components/ChartLegend'
import ChartTooltipContent from './Components/ChartTooltipContent'
import Line from './Cartesian/Line'
import XAxis from './Cartesian/XAxis'
import XAxisTick from './Cartesian/XAxisTick'
import YAxis from './Cartesian/YAxis'
import { timeseriesLabelFormatter } from '../../utils/ChartUtils'
import { colors, getChartCategorialColorsByIndex } from '../../utils/ColorUtils'

import './LineChart.less'
import { InferPropTypes } from 'utils/types'

export default function LineChart(
  props: InferPropTypes<
    typeof LineChart.propTypes,
    typeof LineChart.defaultProps
  > & { data: object[] }
) {
  const [activeLines, setActiveLines] = useState<Array<any>>(
    // @ts-ignore
    props.activeLines || props.lines.map(line => line.dataKey)
  )

  useEffect(() => {
    // @ts-ignore
    setActiveLines(props.lines.map(line => line.dataKey))
  }, [props.lines])

  useEffect(() => {
    props.activeLines && setActiveLines(props.activeLines)
  }, [props.activeLines])

  function handleChangeLegendItem(e) {
    const { id, value } = e.target

    if (value === 'active') {
      setActiveLines(prevState => prevState.filter(line => line !== id))
    } else {
      setActiveLines(prevState => prevState.concat([id]))
    }
  }

  const {
    className,
    dataType,
    lines,
    tooltipProps,
    cartesianGridProps,
    legendProps,
    responsiveContainerProps,
    xAxisProps,
    yAxisProps,
    ...rest
  } = props

  const lineNodes = (lines || []).map((lineProps, index) => {
    if (!activeLines.includes(lineProps.dataKey)) {
      return null
    }
    const stroke = lineProps.stroke || getChartCategorialColorsByIndex(index)
    const activeDot = lineProps.activeDot || {
      fill: colors['white'],
      r: 2.1,
      stroke,
      strokeWidth: 1
    }
    return (
      <Line
        key={lineProps.dataKey}
        {...lineProps}
        activeDot={activeDot}
        stroke={stroke}
      />
    )
  })

  let tooltipNode
  if (tooltipProps) {
    // @ts-ignore
    let { innerTooltipContent, labelFormatter } = tooltipProps
    if (!labelFormatter && dataType === LineChart.DATA_TYPES.TIME_SERIES) {
      labelFormatter = timeseriesLabelFormatter
    }
    tooltipNode = (
      <Tooltip
        content={
          <ChartTooltipContent
            innerTooltipContent={innerTooltipContent}
            labelFormatter={labelFormatter}
            type="areaChart"
          />
        }
        cursor={{
          stroke: colors['light-gray-2']
        }}
        {...tooltipProps}
      />
    )
  }

  let cartesianGridNode
  if (cartesianGridProps) {
    cartesianGridNode = <CartesianGrid {...cartesianGridProps} />
  }

  let legendNode
  if (legendProps) {
    legendNode = (
      <ChartLegend
        activeItems={activeLines}
        // @ts-ignore
        payload={(lines || []).map((line, i) => ({
          dataKey: line.dataKey,
          color: line.stroke || getChartCategorialColorsByIndex(i),
          payload: line,
          title: line.title
        }))}
        onChange={handleChangeLegendItem}
        {...legendProps}
      />
    )
  }

  let xAxisTick
  if (dataType === 'timeseries') {
    xAxisTick = <XAxisTick type={'timeseries'} />
  }

  let lineChartNode = (
    <RechartLineChart
      className={classnames(className, 'rtc rtc-line-chart')}
      {...rest}
    >
      {tooltipNode}
      {cartesianGridNode}
      {lineNodes}
      {legendNode}
      <YAxis {...yAxisProps} />
      <XAxis tick={xAxisTick} {...xAxisProps} />
      {props.children}
    </RechartLineChart>
  )

  if (!props.width || !props.height) {
    // If no width or height is specified then
    // we will use responsiveContainer to get the
    // parent container width and height.
    lineChartNode = (
      <ResponsiveContainer {...responsiveContainerProps}>
        {lineChartNode}
      </ResponsiveContainer>
    )
  }

  return lineChartNode
}

LineChart.DATA_TYPES = {
  TIME_SERIES: 'timeseries'
}

// TODO: Add showTooltip, showLegend and showGrid props to toggle these elements
LineChart.defaultProps = {
  cartesianGridProps: {},
  legendProps: null,
  lines: [{ dataKey: 'value' }],
  margin: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  responsiveContainerProps: {
    minWidth: 100,
    minHeight: 200
  },
  tooltipProps: {}
}

LineChart.propTypes = {
  /**
   * Customize additional class name.
   */
  className: PropTypes.string,
  /**
   * Data source for the chart(s).
   * Example: [{name: 'a', value: 100}, {name: 'b', value: 200}]
   * See http://recharts.org/#/en-US/api/LineChart
   */
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * Indicates how the data should be handled (e.g. time-based data has a
   * standard formatting applied to it). See LineChart.DATA_TYPES.
   */
  dataType: PropTypes.string,
  /**
   * Array of line props.  See http://recharts.org/api/#/en-US/api/Line
   * NOTE: if multiple line items are provided be sure the dataKey
   * property is unique for each line items.
   */
  lines: PropTypes.array,
  /**
   * Array of line data keys. By default, all lines are shown. This can be used
   * to control which lines are shown by default. Users can also control which
   * lines are currently visible by toggling them in the chart legend.
   */
  activeLines: PropTypes.arrayOf(PropTypes.string),
  /**
   * Set the height of the chart.
   * If height isn't provided then height of chart will be responsive
   * to the parent element width and height
   */
  height: PropTypes.number,
  /**
   * Sets the width of the chart.
   * If width isn't provided then width of chart will be responsive
   * to the parent element width and height
   */
  width: PropTypes.number,
  /**
   * Properties for the Tooltip component.
   * See http://recharts.org/api/#/en-US/api/Tooltip for all supported
   * properties.
   */
  tooltipProps: PropTypes.object,
  /**
   * See Cartesian/CartesianGridProps for all supported properties
   */
  cartesianGridProps: PropTypes.object,
  /**
   * See ChartLegend.jsx for all supported properties.
   */
  legendProps: PropTypes.object,
  /**
   * See Cartesian/XAxis.jsx for all supported properties
   */
  xAxisProps: PropTypes.object,
  /**
   * See Cartesian/YAxis.jsx for all supported properties
   */
  yAxisProps: PropTypes.object,
  /**
   * Properties for the ResponsiveContainer component.
   * See http://recharts.org/api/#/en-US/api/ResponsiveContainer
   */
  responsiveContainerProps: PropTypes.object,
  /**
   * Items (child nodes).
   * Reference components (ReferenceLine, ReferenceDot, ReferenceArea, ErrorBar)
   */
  children: PropTypes.node
}
