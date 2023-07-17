import { Box, styled, css } from '@mui/material'
import { Form } from 'formik'

export const LoginContainerStyled = styled(Box)(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 20px;
  `
)

export const FormStyled = styled(Form)(
  ({ theme }) => css`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  `
)

export const LoginButtonGoogleStyled = styled('button')`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 1rem 1.5rem;
  outline: none;
  border: none;
  border-radius: 1rem;
  background: var(--blancotransp);
  color: white;
  cursor: pointer;
`

// export const LoginEmailStyled = styled.p`
//   color: var(--orange);

//   :hover {
//     text-decoration: underline;
//     transition: all 0.25s ease-out;
//   }
// `
