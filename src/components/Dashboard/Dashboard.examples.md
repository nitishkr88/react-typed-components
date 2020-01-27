Basic usage. Note that if you resize the window to smaller size the double width
widget becomes single width, and if you push it even smaller then the layout
changed to single column widget.

```jsx
const pros = {
  layouts: {
    sm: [
      {
        i: 'box1'
      },
      {
        i: 'box2',
        w: 2,
        x: 0,
        y: 1
      },
      {
        i: 'box3',
        x: 1,
        y: 0
      }
    ]
  }
}
;<Dashboard {...pros}>
  <div key="box1">Default</div>
  <div key="box2">Double the width unit</div>
  <div key="box3">
    <Widget
      header={<WidgetHeader title="Header" />}
      bodyContent={
        <Paragraph>
          Here we are using Widget, WidgetHeader and Paragraph component
        </Paragraph>
      }
    />
  </div>
</Dashboard>
```

Widget header options

```jsx
const pros = {
  layouts: {
    sm: [
      {
        i: 'box1'
      },
      {
        i: 'box2'
      },
      {
        i: 'box3'
      },
      {
        i: 'box4'
      },
      {
        i: 'box5'
      },
      {
        i: 'box6',
        w: 2
      }
    ]
  }
}

const defaultSelectProps = {
  selectOptions: [
    {
      title: 'This Week',
      value: '0'
    },
    {
      title: 'This Month',
      value: '1'
    }
  ],
  defaultValue: '0'
}

const paginationProps = {
  total: 50,
  currentPage: 1,
  pageSize: 10,
  showOnlyPage: true
}

const linkProps = {
  leftIcon: <PlusIcon size="small" />,
  children: 'Create'
}

;<Dashboard {...pros}>
  <div key="box1">
    <Widget
      header={
        <WidgetHeader
          title="Extra info example"
          showCloseIcon={false}
          secondaryInfo="Secondary info"
        />
      }
      bodyContent={<Paragraph>Extra info Example</Paragraph>}
    />
  </div>
  <div key="box2">
    <Widget
      header={
        <WidgetHeader
          title="Select example"
          showCloseIcon={false}
          defaultSelectProps={defaultSelectProps}
        />
      }
      bodyContent={<Paragraph>SystemSelect Example</Paragraph>}
    />
  </div>
  <div key="box3">
    <Widget
      header={
        <WidgetHeader
          title="Pagination example"
          showCloseIcon={false}
          paginationProps={paginationProps}
        />
      }
      bodyContent={<Paragraph>Pagination Example</Paragraph>}
    />
  </div>
  <div key="box4">
    <Widget
      header={
        <WidgetHeader
          title="Action example"
          linkProps={linkProps}
          showCloseIcon={false}
        />
      }
      bodyContent={<Paragraph>Action Example</Paragraph>}
    />
  </div>
  <div key="box5">
    <Widget
      header={<WidgetHeader title="Simple example" />}
      bodyContent={<Paragraph>Nothing to show here</Paragraph>}
    />
  </div>
  <div key="box6">
    <Widget
      header={
        <WidgetHeader
          title="Multiple header options example"
          defaultSelectProps={defaultSelectProps}
          showCloseIcon={true}
          secondaryInfo="Secondary info"
        />
      }
      bodyContent={
        <Paragraph>
          Multiple header options example. Hover to see close icon.
        </Paragraph>
      }
    />
  </div>
</Dashboard>
```
