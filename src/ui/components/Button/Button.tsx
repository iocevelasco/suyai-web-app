import { CircularProgress } from '@mui/material'
import { StyledButton, StyledButtonProps } from './Button.style'

export type ButtonProps = StyledButtonProps & {
  isLoading?: boolean
  circularProgressSize?: string
}

function Button({ isLoading, circularProgressSize, size, ...props }: ButtonProps) {
  const defaultCircularProgressSize = size === 'small' ? '1rem' : '1.75rem'
  return (
    <StyledButton {...props} size={size}>
      {isLoading ? (
        <CircularProgress
          size={circularProgressSize ?? defaultCircularProgressSize}
          color="inherit"
        />
      ) : (
        props.children
      )}
    </StyledButton>
  )
}

export default Button
