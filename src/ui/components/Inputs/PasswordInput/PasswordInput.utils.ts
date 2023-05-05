import { fieldNotIncluded } from 'utils/functions/fieldNotIncluded'
import { string } from 'yup'

export enum PasswordInputMessages {
  AriaLabel = 'Toggle visibility',
  PasswordMinMaxLengthError = 'Must be between 8 and 25 characters',
  PasswordMinLengthError = 'Must have at least 8 characters',
  LowercaseRequiredError = 'Password must have at least 1 lowercase letter',
  UppercaseRequiredError = 'Password must have at least 1 uppercase letter',
  NumberRequiredError = 'Password must have at least 1 number',
  LettersRequiredError = 'Password must have at least 2 letters',
  SpecialCharRequiredError = 'Password must have at least 1 special character',
  PasswordRequiredError = 'Password is a required field',
  WhiteSpaceError = 'Must not contain any spaces',
  MatchConfirmPassword = 'Must match the confirm password',
  MemberNotAllowed = 'Must not contain member number',
  UsernameNotAllowed = 'Must not contain username',
}

export const passwordSchema = string()
  .test(...fieldNotIncluded('memberNumber', PasswordInputMessages.MemberNotAllowed))
  .test(...fieldNotIncluded('username', PasswordInputMessages.UsernameNotAllowed))
  .min(8, PasswordInputMessages.PasswordMinMaxLengthError)
  .max(25, PasswordInputMessages.PasswordMinMaxLengthError)
  .matches(/^.*[0-9]+.*$/, PasswordInputMessages.NumberRequiredError)
  .matches(/(?=.*[a-zA-Z].*[a-zA-Z])/, PasswordInputMessages.LettersRequiredError)
  .matches(/^.*[a-z]+.*$/, PasswordInputMessages.LowercaseRequiredError)
  .matches(/^.*[A-Z]+.*$/, PasswordInputMessages.UppercaseRequiredError)
  .matches(/^\S*$/, PasswordInputMessages.WhiteSpaceError)
  .matches(/^.*(?=.*[!@#$%^&*.])+.*$/, PasswordInputMessages.SpecialCharRequiredError)
  .required(PasswordInputMessages.PasswordRequiredError)
