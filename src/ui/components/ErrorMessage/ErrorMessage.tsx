import { Typography } from '@mui/material'
import { StyledBox } from './ErrorMessage.style'

export interface ErrorMessageProps {
  message: string
  show?: boolean
  noGutterTop?: boolean
  gutterBottom?: boolean
}

function ErrorMessage({ show, message, noGutterTop, gutterBottom }: ErrorMessageProps) {
  return (
    <StyledBox
      show={show}
      aria-hidden={!show}
      $noGutterTop={show ? noGutterTop : true}
      $gutterBottom={show ? gutterBottom : false}
    >
      <Typography aria-hidden={!show} variant="body2" color="rgb(180, 40, 40)" m={2}>
        {message}
      </Typography>
    </StyledBox>
  )
}

export default ErrorMessage
