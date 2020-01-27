import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Tooltip as AntTooltip } from 'antd'

import 'antd/lib/tooltip/style/index.less'
import './Tooltip.less'
import { InferPropTypes } from 'utils/types'

export default function Tooltip(
  props: InferPropTypes<typeof Tooltip.propTypes>
) {
  const { className, theme, overlayClassName, mini, ...rest } = props
  const miniClass = mini ? 'mini' : ''

  return (
    // @ts-ignore
    <AntTooltip
      className={classnames(className, theme, 'rtc rtc-tooltip')}
      overlayClassName={classnames(
        'rtc rtc-tooltip-popup',
        miniClass,
        theme,
        overlayClassName
      )}
      {...rest}
    />
  )
}

Tooltip.defaultProps = {
  mini: false,
  placement: 'top',
  theme: 'dark'
}

Tooltip.propTypes = {
  /**
   * This is the component/text to use to trigger the
   * tooltip pop over
   */
  children: PropTypes.node.isRequired,
  /**
   * This is the component/text to be placed inside the pop over
   */
  title: PropTypes.node.isRequired,
  /**
   * Customize classname.
   */
  className: PropTypes.string,
  /**
   * Customize classname for the pop over container.
   */
  overlayClassName: PropTypes.string,
  /**
   * light or dark style tooltip container.  default is dark.
   */
  theme: PropTypes.oneOf(['dark', 'light']),
  /**
   * Mini styling for small tooltip content(text).
   */
  mini: PropTypes.bool,
  /**
   * See
   * https://ant.design/components/tooltip/#Common-API
   */
  placement: PropTypes.string
}
