import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import IconWrapper from './IconWrapper'
import { InferPropTypes } from '../../utils/types'

const sizes: ReadonlyArray<'small' | 'medium'> = ['small', 'medium']

export default function RemoveIcon(
  props: InferPropTypes<
    typeof RemoveIcon.propTypes,
    typeof RemoveIcon.defaultProps
  >
) {
  const { className, color, size, ...rest } = props

  const svg = {
    viewBox: '0 0 24 24',
    path: (
      <g>
        <path
          fill={color}
          d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
        />
        <path d="M0 0h24v24H0z" fill="none" />
      </g>
    )
  }

  return (
    <IconWrapper
      className={classnames(className, 'remove-icon')}
      viewBox={svg.viewBox}
      size={size}
      {...rest}
    >
      {svg.path}
    </IconWrapper>
  )
}

RemoveIcon.defaultProps = {
  color: 'inherit',
  size: 'medium'
}

RemoveIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  /**
   * Size of icon.
   */
  size: PropTypes.oneOf(sizes)
}
