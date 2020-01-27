import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Radio as AntRadio } from 'antd'

import 'antd/lib/radio/style/index.less'
import './Radio.less'
import { InferPropTypes } from 'utils/types'

/**
 * Radio component overriding Ant input style.
 * See https://ant.design/components/radio/#API for proper usage.
 */
export default function Radio(props: InferPropTypes<typeof Radio.propTypes>) {
  const { className, value, title, ...rest } = props

  return (
    <AntRadio
      className={classnames('rtc rtc-radio', className)}
      value={value}
      {...rest}
    >
      {title}
    </AntRadio>
  )
}

Radio.propTypes = {
  /**
   * to disable radio button
   */
  disabled: PropTypes.bool,
  /**
   * Title is the label that displays next to the radio option
   */
  title: PropTypes.string,
  /**
   * value is used as the value for the radio button
   */
  value: PropTypes.string,
  /**
   * class to be radio group to tabs
   */
  className: PropTypes.string
}
