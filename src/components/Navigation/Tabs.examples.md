Basic usage

```jsx
const { TabPane } = Tabs

;<div>
  <Tabs defaultActiveKey="1">
    <TabPane tab="Overview" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Network status updates" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Alerts" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
</div>
```

View Switcher Tab on light background example:

```jsx
const { TabPane } = Tabs

;<Tabs defaultActiveKey="4" theme="light" tabType="view-switcher">
  <TabPane tab="All" key="4">
    Content of Tab All
  </TabPane>
  <TabPane tab="Status 1" key="5">
    Content of Status 1
  </TabPane>
  <TabPane tab="Status 2" key="6">
    Content of Status 2
  </TabPane>
  <TabPane tab="Status 3" key="7">
    Content of Status 3
  </TabPane>
</Tabs>
```
