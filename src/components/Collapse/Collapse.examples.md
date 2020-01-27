Basic Usage

```jsx
function callback(key) {
  console.log(key)
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

;<div className="rtc-example-borderless-content">
  <Collapse defaultActiveKey={['1']} onChange={callback}>
    <Collapse.Panel header="This is panel header 1" key="1">
      <p>{text}</p>
    </Collapse.Panel>
    <Collapse.Panel header="This is panel header 2" key="2">
      <p>{text}</p>
    </Collapse.Panel>
    <Collapse.Panel header="This is panel header 3" key="3" disabled>
      <p>{text}</p>
    </Collapse.Panel>
  </Collapse>
</div>
```
