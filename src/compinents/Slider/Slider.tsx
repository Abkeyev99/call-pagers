import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import s from './Slider.module.css';
import {Autoplay} from "swiper";
import 'swiper/css';

const slides = [
    {
        img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXMyh9u2yUolfCV9gZJi2uNeu49D8HwbXyQWdnnWqiBHXZ43bFw2Xr1lId6jIQID3ybuU&usqp=CAU',
        caption: 'Caption for image 1'
    },
    {
        img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMf_mJTTz0R0We67RluMkDGYlVGvbwM3lTKw&usqp=CAU',
        caption: 'Caption for image 1'
    },
    {
        img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4k9Av3T3Sc-4GzTD0UiMw37zqtikJ8tzFHQ&usqp=CAU',
        caption: 'Caption for image 1'
    }
];

export const ImgSlider = () => {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((index + 1) % slides.length)
    };

    const prevSlider = () => {
        const nextIndex = index === 0 ? slides.length - 1 : index - 1;
        setIndex(nextIndex);
    };

    return (
        <Swiper
            style={{width: '430px'}}
            modules={[Autoplay]}
            spaceBetween={1}
            autoplay={{ delay: 1000}}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {slides.map((slides) => {
                return <SwiperSlide><img className={s.image} src = {slides.img_url} alt = {slides.img_url}/></SwiperSlide>
            })}
        </Swiper>
    );
};

