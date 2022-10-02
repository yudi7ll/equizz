import { memo, MouseEvent } from 'react'
import { FaSearch } from 'react-icons/fa'
import { RiMenu3Fill } from 'react-icons/ri'
import Input from '../Input'

const Header = () => {
  const toggleMenu = (e: MouseEvent<HTMLButtonElement>) => {
    // TODO:
  }

  return (
    <div className="block w-full bg-white p-4">
      <div className="flex items-center justify-between">
        <Input
          type="search"
          className="rounded-full bg-neutral-100 focus:bg-indigo-100"
          Icon={FaSearch}
          Label={'Search ...'}
        />
        <div className="flex items-center">
          <div>Avatar</div>
          <button
            className="ml-4 aspect-square rounded-full p-2 transition-colors hover:bg-indigo-100"
            type="button"
            onClick={toggleMenu}
          >
            <RiMenu3Fill size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default memo(Header)
