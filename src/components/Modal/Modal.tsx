import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Modal as AntModal } from 'antd'

import 'antd/lib/modal/style/index.less'
import './Modal.less'

import Button from '../Button/Button'
import CloseIcon from '../Icons/CloseIcon'
import { InferPropTypes } from '../../utils/types'

const type: ReadonlyArray<'default' | 'full-page'> = ['default', 'full-page']

export default function Modal(props: InferPropTypes<typeof Modal.propTypes>) {
  const [visible, setVisible] = useState(!!props.visible)

  useEffect(() => {
    // @ts-ignore
    setVisible(props.visible)
  }, [props.visible])

  function hideModal() {
    if (props.onCancel) {
      props.onCancel()
    } else {
      setVisible(false)
    }
  }

  function renderFooter(customFooter) {
    let footerContent = (
      <Button key="submit" type="primary" onClick={props.primaryButtonClick}>
        {/*
        // @ts-ignore */}
        {props.primaryButtonLabel}
      </Button>
    )

    if (customFooter) {
      footerContent = customFooter
    }

    return footerContent
  }

  function renderBody(
    contentClassName: string,
    type: 'default' | 'full-page',
    footer
  ) {
    const { width, children } = props
    let body
    if (type === 'full-page') {
      body = children
    } else {
      body = (
        <div className={contentClassName} style={{ width }}>
          <div className="rtc-modal-body">{children}</div>
          <div className="rtc-modal-footer">{renderFooter(footer)}</div>
        </div>
      )
    }

    return body
  }

  const {
    className,
    type,
    title,
    footer,
    extraIcons,
    contentClassName,
    customModalHeader,
    closeIconProps,
    ...rest
  } = props

  const icons: any[] = []

  if (extraIcons) {
    icons.push(
      <div className="icon-holder" key="extraIcons">
        {extraIcons}
      </div>
    )
  }

  icons.push(
    <div
      className={classnames('icon-holder rtc-modal-close-icon')}
      key="closeIcon"
      onClick={hideModal}
      {...closeIconProps}
    >
      <CloseIcon className="modal-close-icon" />
    </div>
  )

  const modalHeader = (
    <div className="modal-title-container">
      <h3 title={title}>{title}</h3>
      <div className="icons-container">{icons}</div>
    </div>
  )

  return (
    <AntModal
      wrapClassName={classnames('rtc rtc-modal', className, type)}
      title={customModalHeader || modalHeader}
      {...rest}
      onCancel={hideModal}
      footer={null}
      visible={visible}
    >
      {/*
      // @ts-ignore */}
      {renderBody(contentClassName, type, footer)}
    </AntModal>
  )
}

Modal.defaultProps = {
  type: 'default',
  visible: false,
  width: 400,
  primaryButtonLabel: 'Done'
}

Modal.propTypes = {
  /**
   * Customize additional class name for the modal.
   */
  className: PropTypes.string,
  /**
   * Determine the size of the modal dialog - default or full-page
   */
  type: PropTypes.oneOf(type),
  /**
   * Determine the Title of the modal dialog
   */
  title: PropTypes.string,
  /**
   * Class name of the entire modal wrapper dialog
   */
  wrapClassName: PropTypes.string,
  /**
   * Props to be passed to the close icon on the modal header
   */
  closeIconProps: PropTypes.object,
  /**
   * Width of a modal dialog (in px)
   */
  width: PropTypes.number,
  /**
   * contentClassName is the class name added to the modal content
   */
  contentClassName: PropTypes.string,
  /**
   * Content to be dispalyed in modal container
   */
  children: PropTypes.node,
  /**
   * Visible is to determine whether a modal dialog is visible or not
   */
  visible: PropTypes.bool,
  /**
   * ExtraIcons is used to add some extra icons next to close icon on
   * top right of the modal
   */
  extraIcons: PropTypes.node,
  /**
   * Footer which contains the action buttons.
   * If footer attr is not passed then the modal wont have footer.
   */
  footer: PropTypes.node,
  /**
   * customModalHeader which contains the header.
   * If customModalHeader attr is not passed then
   * the modal have the default header with the title passed in.
   */
  customModalHeader: PropTypes.node,
  /**
   * onCancel callback will be called when the modal is closed using the close
   * button
   */
  onCancel: PropTypes.func,
  /**
   * primaryButtonLabel is the label for the primary action button on the
   * modal footer.
   */
  primaryButtonLabel: PropTypes.string,
  /**
   * primaryButtonClick is the action for the primary action button on the
   * modal footer.
   */
  primaryButtonClick: PropTypes.func
}
