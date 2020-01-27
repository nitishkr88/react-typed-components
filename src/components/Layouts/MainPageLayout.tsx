import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import classnames from 'classnames'

import FlexLayout from './FlexLayout'
import FlexItem from './FlexItem'
import { getStyleProps } from 'utils/ReactElementUtils'
import './MainPageLayout.less'

const styleKeys = ['fullPage', 'showLeftPanel']

export default function MainPageLayout(
  props: InferProps<typeof MainPageLayout.propTypes>
) {
  const {
    className,
    fullPage,
    header,
    leftPanel,
    showLeftPanel,
    body,
    ...rest
  } = props
  const styleProps = getStyleProps(styleKeys, props)

  return (
    <FlexLayout
      className={classnames(className, 'rtc rtc-main-page-layout')}
      flexDirection="column"
      itemSpacing="0px"
      {...styleProps}
      {...rest}
    >
      <FlexItem className="header">{header}</FlexItem>
      <FlexLayout className="body-wrapper" itemSpacing="0px" flexGrow="1">
        {leftPanel && <FlexItem className="left-panel">{leftPanel}</FlexItem>}
        <FlexItem className="body" flexGrow="1">
          {body}
        </FlexItem>
      </FlexLayout>
    </FlexLayout>
  )
}

MainPageLayout.defaultProps = {
  showLeftPanel: true
}

MainPageLayout.propTypes = {
  /**
   * Additional custom class name.
   */
  className: PropTypes.string,
  /**
   * Makes layout absolute position and encompasses all available space
   * allowed for layout.
   */
  fullPage: PropTypes.bool,
  /**
   * The content for the header.
   */
  header: PropTypes.node, // TODO: Mark isRequired after migration
  /**
   * The content for the left panel.
   */
  leftPanel: PropTypes.node,
  /**
   * Visibility of left panel.
   */
  showLeftPanel: PropTypes.bool,
  /**
   * The content for the body.
   */
  body: PropTypes.node
}
