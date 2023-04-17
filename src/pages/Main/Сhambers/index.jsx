import React, {useState, useEffect} from 'react';
import scss from './style.module.scss';
import slide_img from '@images/palata.png';
import { useMediaQuery } from 'react-responsive'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './slider-styles.scss';

import { FreeMode, Navigation, Thumbs } from "swiper";



const Chambers = (events) => {
	const {} = events;

	const [swiper, setSwiper] = useState(null);
	const [swiper2, setSwiper2] = useState(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const isTablet = useMediaQuery({ query: '(max-width: 768px)' })
	const [slides, setSlides] = useState([
		{title: 'Палата №6, первое отделение', img: slide_img,},
		{title: 'Палата №2, первое отделение', img: slide_img,},
		{title: 'Палата №3, первое отделение', img: slide_img,},
		{title: 'Палата №28, первое отделение', img: slide_img,},
		{title: 'Палата №9, первое отделение', img: slide_img,},
	])
	
	
	return (<>
		<section className={`sec ${scss.wrap}`}>
			<div className="container">
				<h2 className='sec-title'>Наши палаты</h2>
				<div className={scss.slider}>
					<Swiper 
						onSwiper={setSwiper2}
						className={scss.sliderSlides}
						onSlideChange={e => setActiveIndex(e.activeIndex)}
						thumbs={{ swiper: swiper }}
						modules={[FreeMode, Navigation, Thumbs]}
						direction='vertical'
					>
						{slides.map((slide, i) => (
							<SwiperSlide key={i}>	<img src={slide.img} /> </SwiperSlide>
						))}
					</Swiper>

					<div className={scss.sliderControllers}>
						<button 
							className={scss.sliderArrow} 
							data-arrow="prev"
							onClick={e => swiper2.slidePrev()}
							disabled={swiper2?.isBeginning}
						>
							{'❱'}
						</button>
						<button 
							className={scss.sliderArrow} 
							data-arrow="next"
							onClick={e => swiper2.slideNext()}
							disabled={swiper2?.isEnd}
						>
							{'❱'}
						</button>
					</div>

					<Swiper 
						className={scss.sliderPagination}
						data-slider="pagination"
						data-slides={slides.length}
						onSwiper={setSwiper}
						slidesPerView={3}
						modules={[FreeMode, Navigation, Thumbs]}
						spaceBetween={15}
						direction='vertical'
						breakpoints={{
							0:{	spaceBetween: 0,},
							480:{	spaceBetween: 5,},
							768:{	spaceBetween: 15,},
						}}
					>
						{slides.map((slide, i) => (
							<SwiperSlide className={scss.sliderPagination__slide} key={i}>	<img src={slide.img} /> </SwiperSlide>
						))}
					</Swiper>
					
					<div className={scss.sliderInfo}>{slides[activeIndex].title}</div>

				</div>
			</div>
		</section>
	</>);
}

export default Chambers;