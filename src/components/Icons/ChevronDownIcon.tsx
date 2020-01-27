import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import IconWrapper from './IconWrapper'
import { InferPropTypes } from '../../utils/types'

const sizes: ReadonlyArray<'small' | 'medium'> = ['small', 'medium']

export default function ChevronDownIcon(
  props: InferPropTypes<
    typeof ChevronDownIcon.propTypes,
    typeof ChevronDownIcon.defaultProps
  >
) {
  const { className, color, size, ...rest } = props

  const svgs = {
    small: {
      viewBox: '0 0 18 18',
      path: (
        <g>
          <path
            fill={color}
            d="M12.44 6.44L9 9.88 5.56 6.44 4.5 7.5 9 12l4.5-4.5z"
          />
          <path d="M0 0h18v18H0z" fill="none" />
        </g>
      )
    },
    medium: {
      viewBox: '0 0 24 24',
      path: (
        <g>
          <path fill={color} d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </g>
      )
    }
  }

  // @ts-ignore
  const svg = svgs[size]

  return (
    <IconWrapper
      className={classnames(className, 'chevron-down-icon')}
      viewBox={svg.viewBox}
      size={size}
      {...rest}
    >
      {svg.path}
    </IconWrapper>
  )
}

ChevronDownIcon.defaultProps = {
  color: 'inherit',
  size: 'medium'
}

ChevronDownIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  /**
   * Size of icon.
   */
  size: PropTypes.oneOf(sizes)
}
