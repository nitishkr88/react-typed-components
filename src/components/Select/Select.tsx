import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'
import { Select as AntSelect } from 'antd'

import 'antd/lib/select/style/index.less'
import './Select.less'

import FlexLayout from '../Layouts/FlexLayout'
import FlexItem from '../Layouts/FlexItem'

import { InferPropTypes } from 'utils/types'

export default function Select(
  props: InferPropTypes<typeof Select.propTypes, typeof Select.defaultProps>
) {
  function renderOption(item) {
    const { title, subTitle } = item
    let option
    if (subTitle) {
      option = (
        <AntSelect.Option {...item} className="multi-title">
          <FlexLayout justifyContent="space-between">
            <FlexItem className="primary-text">{title}</FlexItem>
            <FlexItem className="secondary-text">{subTitle}</FlexItem>
          </FlexLayout>
        </AntSelect.Option>
      )
    } else {
      option = <AntSelect.Option {...item}>{title}</AntSelect.Option>
    }

    return option
  }

  function filterByProps(
    filterPropKeys: any[] = [],
    inputVal: string,
    option: React.ReactElement
  ) {
    let matchFound = false
    if (
      option.props &&
      !option.props.disabled &&
      Array.isArray(filterPropKeys)
    ) {
      const lowerCaseInputVal = inputVal.toLowerCase()
      matchFound = filterPropKeys.some(key => {
        const value = _.castArray(option.props[key]).join('')
        return value.toLowerCase().indexOf(lowerCaseInputVal) > -1
      })
    }

    return matchFound
  }

  const {
    className,
    filterOption,
    multiple,
    showSearch,
    selectOptions,
    dropdownMatchSelectWidth,
    dropdownClassName,
    border,
    error,
    disabled,
    optionFilterProp,
    ...rest
  } = props

  let handleFilterOption = filterOption
  if (filterOption === true) {
    if (optionFilterProp) {
      let filterPropKeys = _.castArray(optionFilterProp)
      handleFilterOption = filterByProps.bind(null, filterPropKeys)
    }
  }

  let disabledWrapperClass
  if (disabled) disabledWrapperClass = 'rtc-select-disabled'

  let errorClass
  if (error) errorClass = 'error'

  let borderClass
  if (!border) borderClass = 'borderless'

  let dropdownDetachClass
  if (!dropdownMatchSelectWidth) dropdownDetachClass = 'detached'

  let selectMode
  if (multiple) selectMode = 'multiple'

  // @ts-ignore
  const optionList = selectOptions.map(renderOption)

  return (
    <div
      className={classnames(
        className,
        errorClass,
        disabledWrapperClass,
        borderClass,
        'rtc-select-wrapper rtc'
      )}
    >
      <AntSelect
        className={classnames('rtc-select')}
        disabled={disabled}
        filterOption={handleFilterOption}
        showSearch={showSearch}
        mode={selectMode}
        dropdownMatchSelectWidth={dropdownMatchSelectWidth}
        dropdownClassName={classnames(
          dropdownClassName,
          errorClass,
          dropdownDetachClass,
          'rtc-select-options rtc'
        )}
        {...rest}
      >
        {optionList}
      </AntSelect>
    </div>
  )
}

Select.defaultProps = {
  disabled: false,
  border: true,
  dropdownMatchSelectWidth: true,
  filterOption: true,
  multiple: false,
  notFoundContent: 'No options available',
  optionFilterProp: ['value'],
  selectOptions: [],
  showSearch: true
}

Select.propTypes = {
  /**
   * Class to be added to select.
   */
  className: PropTypes.string,
  /**
   * dropdownClassName is the className added to the dropdown menu.
   */
  dropdownClassName: PropTypes.string,
  /**
   * Filter options on search
   * Refer https://ant.design/components/select/#API
   * true - filter options by value
   * function - arguments: inputVal and option
   * returns true if the option wil be part of the filter set
   */
  filterOption: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  /**
   * Which prop value of option will be used for filter
   */
  optionFilterProp: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  /**
   * SelectOptions are the options to be displayed below the selectbox
   * Refer https://2x.ant.design/components/select/#Option-props
   * Each array item can have four options with it, in which
   * below two are mandatory
   * value & title
   * Whereas below two are optional
   * className & key
   */
  selectOptions: PropTypes.array,
  /**
   * showSearch prop is used to show the search box on the select box.
   */
  showSearch: PropTypes.bool,
  /**
   * Disabled prop is used to disable the select box.
   */
  disabled: PropTypes.bool,
  /**
   * Whether dropdown's width is same with select.
   */
  dropdownMatchSelectWidth: PropTypes.bool,
  /**
   * Show error for select.
   */
  error: PropTypes.bool,
  /**
   * Show border for select.
   */
  border: PropTypes.bool,
  /**
   * multiple prop is used to enable multiple select on the select box.
   */
  multiple: PropTypes.bool,
  /**
   * notFoundContent is a string that needs to be diplay when the options
   * are empty.
   */
  notFoundContent: PropTypes.string,
  /**
   * Function to return a DOM element to use as container for the Options
   * Otherwise `<body>` is used
   * https://2x.ant.design/components/select/#API
   * Mandatory if the Select is in a scrollable container other than body
   * otherwise the Options won't scroll with the Select
   */
  getPopupContainer: PropTypes.func
}
