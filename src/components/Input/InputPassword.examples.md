InputPassword Example:

```jsx
const pass = 'password'

;<InputPassword defaultValue={pass} />
```

InputPassword Disabled:

```jsx
const pass = 'password'

;<InputPassword defaultValue={pass} disabled={true} />
```

InputPassword Error:

```jsx
const pass = 'password'

;<InputPassword defaultValue={pass} error={true} />
```

InputPassword Borderless:

```jsx
const pass = 'password'

;<div className="rtc-example-borderless-content">
  <InputPassword defaultValue={pass} border={false} />
</div>
```
