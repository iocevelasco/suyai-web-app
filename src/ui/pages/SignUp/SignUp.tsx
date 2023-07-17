import React, { useCallback, useState } from 'react'
import { FormikProvider, useFormik } from 'formik'
import { Link } from 'react-router-dom'
import LadingLayout from 'ui/Layouts/LadingLayout'
import { LoginButtonGoogleStyled, LoginContainerStyled, FormStyled } from './SignUp.style'
import { initialValues, LoginMessage } from './SignUp.utils'
import TextField from 'ui/components/Inputs/TextField'
import PasswordInput from 'ui/components/Inputs/PasswordInput'
import Button from 'ui/components/Button'
import { Typography } from '@mui/material'
import ErrorMessage from 'ui/components/ErrorMessage'
import { useAuth } from 'utils/hooks/useAuth'
import { createUser, type UserType } from 'services/api/Authentication'
import { signupSchema } from './SignUp.utils'

const SignUp = () => {
  const [_, { login }] = useAuth()
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = useCallback(async (values: UserType) => {
    await createUser(values)
      .then(() => {
        login()
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const formik = useFormik({
    initialValues,
    schema: signupSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnMount: true,
  })

  return (
    <LadingLayout>
      <LoginContainerStyled>
        <FormikProvider value={formik}>
          <FormStyled>
            <Typography>{LoginMessage.Title}</Typography>
            <Typography>{LoginMessage.FormSubTitle}</Typography>
            <TextField label={LoginMessage.FieldName} name="name" type="text" />
            <TextField label={LoginMessage.FieldLastName} name="lastName" type="text" />
            <TextField label={LoginMessage.LabelEmail} name="email" type="text" />
            <PasswordInput label={LoginMessage.LabelPassword} name="password" />
            <PasswordInput label={LoginMessage.LabelPassword} name="repedpassword" />
            <Button variant="contained">
              Upload File
              <input type="file" hidden />
            </Button>

            <Button type="submit" variant="contained">
              {LoginMessage.SubmitText}
            </Button>
          </FormStyled>
        </FormikProvider>
      </LoginContainerStyled>
    </LadingLayout>
  )
}

export default SignUp
