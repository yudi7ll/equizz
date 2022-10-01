import { ErrorMessage } from '@hookform/error-message'
import clsx from 'clsx'
import {
  ChangeEvent,
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  PropsWithRef,
  useState,
} from 'react'
import { FieldErrorsImpl } from 'react-hook-form'
import { IconType } from 'react-icons'

type InputProps = PropsWithRef<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    errors?: FieldErrorsImpl<{ [key: string]: string }>
    Icon: IconType
    Label: string
  }
>

const generateId = () => Math.random().toString(16).slice(-4)

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const id = generateId()
  const { Icon, Label } = props
  const [changed, setChanged] = useState(false)
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setChanged(e.target.value.length > 0)
  }

  return (
    <label htmlFor={`#${id}`} className="relative">
      <input
        {...props}
        ref={ref}
        onChange={changeHandler}
        id={id}
        className={clsx(
          'w-full py-2 px-4 bg-gray-200 text-gray-800 rounded-sm outline-none hover:bg-gray-300 focus:bg-gray-300 focus:ring focus:ring-indigo-300 transition-all',
          props.className
        )}
      />
      <ErrorMessage
        name={props.name!}
        render={({ message }) => (
          <small className="text-red-400">{message}</small>
        )}
        errors={props?.errors ?? {}}
      />
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <div
          className={clsx(
            'ml-4 flex items-center text-gray-500',
            changed ? 'hidden' : ''
          )}
        >
          <Icon size={14} />
          <span className="ml-2 text-sm">{Label}</span>
        </div>
      </div>
    </label>
  )
})

export default Input
