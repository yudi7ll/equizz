import { PropsWithChildren } from 'react'

const BaseButton = (props: PropsWithChildren<any>) => (
  <button
    {...props}
    className={[
      props.className,
      'rounded-sm px-6 py-2 text-sm font-bold transition-all',
    ].join(' ')}
  >
    {props.children}
  </button>
)

export default BaseButton
