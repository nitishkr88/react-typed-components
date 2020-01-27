import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import IconWrapper from './IconWrapper'
import { InferPropTypes } from '../../utils/types'

const sizes: ReadonlyArray<'small' | 'medium'> = ['small', 'medium']

export default function ChevronRightIcon(
  props: InferPropTypes<
    typeof ChevronRightIcon.propTypes,
    typeof ChevronRightIcon.defaultProps
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
            d="M7.5 4.5L6.44 5.56 9.88 9l-3.44 3.44L7.5 13.5 12 9z"
          />
          <path d="M0 0h18v18H0z" fill="none" />
        </g>
      )
    },
    medium: {
      viewBox: '0 0 24 24',
      path: (
        <g>
          <path
            fill={color}
            d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
          />
          <path d="M0 0h24v24H0z" fill="none" />
        </g>
      )
    }
  }

  // @ts-ignore
  const svg = svgs[size]

  return (
    <IconWrapper
      className={classnames(className, 'chevron-right-icon')}
      viewBox={svg.viewBox}
      size={size}
      {...rest}
    >
      {svg.path}
    </IconWrapper>
  )
}

ChevronRightIcon.defaultProps = {
  color: 'inherit',
  size: 'medium'
}

ChevronRightIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  /**
   * Size of icon.
   */
  size: PropTypes.oneOf(sizes)
}
