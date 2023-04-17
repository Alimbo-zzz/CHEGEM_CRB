import React from 'react';
import {Navigation} from '@/components';
import scss from './style.module.scss';
import logo from '@icons/logo.svg';

const Header = (events) => {
	const {} = events;
	
	return (<>
		<header className={scss.wrap}>
			<div className={`container ${scss.container}`}>
				<div className={scss.logo}> <img src={logo}/> </div>
				<div className={scss.nav}><Navigation name='header'/></div>
			</div>
		</header>
	</>);
}

export default Header;