Default usage. Design recommended that the bar width should be 20px. Note that
barSize property in this implementation is a suggestive maxinum size of each bar and will
auto shrink to fit based on the width property.

```jsx
const data = [
  { name: 'Page A', value: 40 },
  { name: 'Page B', value: 30 },
  { name: 'Page C', value: 20 },
  { name: 'Page D', value: 27 },
  { name: 'Page E', value: 18 },
  { name: 'Page F', value: 23 },
  { name: 'Page G', value: 34 }
]

;<BarChart width={300} height={200} data={data} barSize={20} />
```

Customize the label at the top of each bar.

```jsx
const data = [
  { name: 'Page A', value: 4000, pv: 2400, amt: 2400, label: '4k' },
  { name: 'Page B', value: 3000, pv: 1398, amt: 2210, label: '3k' },
  { name: 'Page C', value: 2000, pv: 9800, amt: 2290, label: '2k' },
  { name: 'Page D', value: 2780, pv: 3908, amt: 2000, label: '2k' },
  { name: 'Page E', value: 1890, pv: 4800, amt: 2181, label: '1k' },
  { name: 'Page F', value: 2390, pv: 3800, amt: 2500, label: '2k' },
  { name: 'Page G', value: 3490, pv: 4300, amt: 2100, label: '3k' }
]

const containerStyle = {
  width: '350px',
  height: '200px'
}

const fill = '#8a77ed'

;<FlexLayout flexDirection="column">
  Default label
  <div style={containerStyle}>
    <BarChart
      margin={{ top: 20 }}
      barSize={20}
      data={data}
      bars={[{ dataKey: 'value', fill, stroke: 'none', labelListProps: {} }]}
      xAxisProps={{ padding: { left: 40, right: 0 } }}
    />
  </div>
  Using different dataKey to display the label
  <div style={containerStyle}>
    <BarChart
      margin={{ top: 20 }}
      barSize={20}
      data={data}
      bars={[
        {
          dataKey: 'value',
          fill,
          stroke: 'none',
          labelListProps: { dataKey: 'label' }
        }
      ]}
      xAxisProps={{ padding: { left: 40, right: 0 } }}
    />
  </div>
</FlexLayout>
```

Stacking 3 values on a bar. Enable tooltip on hover. Using yAxisProps to
customize the rendering of yAxis.

```jsx
const data = [
  { name: 'Jul 2', info: 0, warning: 1, critical: 1 },
  { name: 'Jul 3', info: 1, warning: 1, critical: 1 },
  { name: 'Jul 4', info: 0, warning: 2, critical: 0 },
  { name: 'Jul 5', info: 0, warning: 0, critical: 1 },
  { name: 'Jul 6', info: 0, warning: 1, critical: 2 },
  { name: 'Jul 7', info: 0, warning: 1, critical: 0 }
]

const yellow1 = '#ffbc0b'
const red1 = '#f55656'
const lightgray1 = '#b8bfca'

;<BarChart
  width={400}
  height={200}
  barSize={20}
  tooltipProps={{}}
  bars={[
    { dataKey: 'warning', fill: yellow1, stackId: 1 },
    { dataKey: 'info', fill: lightgray1, stackId: 1 },
    { dataKey: 'critical', fill: red1, stackId: 1 }
  ]}
  data={data}
  xAxisProps={{ padding: { left: 40, right: 0 } }}
  yAxisProps={{ allowDecimals: false, domain: ['dataMin', 4] }}
/>
```

Control the gap, show grid and tooltip

```jsx
const data = [
  { name: 'Page A', value: 4000, pv: 2400, amt: 2400, label: '4000 $ Label' },
  { name: 'Page B', value: 3000, pv: 1398, amt: 2210, label: '3000 $ Label' },
  { name: 'Page C', value: 2000, pv: 9800, amt: 2290, label: '2000 $ Label' },
  { name: 'Page D', value: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', value: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', value: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', value: 3490, pv: 4300, amt: 2100 }
]

const containerStyle = {
  width: '350px',
  height: '200px'
}

;<div style={containerStyle}>
  <BarChart
    barCategoryGap={0}
    data={data}
    tooltipProps={{}}
    cartesianGridProps={{}}
    xAxisProps={{ padding: { left: 40, right: 0 } }}
  />
</div>
```

Multi bar groups with smaller gap size and layout vertically

```jsx
const data = [
  { name: 'Page A', value: 4000, pv: 2400, amt: 2400, label: '4000 $ Label' },
  { name: 'Page B', value: 3000, pv: 1398, amt: 2210, label: '3000 $ Label' },
  { name: 'Page C', value: 2000, pv: 9800, amt: 2290, label: '2000 $ Label' },
  { name: 'Page D', value: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', value: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', value: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', value: 3490, pv: 4300, amt: 2100 }
]

const containerStyle = {
  width: '350px',
  height: '200px'
}

;<div style={containerStyle}>
  <BarChart
    barGap={1}
    bars={[{ dataKey: 'value' }, { dataKey: 'amt' }, { dataKey: 'pv' }]}
    data={data}
    xAxisProps={{ padding: { left: 40, right: 0 } }}
  />
</div>
```
