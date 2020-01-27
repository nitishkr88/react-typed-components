import React from 'react'
import PropTypes, { func } from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'

import FlexLayout from '../Layouts/FlexLayout'
import './MenuItem.less'

import { getStyleProps } from '../../utils/ReactElementUtils'
import { InferPropTypes } from 'utils/types'

const styleKeys = ['type', 'active', 'disabled']

export default function MenuItem(
  props: InferPropTypes<typeof MenuItem.propTypes>
) {
  const _onClick = event => {
    const { assignedKey, disabled, onClick, type } = props

    if (!disabled) {
      const info = {
        event,
        key: assignedKey,
        keyPath: [assignedKey],
        type,
        // @ts-ignore
        item: this
      }

      onClick && onClick(info)
    }
  }

  const {
    className,
    assignedKey,
    onClick,
    active,
    disabled,
    tooltipProps,
    ...rest
  } = props
  const styleProps = getStyleProps(styleKeys, props)

  let menuItemNode = (
    <FlexLayout
      className={classnames(className, 'rtc rtc-menu-item')}
      alignItems="center"
      padding="0px-20px"
      // @ts-ignore
      onClick={_onClick}
      {...styleProps}
      {...rest}
    />
  )

  if (tooltipProps) {
  }

  return menuItemNode
}

MenuItem.propTypes = {
  /**
   * Provide additional custom class name.
   */
  className: PropTypes.string,
  /**
   * (For internal use) This key should be identical to key.
   */
  assignedKey: PropTypes.string,
  /**
   * The children elements.
   */
  children: PropTypes.node,
  /**
   * The onClick handler. Note: This is removed when used within a Menu component.
   */
  onClick: PropTypes.func,
  /**
   * To disable MenuItem events.
   */
  disabled: PropTypes.bool,
  /**
   * Type of item.
   */
  type: PropTypes.string,
  /**
   * Add tooltip to MenuItem. See Tooltip component for proper usage. Note:
   * Traditional Tooltip wrapping style does not work inside the Menu context.
   * This prop has been provided for convenience.
   */
  tooltipProps: PropTypes.object,
  /**
   * Item is highlighted when active.
   */
  active: PropTypes.bool
}
