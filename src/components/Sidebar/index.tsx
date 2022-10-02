import Logo from '../Logo'

const Sidebar = () => {
  return (
    <div className="fixed h-full w-[300px] bg-white p-4 shadow-lg">
      <Logo />
      <div className="mt-6">
        <div>Test</div>
      </div>
    </div>
  )
}

export default Sidebar
