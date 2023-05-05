import { useMemo } from 'react'
import { TextFieldProps as MuiTextFieldProps, TextField as MuiTextField } from '@mui/material'
import { FastField, Field, FieldProps } from 'formik'
import { StyledTextField } from './TextField.style'

export type TextFieldProps = Omit<MuiTextFieldProps, 'type'> & {
  name: string
  placeholder?: string
  startIcon?: JSX.Element
  endIcon?: JSX.Element
  tooltipText?: string
  absoluteHelperText?: boolean
  fastField?: boolean
  type?: MuiTextFieldProps['type'] | 'currency' | 'cardNumber' | 'percentage' | 'phoneNum'
  hasMobileBigLabel?: boolean
}

export default function TextField({
  name,
  placeholder,
  startIcon,
  endIcon,
  tooltipText,
  absoluteHelperText,
  fastField,
  hasMobileBigLabel,
  ...props
}: TextFieldProps) {
  const FieldComponent = useMemo(() => (fastField ? FastField : Field), [fastField])

  return (
    <FieldComponent name={name}>
      {({ field, meta, form }: FieldProps) => (
        <StyledTextField
          placeholder={placeholder}
          fullWidth
          {...field}
          onChange={(e) => {
            field.onChange(e)
            form.setFieldTouched(name, true, false)
          }}
          error={!!(meta.touched && meta.error)}
          //helperText={meta.touched && meta.error}
          {...props}
          InputProps={{
            ...props.InputProps,
          }}
          // eslint-disable-next-line react/jsx-no-duplicate-props
          inputProps={{
            ...props.inputProps,
          }}
          InputLabelProps={{
            ...props.InputLabelProps,
          }}
        />
      )}
    </FieldComponent>
  )
}
