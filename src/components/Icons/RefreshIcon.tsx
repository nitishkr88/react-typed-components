import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import IconWrapper from './IconWrapper'
import { InferPropTypes } from '../../utils/types'

const sizes: ReadonlyArray<'small' | 'medium'> = ['small', 'medium']

export default function RefreshIcon(
  props: InferPropTypes<
    typeof RefreshIcon.propTypes,
    typeof RefreshIcon.defaultProps
  >
) {
  const { className, color, size, ...rest } = props

  const svgs = {
    small: {
      viewBox: '0 0 18 18',
      path: (
        <g>
          <path d="M0 0h18v18H0z" fill="none" />
          <path
            fill={color}
            d="M9 13.5c-2.49 0-4.5-2.01-4.5-4.5S6.51 4.5 9 4.5c1.24 0 2.36.52 3.17 1.33L10 8h5V3l-1.76 1.76C12.15 3.68 10.66 3 9 3 5.69 3 3.01 5.69 3.01 9S5.69 15 9 15c2.97 0 5.43-2.16 5.9-5h-1.52c-.46 2-2.24 3.5-4.38 3.5z"
          />
        </g>
      )
    },
    medium: {
      viewBox: '0 0 24 24',
      path: (
        <g>
          <path
            fill={color}
            d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
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
      className={classnames(className, 'refresh-icon')}
      viewBox={svg.viewBox}
      size={size}
      {...rest}
    >
      {svg.path}
    </IconWrapper>
  )
}

RefreshIcon.defaultProps = {
  color: 'inherit',
  size: 'small'
}

RefreshIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  /**
   * Size of icon.
   */
  size: PropTypes.oneOf(sizes)
}
