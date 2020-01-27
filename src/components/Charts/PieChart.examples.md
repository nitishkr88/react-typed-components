Basic usage

```jsx
const pie = {
  data: [
    { name: 'A1', b: 'a1', value: 100 },
    { name: 'A2', b: 'a2', value: 300 },
    { name: 'B1', b: 'a3', value: 100 },
    { name: 'B2', b: 'a4', value: 80 },
    { name: 'B3', b: 'a5', value: 40 }
  ],
  dataKey: 'value',
  nameKey: 'b'
}

;<PieChart pies={[pie]} />
```

If value specified in the data set is not a number the data item will be ignored.

```jsx
const pie = {
  data: [
    { name: 'A1', b: 'a1', value: 'not a number' },
    { name: 'A2', b: 'a2', value: 300 },
    { name: 'B1', b: 'a3', value: 100 },
    { name: 'B2', b: 'a4', value: 80 },
    { name: 'B3', b: 'a5', value: 40 }
  ],
  dataKey: 'value',
  nameKey: 'b'
}

;<PieChart pies={[pie]} />
```

Enable label, using custom label to display % usage percentage, disable tooltip,
and add margin to ensure label text doesn't get cut off. Because we added 40 pixel
margin, we need to bump the width/height by 40 pixel to get the same side pie.

```jsx
const pie = {
  data: [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 }
  ],
  dataKey: 'value',
  label: <PieLabel formatter="percentage" />
}

;<PieChart
  width={240}
  height={240}
  pies={[pie]}
  margin={{ left: 20, right: 20, top: 20, bottom: 20 }}
  tooltipProps={null}
/>
```

Using custom fill color each the pie slices and set width=0 to use
responsive container.

```jsx
const data = [
  { name: 'A1', value: 100, fill: 'red' },
  { name: 'A2', value: 300, fill: 'green' },
  { name: 'B1', value: 100, fill: 'blue' },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 }
]

;<PieChart pies={[{ data: data, dataKey: 'value' }]} width={0} />
```
