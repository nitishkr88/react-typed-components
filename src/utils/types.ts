import PropTypes from 'prop-types'

export type NotNull<T> = T extends null ? never : T

export type InferPropTypes<
  PropTypes,
  DefaultProps = {},
  Props = PropTypes.InferProps<PropTypes>
> = {
  [Key in keyof Props]: NotNull<
    Key extends keyof DefaultProps ? Props[Key] | DefaultProps[Key] : Props[Key]
  >
}
