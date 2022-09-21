import clsx from 'clsx'
import { IconBaseProps } from 'react-icons'
import { FaSpinner } from 'react-icons/fa'

const Spinner = (props: IconBaseProps) => (
  <FaSpinner
    {...props}
    className={clsx('inline-block animate-spin', props.className)}
  />
)

export default Spinner
