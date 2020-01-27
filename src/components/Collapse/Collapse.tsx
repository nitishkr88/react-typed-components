import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { Collapse as AntCollapse, Col } from 'antd'

import ChevronDownIcon from '../Icons/ChevronDownIcon'
import ChevronRightIcon from '../Icons/ChevronRightIcon'

import 'antd/lib/collapse/style/index.less'
import './Collapse.less'
import { InferPropTypes } from 'utils/types'

export default function Collapse(
  props: InferPropTypes<typeof Collapse.propTypes, typeof Collapse.defaultProps>
) {
  const { className, children, ...rest } = props
  return (
    <AntCollapse
      className={classnames('rtc rtc-collapse', className)}
      expandIcon={({ isActive }) =>
        isActive ? <ChevronDownIcon /> : <ChevronRightIcon />
      }
      {...rest}
    >
      {children}
    </AntCollapse>
  )
}

Collapse.Panel = AntCollapse.Panel

Collapse.defaultProps = {
  bordered: false
}

Collapse.propTypes = {
  /**
   * This fixes a typescript error
   */
  style: PropTypes.object,
  /** */
  className: PropTypes.string,
  /** */
  children: PropTypes.node,
  /**
   *
   */
  defaultActiveKey: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    ),
    PropTypes.string,
    PropTypes.number
  ])
}
