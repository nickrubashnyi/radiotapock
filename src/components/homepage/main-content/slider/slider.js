import React, {useState} from 'react';

import '../../../../assets/style/scss/homepage/main-content/slider/style.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Carousel from 'react-bootstrap/Carousel'

const Sliderr = (props) => {
    // var settings = {
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // };
    //
    // let SliderItem = props.data.map(i =>
    //     <div>
    //         <div className="sl_slide"><img
    //             src={i}
    //             alt=""/>
    //         </div>
    //     </div>
    // )
    //
    // return (
    //     <div className={'main'}>
    //         <Slider {...settings}>
    //             {SliderItem}
    //         </Slider>
    //
    //     </div>
    // );

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    let SliderItem = props.data.map(i =>
            <Carousel.Item className={'item'}>
                <img
                    className="d-block w-100 img_slide"
                    src={i}
                    alt="First slide"

                />
                {/*<Carousel.Caption>*/}
                {/*    <h3>First slide label</h3>*/}
                {/*    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                {/*</Carousel.Caption>*/}
            </Carousel.Item>

    )
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {SliderItem}
        </Carousel>
    );
};

export default Sliderr;