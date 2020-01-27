import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Radio as AntRadio } from 'antd'

import './RadioGroup.less'
import { InferPropTypes } from 'utils/types'

const layout: ReadonlyArray<'horizontal' | 'vertical'> = [
  'horizontal',
  'vertical'
]
const type: ReadonlyArray<'outline' | 'solid'> = ['outline', 'solid']
const theme: ReadonlyArray<'dark' | 'light'> = ['dark', 'light']

/**
 * RadioGroup used to group radio buttons.
 * See https://ant.design/components/radio/#RadioGroup for proper usage.
 */
export default function RadioGroup(
  props: InferPropTypes<typeof RadioGroup.propTypes>
) {
  const AntRadioGroup = AntRadio.Group

  const {
    className,
    id,
    layout,
    defaultValue,
    children,
    type,
    theme,
    ...rest
  } = props

  return (
    <AntRadioGroup
      id={id}
      className={classnames(
        'rtc rtc-radio-group',
        className,
        layout,
        `rtc-radio-group-${type}`,
        theme
      )}
      defaultValue={defaultValue}
      buttonStyle={type}
      {...rest}
    >
      {children}
    </AntRadioGroup>
  )
}

RadioGroup.defaultProps = {
  layout: 'vertical',
  type: 'outline',
  theme: 'dark'
}

RadioGroup.propTypes = {
  /**
   * Each Radio must have unique id which is string type
   * either user has to pass it
   */
  id: PropTypes.string.isRequired,
  /**
   * Layout is used for position the radio buttons vertically or horizontally.
   */
  layout: PropTypes.oneOf(layout),
  /**
   * type is used for radio buttons type , Default radio button or radioSwitch button.
   */
  type: PropTypes.oneOf(type),
  /**
   * light or dark style Radio switch container.  default is dark.
   */
  theme: PropTypes.oneOf(theme),
  /**
   * class to be radio group to tabs
   */
  className: PropTypes.string,
  /**
   * defaultValue is the radio button which needs to be selected by default
   */
  defaultValue: PropTypes.string,
  /**
   * Radio buttons to be grouped inside Radio group.
   */
  children: PropTypes.node.isRequired
}
