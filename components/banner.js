import Slider from "react-slick";
import React  from "react"
import useGetBanners from "../useGetBanners";

const settings = {
  dots: true,
  infinite: true,
  speed: 1650,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  lazyLoad: "progressive",
  swipe: false,
  arrows: false,
  pauseOnFocus: false,
};

const Banner = () => {
  const {banners, error} = useGetBanners();
  if (error) return <h1>Something went wrong</h1>

  return (
      <div className="pb-12 rounded-md">
        <Slider {...settings}>
          {banners ? banners.map(banner => (
              <div>
                <img src={banner.src} className="rounded-md mx-auto"/>
              </div>
          )): null}
        </Slider>
      </div>
  );
}

export default Banner;
