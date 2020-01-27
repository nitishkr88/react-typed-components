Basic usage

```jsx
initialState = {
  m1Path: ['1'],
  m2Path: ['1']
}

function m1OnClick(info) {
  console.log('menuOnClick', info.keyPath)
  setState({ m1Path: info.keyPath })
}

function m2OnClick(info) {
  console.log('menuOnClick', info.keyPath)
  setState({ m2Path: info.keyPath })
}

const demoMenuSize = { width: '240px', height: '300px' }

;<FlexLayout itemSpacing="40px" className="rtc-example-borderless-content">
  <Menu
    padding="10px-0px"
    activeKeyPath={state.m1Path}
    onClick={m1OnClick}
    style={demoMenuSize}
  >
    <MenuItem key="1">Summary</MenuItem>
    <MenuItem key="2">List</MenuItem>
    <MenuItem key="3">Alerts</MenuItem>
    <MenuItem key="4">Anomalies</MenuItem>
    <MenuItem key="5">Topology</MenuItem>
    <MenuItem key="6">Trend</MenuItem>
  </Menu>

  <Menu
    padding="10px-0px"
    theme="dark"
    activeKeyPath={state.m2Path}
    onClick={m2OnClick}
    style={demoMenuSize}
  >
    <MenuItem key="1">Summary</MenuItem>
    <MenuItem key="2">List</MenuItem>
    <MenuItem key="3">Alerts</MenuItem>
    <MenuItem key="4">Anomalies</MenuItem>
    <MenuItem key="5">Topology</MenuItem>
    <MenuItem key="6">Trend</MenuItem>
  </Menu>
</FlexLayout>
```

Usage with header

```jsx
initialState = {
  m1Path: ['1', '1'],
  m2Path: ['1', '1']
}

function m1OnClick(info) {
  console.log('menuOnClick', info.keyPath)
  setState({ m1Path: info.keyPath })
}

function m2OnClick(info) {
  console.log('menuOnClick', info.keyPath)
  setState({ m2Path: info.keyPath })
}

const demoMenuSize = { width: '240px' }

;<FlexLayout itemSpacing="40px" className="rtc-example-borderless-content">
  <Menu
    itemSpacing="10px"
    padding="20px-0px"
    activeKeyPath={state.m1Path}
    onClick={m1OnClick}
    style={demoMenuSize}
  >
    <FlexLayout flexDirection="column" padding="0px-20px">
      <Title>Stark</Title>
      <Separator spacing="spacing-10px" separator={<VerticalSeparator />}>
        <Text>322 Total VMs</Text>
        <Text>AHV</Text>
      </Separator>

      <Divider type="short" />
    </FlexLayout>

    <MenuGroup key="1">
      <MenuItem key="1">Summary</MenuItem>
      <MenuItem key="2">List</MenuItem>
      <MenuItem key="3">Alerts</MenuItem>
      <MenuItem key="4">Anomalies</MenuItem>
      <MenuItem key="5">Topology</MenuItem>
      <MenuItem key="6">Trend</MenuItem>
    </MenuGroup>
  </Menu>

  <Menu
    theme="dark"
    itemSpacing="10px"
    padding="20px-0px"
    activeKeyPath={state.m2Path}
    onClick={m2OnClick}
    style={demoMenuSize}
  >
    <FlexLayout flexDirection="column" padding="0px-20px">
      <Title className="dark-bg">Stark</Title>
      <Separator spacing="spacing-10px" separator={<VerticalSeparator />}>
        <Text theme="dark">322 Total VMs</Text>
        <Text theme="dark">AHV</Text>
      </Separator>

      <Divider theme="dark" type="short" />
    </FlexLayout>

    <MenuGroup key="1">
      <MenuItem key="1">Summary</MenuItem>
      <MenuItem key="2">List</MenuItem>
      <MenuItem key="3">Alerts</MenuItem>
      <MenuItem key="4">Anomalies</MenuItem>
      <MenuItem key="5">Topology</MenuItem>
      <MenuItem key="6">Trend</MenuItem>
    </MenuGroup>
  </Menu>
</FlexLayout>
```

Usage with collapsible sections

```jsx
initialState = {
  m1Path: ['1', '1'],
  m1OpenPaths: [
    ['4', '1'],
    ['5', '1']
  ],
  m2Path: ['1', '1'],
  m2OpenPaths: [
    ['4', '1'],
    ['5', '1']
  ]
}

function m1OnClick(info) {
  console.log('m1OnClick', info)
  setState({
    m1Path: info.keyPath,
    m1OpenPaths: info.openKeyMap
  })
}

function m2OnClick(info) {
  console.log('m2OnClick', info)
  setState({
    m2Path: info.keyPath,
    m2OpenPaths: info.openKeyMap
  })
}

const demoMenuSize = { width: '240px' }

;<FlexLayout itemSpacing="40px" className="rtc-example-borderless-content">
  <Menu
    itemSpacing="10px"
    padding="20px-0px"
    activeKeyPath={state.m1Path}
    openKeyMap={state.m1OpenPaths}
    onClick={m1OnClick}
    style={demoMenuSize}
  >
    <FlexLayout flexDirection="column" padding="0px-20px">
      <Title>Stark</Title>
      <Separator spacing="spacing-10px" separator={<VerticalSeparator />}>
        <Text>322 Total VMs</Text>
        <Text>AHV</Text>
      </Separator>
      <Divider type="short" />
    </FlexLayout>
    <MenuGroup key="1">
      <MenuItem key="1">Summary</MenuItem>
      <MenuItem key="2">List</MenuItem>
      <MenuItem key="3">Alerts</MenuItem>
      <MenuGroup key="4" title="Hardware" type="collapsible">
        <MenuItem key="1" type="collapsible">
          Containers
        </MenuItem>
        <MenuItem key="2" type="collapsible">
          Volume Groups
        </MenuItem>
      </MenuGroup>
      <MenuGroup key="5" title="Storage" type="collapsible">
        <MenuItem key="1" type="collapsible">
          Girraffes
        </MenuItem>
        <MenuItem key="2" type="collapsible">
          Lions
        </MenuItem>
      </MenuGroup>
      <MenuItem key="6">Anomalies</MenuItem>
      <MenuItem key="7">Topology</MenuItem>
      <MenuItem key="8">Trend</MenuItem>
    </MenuGroup>
  </Menu>
  <Menu
    theme="dark"
    itemSpacing="10px"
    padding="20px-0px"
    activeKeyPath={state.m2Path}
    openKeyMap={state.m2OpenPaths}
    onClick={m2OnClick}
    style={demoMenuSize}
  >
    <FlexLayout flexDirection="column" padding="0px-20px">
      <Title className="dark-bg">Stark</Title>
      <Separator
        spacing="spacing-10px"
        separator={<VerticalSeparator color="dark" />}
      >
        <Text theme="dark">322 Total VMs</Text>
        <Text theme="dark">AHV</Text>
      </Separator>
      <Divider theme="dark" type="short" />
    </FlexLayout>
    <MenuGroup key="1">
      <MenuItem key="1">Summary</MenuItem>
      <MenuItem key="2">List</MenuItem>
      <MenuItem key="3">Alerts</MenuItem>
      <MenuGroup key="4" title="Hardware" type="collapsible">
        <MenuItem key="1" type="collapsible">
          Containers
        </MenuItem>
        <MenuItem key="2" type="collapsible">
          Volume Groups
        </MenuItem>
      </MenuGroup>
      <MenuGroup key="5" title="Storage" type="collapsible">
        <MenuItem key="1" type="collapsible">
          Girraffes
        </MenuItem>
        <MenuItem key="2" type="collapsible">
          Lions
        </MenuItem>
      </MenuGroup>
      <MenuItem key="6">Anomalies</MenuItem>
      <MenuItem key="7">Topology</MenuItem>
      <MenuItem key="8">Trend</MenuItem>
    </MenuGroup>
  </Menu>
</FlexLayout>
```
