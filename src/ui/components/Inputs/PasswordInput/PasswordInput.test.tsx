import { render, screen, waitFor } from 'utils/testing-library'
import userEvent from 'utils/user-event'
import { Form, Formik } from 'formik'
import { object, string } from 'yup'
import StepperButton from '../Stepper/StepperButton'
import PasswordInput, { PasswordInputProps } from './PasswordInput'
import { PasswordInputMessages, passwordSchema } from './PasswordInput.utils'

const defaultProps: PasswordInputProps = {
  name: 'passwordInput',
  label: 'label',
}

const defaultFormikProps = {
  initialValues: { passwordInput: '' },
  validationSchema: object({ passwordInput: string().required('error message') }),
  onSubmit: jest.fn(),
  validateOnChange: true,
}

describe('<PasswordInput />', () => {
  it('should type value correctly', async () => {
    render(
      <Formik {...defaultFormikProps}>
        <Form>
          <PasswordInput {...defaultProps} />
        </Form>
      </Formik>
    )

    const user = await userEvent.setup()
    const input = screen.getByLabelText(/label/i)

    await user.type(input, 'password')
    await waitFor(() => expect(input).toHaveValue('password'))
  })

  it('should toggle password visibility correctly', async () => {
    render(
      <Formik {...defaultFormikProps}>
        <Form>
          <PasswordInput {...defaultProps} />
        </Form>
      </Formik>
    )

    const user = await userEvent.setup()
    const input = screen.getByLabelText(/label/i)
    const button = screen.getByLabelText(PasswordInputMessages.AriaLabel)

    expect(input).toHaveAttribute('type', 'password')
    await user.click(button)
    await waitFor(() => expect(input).toHaveAttribute('type', 'text'))
  })

  describe('Internal validations', () => {
    beforeEach(() => {
      const validationSchema = object({ passwordInput: passwordSchema })
      render(
        <Formik {...defaultFormikProps} validationSchema={validationSchema}>
          {({ isValid, values }) => (
            <Form>
              <PasswordInput {...defaultProps} />
              <StepperButton disabled={!isValid}>Submit</StepperButton>
            </Form>
          )}
        </Formik>
      )
    })

    it('should display error if password is not filled', async () => {
      const user = await userEvent.setup()
      const input = screen.getByLabelText(/label/i)
      const button = screen.getByRole('button', { name: /submit/i })

      await user.type(input, '1{backspace}')
      expect(screen.getByText(PasswordInputMessages.PasswordRequiredError)).toBeInTheDocument()
      expect(button).toBeDisabled()
    })

    it('should display error if password has less than 8 letters', async () => {
      const user = await userEvent.setup()
      const input = screen.getByLabelText(/label/i)
      const button = screen.getByRole('button', { name: /submit/i })

      await user.type(input, '1234567')
      expect(screen.getByText(PasswordInputMessages.PasswordMinMaxLengthError)).toBeInTheDocument()
      expect(button).toBeDisabled()
    })

    it('should display error if password has more than 25 letters', async () => {
      const user = await userEvent.setup()
      const input = screen.getByLabelText(/label/i)
      const button = screen.getByRole('button', { name: /submit/i })

      await user.type(input, '12345678901234567890123456')
      expect(screen.getByText(PasswordInputMessages.PasswordMinMaxLengthError)).toBeInTheDocument()
      expect(button).toBeDisabled()
    })

    it('should display error if password has no numbers', async () => {
      const user = await userEvent.setup()
      const input = screen.getByLabelText(/label/i)
      const button = screen.getByRole('button', { name: /submit/i })

      await user.type(input, 'Password!@')
      expect(screen.getByText(PasswordInputMessages.NumberRequiredError)).toBeInTheDocument()
      expect(button).toBeDisabled()
    })

    it('should display error if password has no special chars', async () => {
      const user = await userEvent.setup()
      const input = screen.getByLabelText(/label/i)
      const button = screen.getByRole('button', { name: /submit/i })

      await user.type(input, 'Password12')
      expect(screen.getByText(PasswordInputMessages.SpecialCharRequiredError)).toBeInTheDocument()
      expect(button).toBeDisabled()
    })

    it('should display error if password has no uppercase letter', async () => {
      const user = await userEvent.setup()
      const input = screen.getByLabelText(/label/i)
      const button = screen.getByRole('button', { name: /submit/i })

      await user.type(input, 'password!2')
      expect(screen.getByText(PasswordInputMessages.UppercaseRequiredError)).toBeInTheDocument()
      expect(button).toBeDisabled()
    })

    it('should display error if password has no lowercase letter', async () => {
      const user = await userEvent.setup()
      const input = screen.getByLabelText(/label/i)
      const button = screen.getByRole('button', { name: /submit/i })

      await user.type(input, 'PASSWORD!2')
      expect(screen.getByText(PasswordInputMessages.LowercaseRequiredError)).toBeInTheDocument()
      expect(button).toBeDisabled()
    })

    it('should display error if password has space', async () => {
      const user = await userEvent.setup()
      const input = screen.getByLabelText(/label/i)
      const button = screen.getByRole('button', { name: /submit/i })

      await user.type(input, 'Password !2')
      expect(screen.getByText(PasswordInputMessages.WhiteSpaceError)).toBeInTheDocument()
      expect(button).toBeDisabled()
    })
  })

  describe('Validations against other fields', () => {
    it('should validate that the password does not contain the username', async () => {
      const validationSchema = object({ passwordInput: passwordSchema })
      const usernameAndMemberNumberInitialValues = {
        ...defaultFormikProps.initialValues,
        username: 'username',
      }
      render(
        <Formik
          {...defaultFormikProps}
          initialValues={usernameAndMemberNumberInitialValues}
          validationSchema={validationSchema}
        >
          {({ isValid }) => (
            <Form>
              <PasswordInput {...defaultProps} />
              <StepperButton disabled={!isValid}>Submit</StepperButton>
            </Form>
          )}
        </Formik>
      )

      const user = await userEvent.setup()
      const input = screen.getByLabelText(/label/i)
      const button = screen.getByRole('button', { name: /submit/i })

      await user.type(input, '1username2')
      expect(screen.getByText(PasswordInputMessages.UsernameNotAllowed)).toBeInTheDocument()
      expect(button).toBeDisabled()

      await user.clear(input)
      await user.type(input, 'USERNAME12')
      expect(screen.getByText(PasswordInputMessages.UsernameNotAllowed)).toBeInTheDocument()
      expect(button).toBeDisabled()

      await user.clear(input)
      await user.type(input, '12uSeRnAmE')
      expect(screen.getByText(PasswordInputMessages.UsernameNotAllowed)).toBeInTheDocument()
      expect(button).toBeDisabled()

      await user.clear(input)
      await user.type(input, 'Password1@')
      expect(button).toBeEnabled()
    })

    it('should validate that the password does not contain the memberNumber', async () => {
      const validationSchema = object({ passwordInput: passwordSchema })
      const usernameAndMemberNumberInitialValues = {
        ...defaultFormikProps.initialValues,
        memberNumber: 'memberNumber',
      }
      render(
        <Formik
          {...defaultFormikProps}
          initialValues={usernameAndMemberNumberInitialValues}
          validationSchema={validationSchema}
        >
          {({ isValid }) => (
            <Form>
              <PasswordInput {...defaultProps} />
              <StepperButton disabled={!isValid}>Submit</StepperButton>
            </Form>
          )}
        </Formik>
      )

      const user = await userEvent.setup()
      const input = screen.getByLabelText(/label/i)
      const button = screen.getByRole('button', { name: /submit/i })

      await user.type(input, '1memberNumber2')
      expect(screen.getByText(PasswordInputMessages.MemberNotAllowed)).toBeInTheDocument()
      expect(button).toBeDisabled()

      await user.clear(input)
      await user.type(input, 'MEMBERNUMBER12')
      expect(screen.getByText(PasswordInputMessages.MemberNotAllowed)).toBeInTheDocument()
      expect(button).toBeDisabled()

      await user.clear(input)
      await user.type(input, '12mEmBeRnUmBeR')
      expect(screen.getByText(PasswordInputMessages.MemberNotAllowed)).toBeInTheDocument()
      expect(button).toBeDisabled()

      await user.clear(input)
      await user.type(input, 'Password1@')
      expect(button).toBeEnabled()
    })
  })
})
