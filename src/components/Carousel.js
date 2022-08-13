import Slider from "react-slick"

const CarouselArrow = ({ className, onClick, content }) => {
  return (
    <div
      className={className + ' before:content-none z-10 w-12 h-12 bg-teal-700 hover:bg-teal-700 rounded-full text-white hover:text-white text-2xl font-bold flex items-center justify-center hover:opacity-80 opacity-100'}
      onClick={onClick}
    >
      {content}
    </div>
  )
}

const Carousel = () => {
  const sliderSetting = {
    dots: true,
    infinite: true,
    fade: true,
    // speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    // pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CarouselArrow content='<' />,
    nextArrow: <CarouselArrow content='>' />
  }

  const carouselImages = [
    {
      src: 'concept.jpg',
      text: 'fundamental concept.'
    },
    {
      src: 'limitless.jpg',
      text: 'anything without limit.'
    },
    {
      src: 'professional.jpg',
      text: 'from professional instructors.'
    },
  ]
  return (
    <Slider {...sliderSetting} className="mb-8">
      {carouselImages.map((img, i) => (
        <div key={i}>
          <div className="relative flex flex-col lg:flex-row justify-end px-8">
            <div className="lg:absolute top-8 left-12 w-full lg:w-1/3 text-center lg:text-left">
              <h1 className="text-7xl xl:text-9xl font-semibold text-teal-700">Learn</h1>
              <h2 className="text-5xl xl:text-7xl">{img.text}</h2>
            </div>
            <div className="flex justify-center">
              <img src={img.src} alt="" className="h-80 md:h-96 xl:h-128 flex-none" />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  )
}

export default Carousel