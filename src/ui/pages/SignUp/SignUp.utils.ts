import { object, string } from 'yup'

export const initialValues = {
  email: '',
  password: '',
  name: '',
  surname: '',
}

export enum LoginErrorMessages {
  NotFoundUser = 'Usuario no encontrado',
  WrongPassword = 'Contraseña incorrecta',
}

export enum LoginMessage {
  Title = 'Create Account',
  FieldName = 'Nombre',
  FieldLastName = 'Apellido',
  LabelEmail = 'Email',
  LabelPassword = 'Password',
  PlaceholderEmailName = 'example@gmail.com',
  FormSubTitle = 'Usa tu cuenta de gmail para acceder a tu cuenta',
  ForgotPasswordText = '¿Olvidaste la contraseña? Reestablecela',
  AOText = '¿Olvidaste la contraseña? Reestablecela',
  NewAccountLabelText = '¿No tenes cuenta? Crea una',
  SubmitText = 'ingresar',
}

export type FormikTypeValues = typeof initialValues

export const signupSchema = (message: Record<string, string>) =>
  object({
    name: string()
      .min(3)
      .required(message.name)
      .trim()
      .matches(/^[^\d]+$/, 'Numbers are not allowed')
      .transform((_, originalValue) => originalValue.replace(/\s/g, '')),
    surname: string()
      .min(3)
      .trim()
      .required(message.surname)
      .matches(/^[^\d]+$/, 'Numbers are not allowed')
      .transform((_, originalValue) => originalValue.replace(/\s/g, '')),
  })
