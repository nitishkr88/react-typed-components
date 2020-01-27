import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'

import Input from './Input'
import Link from '../Link/Link'

import './InputPassword.less'
import { InferPropTypes } from 'utils/types'

/**
 * InputPassword component
 */
export default function InputPassword(
  props: InferPropTypes<typeof InputPassword.propTypes>
) {
  const [showPassword, setShowPassword] = useState(props.showPassword)

  useEffect(() => {
    setShowPassword(props.showPassword)
  }, [props.showPassword])

  function handleOnLinkClick() {
    setShowPassword(showOrHide => !showOrHide)
    props.onVisibilityChange && props.onVisibilityChange(showPassword)
  }

  const {
    showSuffix,
    hideSuffix,
    className,
    onVisibilityChange,
    showPassword: showPasswordProp,
    ...rest
  } = props

  return (
    <Input
      className={classnames(className, 'rtc-input-password')}
      {...rest}
      type={showPassword ? 'text' : 'password'}
      suffix={
        <Link
          onClick={handleOnLinkClick}
          className="suffix-label"
          disabled={props.disabled}
        >
          {showPassword ? hideSuffix : showSuffix}
        </Link>
      }
    />
  )
}

InputPassword.defaultProps = {
  showSuffix: 'Show',
  hideSuffix: 'Hide',
  showPassword: false
}

InputPassword.propTypes = {
  /**
   * Whether or not this input is disabled
   */
  disabled: PropTypes.bool,
  /**
   * Suffix label to show when password is hidden.
   */
  showSuffix: PropTypes.node,
  /**
   * Suffix label to show when password is visible.
   */
  hideSuffix: PropTypes.node,
  /**
   * Option to show password.
   */
  showPassword: PropTypes.bool,
  /**
   * onVisibilityChange function used to provide current state
   * @param {boolean} visibleInfo - Current state of showPassword.
   */
  onVisibilityChange: PropTypes.func,
  /**
   * className is used to add extra class for adding new style to override
   * default
   */
  className: PropTypes.string
}
