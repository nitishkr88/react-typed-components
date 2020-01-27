import React from 'react'
import PropTypes from 'prop-types'
import { Popover as AntPopover } from 'antd'
import classnames from 'classnames'

import 'antd/lib/popover/style/index.less'
import './Popover.less'
import { InferPropTypes } from 'utils/types'

const trigger: ReadonlyArray<'click' | 'hover' | 'focus'> = [
  'click',
  'hover',
  'focus'
]
const theme: ReadonlyArray<'dark' | 'light'> = ['dark', 'light']
const placement: ReadonlyArray<
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftTop'
  | 'leftBottom'
  | 'rightTop'
  | 'rightBottom'
> = [
  'top',
  'left',
  'right',
  'bottom',
  'topLeft',
  'topRight',
  'bottomLeft',
  'bottomRight',
  'leftTop',
  'leftBottom',
  'rightTop',
  'rightBottom'
]

/**
 * Popover Component.
 * See Antd doc for all usable properties
 * https://ant.design/components/dropdown/#API
 */
export default function Popover(
  props: InferPropTypes<typeof Popover.propTypes>
) {
  const { className, content, theme, inputSearchProps, ...rest } = props

  let contentWithSearch

  return (
    <AntPopover
      overlayClassName={classnames('rtc-popover', className, theme)}
      content={contentWithSearch || content}
      {...rest}
    >
      {props.children}
    </AntPopover>
  )
}

Popover.defaultProps = {
  placement: 'top',
  theme: 'light',
  trigger: 'click'
}

Popover.propTypes = {
  /**
   * This is the element to show when clicked.
   */
  children: PropTypes.node,
  /**
   * Customize additional class name.
   */
  className: PropTypes.string,
  /**
   * Content to be rendered inside popover
   */
  content: PropTypes.node,
  /**
   * to set the position, which can be one of :
   * top left right bottom topLeft topRight
   * bottomLeft bottomRight leftTop leftBottom rightTop rightBottom
   */
  placement: PropTypes.oneOf(placement),
  /**
   * custom class to be added to tooltip
   */
  overlayClassName: PropTypes.string,
  /**
   * Trigger - different way to trigger the popover
   */
  trigger: PropTypes.oneOf(trigger),
  /**
   * Color theme for light or dark background.
   */
  theme: PropTypes.oneOf(theme),
  /**
   * Props to pass to InputSearch component and to show it in the Popover
   */
  inputSearchProps: PropTypes.object
}
