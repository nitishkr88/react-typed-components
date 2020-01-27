import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Input from './Input'
import SearchIcon from '../Icons/SearchIcon'
import Loader from '../Loader/Loader'
import { InferPropTypes } from 'utils/types'

/**
 * Input component specifically for using as a search input.
 * This utilized the Input component by providing search icon.
 * See https://ant.design/components/input/#API for other supported
 * properties.
 */
export default function InputSearch(
  props: InferPropTypes<typeof InputSearch.propTypes>
) {
  const [stateValue, setStateValue] = useState(props.value)

  function handleOnClick(event) {
    props.onSearch && props.onSearch(stateValue, event)
  }

  function handleOnChange(event) {
    props.onChange && props.onChange(event)
    setStateValue(event.currentTarget.value)
  }

  function handleOnPressEnter(event) {
    props.onPressEnter && props.onPressEnter(event)
    props.onSearch && props.onSearch(stateValue, event)
  }

  const {
    className,
    onChange,
    onPressEnter,
    onSearch,
    value,
    loading,
    ...rest
  } = props

  const prefix = loading ? (
    <Loader />
  ) : (
    // @ts-ignore
    <SearchIcon size="small" onClick={handleOnClick} />
  )

  return (
    <Input
      className={classnames('rtc rtc-input-search', className)}
      prefix={prefix}
      value={stateValue}
      onChange={handleOnChange}
      onPressEnter={handleOnPressEnter}
      {...rest}
    />
  )
}

InputSearch.propTypes = {
  /**
   * Customize additional class name.
   */
  className: PropTypes.string,
  /**
   * Show loading indicator
   */
  loading: PropTypes.bool,
  /**
   * Callback function for when user clicked on the search icon
   * or hit enter on the input.
   * onSearch(value: contain the string of the input value, SyntheticEvent)
   */
  onSearch: PropTypes.func,
  /**
   * Callback function for when value is changed on the input element.
   * onChange(event)
   */
  onChange: PropTypes.func,
  /**
   * Callback function for when user hit enter on the input element.
   */
  onPressEnter: PropTypes.func,
  /**
   * Set an initial value on the input.
   */
  value: PropTypes.string
}
