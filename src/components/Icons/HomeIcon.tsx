import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import IconWrapper from './IconWrapper'
import { InferPropTypes } from '../../utils/types'

const sizes: ReadonlyArray<'small' | 'medium'> = ['small', 'medium']

export default function HomeIcon(
  props: InferPropTypes<typeof HomeIcon.propTypes, typeof HomeIcon.defaultProps>
) {
  const { className, color, size, ...rest } = props

  const svg = {
    viewBox: '0 0 24 24',
    path: (
      <g>
        <path fill={color} d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </g>
    )
  }

  return (
    <IconWrapper
      className={classnames(className, 'home-icon')}
      viewBox={svg.viewBox}
      size={size}
      {...rest}
    >
      {svg.path}
    </IconWrapper>
  )
}

HomeIcon.defaultProps = {
  color: 'inherit',
  size: 'medium'
}

HomeIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  /**
   * Size of icon.
   */
  size: PropTypes.oneOf(sizes)
}
