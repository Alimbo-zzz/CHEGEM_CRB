import React, {useState, useEffect} from 'react';
import scss from './style.module.scss';

const DoctorCard = (events) => {
	const {data} = events;
	
	return (<>
		<div className={scss.wrap}>
			<img className={scss.avatar} src={data?.avatar} />
			<h4 className={scss.name}>{data?.name}</h4>
			<p className={scss.description}>{data?.description}</p>
			<span className={scss.direction}>{data?.direction}</span>
		</div>
	</>);
}

export default DoctorCard;