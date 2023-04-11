import React from 'react';
import {Main} from '@pages';
import {Header, Footer} from '@/components'


const App = (events) => {
	const {} = events;

	
	return (<>
		<Header/>
		<main>
			<Main/>
		</main>			
		<Footer/>
	</>);
}

export default App;