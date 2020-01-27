import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import IconWrapper from './IconWrapper'
import { InferPropTypes } from '../../utils/types'

const sizes: ReadonlyArray<'small' | 'medium'> = ['small', 'medium']

export default function EditIcon(
  props: InferPropTypes<typeof EditIcon.propTypes, typeof EditIcon.defaultProps>
) {
  const { className, color, size, ...rest } = props

  const svg = {
    viewBox: '0 0 24 24',
    path: (
      <g>
        <path
          fill={color}
          d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
        />
        <path d="M0 0h24v24H0z" fill="none" />
      </g>
    )
  }

  return (
    <IconWrapper
      className={classnames(className, 'edit-icon')}
      viewBox={svg.viewBox}
      size={size}
      {...rest}
    >
      {svg.path}
    </IconWrapper>
  )
}

EditIcon.defaultProps = {
  color: 'inherit',
  size: 'medium'
}

EditIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  /**
   * Size of icon.
   */
  size: PropTypes.oneOf(sizes)
}
