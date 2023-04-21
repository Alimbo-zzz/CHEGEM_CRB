import React from 'react';
import scss from './styles.module.scss';
import bg_1 from '@images/bg_4.png';
import bg_2 from '@images/bg_3.png';
import bg_3 from '@images/bg_1.png';
import bg_4 from '@images/bg_2.png';

const MainPageBgImages = (events) => {
	const {} = events;
	
	return (<>
		<div className={scss.wrap}>			
			{/* <img src={bg_2} className={scss.bg_1}/> */}
			<img src={bg_4} className={scss.bg_2}/>
			{/* <img src={bg_2} className={scss.bg_3}/> */}
		</div>
	</>);
}

export default MainPageBgImages;