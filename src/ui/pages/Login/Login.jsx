import React, { useCallback, useState } from 'react'
import { FormikProvider, useFormik } from 'formik'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import LadingLayout from 'ui/Layouts/LadingLayout'
import { auth } from 'utils/firebase'
import { LoginButtonGoogleStyled, LoginContainerStyled, FormStyled } from './Login.style'
import { initialValues, LoginMessage } from './Login.utils'
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
    console.log({ ...values })
    const { email, password } = values
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        login()
        console.log(userCredential)
      })
      .catch((error) => {
        console.log(error)
      })
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
            <Link to="/signup">
              <Typography>{LoginMessage.NewAccountLabelText}</Typography>
            </Link>
          </FormStyled>
        </FormikProvider>
      </LoginContainerStyled>
    </LadingLayout>
  )
}

export default Login
