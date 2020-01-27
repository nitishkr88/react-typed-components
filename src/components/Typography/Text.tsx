import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import './Text.less'
import { InferPropTypes } from 'utils/types'
import { getStyleProps } from 'utils/ReactElementUtils'

const styleKeys = ['theme', 'type', 'size', 'display']

const type: ReadonlyArray<
  'info' | 'primary' | 'secondary' | 'error' | 'warning' | 'success'
> = ['info', 'primary', 'secondary', 'error', 'warning', 'success']

const size: ReadonlyArray<'small' | 'medium'> = ['small', 'medium']

const theme: ReadonlyArray<'light' | 'dark'> = ['light', 'dark']

const display: ReadonlyArray<'inline' | 'block'> = ['inline', 'block']

export default function Text(
  props: InferPropTypes<typeof Text.propTypes, typeof Text.defaultProps>
) {
  const { className, theme, type, size, display, ...rest } = props
  const styleProps = getStyleProps(styleKeys, props)

  return (
    <span
      className={classnames(className, 'rtc rtc-text')}
      {...styleProps}
      {...rest}
    />
  )
}

Text.defaultProps = {
  theme: 'light',
  type: 'info',
  size: 'medium'
}

Text.propTypes = {
  /**
   * Additional class name
   */
  className: PropTypes.string,
  /**
   * Style theme.
   */
  theme: PropTypes.oneOf(theme),
  /**
   * Size of text.
   */
  size: PropTypes.oneOf(size),
  /**
   * Display label in inline or block format.
   */
  display: PropTypes.oneOf(display),
  /**
   * Type of label.
   */
  type: PropTypes.oneOf(type),
  /**
   * Text Content
   */
  children: PropTypes.string
}
