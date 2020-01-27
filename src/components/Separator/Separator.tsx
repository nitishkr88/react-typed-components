import React from 'react'
import PropTypes, { InferProps, ReactNodeArray } from 'prop-types'
import classnames from 'classnames'

import './Separator.less'

const itemSpacing: ReadonlyArray<'10px' | '15px' | '20px'> = [
  '10px',
  '15px',
  '20px'
]

export default function Separator(
  props: InferProps<typeof Separator.propTypes>
) {
  const { className, separator, itemSpacing } = props

  if (
    !props.children ||
    typeof props.children !== 'object' ||
    !Array.isArray(props.children)
  ) {
    return <span>{props.children}</span>
  }

  // Only want to use truthy children.
  let children: ReactNodeArray = props.children.filter(child => !!child)

  const items: any[] = []
  for (let i = 0; i < children.length - 1; i++) {
    items.push(
      <div key={`item${i}`} className="item">
        {children[i]}
      </div>
    )
    // Add separator after each item (except for the last one).
    items.push(
      React.cloneElement(separator, {
        key: `separator${i}`,
        className: `separator item-spacing-${itemSpacing} item`
      })
    )
  }

  // Last child
  items.push(
    <div key={`item${children.length - 1}`} className="item">
      {children[children.length - 1]}
    </div>
  )

  return (
    <div className={classnames('rtc rtc-separator', className)}>{items}</div>
  )
}

Separator.defaultProps = {
  itemSpacing: '15px'
}

Separator.propTypes = {
  /**
   * Additional classname
   */
  className: PropTypes.string,
  /**
   * Two or more children to add a separator in between.
   */
  children: PropTypes.node,
  /**
   * The separator element.
   */
  separator: PropTypes.element.isRequired,
  /**
   * Spacing between the separator and the items adjacent to it.
   * 15px is generally used for small separators (default)
   * 20px is generally used for large separators (like separating buttons)
   */
  itemSpacing: PropTypes.oneOf(itemSpacing)
}
