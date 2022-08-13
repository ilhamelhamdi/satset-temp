import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import Icons from "../icons"
import Button from "./Button"

const NavBar = () => {
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

const NavBarMobile = () => {
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
      <div className="container mx-auto h-full flex justify-between items-center p-2 lg:px-8">
        <Link to='/'>
          <img src="logo192.png" alt="" className="h-12 w-12" />
        </Link>
        <form className="group group-hover:border-black flex-auto flex h-10 border-2 rounded-md items-center px-2 mx-4 md:mx-8 lg:mx-16">
          <Icons.Search className="fill-stone-300 mr-4" />
          <input type="text" id="search-box" placeholder="Search anything..." value={search} onChange={e => setSearch(e.target.value)} className="flex-auto outline-none text-stone-700" />
        </form>
        {
          windowWidth < 768
            ? <NavBarMobile />
            : <NavBar />
        }

      </div>
    </header>
  )
}

export default Header