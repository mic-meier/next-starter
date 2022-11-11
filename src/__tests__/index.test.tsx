import Index from '@/pages/index'
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Index />)

    const heading = screen.getByRole('heading', {
      name: /homepage/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
