import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { getStyleProps } from '../../utils/ReactElementUtils'
import FlexLayout from '../Layouts/FlexLayout'
import FlexItem from '../Layouts/FlexItem'
import './Divider.less'
import { InferPropTypes } from 'utils/types'

const styleKeys = ['type', 'theme']

const type: ReadonlyArray<'full-width' | 'short'> = ['full-width', 'short']

const theme: ReadonlyArray<'light' | 'dark'> = ['light', 'dark']

/**
 * Divider
 * @keywords Horizontal separator, Line
 */
export default function Divider(
  props: InferPropTypes<typeof Divider.propTypes, typeof Divider.defaultProps>
) {
  function renderDivider() {
    const { className } = props
    const styleProps = getStyleProps(styleKeys, props)

    return (
      <div
        className={classnames(className, 'rtc rtc-divider')}
        {...styleProps}
      />
    )
  }

  function renderDividerWithContent() {
    return (
      <FlexLayout alignItems="center">
        {renderDivider()}
        <FlexItem flexShrink="0">{props.children}</FlexItem>
        {renderDivider()}
      </FlexLayout>
    )
  }

  return props.children ? renderDividerWithContent() : renderDivider()
}

Divider.defaultProps = {
  type: 'full-width',
  theme: 'light'
}

Divider.propTypes = {
  /**
   * Items (child nodes).
   */
  children: PropTypes.node,
  /**
   * Customize additional class name.
   */
  className: PropTypes.string,
  /**
   *
   * Set the type of the divider.
   */
  type: PropTypes.oneOf(type),
  /**
   *
   * Styling for light or dark backgrounds.
   */
  theme: PropTypes.oneOf(theme)
}
