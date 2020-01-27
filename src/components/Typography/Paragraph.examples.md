Basic usage

```jsx
<Paragraph>
  This is a single line paragraph text. By design single line has 10px line
  height.
</Paragraph>
```

Secondary usage

```jsx
<Paragraph type="secondary">
  This is a single line paragraph text. By design single line has 10px line
  height.
</Paragraph>
```

Usage in multiline

```jsx
<Paragraph>
  When paragraph text exceeding a single line this component will automatically
  adjust the line height accordingly. Here is a very long paragraph. Maecenas
  posuere dui in ex placerat, sed tristique lorem hendrerit. Vestibulum ante
  ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
</Paragraph>
```

Usage in dark background

```jsx
<div className="rtc-dark-example">
  <Paragraph className="dark-bg">
    When paragraph text exceeding a single line this component will
    automatically adjust the line height accordingly. Here is a very long
    paragraph. Maecenas posuere dui in ex placerat, sed tristique lorem
    hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
    posuere cubilia Curae;
  </Paragraph>
</div>
```

Usage in dark background (secondary type)

```jsx
<div className="rtc-dark-example">
  <Paragraph type="secondary" className="dark-bg">
    When paragraph text exceeding a single line this component will
    automatically adjust the line height accordingly. Here is a very long
    paragraph. Maecenas posuere dui in ex placerat, sed tristique lorem
    hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
    posuere cubilia Curae;
  </Paragraph>
</div>
```
