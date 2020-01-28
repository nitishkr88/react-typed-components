Basic usage

```jsx
<FlexLayout>
  <FlexLayout alignItems="center" itemSpacing="10px">
    <WarningIcon size="small" />
    <Title size="h3">You have a new software update.</Title>
  </FlexLayout>
  <Button>Download</Button>
</FlexLayout>
```

Float items left and right <span class="desc">Accomplished using justifyContent="space-between".</span>

```jsx
<FlexLayout justifyContent="space-between">
  <Title>Left Item</Title>
  <Title>Right Item</Title>
</FlexLayout>
```

Centering content <span class="desc">Combining the properties of alignItems="center" and justifyContent="center" aligns the login form to the center of the page.</span>

```jsx
<FlexLayout
  style={{ height: '500px' }}
  alignItems="center"
  justifyContent="center"
>
  <FlexLayout
    style={{ width: '280px' }}
    flexDirection="column"
    itemSpacing="40px"
  >
    <Title>Welcome</Title>
    <FlexLayout flexDirection="column">
      <ElementWithLabel
        label="Username"
        element={<Input id="username" placeholder="Username" />}
      />
      <ElementWithLabel
        label="Password"
        subLabel={<Link size="small">Forgot Password?</Link>}
        element={<Input id="password" placeholder="Password" />}
      />
    </FlexLayout>
    <Button fullWidth>Log In</Button>
    <FlexLayout flexDirection="column">
      <FlexLayout alignItems="center">
        <Divider />
        <Paragraph className="no-wrap" type="secondary">
          New here
        </Paragraph>
        <Divider />
      </FlexLayout>
      <Button fullWidth type="secondary">
        Sign Up
      </Button>
    </FlexLayout>
  </FlexLayout>
</FlexLayout>
```

Equal size items <span class="desc">Equal sized items can be achieved using itemFlexBasis="100pc".</span>

```jsx
<FlexLayout itemFlexBasis="100pc">
  <ElementWithLabel
    label="Name 1"
    element={<Input id="input-1" placeholder="Name" />}
  />
  <ElementWithLabel
    label="Name 2"
    element={<Input id="input-2" placeholder="Name" />}
  />
  <ElementWithLabel
    label="Name 3"
    element={<Input id="input-3" placeholder="Name" />}
  />
  <ElementWithLabel
    label="Name 4"
    element={<Input id="input-4" placeholder="Name" />}
  />
</FlexLayout>
```
