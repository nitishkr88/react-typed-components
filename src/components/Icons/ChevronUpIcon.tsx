import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import IconWrapper from './IconWrapper'
import { InferPropTypes } from '../../utils/types'

const sizes: ReadonlyArray<'small' | 'medium'> = ['small', 'medium']

export default function ChevronUpIcon(
  props: InferPropTypes<
    typeof ChevronUpIcon.propTypes,
    typeof ChevronUpIcon.defaultProps
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
            d="M9 6l-4.5 4.5 1.06 1.06L9 8.12l3.44 3.44 1.06-1.06z"
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
            d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
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
      className={classnames(className, 'chevron-up-icon')}
      viewBox={svg.viewBox}
      size={size}
      {...rest}
    >
      {svg.path}
    </IconWrapper>
  )
}

ChevronUpIcon.defaultProps = {
  color: 'inherit',
  size: 'medium'
}

ChevronUpIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  /**
   * Size of icon.
   */
  size: PropTypes.oneOf(sizes)
}
