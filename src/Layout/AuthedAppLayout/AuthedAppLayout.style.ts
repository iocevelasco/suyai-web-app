import { Box, css, styled } from '@mui/material'
import { transientProps } from 'utils/transientProps'

export const maxContentWidth = 976
export const largeMaxContentWidth = 890
export const customLargeMaxContentWidth = 830
export const customExtraLargenMaxContentWidth = 990

export const AuthedAppLayoutContainer = styled(Box)(
  () => css`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  `
)

export const ContentWrapper = styled(
  Box,
  transientProps
)<{ $hasCustomSpacing?: boolean }>(
  ({ theme, $hasCustomSpacing }) => css`
    padding: ${theme.spacing(2, 2, 5.5)};
    flex-grow: 1;
    display: flex;
    width: 100%;
    overflow: auto;

    ${theme.breakpoints.up('md')} {
      padding: ${theme.spacing(3)} ${theme.spacing(5)} ${theme.spacing(5.5)};
    }

    ${theme.breakpoints.up('lg')} {
      padding: ${theme.spacing(4)}
        calc(
          (100% - ${$hasCustomSpacing ? customLargeMaxContentWidth : largeMaxContentWidth}px) / 2
        )
        ${theme.spacing(5.5)} calc((100% - ${largeMaxContentWidth}px) / 2);
    }

    ${theme.breakpoints.up('xl')} {
      padding: ${theme.spacing(3)}
        calc(
          (100% - ${$hasCustomSpacing ? customExtraLargenMaxContentWidth : maxContentWidth}px) / 2
        )
        ${theme.spacing(5.5)} calc((100% - ${maxContentWidth}px) / 2);
    }
  `
)

export const MenuMessageWrapper = styled(Box)(
  ({ theme }) => css`
    width: 100%;
    padding: ${theme.spacing(2)};

    ${theme.breakpoints.up('md')} {
      padding: ${theme.spacing(2, 5, 0)};
    }
  `
)

export const ContentContainer = styled(Box)(
  ({ theme }) => css`
    flex-grow: 1;
    display: flex;
    width: 100%;
    margin: 0 auto;

    ${theme.breakpoints.up('sm')} {
      max-width: 500px;
    }

    ${theme.breakpoints.up('md')} {
      max-width: 1000px;
    }
  `
)
