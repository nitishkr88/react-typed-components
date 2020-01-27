import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import IconWrapper from './IconWrapper'
import { InferPropTypes } from '../../utils/types'

const sizes: ReadonlyArray<'small' | 'medium'> = ['small', 'medium']

export default function AlertIcon(
  props: InferPropTypes<
    typeof AlertIcon.propTypes,
    typeof AlertIcon.defaultProps
  >
) {
  const { className, color, size, ...rest } = props

  const svg = {
    viewBox: '0 0 24 24',
    path: (
      <g>
        <path
          fill={color}
          d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
        />
      </g>
    )
  }

  return (
    <IconWrapper
      className={classnames(className, 'alert-icon')}
      viewBox={svg.viewBox}
      size={size}
      {...rest}
    >
      {svg.path}
    </IconWrapper>
  )
}

AlertIcon.defaultProps = {
  color: 'inherit',
  size: 'medium'
}

AlertIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  /**
   * Size of icon.
   */
  size: PropTypes.oneOf(sizes)
}
