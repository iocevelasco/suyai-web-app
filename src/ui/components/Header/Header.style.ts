import { Box, Button, css, styled } from '@mui/material'
import { appColors } from 'utils/colors'

export const HeaderWrapper = styled(Box)(
  ({ theme }) => css`
    background-color: ${appColors.black};
    height: ${theme.spacing(9)};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row-reverse;
    position: fixed;
    top: 0rem;
    z-index: 25;
  `
)
