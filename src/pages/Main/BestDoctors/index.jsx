import React, {useState, useEffect} from 'react';
import scss from './style.module.scss';
import img_doctor from '@images/doctor.png';
import {DoctorCard} from '@/components';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './styles.scss';

const BestDoctors = (events) => {
	const {} = events;
	const [swiper, setSwiper] = useState(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const [slides, setSlides] = useState([
		{
			avatar: img_doctor,
			name: 'Иван Иванов',
			description: 'Главный врач отделения ортопедии. Профессор, доктор мед. наук',
			direction: 'Ортопедия'
		},
		{
			avatar: img_doctor,
			name: 'Иван Иванов',
			description: 'Главный врач отделения ортопедии. Профессор, доктор мед. наук',
			direction: 'Ортопедия'
		},
		{
			avatar: img_doctor,
			name: 'Иван Иванов',
			description: 'Главный врач отделения ортопедии. Профессор, доктор мед. наук',
			direction: 'Ортопедия'
		},
		{
			avatar: img_doctor,
			name: 'Иван Иванов',
			description: 'Главный врач отделения ортопедии. Профессор, доктор мед. наук',
			direction: 'Ортопедия'
		},
		{
			avatar: img_doctor,
			name: 'Иван Иванов',
			description: 'Главный врач отделения ортопедии. Профессор, доктор мед. наук',
			direction: 'Ортопедия'
		},
		{
			avatar: img_doctor,
			name: 'Иван Иванов',
			description: 'Главный врач отделения ортопедии. Профессор, доктор мед. наук',
			direction: 'Ортопедия'
		},
		{
			avatar: img_doctor,
			name: 'Иван Иванов',
			description: 'Главный врач отделения ортопедии. Профессор, доктор мед. наук',
			direction: 'Ортопедия'
		},
		{
			avatar: img_doctor,
			name: 'Иван Иванов',
			description: 'Главный врач отделения ортопедии. Профессор, доктор мед. наук',
			direction: 'Ортопедия'
		},
		{
			avatar: img_doctor,
			name: 'Иван Иванов',
			description: 'Главный врач отделения ортопедии. Профессор, доктор мед. наук',
			direction: 'Ортопедия'
		},
		{
			avatar: img_doctor,
			name: 'Иван Иванов',
			description: 'Главный врач отделения ортопедии. Профессор, доктор мед. наук',
			direction: 'Ортопедия'
		},
	])
	
	return (<>
		<section className={`${scss.wrap} sec`}>
			<div className="container">
				<div className={scss.head}>
					<h2 className='sec-title'>Лучшие врачи</h2>
					<div className={scss.sliderControllers}>
						
						<div className={scss.arrows}>
							<button 
								className={scss.sliderArrow} 
								data-arrow="prev"
								onClick={e => swiper.slidePrev()}
								disabled={swiper?.isBeginning}
							>
								{'❱'}
							</button>
							<button 
								className={scss.sliderArrow} 
								data-arrow="next"
								onClick={e => swiper.slideNext()}
								disabled={swiper?.isEnd}
							>
								{'❱'}
							</button>
						</div>
					</div>
				</div>
				<Swiper 
					onSwiper={setSwiper}
					className={scss.slider}
					onSlideChange={e => setActiveIndex(e.activeIndex)}
					spaceBetween={15}
					slidesPerView={4}
					breakpoints={{
						0:{
							slidesPerView: 1,
							spaceBetween: 15
						},
						768:{
							slidesPerView: 2,
							spaceBetween: 0
						},
						1024:{
							slidesPerView: 3,
							spaceBetween: 15
						},
						1280:{
							slidesPerView: 4,
							spaceBetween: 15
						}
					}}
				>
					{slides.map((slide, i) => (
						<SwiperSlide key={i} className={scss.slider__slide}>	 <DoctorCard data={slide}/> </SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	</>);
}

export default BestDoctors;