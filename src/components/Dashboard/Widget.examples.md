Basic example.

```jsx
<div className="rtc-example-borderless-content">
  <div style={{ width: 300, height: 200 }}>
    <Widget
      header={<WidgetHeader title="Header" />}
      bodyContent="Body Content"
    />
  </div>
</div>
```

Using loading and loadingTip.

```jsx
<div className="rtc-example-borderless-content">
  <div style={{ width: 300, height: 200 }}>
    <Widget
      header={<WidgetHeader title="Header" />}
      bodyContent="Body Content"
      loading={true}
      loadingTip="Loading items..."
    />
  </div>
</div>
```

With an error message.

```jsx
<div className="rtc-example-borderless-content">
  <div style={{ width: 300, height: 200 }}>
    <Widget
      header={<WidgetHeader title="Header" />}
      bodyContent="Body Content"
      errorMsg="Something went wrong!"
    />
  </div>
</div>
```
