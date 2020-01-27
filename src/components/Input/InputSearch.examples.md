Basic Usage with onSearch callback.
```jsx
function onSearch(value) {
  alert('current value : ' + value);
}
<InputSearch onSearch={onSearch} placeholder="e.g. VM Apache" />
```

Using onChange.  This would popup an alert of the change for every
letter you type.
```jsx
function onChange(event) {
  alert('current value : ' + event.currentTarget.value);
}
<InputSearch onChange={onChange}/>
```

Give the input an initial value
```jsx
<InputSearch value="10"/>
```

InputSearch Loading
```jsx
<InputSearch value="10" loading={true} />
```

InputSearch Disabled
```jsx
<InputSearch value="10" disabled={true} />
```

InputSearch Error
```jsx
<InputSearch value="10" error={ true } />
```

InputSearch Borderless
```jsx
<div className="rtc-example-borderless-content">
  <InputSearch value="10" border={false} />
</div>
```
