import React from 'react';
import scss from './styles.module.scss';

import main_img from '@images/Main_img.png';


const Intro = (events) => {
	const {} = events;
	
	return (<>
		<section id='intro' className={scss.wrap}>
			<div className={`container ${scss.container}`}>
				<div className={scss.content}>
					<h1 className='title'>Центральная районная больница им. Хацукова А.А.</h1>
					<a href='#' className='btn'>Онлайн запись</a>
				</div>
				<img src={main_img} className={scss.img}/>
			</div>
		</section>
	</>);
}

export default Intro;