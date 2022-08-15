import Images from "../images"

const CourseCard = ({ image, title, children }) => {
  return (
    <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
      <div className="cursor-pointer mx-2 mb-4 shadow hover:shadow-lg rounded-lg overflow-hidden">
        <div style={{ paddingTop: '56.25%' }} className="w-full relative overflow-hidden bg-slate-300">
          <img src={Images.CourseBanner} alt="" className="absolute inset-0 h-full" />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold line-clamp-2">{title}</h3>
          {children}
        </div>
      </div>
    </div>
  )
}

export default CourseCard