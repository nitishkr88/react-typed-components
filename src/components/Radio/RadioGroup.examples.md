Radio example. NOTE: When using in an application make sure the id property
is unique on the page.

```jsx
<div>
  <RadioGroup defaultValue="b" id="radioGroup">
    <Radio value="a" title="Option A" />
    <Radio value="b" title="Option B" />
    <Radio value="c" title="Option C" />
  </RadioGroup>
</div>
```

Solid Radio Button

```jsx
<div>
  <RadioGroup defaultValue="b" id="radioGroup" type="solid">
    <Radio value="a" title="Option A" />
    <Radio value="b" title="Option B" />
    <Radio value="c" title="Option C" />
  </RadioGroup>
</div>
```

Handle onChange. Select a new radio to see the alert message.
NOTE: make sure the value property for each of the Radio is unique.

```jsx
function handleOnChange(event) {
  alert(`value '${event.target.value}' is selected`)
}

;<div>
  <RadioGroup
    defaultValue="b"
    id="radioGroupHandleOnChange"
    onChange={handleOnChange}
  >
    <Radio value="a" title="Option A" />
    <Radio value="b" title="Option B" />
    <Radio value="c" title="Option C" />
  </RadioGroup>
</div>
```

Radio buttons placed horizontally:

```jsx
<div>
  <RadioGroup defaultValue="b" id="radioGroupVertical" layout="horizontal">
    <Radio value="a" title="Option A" />
    <Radio value="b" title="Option B" />
    <Radio value="c" title="Option C" />
  </RadioGroup>
</div>
```
