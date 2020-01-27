Fetching data

```jsx
initialState = {
  visible: false
}

function handleClose() {
  setState({ visible: false })
}

;<div>
  <Button type="primary" onClick={() => setState({ visible: true })}>
    Open Full-Page Modal
  </Button>
  <FullPageModal
    visible={state.visible}
    title="Full-Page Modal Title"
    onCancel={() => setState({ visible: false })}
  >
    <FlexLayout
      style={{ height: '100%' }}
      flexGrow="1"
      alignItems="center"
      justifyContent="center"
    >
      <Loader tip="Fetching Data..." overlay={true} />
    </FlexLayout>
  </FullPageModal>
</div>
```
