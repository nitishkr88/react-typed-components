import ReactDOM from 'react-dom'
import _ from 'lodash'

export const getElementHeight = (element: HTMLElement | null): number => {
  return element ? element.getBoundingClientRect().height : 0
}

export const getStyleProps = (styleKeys: string[], props: any) => {
  const styleProps = {}
  styleKeys.forEach(key => {
    const value = props[key]
    if (value) {
      styleProps[`data-${_.kebabCase(key)}`] = value
    }
  })

  return styleProps
}

export const measureElement = (element: HTMLElement | null) => {
  const DOMNode = element && ReactDOM.findDOMNode(element)
  // @ts-ignore
  const width = DOMNode ? DOMNode.offsetWidth : 0
  // @ts-ignore
  const height = DOMNode ? DOMNode.offsetHeight : 0
  return {
    width,
    height
  }
}
