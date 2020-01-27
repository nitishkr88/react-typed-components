import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Button from '../Button/Button'
import FlexLayout from '../Layouts/FlexLayout'
import Text from '../Typography/Text'
import ChevronLeftIcon from '../Icons/ChevronLeftIcon'
import ChevronRightIcon from '../Icons/ChevronRightIcon'
import { InferPropTypes } from 'utils/types'

import './Pagination.less'

export default function Pagination(
  props: InferPropTypes<
    typeof Pagination.propTypes,
    typeof Pagination.defaultProps
  >
) {
  const [current, setCurrent] = useState(props.currentPage)

  useEffect(() => {
    setCurrent(props.currentPage)
  }, [props.currentPage])

  useEffect(checkCurrentPageIsValid)

  function checkCurrentPageIsValid() {
    const { total, currentPage, pageSize } = props

    if (
      !currentPage ||
      currentPage > totalPage(total, pageSize) ||
      currentPage < 1
    ) {
      throw new Error('Pagination: Invalid currentPage passed')
    }
  }

  function hasPrev() {
    return current && current > 1
  }

  function hasNext() {
    return current && current < totalPage(props.total, props.pageSize)
  }

  function totalPage(total, pageSize) {
    return Math.ceil(total / pageSize)
  }

  function next() {
    current && handleChange(current + 1)
  }

  function prev() {
    current && handleChange(current - 1)
  }

  function handleChange(page: number) {
    const pageHasChanged =
      page !== current &&
      page >= 1 &&
      page <= totalPage(props.total, props.pageSize)

    if (pageHasChanged) {
      if (props.onChange) {
        props.onChange(page, props.pageSize)
      } else {
        setCurrent(page)
      }
    }
  }

  const { className, showOnlyPage, total, disabled, pageSize } = props

  let paginators
  if (showOnlyPage) {
    const _totalPage = totalPage(total, pageSize)
    paginators = <Text type="secondary">{`${current} of ${_totalPage}`}</Text>
  } else {
    // @ts-ignore
    const offset = (current - 1) * pageSize + 1
    const endOffset =
      // @ts-ignore
      offset + pageSize - 1 < total ? offset + pageSize - 1 : total
    const text = `${offset} - ${endOffset} of ${total}`
    paginators = <Text type="secondary">{text}</Text>
  }

  const isPrevDisabled = disabled || !hasPrev()
  const isNextDisabled = disabled || !hasNext()

  const prevButtonType = isPrevDisabled ? 'secondary' : 'primary'
  const nextButtonType = isNextDisabled ? 'secondary' : 'primary'

  return (
    <FlexLayout
      className={classnames('rtc rtc-pagination', className)}
      alignItems="center"
      itemSpacing="10px"
    >
      <Button
        appearance="mini"
        disabled={isPrevDisabled}
        type={prevButtonType}
        onClick={prev}
      >
        <ChevronLeftIcon className="icon" size="small" />
      </Button>
      {paginators}
      <Button
        appearance="mini"
        onClick={next}
        disabled={isNextDisabled}
        type={nextButtonType}
      >
        <ChevronRightIcon className="icon" size="small" />
      </Button>
    </FlexLayout>
  )
}

Pagination.defaultProps = {
  showOnlyPage: false,
  currentPage: 1,
  pageSize: 10
}

Pagination.propTypes = {
  /**
   * Customize classname.
   */
  className: PropTypes.string,
  /**
   * Show only the page count.
   */
  showOnlyPage: PropTypes.bool,
  /**
   * Triggered when the page changes with the new page number.
   * currentPage and pageSize are passed as argument to the callback.
   * onChange(currentPage, pageSize)
   */
  onChange: PropTypes.func,
  /**
   * Total number of items.
   */
  total: PropTypes.number.isRequired,
  /**
   * Number of items per page.
   */
  pageSize: PropTypes.number,
  /**
   * Current page number.
   */
  currentPage: PropTypes.number,
  /**
   * Disable pagination
   */
  disabled: PropTypes.bool
}
