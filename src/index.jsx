import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux';
import store from '@/store';

// modules
import App from '@/App.jsx';
import {Wrapper} from '@layouts';
import '@/scripts/i18next.js';
import '@/styles/index.scss';


// vars
const root = document.getElementById('root');

ReactDOM.createRoot(root).render(<>
	<Wrapper>
		<Provider store={store}>
			<App/>
		</Provider>
	</Wrapper>
</>)
