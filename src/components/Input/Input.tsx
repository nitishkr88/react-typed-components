import React from 'react'
import PropTypes from 'prop-types'
import AntInput from 'antd/lib/input'
import classnames from 'classnames'

import 'antd/lib/input/style/index.less'
import './Input.less'
import { InferPropTypes } from 'utils/types'

/**
 * Input component overriding Ant input style.
 * See https://ant.design/components/input/#API for complete usage.
 */
export default function Input(
  props: InferPropTypes<typeof Input.propTypes, typeof Input.defaultProps>
) {
  const { className, theme, border, error, ...rest } = props

  let hasError
  if (error) {
    hasError = 'has-error'
  }

  const inputClassName = classnames(
    'rtc rtc-input',
    theme,
    className,
    hasError,
    border ? '' : '-borderless'
  )
  return <AntInput className={inputClassName} {...rest} />
}

Input.defaultProps = {
  error: false,
  theme: 'light',
  border: true
}

Input.propTypes = {
  /**
   * Customize additional class name.
   */
  className: PropTypes.string,
  /**
   * See https://2x.ant.design/components/input/#Input
   */
  addonAfter: PropTypes.node,
  /**
   * See https://2x.ant.design/components/input/#Input
   */
  addonBefore: PropTypes.node,
  /**
   * Show input error style.
   */
  error: PropTypes.bool,
  /**
   * Whether or not to show a border
   */
  border: PropTypes.bool,
  /**
   * Color theme for light or dark background.
   */
  theme: PropTypes.oneOf(['dark', 'light']),
  /**
   * Type of input
   */
  type: PropTypes.string,
  /**
   * Prefix icon for input
   */
  prefix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Suffix icon for input
   */
  suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * The input content value
   */
  value: PropTypes.string,
  /**
   * Callback for user input
   */
  onChange: PropTypes.func,
  /**
   * The callback function that is triggered when Enter key is pressed
   */
  onPressEnter: PropTypes.func
}
