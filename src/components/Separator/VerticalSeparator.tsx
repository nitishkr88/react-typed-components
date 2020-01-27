import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import classnames from 'classnames'

import './VerticalSeparator.less'

const size: ReadonlyArray<'small' | 'large'> = ['small', 'large']

const theme: ReadonlyArray<'light' | 'dark'> = ['light', 'dark']

/**
 * Vertical separator component.  Can be use standalone or as a property
 * to Separator component.
 */
export default function VerticalSeparator(
  props: InferProps<typeof VerticalSeparator.propTypes>
) {
  const { className, size, theme, ...rest } = props
  return (
    <div
      className={classnames(
        'rtc rtc-vertical-separator',
        className,
        size,
        theme
      )}
      {...rest}
    />
  )
}

VerticalSeparator.defaultProps = {
  size: 'small',
  theme: 'light'
}

VerticalSeparator.propTypes = {
  /**
   * Additional classname
   */
  className: PropTypes.string,
  /**
   * Size of the separator.
   */
  size: PropTypes.oneOf(size),
  /**
   * Use separator in a 'light' or 'dark' background theme.
   */
  theme: PropTypes.oneOf(theme)
}
