import React from 'react';
import { Intro, LinkButtons, News, Chambers, LineQuestion, BestDoctors, Honors } from './componets.js';



const Main = (events) => {
	const {} = events;
	
	return (<>
		<Intro/>
		<LinkButtons/>
		<News/>
		<Chambers/>
		<LineQuestion/>
		<BestDoctors/>
		<Honors/>
	</>);
}

export default Main;