import { Box, css, styled } from '@mui/material'

export const LandingLayoutWrapper = styled(Box)(
  ({ theme }) => css`
    display: flex;
    min-height: 100vh;
    height: fit-content;
    flex-direction: column;
    width: 100%;
    padding-top: ${theme.spacing(4)};
  `
)
