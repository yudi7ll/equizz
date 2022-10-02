import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { HTMLProps, memo, MouseEvent } from 'react'
import { FaHome, FaSignOutAlt, FaUser } from 'react-icons/fa'
import Logo from '../Logo'

const MenuLink = ({
  children,
  className,
  href,
  isActive,
  onClick,
}: HTMLProps<HTMLAnchorElement> & { isActive?: boolean }) => (
  <Link href={href!}>
    <a
      onClick={onClick}
      className={clsx(
        'relative flex items-center rounded px-4 py-2 text-sm font-medium transition-colors hover:bg-indigo-500 hover:text-white',
        isActive ? 'bg-indigo-50' : '',
        className
      )}
    >
      {isActive ? (
        <div className="absolute left-0 flex h-full w-1 rounded-lg bg-indigo-500"></div>
      ) : null}
      {children}
    </a>
  </Link>
)

const onSignOut = (e: MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault()
  console.log('anjay logout')
  // TODO: sign out logic
}

const Links = [
  {
    Icon: FaHome,
    label: 'Dashboard',
    url: '/dashboard',
  },
  {
    Icon: FaUser,
    label: 'Profile',
    url: '/profile',
  },
  {
    className: 'text-red-500',
    Icon: FaSignOutAlt,
    label: 'Logout',
    url: '#logout',
    onClick: onSignOut,
  },
]

const Sidebar = () => {
  const { pathname } = useRouter()

  return (
    <div className="fixed h-full w-[300px] bg-white py-4 px-6 shadow-lg">
      <Link href="/">
        <a className="block">
          <Logo className="text-3xl font-medium" />
        </a>
      </Link>
      <div className="mt-12">
        {Links.map((props) => {
          const { url, label, Icon } = props

          return (
            <MenuLink
              {...props}
              key={url}
              href={url}
              isActive={pathname.includes(url)}
              className={clsx('mt-3 first:mt-0', props?.className)}
            >
              <Icon className="mr-4" /> {label}
            </MenuLink>
          )
        })}
      </div>
    </div>
  )
}

export default memo(Sidebar)
