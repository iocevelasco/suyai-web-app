import { Button, css, styled, buttonClasses, ButtonProps as MUIButtonProps } from '@mui/material'
import { appColors } from 'utils/colors'

type OmittedButtonProps = Omit<MUIButtonProps, 'variant'>

export type StyledButtonProps = OmittedButtonProps & {
  variant?: MUIButtonProps['variant']
}

const buttonVariantMap: Record<
  NonNullable<StyledButtonProps['variant']>,
  MUIButtonProps['variant']
> = {
  contained: 'contained',
  outlined: 'outlined',
  text: 'text',
}

export const StyledButton = styled(({ variant, ...props }: StyledButtonProps) => {
  const buttonVariant = variant ? buttonVariantMap[variant] : undefined
  return <Button {...props} variant={buttonVariant} />
})(
  ({ theme, size }) => css`
    padding: ${theme.spacing(2, 7)};
    text-transform: uppercase;
    color: ${appColors.white};
    font-weight: 600;
    box-shadow: none;
    border-radius: ${theme.shape.borderRadius * 2}px;

    &.${buttonClasses.outlinedSecondary} {
      border: 1px solid ${appColors.primary};
    }

    ${size === 'small' &&
    css`
      padding: ${theme.spacing(1, 5)};
    `}
  `
)
