<style>
  .rtc-modal-content .rtc-modal-body {
    padding: 20px;
    text-align: center;
  }
</style>

Basic usage

```jsx
initialState = {
  visible: false
}

function customClose() {
  setState({ visible: false })
}

;<div>
  <Button type="primary" onClick={() => setState({ visible: true })}>
    Open Modal
  </Button>
  <Modal
    visible={state.visible}
    title="Modal"
    primaryButtonLabel="Done"
    primaryButtonClick={customClose}
    onCancel={customClose}
  >
    <FlexLayout padding="20px">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam...
      </p>
    </FlexLayout>
  </Modal>
</div>
```

Click on button to view the default modal with an extra icon:

<style>
  .rtc-modal-content .rtc-modal-body {
    padding: 20px;
  }
</style>

```jsx
initialState = {
    loading: false,
    visible: false
};
const footer = (
  <div>
    <Button
      key="back"
      type="secondary"
      onClick={() => setState({visible: false})}>
      Cancel
    </Button>
    <Button key="submit" type="primary">Done</Button>
  </div>);

<div>
  <Button type="primary"
    onClick={() => setState({visible: true})}>
    Open new default modal dialog
  </Button>
  <Modal
    visible={state.visible}
    title="Title is displayed here"
    contentClassName="rtc-modal-content"
    footer={ footer }
    extraIcons={ <SettingsIcon size="small" /> }
    width={ 500 }
    onCancel={() => setState({ visible: false })}
  >
    Content of modal
    Content of modal
    Content of modal
    Content of modal
    Content of modal
    Content of modal
    Content of modal
  </Modal>
</div>
```
