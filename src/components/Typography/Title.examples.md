Basic usage

```jsx
<Title>My name is Jeff</Title>
```

All variations. When the line is in single line the line-height
is set differently. This is by design.

```jsx
<FlexLayout flexDirection="column">
  <Title>H1: Introducing Xtensions</Title>
  <Title size="h2">H2: Configuration</Title>
  <Title size="h3">H3: Metric History</Title>
  <Title size="h4">H4: Yesterday</Title>
</FlexLayout>
```

When line of text is spread on multiple line the line-heigh is corrected.

```jsx
<FlexLayout flexDirection="column">
  <Title>
    H1: Introducing Xtensions. Maecenas posuere dui in ex placerat, sed
    tristique lorem hendrerit. Vestibulum ante ipsum primis in faucibus orci
    luctus et ultrices posuere cubilia Curae;
  </Title>
  <Title size="h2">
    H2: Configuration. Maecenas posuere dui in ex placerat, sed tristique lorem
    hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
    posuere cubilia Curae;
  </Title>
</FlexLayout>
```

Dark background theme

```jsx
<FlexLayout flexDirection="column" className="rtc-dark-example">
  <Title className="dark-bg">
    H1: Introducing Xtensions. Maecenas posuere dui in ex placerat, sed
    tristique lorem hendrerit. Vestibulum ante ipsum primis in faucibus orci
    luctus et ultrices posuere cubilia Curae;
  </Title>
  <Title className="dark-bg" size="h2">
    H2: Configuration. Maecenas posuere dui in ex placerat, sed tristique lorem
    hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
    posuere cubilia Curae;
  </Title>
</FlexLayout>
```
