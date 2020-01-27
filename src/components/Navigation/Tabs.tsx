import React from 'react'
import PropTypes from 'prop-types'
import { Tabs as AntTabs } from 'antd'
import classnames from 'classnames'

import 'antd/lib/tabs/style/index.less'
import './Tabs.less'
import { InferPropTypes } from 'utils/types'

export default function Tabs(
  props: InferPropTypes<typeof Tabs.propTypes, typeof Tabs.defaultProps>
) {
  const { className, tabType, centerContent, theme, children, ...rest } = props

  let centerContentStyle
  if (centerContent) {
    centerContentStyle = 'center-content'
  }

  return (
    <AntTabs
      className={classnames(
        className,
        tabType,
        theme,
        centerContentStyle,
        'rtc-tabs rtc'
      )}
      {...rest}
    >
      {children}
    </AntTabs>
  )
}

Tabs.TabPane = AntTabs.TabPane

Tabs.defaultProps = {
  animated: false,
  tabType: 'default',
  theme: 'light'
}

Tabs.propTypes = {
  /**
   * Type of tab - default, view-switch, container-tab
   */
  tabType: PropTypes.oneOf(['default', 'view-switcher']),
  /**
   * light or dark style Tab switch container. Default is light.
   */
  theme: PropTypes.oneOf(['dark', 'light']),
  /**
   * Callback when tab is switched
   */
  onChange: PropTypes.func,
  /**
   * Callback when tab is clicked
   */
  onTabClick: PropTypes.func,
  /**
   * Whether to change tabs with animation,
   * this property only works with tabPosition=top|bottom
   */
  animated: PropTypes.bool,
  /**
   * Node element.
   */
  children: PropTypes.node,
  /**
   * Vertically and horizontally center content.
   */
  centerContent: PropTypes.bool,
  /**
   * className is used to add extra class for adding new style to override
   * default
   */
  className: PropTypes.string
}
