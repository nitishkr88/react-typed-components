import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import IconWrapper from './IconWrapper'
import { InferPropTypes } from '../../utils/types'

const sizes: ReadonlyArray<'small' | 'medium'> = ['small', 'medium']

export default function MoreVerticalIcon(
  props: InferPropTypes<
    typeof MoreVerticalIcon.propTypes,
    typeof MoreVerticalIcon.defaultProps
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
            d="M9 5.5c.83 0 1.5-.67 1.5-1.5S9.83 2.5 9 2.5 7.5 3.17 7.5 4 8.17 5.5 9 5.5zm0 2c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S9.83 7.5 9 7.5zm0 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"
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
            d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
          />
        </g>
      )
    }
  }

  // @ts-ignore
  const svg = svgs[size]

  return (
    <IconWrapper
      className={classnames(className, 'more-vert-icon')}
      viewBox={svg.viewBox}
      size={size}
      {...rest}
    >
      {svg.path}
    </IconWrapper>
  )
}

MoreVerticalIcon.defaultProps = {
  color: 'inherit',
  size: 'small'
}

MoreVerticalIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  /**
   * Size of icon.
   */
  size: PropTypes.oneOf(sizes)
}
