import clsx from 'clsx'
import { HTMLProps } from 'react'

const Logo = (props: HTMLProps<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={clsx(
        'font-logo text-xl font-bold uppercase text-indigo-600',
        props.className
      )}
    >
      E-Quizz
    </div>
  )
}

export default Logo
