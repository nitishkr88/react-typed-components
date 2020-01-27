Basic usage with responsive resize.

```jsx
const data = [
  { name: 'Page A', value: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', value: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', value: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', value: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', value: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', value: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', value: 3490, pv: 4300, amt: 2100 }
]

;<AreaChart data={data} />
```

Same as above except all the data are stacked and legend is shown

```jsx
const data = [
  { name: 'Page A', value: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', value: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', value: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', value: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', value: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', value: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', value: 3490, pv: 4300, amt: 2100 }
]
;<AreaChart
  height={200}
  width={500}
  areas={[
    { dataKey: 'value', fill: '#FEF1F1', stroke: '#AD3951', stackId: '1' },
    { dataKey: 'pv', fill: '#EDFBF1', stroke: '#15935B', stackId: '1' },
    { dataKey: 'amt', fill: '#EDF7FE', stroke: '#1D4FB0', stackId: '1' }
  ]}
  data={data}
  tooltipProps={{}}
  cartesianGridProps={{}}
  legendProps={{}}
/>
```
