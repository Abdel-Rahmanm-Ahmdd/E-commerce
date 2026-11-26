import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination , Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import Banner1 from './img/banner1.png';
import Banner2 from './img/banner2.png';
import Banner3 from './img/banner3.png';
import { AllContext } from './context/context';
import { useContext } from 'react';
function HeroSlider() {
    const {darkmode} = useContext(AllContext)
    return (
        <div className='container hero-section'>
            <Swiper pagination={{clickable: true}}
            modules={[Pagination , Autoplay]} 
            className="hero"
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            loop={true}
            >
                <SwiperSlide>
                    <div className='content'>
                        <p>INTREDUCING THE NEW</p>
                        <p>Microsoft Xbox 360 controller</p>
                        <p>Windos Xp/10/7/8 Ps3, Tv Box</p>
                        <Link><button className='btn'>Shop Now</button></Link>
                    </div>
                    <img className={`${darkmode? "dark-img" : ""}`} src={Banner1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <div className='content'>
                        <p>INTREDUCING THE NEW</p>
                        <p>Microsoft Xbox 360 controller</p>
                        <p>Windos Xp/10/7/8 Ps3, Tv Box</p>
                        <Link><button className='btn'>Shop Now</button></Link>
                    </div>
                    <img className={`${darkmode? "dark-img" : ""}`} src={Banner2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <div className='content'>
                        <p>INTREDUCING THE NEW</p>
                        <p>Microsoft Xbox 360 controller</p>
                        <p>Windos Xp/10/7/8 Ps3, Tv Box</p>
                        <Link><button className='btn'>Shop Now</button></Link>
                    </div>
                    <img className={`${darkmode? "dark-img" : ""}`} src={Banner3} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default HeroSlider;