Basic Usage

```jsx
<div style={{ height: 200 }}>
  <HeaderFooterLayout
    itemSpacing="0px"
    header=<Title size="h3">Header</Title>
    footer=<Title size="h3">Footer</Title>
    bodyContent="The body will grow to the height of the parent dom container.  If overflow then scroll will be added. Viverra eu nunc magna vitae rhoncus, augue et exercitation vel, hac neque risus augue nullam et, nonummy dolor vel, eros felis leo. Nec in nam ligula ut orci, erat est. Duis in. Sed quam dictumst id orci id morbi. Mauris sit. Enim vestibulum. Aliquam vitae ut tristique quis sit, ante quis et, vitae lectus, et arcu arcu ac vestibulum a, elit feugiat sed. At parturient exercitationem maecenas velit, elit ultricies quis tenetur et dignissim."
  />
</div>
```

Footer and Header are optional. Note that the body still take up the full
height of the container.

```jsx
<div style={{ height: 200 }}>
  <HeaderFooterLayout bodyContent="No Header or footer." />
</div>
```

Custom properties for the header and the footer

```jsx
<div style={{ height: 200 }}>
  <HeaderFooterLayout
    itemSpacing="0px"
    header=<Title size="h3">Header</Title>
    headerProps={{ justifyContent: 'center' }}
    footer=<Title size="h3">Footer</Title>
    footerProps={{ justifyContent: 'center' }}
    bodyContent="The body content goes here."
  />
</div>
```

Here is more complex custom header with title and select

```jsx
const menuItems = [
  {
    title: 'None',
    value: 'none'
  },
  {
    title: 'Hypervisor',
    value: 'hypervisor'
  },
  {
    title: 'VMs',
    value: 'vms'
  }
]

const header = (
  <FlexLayout justifyContent="space-between" alignItems="center">
    <Title size="h3">Header</Title>
    <Select
      selectOptions={menuItems}
      defaultValue="hypervisor"
    />
  </FlexLayout>
)

;<div style={{ height: 200 }}>
  <HeaderFooterLayout
    itemSpacing="0px"
    header={header}
    headerProps={{ itemFlexBasis: '100pc' }}
    footer=<Title size="h3">Footer</Title>
    footerProps={{ justifyContent: 'center' }}
    bodyContent="The body content goes here."
  />
</div>
```
