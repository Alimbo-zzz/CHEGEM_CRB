import React, {useState} from 'react';
import scss from './style.module.scss';

const Navigation = (events) => {
	const {name='base'} = events;
	const [nav, setNav] = useState([
		{value: 'Главная', route: '/'},
		{value: 'О нас', route: '/about'},
		{value: 'Доктора', route: '/doctors'},
		{value: 'Направления', route: '/directions'},
		{value: 'Новости', route: '/news'},
		{value: 'Запись', route: '/record'},
		{value: 'Контакты', route: '/contacts'},
	])

	
	
	return (<>
		<nav className={scss.nav}	data-parent={name}>
			{nav.map((item, i)=>(
				<a 
					href={item.route} 
					key={i}
					className={scss.link}
					data-active={i === 0}
				>{item.value}</a>
			))}
		</nav>
	</>);
}

export default Navigation;