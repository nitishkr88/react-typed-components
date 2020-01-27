import React from 'react'
import { render } from '@testing-library/react'

import Button from '../components/Button/Button'

describe('<Button />', () => {
  test('should render', () => {
    const { debug } = render(<Button>Click Me</Button>)
    debug()
  })
})
