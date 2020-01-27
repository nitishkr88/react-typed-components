import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Text from '../Typography/Text'
import './Loader.less'

import { InferPropTypes } from 'utils/types'
import { getStyleProps } from 'utils/ReactElementUtils'

const styleKeys = ['color', 'size', 'theme']

const color: ReadonlyArray<'blue' | 'gray'> = ['blue', 'gray']

const size: ReadonlyArray<'normal' | 'large'> = ['normal', 'large']

const theme: ReadonlyArray<'light' | 'dark'> = ['light', 'dark']

export default function Loader(
  props: InferPropTypes<typeof Loader.propTypes, typeof Loader.defaultProps>
) {
  const {
    className,
    tip,
    loading,
    overlay,
    color,
    size,
    theme,
    ...rest
  } = props

  const styleProps = getStyleProps(styleKeys, props)

  let loaderMsg
  if (tip) {
    loaderMsg = (
      <Text className="rtc-loader-tip" type="secondary">
        {tip}
      </Text>
    )
  }

  let loader
  if (loading) {
    let styleClass
    if (props.children || overlay) {
      styleClass = 'overlay-loader'
    }
    loader = (
      <div className={styleClass}>
        <div className="donut-loader" {...styleProps} />
        {loaderMsg}
      </div>
    )
  }

  return (
    <div className={classnames('rtc rtc-loader', className)} {...rest}>
      {loader}
      {props.children}
    </div>
  )
}

Loader.defaultProps = {
  loading: true,
  color: 'blue',
  size: 'normal',
  theme: 'light'
}

Loader.propTypes = {
  /**
   * Add custom classname.
   */
  className: PropTypes.string,
  /**
   * If children element is provide the loader will be overlay in the
   * center of the element.
   */
  children: PropTypes.node,
  /**
   * Show the spinner loader.
   */
  loading: PropTypes.bool,
  /**
   * Force overlay style.
   */
  overlay: PropTypes.bool,
  /**
   * String description.
   */
  tip: PropTypes.string,
  /**
   * Color of loader.
   */
  color: PropTypes.oneOf(color),
  /**
   * Size of loader.
   */
  size: PropTypes.oneOf(size),
  /**
   * Theme of loader.
   */
  theme: PropTypes.oneOf(theme)
}
