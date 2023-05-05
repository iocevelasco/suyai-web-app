export const initialValues = {
  email: '',
  password: '',
}

export enum LoginErrorMessages {
  NotFoundUser = 'Usuario no encontrado',
  WrongPassword = 'Contraseña incorrecta',
}

export enum LoginMessage {
  FieldEmailName = 'email',
  FieldPasswordName = 'password',
  LabelEmail = 'Email',
  LabelPassword = 'Password',
  PlaceholderEmailName = 'example@gmail.com',
  FormTitle = 'Iniciar Sesión',
  FormSubTitle = 'Usa tu cuenta de gmail para acceder a tu cuenta',
  ForgotPasswordText = '¿Olvidaste la contraseña? Reestablecela',
  AOText = '¿Olvidaste la contraseña? Reestablecela',
  NewAccountLabelText = '¿No tenes cuenta? Crea una',
  SubmitText = 'ingresar',
}

export type FormikTypeValues = typeof initialValues
