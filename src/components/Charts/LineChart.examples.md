Basic Usage - By default the chart is responsive to resize.

```jsx
var data = [
  {
    name: 'A',
    value: 200
  },
  {
    name: 'B',
    value: 500
  },
  {
    name: 'C',
    value: 1000
  }
]
;<LineChart data={data} />
```

Single line, show legend, no horizontal grid lines, show x-axis ticks, show y-axis ticks

```jsx
var data = [
  {
    name: 'A',
    value: 200
  },
  {
    name: 'B',
    value: 500
  },
  {
    name: 'C',
    value: 1000
  }
]

;<LineChart
  data={data}
  cartesianGridProps={{
    horizontal: false
  }}
  legendProps={{}}
  xAxisProps={{
    axisLine: true,
    tickLine: true
  }}
  yAxisProps={{
    axisLine: true,
    mirror: false,
    tick: <YAxisTick paddingTopBottom={0} />,
    tickLine: true
  }}
/>
```

Multi line, fixed width and height, using custom colors, enable tooltip, enable grid, enable legend

```jsx
const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 }
]
;<LineChart
  data={data}
  width={600}
  height={200}
  lines={[
    { dataKey: 'uv', stroke: '#f2ca00' },
    { dataKey: 'pv', stroke: '#60c2e3' },
    { dataKey: 'amt' }
  ]}
  legendProps={{}}
/>
```

Multi line, "uv" line active, tooltip with formatters

```jsx
const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 }
]
;<LineChart
  data={data}
  width={600}
  height={200}
  lines={[
    { dataKey: 'uv', stroke: '#f2ca00' },
    { dataKey: 'pv', stroke: '#60c2e3' },
    { dataKey: 'amt' }
  ]}
  activeLines={['uv']}
  legendProps={{}}
  tooltipProps={{
    formatter: value => value * 1000,
    labelFormatter: label => label + '-label',
    nameFormatter: name => name + '-name'
  }}
/>
```

Using dataType prop to format time based data. Note: x-axis values must be in milliseconds.

```jsx
const data = [
  { name: 1507831200, uv: 4000, pv: 2400, amt: 2400 },
  { name: 1507841200, uv: 3000, pv: 1398, amt: 2210 },
  { name: 1507851200, uv: 2000, pv: 9800, amt: 2290 },
  { name: 1507861200, uv: 2780, pv: 3908, amt: 2000 },
  { name: 1507871200, uv: 1890, pv: 4800, amt: 2181 },
  { name: 1507881200, uv: 2390, pv: 3800, amt: 2500 },
  { name: 1507891200, uv: 3490, pv: 4300, amt: 2100 }
]
;<LineChart
  data={data}
  dataType={'timeseries'}
  width={800}
  height={200}
  lines={[
    { dataKey: 'uv', stroke: '#f2ca00' },
    { dataKey: 'pv', stroke: '#60c2e3' },
    { dataKey: 'amt' }
  ]}
  legendProps={{}}
/>
```

LineChart with reference element

```jsx
const Rechart = require('recharts')
const ReferenceLine = Rechart.ReferenceLine
const ReferenceArea = Rechart.ReferenceArea
const data = [
  {
    name: 'A',
    value: 300
  },
  {
    name: 'B',
    value: 500
  },
  {
    name: 'C',
    value: 1000
  }
]
;<LineChart data={data}>
  <ReferenceLine y="600" stroke="red" strokeDasharray="3 3" />
  <ReferenceArea
    x1={'B'}
    x2={'C'}
    y1={200}
    y2={800}
    stroke="lightgray"
    strokeOpacity={0.3}
  />
</LineChart>
```
