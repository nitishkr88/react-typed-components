const path = require('path')
const fs = require('fs')

const webpackConfig = require('./webpack.dev.js')
const theme = require('./styleguide/theme')
const styles = require('./styleguide/styles')

module.exports = {
  serverPort: 6001,
  title: 'React Typed Components',
  sections: [
    { name: 'Introduction', content: './README.md' },
    {
      name: 'Icons',
      sections: [
        {
          name: 'All',
          components: [
            'src/components/Icons/HomeIcon.tsx',
            'src/components/Icons/ChevronLeftIcon.tsx',
            'src/components/Icons/ChevronRightIcon.tsx',
            'src/components/Icons/ChevronUpIcon.tsx',
            'src/components/Icons/ChevronDownIcon.tsx',
            'src/components/Icons/CloseIcon.tsx',
            'src/components/Icons/AlertIcon.tsx',
            'src/components/Icons/DateIcon.tsx',
            'src/components/Icons/EditIcon.tsx',
            'src/components/Icons/FilterIcon.tsx',
            'src/components/Icons/MoreVerticalIcon.tsx',
            'src/components/Icons/PlusIcon.tsx',
            'src/components/Icons/RefreshIcon.tsx',
            'src/components/Icons/RemoveIcon.tsx',
            'src/components/Icons/SearchIcon.tsx',
            'src/components/Icons/WarningIcon.tsx',
            'src/components/Icons/SettingsIcon.tsx',
            'src/components/Icons/CheckMarkIcon.tsx'
          ]
        }
      ]
    },
    {
      name: 'Components',
      sections: [
        {
          name: 'Actions',
          components: [
            'src/components/Button/Button.tsx',
            'src/components/Link/Link.tsx',
            'src/components/Dropdown/Dropdown.tsx'
          ]
        },
        {
          name: 'Data Input',
          components: [
            'src/components/Checkbox/Checkbox.tsx',
            'src/components/Radio/Radio.tsx',
            'src/components/Radio/RadioGroup.tsx',
            'src/components/Input/Input.tsx',
            'src/components/Input/InputPassword.tsx',
            'src/components/Input/InputSearch.tsx',
            'src/components/Input/ElementWithLabel.tsx',
            'src/components/Select/Select.tsx'
          ]
        },
        {
          name: 'Data Display',
          components: [
            'src/components/Collapse/Collapse.tsx',
            'src/components/Typography/Text.tsx',
            'src/components/Typography/Title.tsx',
            'src/components/Typography/Paragraph.tsx',
            'src/components/Loader/Loader.tsx',
            'src/components/Tooltip/Tooltip.tsx'
          ]
        },
        { name: 'Table', components: [] },
        { name: 'Modal & Dialog', components: [] }
      ]
    },
    {
      name: 'Layouts',
      sections: [
        {
          name: 'Structure',
          components: [
            'src/components/Layouts/FlexLayout.tsx',
            'src/components/Layouts/FlexItem.tsx',
            'src/components/Layouts/HeaderFooterLayout.tsx',
            'src/components/Separator/Separator.tsx',
            'src/components/Separator/VerticalSeparator.tsx',
            'src/components/Divider/Divider.tsx',
            'src/components/Layouts/MainPageLayout.tsx',
            'src/components/Layouts/LeftNavLayout.tsx'
          ]
        },
        {
          name: 'Dashboard',
          components: [
            'src/components/Dashboard/Dashboard.tsx',
            'src/components/Dashboard/Widget.tsx',
            'src/components/Dashboard/WidgetHeader.tsx'
          ]
        },
        {
          name: 'Navigation',
          components: [
            'src/components/Navigation/Navbar.tsx',
            'src/components/Navigation/Menu.tsx',
            'src/components/Navigation/MenuItem.tsx',
            'src/components/Navigation/MenuGroup.tsx',
            'src/components/Navigation/Tabs.tsx',
            'src/components/Navigation/Pagination.tsx'
          ]
        },
        {
          name: 'Overlays',
          components: [
            'src/components/Popover/Popover.tsx',
            'src/components/Modal/Modal.tsx',
            'src/components/Modal/ConfirmModal.tsx',
            'src/components/Modal/FullPageModal.tsx'
          ]
        }
      ]
    },
    {
      name: 'Charts',
      components: [
        'src/components/Charts/AreaChart.tsx',
        'src/components/Charts/BarChart.tsx',
        'src/components/Charts/LineChart.tsx',
        'src/components/Charts/PieChart.tsx',
        'src/components/Charts/Cartesian/YAxisTick.jsx',
        'src/components/Charts/Components/PieLabel.jsx'
      ]
    }
  ],
  getExampleFilename(componentpath) {
    return componentpath.replace(/\.(ts|js)x?$/, '.examples.md')
  },
  // handlers(componentpath) {
  //   require('react-docgen').defaultHandlers.concat(
  //     require('react-docgen-external-proptypes-handler')(componentpath),
  //     require('react-docgen-displayname-handler').createDisplayNameHandler(
  //       componentpath
  //     )
  //   )
  // },
  require: [
    path.join(__dirname, 'src/styles/index.less'),
    path.join(__dirname, 'styleguide/main.less')
  ],
  styleguideComponents: {
    PlaygroundRenderer: path.join(
      __dirname,
      'styleguide/components/PlaygroundRenderer'
    )
  },
  theme,
  styles,
  webpackConfig
}
