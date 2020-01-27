Basic example.
NOTE: Normally the properties of "automaticProps" are passed automatically from the Rechart Tooltip component.

```jsx
const automaticProps = {
  active: true,
  label: 'Series A',
  payload: [
    {
      stroke: '#f2ca00',
      strokeWidth: 1,
      fill: '#fff',
      dataKey: 'uv',
      name: 'uv',
      color: '#f2ca00',
      value: 2780,
      payload: {
        name: 1507861200,
        uv: 2780,
        pv: 3908,
        amt: 2000
      }
    },
    {
      stroke: '#60c2e3',
      strokeWidth: 1,
      fill: '#fff',
      dataKey: 'pv',
      name: 'pv',
      color: '#60c2e3',
      value: 3908,
      payload: {
        name: 1507861200,
        uv: 2780,
        pv: 3908,
        amt: 2000
      }
    },
    {
      stroke: '#36D068',
      strokeWidth: 1,
      fill: '#fff',
      dataKey: 'amt',
      name: 'amt',
      color: '#36D068',
      value: 2000,
      payload: {
        name: 1507861200,
        uv: 2780,
        pv: 3908,
        amt: 2000
      }
    }
  ]
}

;<ChartTooltipContent
  type="lineChart"
  {...automaticProps}
  style={{ maxWidth: '150px' }}
/>
```
