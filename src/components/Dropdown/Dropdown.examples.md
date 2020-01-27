Basic Usage

```jsx
const menu = (
  <Menu className="rtc-actions-menu">
    <MenuItem key="1">Summary</MenuItem>
    <MenuItem key="2">Alerts</MenuItem>
    <MenuItem key="3">Metrics</MenuItem>
    <MenuItem key="4">Network</MenuItem>
    <MenuItem key="5">Health</MenuItem>
  </Menu>
)

;<div>
  <Dropdown
    getPopupContainer={() => document.querySelector('.right-panel')}
    overlay={menu}
    title="Actions"
  />
</div>
```

Dropdown without caret

```jsx
const menu = (
  <Menu className="rtc-actions-menu">
    <MenuItem key="1">Summary</MenuItem>
    <MenuItem key="2">Alerts</MenuItem>
    <MenuItem key="3">Metrics</MenuItem>
    <MenuItem key="4">Network</MenuItem>
    <MenuItem key="5">Health</MenuItem>
  </Menu>
)

const tripleDotVerIcon = <MoreVerticalIcon />
;<div>
  <Dropdown
    getPopupContainer={() => document.querySelector('.right-panel')}
    overlay={menu}
    title={tripleDotVerIcon}
  />
</div>
```
