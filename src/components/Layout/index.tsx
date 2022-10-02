import { HTMLProps } from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'

const Layout = ({ children }: HTMLProps<HTMLDivElement>) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-[300px] w-full">
        <Header />
        <main className="ml-4 mt-4">{children}</main>
      </div>
    </div>
  )
}
export default Layout
