import { useEffect } from "react"

const SideBar = (props) => {

  const hideSidebar = (e) => {
    e.stopPropagation()
    props.setShowSideBar(false)
  }

  const preventHideSideBar = (e) => {
    e.stopPropagation()
    props.setShowSideBar(true)
  }

  useEffect(() => {
    if (props.windowWidth > 768) props.setShowSideBar(false)
  }, [props.windowWidth])

  return (
    <div onClick={hideSidebar} className="w-screen h-screen fixed inset-0 bg-black/20 z-40">
      <div onClick={preventHideSideBar} className="w-60 h-screen bg-teal-700 fixed inset-y-0 left-0 flex items-start justify-start">
        {props.children}
      </div>
    </div>
  )
}

export default SideBar