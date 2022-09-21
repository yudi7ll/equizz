import clsx from 'clsx'
import { InputHTMLAttributes, useRef } from 'react'
import { IconType } from 'react-icons'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  Icon: IconType
  Label: string
}

const generateId = () => Math.random().toString(16).slice(-4)

const Input = (props: InputProps) => {
  const id = generateId()
  const inputRef = useRef<HTMLInputElement>(null)
  const { Icon, Label } = props

  return (
    <label htmlFor={id} className="relative">
      <input
        {...props}
        id={id}
        className={clsx(
          'w-full py-2 px-4 bg-gray-200 text-gray-800 rounded-sm outline-none hover:bg-gray-300 focus:bg-gray-300 focus:ring focus:ring-indigo-300 transition-all',
          props.className
        )}
        ref={inputRef}
      />
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <div
          className={clsx(
            'ml-4 flex items-center text-gray-500',
            inputRef?.current?.value ? 'hidden' : ''
          )}
        >
          <Icon size={14} />
          <span className="ml-2 text-sm">{Label}</span>
        </div>
      </div>
    </label>
  )
}

export default Input
