import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { getElementHeight } from '../../utils/ReactElementUtils'
import './Paragraph.less'
import { InferPropTypes } from 'utils/types'

const DEFAULT_SINGLE_LINE_HEIGHT = 10
const DEFAULT_MULTI_LINE_HEIGHT = 22
const type: ReadonlyArray<'primary' | 'secondary'> = ['primary', 'secondary']

/**
 * Paragraph component is a wrapper component around the `<p>` html
 * tags with special handling around multiple lines styling.
 */
export default function Paragraph(
  props: InferPropTypes<typeof Paragraph.propTypes>
) {
  const paragraphNode = useRef<HTMLParagraphElement>(null)
  const [singleLine, setSingleLine] = useState(true)

  useEffect(() => {
    checkForMultiLine()
  })

  useEffect(() => {
    checkForMultiLine()
    window.addEventListener('resize', checkForMultiLine)
    return () => window.removeEventListener('resize', checkForMultiLine)
  }, [])

  function checkForMultiLine() {
    if (props.forceMultiLineHeight) {
      setSingleLine(false)
      return
    }
    const lineHeight = getElementHeight(paragraphNode.current)
    if (singleLine) {
      if (lineHeight > DEFAULT_SINGLE_LINE_HEIGHT) setSingleLine(false)
    } else {
      if (lineHeight === DEFAULT_MULTI_LINE_HEIGHT) setSingleLine(true)
    }
  }

  const { className, type, forceMultiLineHeight, ...rest } = props
  const multiLineClass = singleLine ? 'single-line' : 'multi-line'
  const newProps = {
    className: classnames(className, 'rtc rtc-paragraph', multiLineClass),
    ref: paragraphNode,
    'data-type': type,
    ...rest
  }

  return <p {...newProps} />
}

Paragraph.defaultProps = {
  type: 'primary',
  forceMultiLineHeight: false
}

Paragraph.propTypes = {
  /**
   * Additional classname
   *
   * dark-bg : to style font color for use in dark background.
   * no-wrap : Forces text to stay in one line.
   */
  className: PropTypes.string,
  /**
   * Force paragraph text styling
   */
  type: PropTypes.oneOf(type),
  /**
   * Force paragraph to always use multi line height styling
   */
  forceMultiLineHeight: PropTypes.bool,
  /**
   * Content
   */
  children: PropTypes.node
}
