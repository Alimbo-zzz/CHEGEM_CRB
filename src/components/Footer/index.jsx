import React from 'react';
import scss from './style.module.scss';
import {Navigation} from '@/components';

import logo from '@icons/Logo_w.svg';


const Footer = (events) => {
	const {} = events;
	
	return (<>
		<footer className={scss.wrap}>
			<div className={`container ${scss.container}`}>
				<div className={scss.block}>
					<div className={scss.logo}> <img src={logo}/> </div>
					<div className={scss.nav}><Navigation name='footer'/></div>
				</div>
				<div className={scss.line}></div>
				<div className={scss.block}>
					<div className={scss.box}>
						<p className="text _small _light">© 2023 Chegem CRB</p>
						<a href='#' className="link _light">Политика конфиденциальности</a>
					</div>
					<div className={scss.box}>
						<a href='#' className="link _light">Почта: ChegemHospital@gmail.com</a>
					</div>
					<div className={scss.box}>
						<a href='#' className="link _light">Чегем: +7 (999) 482 72-81</a>
						<p className="text _small _light">г. Чегем, ул. Кярова, 62, 361402</p>
					</div>
				</div>
			</div>
		</footer>
	</>);
}

export default Footer;