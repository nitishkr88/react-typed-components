import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Modal from './Modal'
import { InferPropTypes } from 'utils/types'

/**
 * Full-page modals are typically used for a flow with multiple steps. They can
 * also be used for single-step UI but with a large amount of components in the
 * page such as double sidebars.
 *
 * (!) Inherits all API traits from the Modal component.
 *
 * @keywords Modal, Popup, FullPageModal, FullPagePopup
 */
export function FullPageModal(
  props: InferPropTypes<typeof FullPageModal.propTypes>
) {
  const { className, ...rest } = props

  return <Modal className={classnames(className)} type="full-page" {...rest} />
}

FullPageModal.propTypes = {
  /**
   * Customize additional class name for the modal.
   */
  className: PropTypes.string
}
