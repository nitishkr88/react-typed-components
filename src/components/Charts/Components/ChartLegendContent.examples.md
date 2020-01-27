Basic example.
NOTE: Normally payload is passed automatically from the ChartLegend component.

```jsx
const lines = [
  { dataKey: 'test1', stroke: '#993366', value: 'Series 1' },
  { dataKey: 'test2', stroke: '#336699', value: 'Series 2' }
]

initialState = { activeItems: ['test1'] }

;<ChartLegendContent
  activeItems={state.activeItems}
  payload={lines.map((line, i) => ({
    dataKey: line.dataKey,
    color: line.stroke,
    payload: line
  }))}
  onChange={e => {
    const { id, value } = e.target
    if (value === 'active') {
      setState(prevState => ({
        activeItems: prevState.activeItems.filter(item => item !== id)
      }))
    } else {
      setState(prevState => ({
        activeItems: prevState.activeItems.concat([id])
      }))
    }
  }}
/>
```
