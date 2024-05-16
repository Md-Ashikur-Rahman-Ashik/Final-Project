import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import firstImage from "../../assets/home/01.jpg";
import secondImage from "../../assets/home/02.jpg";
import thirdImage from "../../assets/home/03.png";
import fourthImage from "../../assets/home/04.jpg";
import fifthImage from "../../assets/home/05.png";
import sixthImage from "../../assets/home/06.png";

const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true}>
      <div>
        <img src={firstImage} />
      </div>
      <div>
        <img src={secondImage} />
      </div>
      <div>
        <img src={thirdImage} />
      </div>
      <div>
        <img src={fourthImage} />
      </div>
      <div>
        <img src={fifthImage} />
      </div>
      <div>
        <img src={sixthImage} />
      </div>
    </Carousel>
  );
};

export default Banner;
