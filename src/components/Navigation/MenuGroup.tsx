import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'

import FlexLayout from '../Layouts/FlexLayout'
import Title from '../Typography/Title'
import ChevronDownIcon from '../Icons/ChevronDownIcon'

import MenuItem from './MenuItem'

import './MenuGroup.less'
import { getStyleProps, measureElement } from '../../utils/ReactElementUtils'
import { InferPropTypes } from 'utils/types'

const styleKeys = ['type', 'expanded']

export default function MenuGroup(
  props: InferPropTypes<typeof MenuGroup.propTypes>
) {
  const [currHeight, setCurrHeight] = useState(0)
  const mhRef = useRef(null)
  const cgRef = useRef(null)

  useEffect(() => {
    updateHeight()
  })

  function updateHeight() {
    const { type } = props

    if (type === 'collapsible') {
      const mhHeight = measureElement(mhRef.current).height
      const cgHeight = measureElement(cgRef.current).height
      const elHeight = mhHeight + cgHeight + 32

      if (currHeight !== elHeight) {
        setCurrHeight(elHeight)
      }
    }
  }

  function handleMenuChange(info) {
    const { event, key, keyPath, openKeyMap, item, type } = info
    const { assignedKey, onClick } = props

    // since user does not know about internal ids... we drop it
    let newKeyPath
    if (type === 'collapsible-header' && isLastKeyInternal(keyPath)) {
      newKeyPath = [..._.initial(keyPath), assignedKey]
    } else {
      newKeyPath = [...keyPath, assignedKey]
    }

    const newInfo = {
      event,
      key,
      keyPath: newKeyPath,
      openKeyMap,
      item,
      type
    }

    if (_.isFunction(onClick)) {
      onClick(newInfo)
    }
  }

  function isLastKeyInternal(keyPath) {
    return keyPath[keyPath.length - 1].indexOf('_internal') !== -1
  }

  function renderHeader(title, type, expanded) {
    let header
    if (title) {
      switch (type) {
        case 'collapsible':
          header = (
            <MenuItem
              // @ts-ignore
              // ref={node => (mhRef.current = node)}
              ref={mhRef}
              onClick={handleMenuChange}
              justifyContent="space-between"
              type="collapsible-header"
              assignedKey={`${props.assignedKey}_internal`}
            >
              <span>{title}</span>
              <ChevronDownIcon size="small" />
            </MenuItem>
          )
          break
        default:
          header = (
            <FlexLayout
              className="mg-title"
              flexDirection="column"
              padding="0px-20px"
            >
              <Title size="h4">{title}</Title>
            </FlexLayout>
          )
          break
      }
    }

    return header
  }

  function renderContent(type, children) {
    let content
    switch (type) {
      case 'collapsible':
        content = (
          <div className="collapsible-group" ref={cgRef}>
            {children}
          </div>
        )
        break
      default:
        content = children
        break
    }

    return content
  }

  const {
    assignedKey,
    className,
    onClick,
    assignMenuManagement,
    title,
    type,
    activeKeyPath,
    openKeyMap,
    expanded,
    children,
    ...rest
  } = props

  const childrenWithProps = assignMenuManagement
    ? assignMenuManagement({
        children,
        activeKeyPath,
        openKeyMap,
        onClickCallback: handleMenuChange
      })
    : null

  const styleProps = getStyleProps(styleKeys, props)

  let inlineStyle
  if (currHeight && expanded) {
    inlineStyle = { height: currHeight }
  }

  return (
    <FlexLayout
      flexDirection="column"
      itemSpacing="0px"
      style={inlineStyle}
      className={classnames(className, 'rtc-menu-group')}
      {...styleProps}
      {...rest}
    >
      {renderHeader(title, type, expanded)}
      {renderContent(type, childrenWithProps)}
    </FlexLayout>
  )
}

const type: ReadonlyArray<'default' | 'collapsible'> = [
  'default',
  'collapsible'
]

MenuGroup.defaultProps = {
  type: 'default'
}

MenuGroup.propTypes = {
  /**
   * Provide additional custom class name.
   */
  className: PropTypes.string,
  /**
   * (For internal use) Key path that is active.
   */
  activeKeyPath: PropTypes.array,
  /**
   * (For internal use) This key should be identical to key.
   */
  assignedKey: PropTypes.string,
  /**
   * (For internal use) Handler to assign additional props to child menu items.
   */
  assignMenuManagement: PropTypes.func,
  /**
   * The children can be MenuItem, MenuGroup, Divider, or any other
   * element preferred.
   */
  children: PropTypes.node,
  /**
   * (For internal use) Used for collapsible menus.
   */
  expanded: PropTypes.bool,
  /**
   * (For internal use) Used to open collapsible MenuGroups.
   *
   * A multidimensional array of paths of keys that are currently open. The
   * first key in the array is the selected menu group and the last key is
   * root key where the key path begins.
   */
  openKeyMap: PropTypes.arrayOf(PropTypes.array),
  /**
   * The onClick handler. Note: This is removed when used within a Menu component.
   */
  onClick: PropTypes.func,
  /**
   * Title for menu group. Can be string or node.
   */
  title: PropTypes.node,
  /**
   * Type of group.
   */
  type: PropTypes.oneOf(type)
}
