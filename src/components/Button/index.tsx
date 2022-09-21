import { ButtonHTMLAttributes } from 'react'
import BaseButton from './BaseButton'

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <BaseButton
    {...props}
    className={[
      props.className,
      'bg-indigo-500 text-white w-full hover:bg-indigo-600 focus:ring focus:ring-indigo-300',
    ].join(' ')}
  />
)

export default Button
