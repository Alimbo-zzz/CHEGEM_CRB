import React from 'react';
import { Intro, LinkButtons, News, Chambers, LineQuestion, BestDoctors, Honors, InfoList } from './componets.js';
import {MainPageBgImages} from '@/components';
import scss from './styles.module.scss';


const Main = (events) => {
	const {} = events;
	
	return (<>
		<Intro/>
		<LinkButtons/>
		<News/>
		<Chambers/>
		<LineQuestion/>
		<BestDoctors/>
		<InfoList/>
		<Honors/>
		<MainPageBgImages/>
	</>);
}

export default Main;