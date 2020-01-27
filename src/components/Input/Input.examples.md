Basic usage

```jsx
<FlexLayout flexDirection="column" itemSpacing="40px">
  <FlexLayout>
    <Input />
    <Input defaultValue="VM Apache" />
  </FlexLayout>
  <FlexLayout>
    <Input disabled={true} defaultValue="Disabled" />
    <Input placeholder="e.g. VM Apache" />
  </FlexLayout>
  <FlexLayout>
    <Input defaultValue="VM Apache" suffix={<Loader />} />
    <Input placeholder="Search Network" prefix={<SearchIcon size="small" />} />
  </FlexLayout>
</FlexLayout>
```
