import React, { useCallback, useState } from 'react'
import { FormikProvider, useFormik } from 'formik'
import { Link } from 'react-router-dom'
//import LoginInput from '../../Components/LoginInput/LoginInput'
import LadingLayout from 'ui/Layouts/LadingLayout'
import { LoginButtonGoogleStyled, LoginContainerStyled, FormStyled } from './Login.style'
import { initialValues, LoginMessage, LoginErrorMessages } from './Login.utils'
import { signInUser } from 'services/Firebase/firebase-utils'
import TextField from 'ui/components/Inputs/TextField'
import PasswordInput from 'ui/components/Inputs/PasswordInput'
import Button from 'ui/components/Button'
import { Typography } from '@mui/material'
import ErrorMessage from 'ui/components/ErrorMessage'
import { useAuth } from 'utils/hooks/useAuth'

const Login = () => {
  const [_, { login }] = useAuth()
  const [errorMessage, setErrorMessage] = useState('')
  const handleSubmit = useCallback(async (values) => {
    try {
      const response = await signInUser(values.email, values.password)
      // console.log({ response })
      login('1234')
    } catch (error) {
      if ('auth/wrong-password' in error.code) {
        return setErrorMessage(LoginErrorMessages.WrongPassword)
      }
      if ('auth/user-not-found' in error.code) {
        return setErrorMessage(LoginErrorMessages.NotFoundUser)
      }
    }
  }, [])

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnMount: true,
  })

  return (
    <LadingLayout>
      <LoginContainerStyled>
        <FormikProvider value={formik}>
          <FormStyled>
            <Typography>{LoginMessage.FormTitle}</Typography>
            <Typography>{LoginMessage.FormSubTitle}</Typography>
            <TextField
              label={LoginMessage.LabelEmail}
              name={LoginMessage.FieldEmailName}
              type="text"
              placeholder="Email"
            />
            <PasswordInput
              label={LoginMessage.LabelPassword}
              name={LoginMessage.FieldPasswordName}
            />
            <ErrorMessage show={errorMessage.toString()} message={errorMessage} />
            <Link to="/forgot-password">
              <Typography>{LoginMessage.ForgotPasswordText}</Typography>
            </Link>
            <Button type="submit" variant="contained">
              {LoginMessage.SubmitText}
            </Button>
            <Typography variant="link">{LoginMessage.SubmitText}</Typography>
            <LoginButtonGoogleStyled type="button">
              <img
                src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648432/coding/NucbaZappi/Assets/google-icon_jgdcr1.png"
                alt="Google logo"
              />
              {LoginMessage.SubmitText}
            </LoginButtonGoogleStyled>
            <Link to="/register">
              <Typography>{LoginMessage.NewAccountLabelText}</Typography>
            </Link>
          </FormStyled>
        </FormikProvider>
      </LoginContainerStyled>
    </LadingLayout>
  )
}

export default Login
