import { TextField } from '@mui/material'
import { css, styled } from '@mui/material/styles'
import { transientProps } from 'utils/transientProps'
import type { TextFieldProps } from './TextField'

export const StyledTextField = styled(
  (props: TextFieldProps) => (
    <TextField
      {...props}
      InputProps={{ ...props.InputProps, disableUnderline: true }}
      variant="filled"
    />
  ),
  transientProps
)(
  ({ theme }) => css`
    &&& input {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }

    &&&& label {
      color: ${theme.palette.text.secondary};
      font-weight: 600;

      &.Mui-focused {
        font-size: 0.875rem;
        font-weight: 500;
      }

      &.Mui-error {
        color: ${theme.palette.error.main};
      }
    }
  `
)
