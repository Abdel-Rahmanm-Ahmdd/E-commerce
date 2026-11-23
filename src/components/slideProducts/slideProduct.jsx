import "./slideProduct.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay , Navigation } from 'swiper/modules';
import Product from './product'
function SlideProduct({title , data}) {
    return (
        <div className="slide-product">
            <div className="container">
                <div className="top-slide">
                    <h2>{title}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                </div>
                <Swiper
                    slidesPerView={3}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    breakpoints={{
                        992: {
                            slidesPerView: 5,
                        },
                    }}
                    navigation={true}
                    modules={[ Autoplay , Navigation]}
                    className="mySwiper"
                    >
                    {data.map((item,index)=> {
                        return <SwiperSlide key={index}><Product item={item} /></SwiperSlide>
                    })}
                    
                </Swiper>
            </div>
        </div>
    )
}

export default SlideProduct