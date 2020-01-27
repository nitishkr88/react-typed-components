import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import IconWrapper from './IconWrapper'
import { InferPropTypes } from '../../utils/types'

const sizes: ReadonlyArray<'small' | 'medium'> = ['small', 'medium']

export default function FilterIcon(
  props: InferPropTypes<
    typeof FilterIcon.propTypes,
    typeof FilterIcon.defaultProps
  >
) {
  const { className, color, size, ...rest } = props

  const svg = {
    viewBox: '0 0 24 24',
    path: (
      <g>
        <path fill={color} d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </g>
    )
  }

  return (
    <IconWrapper
      className={classnames(className, 'filter-icon')}
      viewBox={svg.viewBox}
      size={size}
      {...rest}
    >
      {svg.path}
    </IconWrapper>
  )
}

FilterIcon.defaultProps = {
  color: 'inherit',
  size: 'medium'
}

FilterIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  /**
   * Size of icon.
   */
  size: PropTypes.oneOf(sizes)
}
