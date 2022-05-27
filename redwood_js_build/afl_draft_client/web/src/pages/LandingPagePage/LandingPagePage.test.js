import { render } from '@redwoodjs/testing/web'

import LandingPagePage from './LandingPagePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LandingPagePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LandingPagePage />)
    }).not.toThrow()
  })
})
