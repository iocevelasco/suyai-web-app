import { render, screen } from 'utils/testing-library'
import type { ErrorMessageProps } from './ErrorMessage'
import ErrorMessage from './ErrorMessage'

const defaultProps: ErrorMessageProps = {
  message: 'Test message',
  show: false,
}

describe('<ErrorMessage />', () => {
  it('should be on the screen but not visible', () => {
    render(<ErrorMessage {...defaultProps} />)

    expect(screen.getByText(/test message/i)).not.toBeVisible()
  })

  it('should be visible on the screen', () => {
    render(<ErrorMessage {...defaultProps} show />)

    expect(screen.getByText(/test message/i)).toBeVisible()
  })
})
