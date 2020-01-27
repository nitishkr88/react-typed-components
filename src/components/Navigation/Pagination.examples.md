Default Pagination:

```jsx
<Pagination total={47} />
```

Show Only Page:

```jsx
<Pagination total={50} currentPage={1} pageSize={10} showOnlyPage={true} />
```

Page change handler Pagination:

```jsx
var onChange = (page, pageSize) => {
  alert(`Page: ${page}`)
}
;<Pagination total={3} currentPage={1} pageSize={1} onChange={onChange} />
```
