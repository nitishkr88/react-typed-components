```jsx
// const actions = (
//   <FlexLayout itemSpacing="15px">
//     <MagGlassIcon color="dark" />
//     <QuestionIcon color="dark" />
//     <SettingsIcon color="dark" />
//   </FlexLayout>
// )
const actions = (
  <FlexLayout itemSpacing="15px">
    <div>Icon</div>
    <div>Icon</div>
    <div>Icon</div>
  </FlexLayout>
)

const accountDetail = <Link type="secondary">john@example.com</Link>;

const navItems = [
  {
    key: 'home',
    label: <a href="#">Home</a>
  },
  {
    key: 'analysis',
    label: <a href="#">Analysis</a>
  },
  {
    key: 'history',
    label: <a href="#">History</a>
  }
];

<Navbar
  actions={actions}
  accountDetail={accountDetail}
  navigationItems={navItems}
  title="Design-Sys" />
```
