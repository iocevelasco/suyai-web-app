import { Box, styled, css } from '@mui/material'
import { transientProps } from 'utils/transientProps'

export const StyledBox = styled(
  Box,
  transientProps
)<{ show?: boolean; $noGutterTop?: boolean; $gutterBottom?: boolean }>(
  ({ theme, show, $noGutterTop, $gutterBottom }) => css`
    margin-top: ${$noGutterTop ? '0' : theme.spacing(2)};
    margin-bottom: ${$gutterBottom ? theme.spacing(2) : '0'};
    background-color: rgb(255, 240, 240);
    border-radius: ${theme.shape.borderRadius}px;
    max-height: ${show ? '200px' : '0px'};
    transition: margin 350ms ease, max-height 350ms ease, opacity 350ms ease ${show ? '0s' : '1s'};
    opacity: ${show ? '1' : '0'};
    overflow: hidden;
    width: 100%;
  `
)
