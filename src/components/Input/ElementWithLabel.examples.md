Basic usage

```jsx
<ElementWithLabel
  label="Host Password"
  element={<Input id="test" value={'test'} onChange={() => {}} type="email" />}
  subLabel={<Link size="small">Need help?</Link>}
  helpText="The password must not contain any numbers."
/>
```

Usage with Select

```jsx
var containerWidth = {
  width: '200px'
}

var data = [
  {
    value: 'optionOne',
    title: 'optionOne',
    key: '1',
    className: 'option-one-class'
  },
  {
    value: 'optionTwo',
    title: 'optionTwo',
    key: '2',
    className: 'option-two-class'
  },
  {
    value: 'optionThree',
    title: 'optionThree',
    key: '3',
    className: 'option-three-class'
  },
  {
    value: 'optionFour',
    title: 'optionFour',
    key: '4',
    className: 'option-four-class'
  }
]

;<ElementWithLabel
  label="Select Option"
  element={
    <Select
      getPopupContainer={() => document.querySelector('.right-panel')}
      placeholder="Select Option"
      selectOptions={data}
      dropdownClassName="extra-class"
      className="select-custom-class"
    />
  }
/>
```
