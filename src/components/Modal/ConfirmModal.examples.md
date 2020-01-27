Basic usage

```jsx
initialState = {
  visible: false
}

function handleClose() {
  setState({ visible: false })
}

;<div>
  <Button type="primary" onClick={() => setState({ visible: true })}>
    Open Confirm Modal
  </Button>
  <ConfirmModal
    visible={state.visible}
    onConfirm={handleClose}
    onCancel={() => setState({ visible: false })}
    confirmText="Is this the content?"
  />
</div>
```

Basic usage multiline text. Note: Notice that the text will automatically align left when there are multiple lines detected.

```jsx
initialState = {
  visible: false
}

function handleClose() {
  setState({ visible: false })
}

;<div>
  <Button type="primary" onClick={() => setState({ visible: true })}>
    Open Confirm Modal
  </Button>
  <ConfirmModal
    visible={state.visible}
    onConfirm={handleClose}
    onCancel={() => setState({ visible: false })}
    confirmText="Is this the content that goes on the confirm modal and is long enough to be several lines instead of one?"
  />
</div>
```
