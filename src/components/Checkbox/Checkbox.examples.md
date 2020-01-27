Checkbox usage
```jsx
initialState = {
  default_unchecked: false,
  default_checked: true,
  default_dashed: true,
  multilined_check: true,
  nested_check_lvl1: false,
  nested_disable_lvl1: false,
  nested_check_lvl2: false,
  nested_disable_lvl2: false,
  nested_check_lvl3_1: false,
  nested_check_lvl3_2: false
};

function checkboxOnClick(id, event) {
  setState({[id]: event.target.checked});
}

<FlexLayout flexDirection="column">
  <Checkbox id="default_unchecked" label="Default unchecked Checkbox" checked={state.default_unchecked} onChange={ e => {checkboxOnClick('default_unchecked', e)}} />

  <Checkbox id="default_checked" label="Default checked Checkbox" checked={state.default_checked} onChange={ e => {checkboxOnClick('default_checked', e)}} />

  <Checkbox id="default_dashed" type='partial-check' label="Default dashed Checkbox" checked={state.default_dashed} onChange={ e => {checkboxOnClick('default_dashed', e)}} />

  <Checkbox id="default_disabled" disabled label="Disabled Checkbox" />

  <Checkbox id="default_disabled_checked" checked={true} disabled label="Default disabled checked Checkbox" />

  <Checkbox id="multilined_check" label="Multi lined Checkbox. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta." checked={state.multilined_check} onChange={ e => {checkboxOnClick('multilined_check', e)}} multiLine={true} />

  <Checkbox disabled={ state.nested_disable_lvl1 } id="nested_check_lvl1" label="Checkbox with Nested Content" checked={state.nested_check_lvl1} onChange={ e => {checkboxOnClick('nested_check_lvl1', e)}}>
    <Checkbox disabled={ state.nested_disable_lvl1 || !state.nested_check_lvl1 } id="nested_check_lvl2" label="Nested Checkbox" checked={state.nested_check_lvl2} onChange={ e => {checkboxOnClick('nested_check_lvl2', e)}}>
      <FlexLayout flexDirection="column">
        <FlexLayout>
          <Checkbox disabled={ state.nested_disable_lvl1 || state.nested_disable_lvl2 || !state.nested_check_lvl1 || !state.nested_check_lvl2 } id="nested_check_lvl3_1" label="Nested Checkbox" checked={state.nested_check_lvl3_1} onChange={ e => {checkboxOnClick('nested_check_lvl3_1', e)}}>
            <Text>Nested content</Text>
          </Checkbox>
        </FlexLayout>
        <FlexLayout>
          <Checkbox disabled={ state.nested_disable_lvl1 || state.nested_disable_lvl2 || !state.nested_check_lvl1 || !state.nested_check_lvl2 } id="nested_check_lvl3_2" label="Nested Checkbox" checked={state.nested_check_lvl3_2} onChange={ e => {checkboxOnClick('nested_check_lvl3_2', e)}} />
        </FlexLayout>
      </FlexLayout>
    </Checkbox>
  </Checkbox>
</FlexLayout>
```

Toggle usage
```jsx
initialState = {
  toggle_checked: true,
  toggle_unchecked: false
};

function checkboxOnClick(id, event) {
  setState({[id]: event.target.checked});
}

<FlexLayout flexDirection="column">
  <Checkbox id="toggle_unchecked" type="toggle" label="Toggle checkbox" checked={state.toggle_unchecked} onChange={ e => {checkboxOnClick('toggle_unchecked', e)}} />

  <Checkbox id="DToggle_checkbox" disabled type="toggle" label="Disabled Toggle checkbox" />

  <Checkbox id="toggle_checked" type="toggle" label="Toggle checkbox Selected" checked={state.toggle_checked}  onChange={ e => {checkboxOnClick('toggle_checked', e)}} />

  <Checkbox id="DToggle_checkbox" disabled type="toggle" checked={true} label="Disabled Toggle checkbox Selected" />
</FlexLayout>
```
