import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import FlexLayout from '../Layouts/FlexLayout'
import HeaderFooterLayout from '../Layouts/HeaderFooterLayout'
import Loader from '../Loader/Loader'

import './Widget.less'
import { InferPropTypes } from 'utils/types'

export default function Widget(
  props: InferPropTypes<typeof Widget.propTypes>
) {
  const {
    className,
    errorMsg,
    loading,
    loadingTip,
    bodyContent,
    ...rest
  } = props
  const mergedClassnames = classnames(className, 'rtc-dashboard-widget-layout')
  let bodyNode = bodyContent

  if (loading) {
    bodyNode = (
      <Loader loading={loading} tip={loadingTip} overlay={true}>
        {bodyNode}
      </Loader>
    )
  }

  if (errorMsg) {
    bodyNode = (
      <div className="error-overlay">
        {bodyNode}
        <FlexLayout
          className="error-message"
          justifyContent="center"
          alignItems="center"
        >
          {errorMsg}
        </FlexLayout>
      </div>
    )
  }

  return (
    <HeaderFooterLayout
      className={mergedClassnames}
      bodyContent={bodyNode}
      {...rest}
    />
  )
}

Widget.defaultProps = {
  loading: false,
  loadingTip: 'Loading...'
}

Widget.propTypes = {
  /**
   * Commonly used to indicate that the data in the body
   * content is loading.
   */
  loading: PropTypes.bool,
  /**
   * String to display after the loader.
   */
  loadingTip: PropTypes.string,
  /**
   * Error message to show the user.
   */
  errorMsg: PropTypes.node,
  ...HeaderFooterLayout.propTypes
}
