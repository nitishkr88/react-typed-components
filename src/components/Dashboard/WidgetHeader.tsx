import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import FlexLayout from '../Layouts/FlexLayout'
import Paragraph from '../Typography/Paragraph'
import Title from '../Typography/Title'
import Link from '../Link/Link'
import Select from '../Select/Select'
import Separator from '../Separator/Separator'
import VerticalSeparator from '../Separator/VerticalSeparator'
import Pagination from '../Navigation/Pagination'
import { InferPropTypes } from '../../utils/types'

import './WidgetHeader.less'

export default function WidgetHeader(
  props: InferPropTypes<typeof WidgetHeader.propTypes>
) {
  const {
    className,
    title,
    customInfo,
    secondaryInfo,
    defaultSelectProps,
    paginationProps,
    linkProps,
    ...rest
  } = props

  const rightContent: any[] = []
  let closeIcon = null

  if (customInfo) {
    // If customInfo is a component without a key, React will throw a warning
    // because its a part of an array.
    if (React.isValidElement(customInfo)) {
      const cloneCustomInfo = React.cloneElement(
        customInfo,
        // If customInfo component has no key, we'll add one
        { key: customInfo.key || 'customInfo' }
      )
      rightContent.push(cloneCustomInfo)
    } else {
      rightContent.push(customInfo)
    }
  }

  if (secondaryInfo) {
    rightContent.push(
      <Paragraph key="secondaryInfo" type="secondary">
        {secondaryInfo}
      </Paragraph>
    )
  }

  if (defaultSelectProps) {
    rightContent.push(<Select key="defaultSelect" {...defaultSelectProps} />)
  }

  if (paginationProps) {
    // @ts-ignore
    rightContent.push(<Pagination key="pagination" {...paginationProps} />)
  }

  if (linkProps) {
    rightContent.push(<Link key="link" {...linkProps} />)
  }

  const rightContentNode = rightContent.length ? (
    <Separator
      className="header-separator"
      separator={<VerticalSeparator />}
      itemSpacing="20px"
    >
      {rightContent}
    </Separator>
  ) : null

  let titleNode = title
  if (typeof title === 'string') {
    titleNode = (
      <Title size="h3" forceSingleLine={true}>
        {title}
      </Title>
    )
  }

  return (
    <FlexLayout
      justifyContent="space-between"
      alignItems="center"
      className={classnames(className, 'rtc rtc-dashboard-widget-header')}
      {...rest}
    >
      {titleNode}
      {rightContentNode}
      {closeIcon}
    </FlexLayout>
  )
}

WidgetHeader.propTypes = {
  /**
   * Additional custom class name.
   */
  className: PropTypes.string,
  /**
   * The title used for the header.  Normally is a string but can React node.
   */
  title: PropTypes.node,
  /**
   * Props for SystemSelect component
   */
  defaultSelectProps: PropTypes.object,
  /**
   * Props for pagination component
   */
  paginationProps: PropTypes.shape({ ...Pagination.propTypes }),
  /**
   * Props for link component
   */
  linkProps: PropTypes.object,
  /**
   * Custom header info
   */
  customInfo: PropTypes.node,
  /**
   * Secondary header info
   */
  secondaryInfo: PropTypes.string
}
