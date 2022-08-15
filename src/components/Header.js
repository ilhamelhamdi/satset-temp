import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import Icons from "../images/icons"
import Images from "../images"
import Button from "./Button"

const AuthBar = () => {
  return (
    <div>
      <Link to='login' className="mx-2">
        <Button>Log In</Button>
      </Link>
      <Link to='register' className="mx-2">
        <Button>Register</Button>
      </Link>
    </div>
  )
}

const UserBar = () => {
  return (
    <div className="group h-full flex items-center justify-end relative">
      <div className="flex items-center space-x-2">
        <img src={Images.DefaultUser} alt="" className="h-12" />
        <span>User</span>
        <Icons.Dropdown className="h-6" />
      </div>
      <div className="w-40 bg-white shadow-lg hidden group-hover:block hover:block absolute right-0 top-16 border border-slate-200 p-4 z-20">
        <Link to='/logout'>
          <span className="hover:text-teal-700 hover:underline inline-block w-full">Log out</span>
        </Link>
      </div>
    </div>
  )
}

const MenuButton = () => {
  return (
    <div>
      <Icons.Menu className="fill-teal-700" />
    </div>
  )
}

const Header = () => {
  const [search, setSearch] = useState('')
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const detectSize = () => {
    setWindowWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', detectSize)
    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowWidth])

  return (
    <header className="w-full h-16 shadow-md z-20">
      <div className="container mx-auto h-full flex justify-between items-center px-4 lg:px-8">
        <Link to='/'>
          <img src={Images.Logo} alt="" className="h-12 w-12" />
        </Link>
        <div className="relative flex-auto mx-8">
          <div className="absolute inset-y-0 left-2 flex items-center">
            <Icons.Search className="fill-stone-300" />
          </div>
          <input
            type="text"
            id="search-box"
            placeholder="Search anything..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full text-stone-700 pl-12 py-2 rounded-lg outline outline-2 outline-slate-200 focus:outline-teal-700"
          />
        </div>
        {
          windowWidth < 768
            ? <MenuButton />
            : <UserBar />
        }

      </div>
    </header>
  )
}

export default Header