import { Box, styled, css } from '@mui/material'
import { appColors } from 'utils/colors'

export const AppContainer = styled(Box)(
  ({ theme }) => css`
    background-color: ${appColors.black};
    display: flex;
    height: fit-content;
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  `
)
