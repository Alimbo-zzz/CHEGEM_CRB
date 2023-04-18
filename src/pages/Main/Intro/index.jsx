import React from 'react';
import scss from './styles.module.scss';

import main_img from '@images/main-bg-img.png';


const Intro = (events) => {
	const {} = events;
	
	return (<>
		<section id='intro' className={scss.wrap}>
			<div className={`container ${scss.container}`}>
				<div className={scss.content}>
					<h1 className='title'>Центральная районная больница им. Хацукова А.А.</h1>
					<a href='#' className='btn'>Онлайн запись</a>
				</div>
			</div>
			<img src={main_img} className={scss.img}/>
		</section>
	</>);
}

export default Intro;