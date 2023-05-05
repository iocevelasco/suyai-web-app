/**
 * This function is meant to be used with yup.
 *
 * It checks if the current field includes the field with name `fieldName`.
 *
 * @example
 * const schema = object({
 *  username: string().required(),
 *  // The test comes here
 *  password: string().test(...(fieldNotIncluded('username', "Password should not contain username")))
 * })
 *
 * @param fieldName Field that should be checked against
 * @param errorMessage Error message to be displayed in case `fieldName` is included in the current field
 * @returns Boolean indicating if field is valid or not. True -> Valid. False -> Invalid.
 */
export function fieldNotIncluded(
  fieldName: string,
  errorMessage: string
): [
  string,
  string,
  (value: string | null | undefined, ctx: { parent: Record<string, string> }) => boolean
] {
  return [
    `notInclude${fieldName}`,
    errorMessage,
    (value, ctx) => {
      if (!value) {
        return true
      }
      if (typeof ctx.parent[fieldName] !== 'string') {
        return true
      }
      const lowercaseValue = value.toLowerCase()
      const lowercaseField = (ctx.parent[fieldName] as string).toLowerCase()

      return !lowercaseValue.includes(lowercaseField)
    },
  ]
}
