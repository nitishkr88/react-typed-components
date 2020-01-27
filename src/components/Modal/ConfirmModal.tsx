import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Button from '../Button/Button'
import Modal from './Modal'
import Paragraph from '../Typography/Paragraph'

import './ConfirmModal.less'
import { InferPropTypes } from 'utils/types'

const alignContent: ReadonlyArray<'left' | 'center' | 'right'> = [
  'left',
  'center',
  'right'
]

/**
 * This is ConfirmModal which is built on top of Modal
 * component for ease of use.
 * @keywords ConfirmPopup, ConfirmDialog
 */
export default function ConfirmModal(
  props: InferPropTypes<typeof ConfirmModal.propTypes>
) {
  // const [visible, setVisible] = useState(!!props.visible)

  // useEffect(() => {
  //   // @ts-ignore
  //   setVisible(props.visible)
  // }, [props.visible])

  // function handleOnCancel() {
  //   props.onCancel && props.onCancel()
  //   setVisible(false)
  // }

  const {
    className,
    confirmTitle,
    confirmText,
    confirmButtonLabel,
    confirmButtonType,
    onConfirm,
    // onCancel,
    alignContent,
    multiline,
    ...rest
  } = props

  const footer = (
    <div>
      <Button type="secondary" onClick={props.onCancel}>
        Cancel
      </Button>
      <Button type={confirmButtonType || 'primary'} onClick={onConfirm}>
        {/*
        // @ts-ignore */}
        {confirmButtonLabel}
      </Button>
    </div>
  )

  const header = <h3 className="confirm-modal-title">{confirmTitle}</h3>

  let content
  if (_.isString(confirmText)) {
    content = <Paragraph>{confirmText}</Paragraph>
  } else {
    content = confirmText
  }

  let alignContentCSS
  if (alignContent) {
    alignContentCSS = `align-${alignContent}`
  }

  return (
    <Modal
      className={classnames('rtc-confirm-modal', className, alignContentCSS)}
      customModalHeader={header}
      {...rest}
      // onCancel={handleOnCancel}
      footer={footer}
      // visible={visible}
    >
      <div
        className={`confirmbox-content ${multiline ? 'multi' : 'single'}-line`}
      >
        {content}
      </div>
    </Modal>
  )
}

ConfirmModal.defaultProps = {
  confirmButtonLabel: 'Confirm',
  width: 400
}

ConfirmModal.propTypes = {
  /**
   * Customize additional class name for the modal.
   */
  className: PropTypes.string,
  /**
   * confirmText is the content that goes on confirm modal.
   */
  confirmText: PropTypes.node,
  /**
   * Width of a modal dialog (in px)
   */
  width: PropTypes.number,
  /**
   * Align content inside the confirm modal.
   */
  alignContent: PropTypes.oneOf(alignContent),
  /**
   * Multiline is to determine whether the modal content is multi or single line
   */
  multiline: PropTypes.bool,
  /**
   * Determine the Title of the modal dialog
   */
  confirmTitle: PropTypes.string,
  /**
   * confirmButtonLabel is the label for the primary action button on the
   * modal footer.
   */
  confirmButtonLabel: PropTypes.string,
  /**
   * confirmButtonType is the type of the primary action button on the
   * modal footer.
   */
  confirmButtonType: Button.propTypes.type,
  /**
   * onConfirm is the action for the primary action button on the
   * modal footer.
   */
  onConfirm: PropTypes.func,
  /**
   * Visible is to determine whether a modal dialog is visible or not
   */
  visible: PropTypes.bool,
  /**
   * onCancel is used to handle when cancel button is clicked.
   */
  onCancel: PropTypes.func
}
