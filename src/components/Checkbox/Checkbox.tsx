import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Color from 'color'

import CheckMarkIcon from '../Icons/CheckMarkIcon'
import './Checkbox.less'

// eslint-disable-next-line import/no-webpack-loader-syntax
// @ts-ignore
import colors from '../../utils/less-variables'
import { InferPropTypes } from '../../utils/types'

const type: ReadonlyArray<'default' | 'toggle' | 'partial-check'> = [
  'default',
  'toggle',
  'partial-check'
]

/**
 * @keywords Checkbox, Toggle, Favorite, Star
 */
export default function Checkbox(
  props: InferPropTypes<typeof Checkbox.propTypes>
) {
  const {
    id,
    className,
    color,
    disabled,
    label,
    type,
    multiLine,
    children,
    ...rest
  } = props

  const CheckboxVariantName = `checkbox-variant-${type}`
  // TODO: Add pressed state color.
  const fadedColor = Color(color).alpha(0.3)
  const finalColor = disabled
    ? `rgba(${fadedColor
        .rgb()
        .array()
        .join(',')})`
    : color

  const multiLineClass = multiLine ? 'rtc-checkbox-label-multi-line' : ''

  let backgroundColor
  // Toggle variation does not support custom color
  if (type !== 'toggle') {
    backgroundColor = {
      backgroundColor: finalColor
    }
  }

  return (
    <div className={classnames('rtc rtc-checkbox', className, multiLineClass)}>
      <input
        id={id}
        type="checkbox"
        className="n-checkbox"
        disabled={disabled}
        {...rest}
      />
      <label htmlFor={id}>
        <span
          // @ts-ignore
          // htmlFor={id}
          className={classnames(
            'n-checkbox svg-rtc-checkbox',
            CheckboxVariantName
          )}
        >
          {type === 'toggle' ? null : (
            <CheckMarkIcon
              className="icon-checked"
              size="small"
              color={color}
            />
          )}
          <span className="svg-rtc-checkbox-bg" style={backgroundColor} />
        </span>
        <span>{label}</span>
      </label>
      {children && <div className="checkbox-nested-content">{children}</div>}
    </div>
  )
}

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  type: 'default',
  color: colors['@blue-1'],
  multiLine: false
}

Checkbox.propTypes = {
  /**
   * checkbox must have unique id which is string type
   * user has to pass it
   */
  id: PropTypes.string.isRequired,
  /**
   * className is used to add extra class for checkbox wrapper
   */
  className: PropTypes.string,
  /**
   * type is used to define the variant of the checkbox
   */
  type: PropTypes.oneOf(type),
  /**
   * label is the value or label that presents next to the checkbox
   */
  label: PropTypes.string,
  /**
   * Specifies whether the checkbox is selected.
   */
  checked: PropTypes.bool,
  /**
   * to disable the checkbox.
   */
  disabled: PropTypes.bool,
  /**
   * function passed by user to be executed when checkbox is clicked
   */
  onClick: PropTypes.func,
  /**
   * function passed by user to be executed
   * when checkbox is checked/unchecked
   */
  onChange: PropTypes.func,
  /**
   * color of the checkbox icon
   */
  color: PropTypes.string,
  /**
   * Specifies whether the checkbox lable is multiline.
   * This prop is to set proper line height to the label.
   */
  multiLine: PropTypes.bool,
  /**
   * children
   */
  children: PropTypes.node
}
