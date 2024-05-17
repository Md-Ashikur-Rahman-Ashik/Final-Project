import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item text-white pt-8 my-20">
      <SectionTitle
        heading={"Featured Item"}
        subHeading={"check it out"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36 md:gap-10">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div>
          <p>August 20, 2029</p>
          <p className="uppercase">Where can I get some?</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae quo
            ea ut corrupti ad natus a expedita consequuntur reprehenderit,
            nostrum vitae perspiciatis numquam cum modi. Dolorem, iusto cumque
            earum commodi, laudantium illum nihil quod, impedit asperiores
            placeat voluptates possimus natus minus quas? Optio tempora aliquam
            ducimus nobis voluptatibus accusantium porro?
          </p>
          <button className="btn btn-outline">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
