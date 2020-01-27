import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import classnames from 'classnames'

import './FlexItem.less'
import { getStyleProps } from '../../utils/ReactElementUtils'

const styleKeys = ['flexGrow', 'flexShrink', 'alignSelf']

const flexGrow: ReadonlyArray<
  '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10'
> = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

const flexShrink: ReadonlyArray<
  '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10'
> = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

const alignSelf: ReadonlyArray<
  'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
> = ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch']

export default function FlexItem(props: InferProps<typeof FlexItem.propTypes>) {
  const {
    className,
    flexGrow,
    flexShrink,
    alignSelf,
    children,
    ...rest
  } = props
  const styleProps = getStyleProps(styleKeys, props)

  return (
    <div
      className={classnames(className, 'rtc rtc-flex-item')}
      {...styleProps}
      {...rest}
    >
      {children}
    </div>
  )
}

FlexItem.propTypes = {
  /**
   * Additional custom class name.
   */
  className: PropTypes.string,
  /**
   * Allows the item to stretch in additional unit space if available. (0 is default)
   */
  flexGrow: PropTypes.oneOf(flexGrow),
  /**
   * Defines if the item should shrink if necessary (1 is default)
   */
  flexShrink: PropTypes.oneOf(flexShrink),
  /**
   * Allows the item to override the default alignment set by the flex container.
   */
  alignSelf: PropTypes.oneOf(alignSelf),
  /**
   * Children content.
   */
  children: PropTypes.node
}
