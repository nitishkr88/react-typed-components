import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'

import Title from '../Typography/Title'
import FlexLayout from '../Layouts/FlexLayout'
import { InferPropTypes } from 'utils/types'

/**
 *
 * Generic label plus element container used with elements like
 * Input, Dropdown, Search, AutoComplete, etc
 */

export default function ElementWithLabel(
  props: InferPropTypes<typeof ElementWithLabel.propTypes>
) {
  function renderLabel(label, className?: string) {
    return shouldWrapLabelInTitle(label) ? (
      <Title size="h4" className={className}>
        {label}
      </Title>
    ) : (
      label
    )
  }

  function shouldWrapLabelInTitle(label: any) {
    return !_.isUndefined(label) && !React.isValidElement(label)
  }

  function renderHeader(label, subLabel) {
    let header
    if (label || subLabel) {
      header = (
        <FlexLayout justifyContent="space-between">
          {renderLabel(label)}
          {renderLabel(subLabel, 'sub-label')}
        </FlexLayout>
      )
    } else {
      header = null
    }

    return header
  }

  const { className, label, subLabel, element, helpText, ...rest } = props

  return (
    <FlexLayout
      flexDirection="column"
      className={classnames(className, 'rtc rtc-element-plus-label')}
      itemSpacing="10px"
      {...rest}
    >
      {renderHeader(label, subLabel)}
      {element}
      {renderLabel(helpText, 'help-text')}
    </FlexLayout>
  )
}

ElementWithLabel.propTypes = {
  /**
   * Label text.
   */
  label: PropTypes.node,
  /**
   * Element to which label is added.
   */
  element: PropTypes.node.isRequired,
  /**
   * Customize additional class name.
   */
  className: PropTypes.string,
  /**
   * Subordinate label for element.
   */
  subLabel: PropTypes.node,
  /**
   * Help or hint text that goes below the element.
   */
  helpText: PropTypes.node
}
