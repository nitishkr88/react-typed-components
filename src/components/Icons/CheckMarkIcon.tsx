import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import IconWrapper from './IconWrapper'
import { InferPropTypes } from 'utils/types'

import './CheckMarkIcon.less'

const size: ReadonlyArray<'small' | 'medium'> = ['small', 'medium']

export default function CheckMarkIcon(
  props: InferPropTypes<typeof CheckMarkIcon.propTypes>
) {
  const { size, color, className, ...rest } = props

  const svgs = {
    // specific case only meant for checkboxes
    small: {
      viewBox: '0 0 12 12',
      path: <polyline stroke={color} points="3.36,6.56 5.28,8.4 9.76,2.56" />
    },
    medium: {
      viewBox: '0 0 10 9',
      path: (
        <path
          fill={color}
          d="M3.56016323,6.43525386 L8.21064778,0.456059439 C8.54971782,0.020112247 9.17799342,-0.0584222031 9.61394061,0.280647835 C10.0498878,0.619717873 10.1284223,1.24799347 9.78935222,1.68394067 L4.45601888,8.54108352 C4.09120331,9.01013212 3.40027672,9.0594562 2.9725311,8.64698721 L0.305864429,6.07555863 C-0.0916945972,5.69219814 -0.103204785,5.05913779 0.280155705,4.66157877 C0.663516195,4.26401974 1.29657654,4.25250955 1.69413557,4.63587004 L3.56016323,6.43525386 Z"
        />
      )
    }
  }

  // @ts-ignore
  const svg = svgs[size]

  return (
    <IconWrapper
      className={classnames(className, 'rtc check-mark-icon')}
      viewBox={svg.viewBox}
      size={size}
      {...rest}
    >
      {svg.path}
    </IconWrapper>
  )
}

CheckMarkIcon.defaultProps = {
  size: 'medium',
  color: 'inherit'
}

CheckMarkIcon.propTypes = {
  /**
   * Customize additional class name.
   */
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(size)
}
