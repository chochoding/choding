"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import './MyProjectSlide.scss';

export default function MyProjectSlide({ slidePost }) {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={18}
            pagination={{
                clickable: true,
            }}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            // navigation={true}
            modules={[Autoplay, Navigation, Pagination]}
            className="mySwiper ccitem"
            id="mainSlide"
        >
            {
                slidePost && slidePost.map((item) => {
                    return <SwiperSlide
                        className='contentsFigure'
                        key={item.postId}>
                        <figure className='innerContents'>
                            {item.image !== null ? <img src={item.image}></img> : <div className='noImage'>이미지가 없습니다</div>}
                            <figcaption>
                                <h3 className='title'>{item.title}</h3>
                                <div className="bottom">
                                    <span>by {item.name}</span>
                                    <span className='like'>♥ {item.like.length}</span>
                                    <span>💬 {item.comments.length}</span>
                                </div>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                })
            }
        </Swiper>
    )
}