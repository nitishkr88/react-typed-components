import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'
import {
  AreaChart as RechartAreaChart,
  ResponsiveContainer,
  Tooltip
} from 'recharts'

import Area from './Cartesian/Area'
import CartesianGrid from './Cartesian/CartesianGrid'
import ChartLegend from './Components/ChartLegend'
import ChartTooltipContent from './Components/ChartTooltipContent'
import XAxis from './Cartesian/XAxis'
import XAxisTick from './Cartesian/XAxisTick'
import YAxis from './Cartesian/YAxis'
import { timeseriesLabelFormatter } from '../../utils/ChartUtils'

import './AreaChart.less'
import { InferPropTypes } from 'utils/types'
import { getChartCategorialColorsByIndex, colors } from '../../utils/ColorUtils'

export default function AreaChart(
  props: InferPropTypes<
    typeof AreaChart.propTypes,
    typeof AreaChart.defaultProps
  > & { data: object[] }
) {
  const [activeAreas, setActiveAreas] = useState<Array<any>>(
    // @ts-ignore
    props.activeAreas || props.areas.map(area => area.dataKey)
  )

  useEffect(() => {
    // @ts-ignore
    setActiveAreas(props.areas.map(area => area.dataKey))
  }, [props.areas])

  useEffect(() => {
    props.activeAreas && setActiveAreas(props.activeAreas)
  }, [props.activeAreas])

  function handleChangeLegendItem(e) {
    const { id, value } = e.target

    if (value === 'active') {
      setActiveAreas(prevState => prevState.filter(area => area !== id))
    } else {
      setActiveAreas(prevState => prevState.concat([id]))
    }
  }

  const {
    areas,
    cartesianGridProps,
    className,
    dataType,
    legendProps,
    responsiveContainerProps,
    tooltipProps,
    xAxisProps,
    yAxisProps,
    ...rest
  } = props

  const areaNodes = (areas || []).map((areaProps, index) => {
    if (!activeAreas.includes(areaProps.dataKey)) {
      return null
    }
    const stroke = areaProps.stroke || getChartCategorialColorsByIndex(index)
    const activeDot = areaProps.activeDot || {
      fill: colors['white'],
      r: 2.1,
      stroke,
      strokeWidth: 1
    }
    const fill = stroke
    return (
      <Area
        key={areaProps.dataKey}
        {...areaProps}
        activeDot={activeDot}
        stroke={stroke}
        fill={fill}
      />
    )
  })

  let tooltipNode
  if (tooltipProps) {
    // @ts-ignore
    let { innerTooltipContent, labelFormatter } = tooltipProps
    if (!labelFormatter && dataType === 'timeseries') {
      labelFormatter = timeseriesLabelFormatter
    }
    tooltipNode = (
      <Tooltip
        content={
          <ChartTooltipContent
            innerTooltipContent={innerTooltipContent}
            labelFormatter={labelFormatter}
            type="lineChart"
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
        activeItems={activeAreas}
        // @ts-ignore
        payload={(areas || []).map((area, i) => ({
          dataKey: area.dataKey,
          color: area.stroke || getChartCategorialColorsByIndex(i),
          payload: area
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

  let areaChartNode = (
    <RechartAreaChart
      className={classnames(className, 'rtc rtc-area-chart')}
      {...rest}
    >
      <XAxis tick={xAxisTick} {...xAxisProps} />
      <YAxis {...yAxisProps} />
      {cartesianGridNode}
      {tooltipNode}
      {areaNodes}
      {legendNode}
    </RechartAreaChart>
  )

  if (!props.width || !props.height) {
    // If no width or height is specified then
    // we will use responsiveContainer to get the
    // parent container width and height.
    areaChartNode = (
      <ResponsiveContainer {...responsiveContainerProps}>
        {areaChartNode}
      </ResponsiveContainer>
    )
  }

  return areaChartNode
}

const dataType: ReadonlyArray<'timeseries'> = ['timeseries']

AreaChart.defaultProps = {
  areas: [{ dataKey: 'value' }],
  cartesianGridProps: {},
  legendProps: null,
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

AreaChart.propTypes = {
  /**
   * Customize additional class name.
   */
  className: PropTypes.string,
  /**
   * [See Recharts AreaChart](http://recharts.org/api/#/en-US/api/AreaChart)
   * for the properties.
   * Example:
   * [{name: 'a', value: '10'},{name: 'b', value: '15'},{name: 'c', value: '9'}]
   */
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * Indicates how the data should be handled (e.g. time-based data has a
   * standard formatting applied to it). See AreaChart.DATA_TYPES.
   */
  dataType: PropTypes.oneOf(dataType),
  /**
   * Array of area props.  [See Recharts Area](http://recharts.org/api/#/en-US/api/Area)
   * NOTE: if multiple area items are provided be sure the dataKey
   * property is unique for each area item.
   */
  areas: PropTypes.array,
  /**
   * Array of area data keys. By default, all areas are shown. This can be used
   * to control which areas are shown by default. Users can also control which
   * areas are currently visible by toggling them in the chart legend.
   */
  activeAreas: PropTypes.arrayOf(PropTypes.string),
  /**
   * See http://recharts.org/api/#/en-US/api/AreaChart for the format
   */
  width: PropTypes.number,
  /**
   * See http://recharts.org/api/#/en-US/api/AreaChart for the format
   */
  height: PropTypes.number,
  /**
   * See Cartesian/XAxis.jsx for all supported properties
   */
  xAxisProps: PropTypes.object,
  /**
   * See Cartesian/YAxis.jsx for all supported properties
   */
  yAxisProps: PropTypes.object,
  /**
   * Properties for the Tooltip component.
   * See http://recharts.org/api/#/en-US/api/Tooltip for all
   * support properties.
   * Pass in null to disable tooltip.
   */
  tooltipProps: PropTypes.object,
  /**
   * See Cartesian/CartesianGridProps for all supported properties.
   * Pass in null to disable.
   */
  cartesianGridProps: PropTypes.object,
  /**
   * See ChartLegend.jsx for all supported properties.
   */
  legendProps: PropTypes.object,
  /**
   * Properties for the ResponsiveContainer component.
   * See http://recharts.org/api/#/en-US/api/ResponsiveContainer
   */
  responsiveContainerProps: PropTypes.object
}
