import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import IconWrapper from './IconWrapper'
import { InferPropTypes } from '../../utils/types'

const sizes: ReadonlyArray<'small' | 'medium'> = ['small', 'medium']

export default function WarningIcon(
  props: InferPropTypes<
    typeof WarningIcon.propTypes,
    typeof WarningIcon.defaultProps
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
            d="M.5 16h17L9 1 .5 16zm9.5-2H8v-2h2v2zm0-3H8V7h2v4z"
          />
        </g>
      )
    },
    medium: {
      viewBox: '0 0 24 24',
      path: (
        <g>
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            fill={color}
            d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
          />
        </g>
      )
    }
  }

  // @ts-ignore
  const svg = svgs[size]

  return (
    <IconWrapper
      className={classnames(className, 'warning-icon')}
      viewBox={svg.viewBox}
      size={size}
      {...rest}
    >
      {svg.path}
    </IconWrapper>
  )
}

WarningIcon.defaultProps = {
  color: 'inherit',
  size: 'medium'
}

WarningIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  /**
   * Size of icon.
   */
  size: PropTypes.oneOf(sizes)
}
