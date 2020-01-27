import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import './IconWrapper.less'
import { InferPropTypes } from 'utils/types'

const sizes: ReadonlyArray<'small' | 'medium' | 'large'> = [
  'small',
  'medium',
  'large'
]

export default function IconWrapper(
  props: InferPropTypes<
    typeof IconWrapper.propTypes,
    typeof IconWrapper.defaultProps
  >
) {
  const { className, size, viewBox, ...rest } = props

  return (
    <svg
      className={classnames(className, 'rtc rtc-icon', `size-${size}`)}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    />
  )
}

IconWrapper.defaultProps = {
  color: 'inherit',
  size: 'medium'
}

IconWrapper.propTypes = {
  /**
   * Custom classname.
   */
  className: PropTypes.string,
  /**
   * Color of icon. If unset, the color will inherit font color.
   *
   * (?) Accepted values can be of any color name, hex color code, RGB color code or CSS class name paired attr selector.
   */
  color: PropTypes.string,
  /**
   * Size of icon.
   */
  size: PropTypes.oneOf(sizes),
  /**
   * Svg viewbox string.
   */
  viewBox: PropTypes.string,
  /**
   * Icon svg paths
   */
  children: PropTypes.node
}
