import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import classnames from 'classnames'

import FlexItem from './FlexItem'
import { getStyleProps } from '../../utils/ReactElementUtils'
import './FlexLayout.less'

const styleKeys = [
  'display',
  'flexDirection',
  'flexWrap',
  'justifyContent',
  'alignItems',
  'padding',
  'itemSpacing',
  'itemFlexBasis'
]

const display: ReadonlyArray<'flex' | 'inline-flex'> = ['flex', 'inline-flex']

const flexDirection: ReadonlyArray<
  'row' | 'row-reverse' | 'column' | 'column-reverse'
> = ['row', 'row-reverse', 'column', 'column-reverse']

const flexWrap: ReadonlyArray<'nowrap' | 'wrap'> = ['nowrap', 'wrap']

const flexGrow: ReadonlyArray<
  '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10'
> = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

const alignItems: ReadonlyArray<
  'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
> = ['flex-start', 'flex-end', 'center', 'baseline', 'stretch']

const justifyContent: ReadonlyArray<
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
> = [
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'space-evenly'
]

const itemSpacing: ReadonlyArray<
  '0px' | '2px' | '5px' | '10px' | '15px' | '20px' | '40px' | '80px'
> = ['0px', '2px', '5px', '10px', '15px', '20px', '40px', '80px']

const padding: ReadonlyArray<
  | '5px'
  | '10px'
  | '15px'
  | '20px'
  | '30px'
  | '40px'
  | '0px-5px'
  | '0px-10px'
  | '0px-15px'
  | '0px-20px'
  | '5px-0px'
  | '10px-0px'
  | '15px-0px'
  | '20px-0px'
> = [
  '5px',
  '10px',
  '15px',
  '20px',
  '30px',
  '40px',
  '0px-5px',
  '0px-10px',
  '0px-15px',
  '0px-20px',
  '5px-0px',
  '10px-0px',
  '15px-0px',
  '20px-0px'
]

export default function FlexLayout(
  props: InferProps<typeof FlexLayout.propTypes>
) {
  const {
    className,
    display,
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    padding,
    itemSpacing,
    itemFlexBasis,
    children,
    ...rest
  } = props

  const styleProps = getStyleProps(styleKeys, props)

  return (
    <FlexItem
      className={classnames(className, 'rtc-flex-layout')}
      {...styleProps}
      {...rest}
    >
      {children}
    </FlexItem>
  )
}

FlexLayout.defaultProps = {
  display: 'flex',
  flexDirection: 'row',
  itemSpacing: '20px'
}

FlexLayout.propTypes = {
  /**
   * Customize additional class name.
   */
  className: PropTypes.string,
  /**
   * Inline Style
   */
  style: PropTypes.objectOf(PropTypes.string),
  /**
   * Display the layout in flex (block style) or as inline container.
   */
  display: PropTypes.oneOf(display),
  /**
   * Items (child nodes).
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  /**
   * Padding to wrap all children.
   */
  padding: PropTypes.oneOf(padding),
  /**
   * Set spacing between items.
   */
  itemSpacing: PropTypes.oneOf(itemSpacing),
  /**
   * Give all items flex-basis. This is useful to give equal share of space for
   * all items in the flex container.
   */
  itemFlexBasis: PropTypes.oneOf(['100pc']),
  /**
   * Displays items in a row or column direction.
   */
  // flexDirection: PropTypes.oneOf([
  //   'row',
  //   'row-reverse',
  //   'column',
  //   'column-reverse'
  // ]),
  flexDirection: PropTypes.oneOf(flexDirection),
  /**
   * Align items in respect to the FlexLayout container. (stretch is default)
   */
  alignItems: PropTypes.oneOf(alignItems),
  /**
   * Justify items in respect to the FlexLayout container. (flex-start is default)
   */
  justifyContent: PropTypes.oneOf(justifyContent),
  /**
   * Allows items to wrap inside the FlexLayout container. (nowrap is default)
   */
  flexWrap: PropTypes.oneOf(flexWrap),
  /**
   * Allows the item to stretch in additional unit space if available. (0 is default)
   */
  flexGrow: PropTypes.oneOf(flexGrow)
}
