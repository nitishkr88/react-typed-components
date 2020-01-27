import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Dropdown as AntDropdown } from 'antd'

import 'antd/lib/dropdown/style/index.less'
import './Dropdown.less'

import ChevronDownIcon from '../Icons/ChevronDownIcon'
import { InferPropTypes } from 'utils/types'

const trigger: ReadonlyArray<'hover' | 'click' | 'contextMenu'> = [
  'hover',
  'click',
  'contextMenu'
]

/**
 * DropDown with Customize menu.
 */
export default function Dropdown(
  props: InferPropTypes<typeof Dropdown.propTypes>
) {
  const { className, title, trigger, ...rest } = props

  let downIcon
  const showDownIcon = typeof title === 'string'
  if (showDownIcon) {
    downIcon = <ChevronDownIcon size="small" />
  }
  return (
    <AntDropdown
      className="rtc rtc-dropdown-menu"
      // @ts-ignore
      trigger={[trigger]}
      {...rest}
    >
      <div className={classnames('rtc rtc-dropdown', className)}>
        <div
          className={classnames(
            'rtc-dropdown-title',
            showDownIcon ? '' : 'hide-down-icon'
          )}
        >
          <span className="title">{title}</span>
          {downIcon}
        </div>
      </div>
    </AntDropdown>
  )
}

Dropdown.defaultProps = {
  title: '',
  trigger: 'click'
}

Dropdown.propTypes = {
  /**
   * Customize additional class name.
   */
  className: PropTypes.string,
  /**
   * The title label of the dropdown where user can hover or click on.
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * Typically this can be `<Menu>` but it can be a customized component.
   */
  overlay: PropTypes.element.isRequired,
  /**
   * Trigger used to show the overlay items.
   */
  trigger: PropTypes.oneOf(trigger),
  /**
   * Function to return a DOM element to use as container for the Overlay
   * Otherwise `<body>` is used
   * https://2x.ant.design/components/dropdown/#API
   * Mandatory if the DropDown is in a scrollable container other than body
   * otherwise the Overlay won't scroll with the DropDown
   */
  getPopupContainer: PropTypes.func
}
