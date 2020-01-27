import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { areComponentsEqual } from 'react-hot-loader'
import _ from 'lodash'

import MenuItem from './MenuItem'
import MenuGroup from './MenuGroup'
import './Menu.less'
import FlexLayout from '../Layouts/FlexLayout'
import { InferPropTypes } from 'utils/types'

export default function Menu(
  props: InferPropTypes<typeof Menu.propTypes, typeof Menu.defaultProps>
) {
  const handleMenuChange = info => {
    const { activeKeyPath, openKeyMap, onClick } = props
    const { event, key, keyPath, item, type } = info

    // update open key paths if collapsible menu was toggled
    let newOpenKeyMap
    let newKeyPath
    if (openKeyMap && type === 'collapsible-header') {
      newOpenKeyMap = mapOpenKeys(openKeyMap, keyPath)
      newKeyPath = activeKeyPath
    } else {
      // assign new key path
      newOpenKeyMap = openKeyMap
      newKeyPath = keyPath
    }

    const newInfo = {
      event,
      key,
      keyPath: newKeyPath,
      openKeyMap: newOpenKeyMap,
      item,
      type
    }

    onClick && onClick(newInfo)
  }

  const mapOpenKeys = (openKeyMap, newPath) => {
    const newMap = _.filter(openKeyMap, currentPath => {
      return !isPathOpen(currentPath, newPath)
    })

    let newKeyPath
    // add new path
    if (openKeyMap.length === newMap.length) {
      newKeyPath = [...openKeyMap, newPath]
    } else {
      // remove matching path
      newKeyPath = newMap
    }

    return newKeyPath
  }

  const isPathOpen = (currentPath, newPath) => {
    const customizer = function(currentValue, srcValue) {
      return currentValue === srcValue
    }

    const match = _.isMatchWith(currentPath, newPath, customizer)
    return match
  }

  const isActive = (keyPath, child) => {
    return keyPath && keyPath[keyPath.length - 1] === child.key
  }

  const assignActiveKeyPath = (activeKeyPath, isActive) => {
    return isActive ? _.initial(activeKeyPath) : null
  }

  const verifiedOpenKeyMap = (openKeyMap, child) => {
    return _.filter(openKeyMap, keyPath => {
      return isActive(keyPath, child)
    })
  }

  const assignOpenKeyMap = (openKeyMap, child) => {
    const verifiedMap = verifiedOpenKeyMap(openKeyMap, child)
    return _.map(verifiedMap, keyPath => {
      return assignActiveKeyPath(keyPath, isActive(keyPath, child))
    })
  }

  const assignMenuManagement = props => {
    const { children, activeKeyPath, openKeyMap, onClickCallback } = props

    return React.Children.map(children, child => {
      let childWithProps

      if (isChildOfType(child, MenuItem)) {
        const _isActive = isActive(activeKeyPath, child)
        childWithProps = React.cloneElement(child, {
          onClick: onClickCallback,
          active: _isActive,
          assignedKey: child.key
        })
      } else if (isChildOfType(child, MenuGroup)) {
        const _isActive = isActive(activeKeyPath, child)
        const assignedKeyMap = assignOpenKeyMap(openKeyMap, child)
        childWithProps = React.cloneElement(child, {
          onClick: onClickCallback,
          expanded: !_.isEmpty(assignedKeyMap),
          assignedKey: child.key,
          activeKeyPath: assignActiveKeyPath(activeKeyPath, _isActive),
          openKeyMap: assignedKeyMap,
          assignMenuManagement: assignMenuManagement
        })
      } else {
        childWithProps = child
      }

      return childWithProps
    })
  }

  const isChildOfType = (child, type) => {
    return (
      // @ts-ignore
      _.isObject(child) && child.type && areComponentsEqual(child.type, type)
    )
  }

  const {
    className,
    onClick,
    theme,
    children,
    activeKeyPath,
    openKeyMap,
    ...rest
  } = props
  const childrenWithProps = assignMenuManagement({
    children,
    activeKeyPath,
    openKeyMap,
    onClickCallback: handleMenuChange
  })

  return (
    <FlexLayout
      flexDirection="column"
      className={classnames('rtc rtc-menu', className)}
      itemSpacing="0px"
      data-theme={theme}
      {...rest}
    >
      {childrenWithProps}
    </FlexLayout>
  )
}

Menu.chidTypes = {
  DIVIDER: 'Divider',
  MENU_ITEM: 'MenuItem',
  MENU_GROUP: 'MenuGroup'
}

Menu.defaultProps = {
  theme: 'light'
}

Menu.propTypes = {
  /**
   * Provide additional custom class name.
   */
  className: PropTypes.string,
  /**
   * Styling color theme.
   */
  theme: PropTypes.oneOf(['light', 'dark']),
  /**
   * Used to display selected menu item.
   *
   * Path of keys that is currently active. The first key in the array is the
   * selected menu item and the last key is root key where the key path begins.
   */
  activeKeyPath: PropTypes.array,
  /**
   * Used to open collapsible MenuGroups.
   *
   * A multidimensional array of paths of keys that are currently open. The
   * first key in the array is the selected menu group and the last key is
   * root key where the key path begins.
   */
  openKeyMap: PropTypes.arrayOf(PropTypes.array),
  /**
   * Callback for onClick. Returns:
   * `function({ event, key, keyPath, openKeyMap, item, type })`.
   *
   * Note: only MenuItem or MenuGroup will trigger the onClick event and that
   * they cannot be assigned their own onClick callbacks.
   *
   * Shape details:
   *
   * event : DOM event,
   * key : key of item,
   * keyPath : keyPath to item,
   * openKeyMap : Array of open keys,
   * item : item (this),
   * type : Item type e.g. 'collapsible-header'
   *
   */
  onClick: PropTypes.func,
  /**
   * The children can be MenuItem, MenuGroup, Divider, or any other
   * element preferred.
   */
  children: PropTypes.node
}
