Basic usage

```jsx
<Divider />
```

Usage with content

```jsx
<Divider>
  <Link>Show More </Link>
</Divider>
```

Usage with layout

```jsx
<FlexLayout flexDirection="column">
  <Title size="h3">Below is a Divider</Title>
  <Divider />
  <Title size="h3">Here is another one</Title>
  <Divider />
</FlexLayout>
```

Using short Divider

```jsx
<FlexLayout flexDirection="column">
  <Title size="h3">Below is a Divider</Title>
  <Divider type="short" />
  <Title size="h3">Here is another one</Title>
  <Divider type="short" />
</FlexLayout>
```

Using short Divider (Dark Theme)

```jsx
<FlexLayout flexDirection="column" className="rtc-dark-example">
  <Title size="h3" className="dark-bg">
    Below is a Divider
  </Title>
  <Divider theme="dark" type="short" />
  <Title size="h3" className="dark-bg">
    Here is another one
  </Title>
  <Divider theme="dark" type="short" />
</FlexLayout>
```
