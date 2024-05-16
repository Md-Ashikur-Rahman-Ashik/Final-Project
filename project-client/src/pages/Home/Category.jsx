// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
// import images
import firstSlide from "../../assets/home/slide1.jpg";
import secondSlide from "../../assets/home/slide2.jpg";
import thirdSlide from "../../assets/home/slide3.jpg";
import fourthSlide from "../../assets/home/slide4.jpg";
import fifthSlide from "../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mb-24"
    >
      <SwiperSlide>
        <img src={firstSlide} alt="" />
        <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={secondSlide} alt="" />
        <h3 className="text-4xl uppercase text-center -mt-16 text-white">Pizzas</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={thirdSlide} alt="" />
        <h3 className="text-4xl uppercase text-center -mt-16 text-white">Soups</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={fourthSlide} alt="" />
        <h3 className="text-4xl uppercase text-center -mt-16 text-white">Deserts</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={fifthSlide} alt="" />
        <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h3>
      </SwiperSlide>
    </Swiper>
  );
};

export default Category;
