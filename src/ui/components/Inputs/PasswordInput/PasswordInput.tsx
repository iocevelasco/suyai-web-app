import { IconButton, InputAdornment, SvgIcon } from '@mui/material'

import { useState } from 'react'
import TextField from '../TextField'
import type { TextFieldProps } from '../TextField/TextField'
import { PasswordInputMessages } from './PasswordInput.utils'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'
import LockOpenIcon from '@mui/icons-material/LockOpen'

export type PasswordInputProps = {
  name: string
  label: string
  hideStartIcon?: boolean
} & TextFieldProps

function PasswordInput({ name, label, hideStartIcon, ...props }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <TextField
      name={name}
      type={showPassword ? 'text' : 'password'}
      autoComplete="current-password"
      endIcon={
        <InputAdornment position="end">
          <IconButton
            onClick={() => setShowPassword(!showPassword)}
            aria-label={PasswordInputMessages.AriaLabel}
            edge="end"
          >
            {showPassword ? (
              <SvgIcon component={VisibilityIcon} />
            ) : (
              <SvgIcon component={VisibilityOffIcon} />
            )}
          </IconButton>
        </InputAdornment>
      }
      label={label}
      startIcon={!hideStartIcon ? <SvgIcon component={LockOpenIcon} /> : undefined}
      {...props}
    />
  )
}

export default PasswordInput
