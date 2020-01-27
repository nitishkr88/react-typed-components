import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import classnames from 'classnames'

import FlexLayout from '../Layouts/FlexLayout'
import { getStyleProps } from 'utils/ReactElementUtils'
import './Link.less'

const type: ReadonlyArray<'primary' | 'secondary' | 'destructive'> = [
  'primary',
  'secondary',
  'destructive'
]

const size: ReadonlyArray<'small' | 'medium'> = ['small', 'medium']

const styleKeys = ['size', 'type']

export default function Link(props: InferProps<typeof Link.propTypes>) {
  const {
    className,
    type,
    size,
    disabled,
    leftIcon,
    rightIcon,
    onClick,
    children,
    ...rest
  } = props

  const styleProps = getStyleProps(styleKeys, props)

  return (
    <a
      className={classnames('rtc-link', className, disabled ? 'disabled' : '')}
      {...styleProps}
      // @ts-ignore
      onClick={disabled ? null : onClick}
      {...rest}
    >
      <FlexLayout alignItems="center" itemSpacing="10px" display="inline-flex">
        {leftIcon}
        <span>{children}</span>
        {rightIcon}
      </FlexLayout>
    </a>
  )
}

Link.defaultProps = {
  type: 'primary',
  size: 'medium',
  disabled: false,
  onClick: null
}

Link.propTypes = {
  /**
   * Additional class name.
   */
  className: PropTypes.string,
  /**
   * String link.
   */
  children: PropTypes.node,
  /**
   * Link style type.
   */
  type: PropTypes.oneOf(type),
  /**
   * Size of Link.
   */
  size: PropTypes.oneOf(size),
  /**
   * Left Icon.
   */
  leftIcon: PropTypes.element,
  /**
   * Right Icon.
   */
  rightIcon: PropTypes.element,
  /**
   * Disable the link.  Default is false.
   */
  disabled: PropTypes.bool,
  /**
   * Callback function to handle on click.
   */
  onClick: PropTypes.func
}
