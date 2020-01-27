Basic usage, filter by value

```jsx
var containerWidth = {
  width: '200px'
}

var data = [
  {
    value: 'one',
    title: 'Uno',
    key: '1',
    className: 'option-one-class'
  },
  {
    value: 'two',
    title: 'Dos',
    key: '2',
    className: 'option-two-class'
  },
  {
    value: 'three',
    title: 'Tres',
    key: '3',
    className: 'option-three-class'
  },
  {
    value: 'four',
    title: 'Cuatro',
    key: '4',
    className: 'option-four-class'
  }
]

;<div style={containerWidth}>
  <Select placeholder="Select Option" selectOptions={data} />
</div>
```

Select with filter by title

```jsx
var containerWidth = {
  width: '200px'
}

var data = [
  {
    value: 'one',
    title: 'Uno',
    key: '1',
    className: 'option-one-class'
  },
  {
    value: 'two',
    title: 'Dos',
    key: '2',
    className: 'option-two-class'
  },
  {
    value: 'three',
    title: 'Tres',
    key: '3',
    className: 'option-three-class'
  },
  {
    value: 'four',
    title: 'Cuatro',
    key: '4',
    className: 'option-four-class'
  }
]

;<div style={containerWidth}>
  <Select
    placeholder="Select Option"
    selectOptions={data}
    optionFilterProp={['title']}
  />
</div>
```

Select with secondary text

```jsx
var containerWidth = {
  width: '200px'
}

var data = [
  {
    value: 'optionOne',
    title: 'optionOne',
    subTitle: '10.0.0.1',
    key: '1',
    className: 'option-one-class'
  },
  {
    value: 'optionTwo',
    title: 'optionTwo',
    subTitle: '10.0.0.2',
    key: '2',
    className: 'option-two-class'
  },
  {
    value: 'optionThree',
    title: 'optionThree',
    subTitle: '10.0.0.3',
    key: '3',
    className: 'option-three-class'
  },
  {
    value: 'optionFour',
    title: 'optionFour',
    subTitle: '10.0.0.4',
    key: '4',
    className: 'option-four-class'
  }
]

;<div style={containerWidth}>
  <Select placeholder="Select Option" selectOptions={data} />
</div>
```

Select without search

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

;<div style={containerWidth}>
  <Select showSearch={false} placeholder="Select Option" selectOptions={data} />
</div>
```

Select with extended dropdown

```jsx
var containerWidth = {
  width: '200px'
}

var data = [
  {
    value: 'optionOne',
    title: 'optionOne',
    subTitle: '10.0.0.1',
    key: '1',
    className: 'option-one-class'
  },
  {
    value: 'optionTwo',
    title: 'Option two is too long for you! Way too long!',
    subTitle: '10.0.0.2',
    key: '2',
    className: 'option-two-class'
  },
  {
    value: 'optionThree',
    title: 'optionThree',
    subTitle: '10.0.0.3',
    key: '3',
    className: 'option-three-class'
  },
  {
    value: 'optionFour',
    title: 'optionFour',
    subTitle: '10.0.0.4',
    key: '4',
    className: 'option-four-class'
  }
]

;<div style={containerWidth}>
  <Select
    dropdownMatchSelectWidth={false}
    placeholder="Select Option"
    selectOptions={data}
  />
</div>
```

Select with empty list options

```jsx
var containerWidth = {
  width: '200px'
}

var data = []

;<div style={containerWidth}>
  <Select
    placeholder="Select Option"
    selectOptions={data}
    dropdownClassName="extra-class"
  />
</div>
```

Disabled Select

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

;<div style={containerWidth}>
  <Select defaultValue="optionOne" selectOptions={data} disabled={true} />
</div>
```

Borderless Select

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

;<FlexLayout className="rtc-example-borderless-content">
  <div style={containerWidth}>
    <Select defaultValue="optionOne" selectOptions={data} border={false} />
  </div>
  <div style={containerWidth}>
    <Select
      defaultValue="optionOne"
      selectOptions={data}
      border={false}
      disabled={true}
    />
  </div>
</FlexLayout>
```

Multi-Select

```jsx
var containerWidth = {
  width: '500px'
}

var data = [
  {
    value: 'optionOne',
    title: 'optionOne',
    subTitle: '10.0.0.1',
    key: '1',
    className: 'option-one-class'
  },
  {
    value: 'optionTwo',
    title: 'optionTwo',
    subTitle: '102.30.0.1',
    key: '2',
    className: 'option-two-class'
  },
  {
    value: 'optionThree',
    title: 'optionThree',
    subTitle: '10.0.0.1',
    key: '3',
    className: 'option-three-class'
  },
  {
    value: 'optionFour',
    title: 'optionFour',
    subTitle: '101.10.0.1',
    key: '4',
    className: 'option-four-class'
  }
]

;<div style={containerWidth}>
  <Select defaultValue="optionOne" selectOptions={data} multiple={true} />
</div>
```

Multi-select Disabled

```jsx
var containerWidth = {
  width: '500px'
}

var data = [
  {
    value: 'optionOne',
    title: 'optionOne',
    subTitle: '10.0.0.1',
    key: '1',
    className: 'option-one-class',
    selected: true
  },
  {
    value: 'optionTwo',
    title: 'optionTwo',
    subTitle: '102.30.0.1',
    key: '2',
    className: 'option-two-class',
    selected: true
  },
  {
    value: 'optionThree',
    title: 'optionThree',
    subTitle: '10.0.0.1',
    key: '3',
    className: 'option-three-class'
  },
  {
    value: 'optionFour',
    title: 'optionFour',
    subTitle: '101.10.0.1',
    key: '4',
    className: 'option-four-class'
  }
]

;<div style={containerWidth}>
  <Select
    defaultValue={['optionOne', 'optionTwo']}
    selectOptions={data}
    multiple={true}
    disabled={true}
  />
</div>
```

Select with custom filterOption

```jsx
var containerWidth = {
  width: '200px'
}

// Show options with value less than input number
var filterOption = function(inputVal, option) {
  return parseInt(inputVal, 10) >= parseInt(option.props.value, 10)
}

var data = [
  {
    value: '1',
    title: 'Uno',
    key: '1',
    className: 'option-one-class'
  },
  {
    value: '2',
    title: 'Dos',
    key: '2',
    className: 'option-two-class'
  },
  {
    value: '3',
    title: 'Tres',
    key: '3',
    className: 'option-three-class'
  },
  {
    value: '4',
    title: 'Cuatro',
    key: '4',
    className: 'option-four-class'
  }
]

;<div style={containerWidth}>
  <Select
    placeholder="Select Option"
    selectOptions={data}
    filterOption={filterOption}
    dropdownClassName="extra-class"
    className="select-custom-class"
  />
</div>
```
