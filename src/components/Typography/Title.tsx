import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { getElementHeight } from '../../utils/ReactElementUtils'
import './Title.less'
import { InferPropTypes } from 'utils/types'

const size: ReadonlyArray<'h1' | 'h2' | 'h3' | 'h4'> = ['h1', 'h2', 'h3', 'h4']

const DEFAULT_LINE_HEIGHTS = {
  h1: 20,
  h2: 12,
  h3: 10,
  h4: 8
}

/**
 * Title component is a wrapper component around the `<h1> to <h4>` html
 * tags with special handling around multiple lines styling.
 */
export default function Title(
  props: InferPropTypes<typeof Title.propTypes, typeof Title.defaultProps>
) {
  const paragraphNode = useRef<HTMLElement>(null)
  const [multiline, setMultiline] = useState(false)

  useEffect(() => {
    checkForMultiLine()
  })

  function checkForMultiLine() {
    if (props.forceSingleLine) {
      return
    }
    // If the height of the element is larger than the line height
    // this means we are dealing with multi lines text.
    if (
      props.size &&
      paragraphNode.current &&
      !multiline &&
      getElementHeight(paragraphNode.current) > DEFAULT_LINE_HEIGHTS[props.size]
    ) {
      setMultiline(true)
    }
  }

  // Don't pass forceSingleLine prop to the <H*>tag.
  // eslint-disable-next-line no-unused-vars
  const { className, size, forceSingleLine, ...rest } = props
  const multilineClass = multiline ? `line-multiline-${size}` : ''
  const newProps = {
    className: classnames('rtc rtc-title', multilineClass, className),
    ref: paragraphNode,
    ...rest
  }

  // size is h1,h2,h3, or h4
  return size ? React.createElement(size, newProps) : null
}

Title.defaultProps = {
  size: 'h1',
  forceSingleLine: false
}

Title.propTypes = {
  /**
   * Additional classname
   *
   * 'dark-bg' : style font color for use in dark background.
   */
  className: PropTypes.string,
  /**
   * Title goes here.
   */
  children: PropTypes.node.isRequired,
  /**
   * Size of the separator.
   */
  size: PropTypes.oneOf(size),
  /**
   * Force using single line styling.
   */
  forceSingleLine: PropTypes.bool
}
