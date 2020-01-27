Basic Usage

```jsx
<Loader loading={true} />
```

Show a tip

```jsx
<Loader loading={true} tip="Loading..." />
```

Wrap it around a container. The loader will always center to container

```jsx
<Loader tip="Loading...">
  <div style={{ border: '1px solid red' }}>This is a container</div>
</Loader>
```

Force overlay style when there are no child elements. Useful if you are loading
children from an API and there is nothing there until the request finishes.

```jsx
<Loader tip="Loading..." overlay={true} />
```

Show loader in dark background

```jsx
<div className="rtc-dark-example">
  <Loader theme="dark" />
</div>
```
