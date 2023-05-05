import { Box, css, styled, Typography } from '@mui/material'
import { appColors } from 'utils/colors'

export const HeroWrapper = styled(Box)(
  ({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    align-items: center;
    justify-content: space-around;
    background: url(https://res.cloudinary.com/dpxe6utid/image/upload/v1677773937/suyai%20assets/header_gpksh3.jpg)
      center center;
    background-size: cover;
    position: relative;
    top: -1rem;
  `
)

export const HeroInfo = styled(Box)(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  `
)

export const HeroTitle = styled(Typography)(
  ({ theme }) => css`
    font-size: 4rem;
    text-align: center;
    color: ${appColors.white};
    text-transform: uppercase;
  `
)
