import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'

import FlexLayout from '../Layouts/FlexLayout'
import FlexItem from '../Layouts/FlexItem'
import Separator from '../Separator/Separator'
import VerticalSeparator from '../Separator/VerticalSeparator'

import './Navbar.less'

export default function Navbar(props: InferProps<typeof Navbar.propTypes>) {
  const {
    className,
    navigationItems,
    title,
    actions,
    accountDetail,
    logoIcon,
    ...rest
  } = props

  let navMenu: any = null
  if (navigationItems) {
    navMenu = (
      <FlexLayout className="horizontal-menu">
        {_.map(navigationItems, navItem => (
          // @ts-ignore
          <FlexLayout key={navItem.key} className="nav-item">
            {navItem?.label}
          </FlexLayout>
        ))}
      </FlexLayout>
    )
  }

  const leftElements = [
    <FlexLayout
      key="logo-icon"
      className="logo-icon left-icon"
      justifyContent="center"
      alignItems="center"
    >
      <FlexItem>{logoIcon}</FlexItem>
    </FlexLayout>,
    <Separator
      key="separator"
      separator={<VerticalSeparator theme="dark" />}
      itemSpacing="20px"
    >
      {title ? <FlexLayout className="app-title">{title}</FlexLayout> : null}
      {navMenu ? <FlexLayout className="menu">{navMenu}</FlexLayout> : null}
    </Separator>
  ]

  const rightElements = (
    <Separator
      separator={<VerticalSeparator theme="dark" />}
      itemSpacing="20px"
    >
      {actions ? (
        <FlexLayout className="account-actions">{actions}</FlexLayout>
      ) : null}
      <FlexLayout className="account-info">{accountDetail}</FlexLayout>
    </Separator>
  )

  return (
    <FlexLayout
      className={classnames('rtc rtc-nav-bar', className)}
      itemSpacing="80px"
      justifyContent="space-between"
      alignItems="center"
      {...rest}
    >
      <FlexLayout
        className="left"
        justifyContent="flex-start"
        alignItems="center"
      >
        {leftElements}
      </FlexLayout>
      <FlexLayout
        className="right"
        justifyContent="flex-end"
        alignItems="center"
      >
        {rightElements}
      </FlexLayout>
    </FlexLayout>
  )
}

Navbar.defaultProps = {
  logoIcon: <span>LOGO</span>
}

Navbar.propTypes = {
  /**
   * Additional custom class name.
   */
  className: PropTypes.string,
  /**
   * List of navigation items.
   */
  navigationItems: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.node
    })
  ),
  /**
   * App's title.
   */
  title: PropTypes.node,
  /**
   * Action icons, alerts, etc.
   */
  actions: PropTypes.node,
  /**
   * Display account details.
   */
  accountDetail: PropTypes.node,
  /**
   * App's logo.
   */
  logoIcon: PropTypes.node.isRequired
}
