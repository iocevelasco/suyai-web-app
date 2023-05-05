import { Box, css, styled } from '@mui/material'

export const DashboardLayoutWrapper = styled(Box)(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
  `
)

export const DashboardBodyWrapper = styled(Box)(
  ({ theme }) => css`
    display: grid;
    flex-grow: 1;
    row-gap: ${theme.spacing(3)};
    column-gap: ${theme.spacing(2)};
    grid-template-columns: 1fr;
    grid-template-rows: 80px 1fr;
    height: 100vh;
    width: 100%;
  `
)
