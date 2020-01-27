import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'

import './Button.less'

// type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
//   infer ElementType
// >
//   ? ElementType
//   : never

// const ButtonTypes = ['primary', 'secondary', 'borderless'] as const
// const ButtonAppearances = ['default', 'square', 'mini'] as const
// const HtmlTypes = ['submit', 'button', 'reset'] as const

const ButtonTypes: ReadonlyArray<'primary' | 'secondary' | 'borderless'> = [
  'primary',
  'secondary',
  'borderless'
]
const ButtonAppearances: ReadonlyArray<'default' | 'square' | 'mini'> = [
  'default',
  'square',
  'mini'
]
const HtmlTypes: ReadonlyArray<'submit' | 'button' | 'reset'> = [
  'submit',
  'button',
  'reset'
]

/**
 * Button component.
 */

export default function Button(props: InferProps<typeof Button.propTypes>) {
  const {
    className,
    fullWidth,
    appearance,
    type,
    children,
    htmlType,
    onClick,
    ...rest
  } = props

  let aspect = appearance
  if (!_.isArray(children) && _.isObject(children) && aspect !== 'mini') {
    aspect = 'square'
  }

  const width = fullWidth ? 'full-width' : ''

  return (
    <button
      // @ts-ignore
      type={htmlType}
      className={classnames(className, 'rtc rtc-button')}
      data-type={type}
      data-appearance={aspect}
      data-width={width}
      // @ts-ignore
      onClick={onClick}
      // onClick={onClick as React.MouseEventHandler}
      {...rest}
    >
      {React.Children.map(children, child => {
        return typeof child === 'string' ? <span>{child}</span> : child
      })}
    </button>
  )
}

Button.defaultProps = {
  type: 'primary',
  appearance: 'default',
  fullWidth: false,
  htmlType: 'button'
}

Button.propTypes = {
  /**
   * Customize additional class name.
   */
  className: PropTypes.string,
  /**
   * Button text or an element such as an icon.
   */
  children: PropTypes.node.isRequired,
  /**
   * Type of button.
   */
  type: PropTypes.oneOf(ButtonTypes),
  /**
   * Appearance of button:
   *   'default' - Default appearance.
   *   'square' - Square shaped button (Default will transform to this for
   *.             single node elements).
   *   'mini' - Bite size button generally used for single icon use.
   */
  appearance: PropTypes.oneOf(ButtonAppearances),
  /**
   * Make button 100% width and behave like a block element.
   */
  fullWidth: PropTypes.bool,
  /**
   * Callback function to handle onClick of the button.
   */
  onClick: PropTypes.func,
  /**
   * HTML Type of button.
   */
  htmlType: PropTypes.oneOf(HtmlTypes),
  /**
   * Disable click and gray out
   */
  disabled: PropTypes.bool
}
