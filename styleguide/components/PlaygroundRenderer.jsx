import React from 'react'
import PropTypes from 'prop-types'

/**
 * Playground Renderer component
 */
const PlaygroundRenderer = props => {
  const { preview, previewProps, name, tabButtons, tabBody } = props
  const { className, ...rest } = previewProps

  return (
    <div>
      <div className={className} {...rest} data-preview={name}>
        {preview}
      </div>
      <div>
        <div>{tabButtons}</div>
      </div>
      <div>{tabBody}</div>
    </div>
  )
}

PlaygroundRenderer.propTypes = {
  /**
   * Component name
   */
  name: PropTypes.string.isRequired,
  /**
   * Preview component to be rendered
   */
  preview: PropTypes.node.isRequired,
  /**
   * Props to be passed when rendering preview component
   */
  previewProps: PropTypes.object.isRequired,
  /**
   * Slot component that renders the VIEW CODE button
   */
  tabButtons: PropTypes.node.isRequired,
  /**
   * Slot component that renders the body for editable code
   */
  tabBody: PropTypes.node.isRequired
}

export default PlaygroundRenderer
