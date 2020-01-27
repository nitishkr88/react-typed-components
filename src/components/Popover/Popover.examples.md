Confirm

```jsx
var popoverText = {
  color: '#6f787e',
  fontWeight: '500',
  fontSize: '12px'
}

var contentPadding = {
  padding: '20px'
}

var content = (
  <div style={contentPadding}>
    <FlexLayout flexDirection="column">
      <FlexLayout itemFlexBasis="100pc">
        <p>Are you sure to delete this security policy?</p>
      </FlexLayout>

      <FlexLayout itemFlexBasis="100pc">
        <Button type="secondary">Cancel</Button>
        <Button>Delete</Button>
      </FlexLayout>
    </FlexLayout>
  </div>
)

;<div>
  <FlexLayout style={popoverText}>
    <Popover content={content} trigger="hover" placement="right">
      <a>Hover over here</a>
    </Popover>
  </FlexLayout>
</div>
```
