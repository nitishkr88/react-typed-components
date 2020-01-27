import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import FlexLayout from './FlexLayout'

import './HeaderFooterLayout.less'
import { InferPropTypes } from 'utils/types'

export default function HeaderFooterLayout(
  props: InferPropTypes<typeof HeaderFooterLayout.propTypes>
) {
  const {
    className,
    header,
    bodyContent,
    footer,
    headerProps,
    footerProps,
    bodyContentProps,
    ...rest
  } = props

  const headerNode = header ? (
    <FlexLayout className="header" alignItems="center" {...headerProps}>
      {header}
    </FlexLayout>
  ) : null

  const footerNode = footer ? (
    <FlexLayout className="footer" alignItems="center" {...footerProps}>
      {footer}
    </FlexLayout>
  ) : null

  const mergedClassName = classnames(
    'rtc rtc-header-footer-layout',
    className
  )
  return (
    <FlexLayout
      className={mergedClassName}
      flexDirection="column"
      itemSpacing="0px"
      {...rest}
    >
      {headerNode}
      <FlexLayout className="body-content" {...bodyContentProps}>
        {bodyContent}
      </FlexLayout>
      {footerNode}
    </FlexLayout>
  )
}

HeaderFooterLayout.propTypes = {
  /**
   * Additional class name.
   */
  className: PropTypes.string,
  /**
   * Header element.  40px height
   */
  header: PropTypes.node,
  /**
   * Body element.  By default the body will display a scroll if overflow.
   */
  bodyContent: PropTypes.node.isRequired,
  /**
   * Footer element. 40px height
   */
  footer: PropTypes.node,
  /**
   * Customised Header Properties.
   * Refer FlexLayout Properties for options.
   */
  headerProps: PropTypes.object,
  /**
   * Customised Footer Properties.
   * Refer FlexLayout Properties for options.
   */
  footerProps: PropTypes.object,
  /**
   * Customised Body Content Properties.
   * Refer FlexLayout Properties for options.
   */
  bodyContentProps: PropTypes.object
}
