import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SocksSlider.scss";

import data from "./s-imgs.json";
import SliderCard from "./SliderCard";

function SocksSlider() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        pauseOnHover: true,
        cssEase: "linear",
    };

    return (
        <>
            <Slider {...settings}>
                {data.imgs.map((v, i) => {
                    return <SliderCard key={v.id} img={v} />;
                })}
            </Slider>
        </>
    );
}

export default SocksSlider;
