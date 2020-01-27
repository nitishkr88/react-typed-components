import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import classnames from 'classnames'

import FlexLayout from './FlexLayout'
import FlexItem from './FlexItem'
import './LeftNavLayout.less'

/**
 * LeftNavLayout is often used in situation where the left panel is the
 * navigation menu.
 */
export default function LeftNavLayout(
  props: InferProps<typeof LeftNavLayout.propTypes>
) {
  const { className, leftPanel, rightBodyContent } = props

  return (
    <FlexLayout
      className={classnames('rtc rtc-left-nav-layout', className)}
      alignItems="flex-start"
    >
      <FlexItem className="left-panel">{leftPanel}</FlexItem>
      <FlexItem className="right-panel flex-grow-1">
        {rightBodyContent}
      </FlexItem>
    </FlexLayout>
  )
}

LeftNavLayout.propTypes = {
  /**
   * Additional class name
   */
  className: PropTypes.string,
  /**
   * Element content for the left panel
   */
  leftPanel: PropTypes.node,
  /**
   * Element content for the right panel
   */
  rightBodyContent: PropTypes.node
}
