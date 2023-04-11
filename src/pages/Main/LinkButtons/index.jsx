import React, {useState} from 'react';
import scss from './style.module.scss'

import icon_ticket from '@icons/Ticket.svg';
import icon_doctor from '@icons/Doctor.svg';
import icon_message from '@icons/Message.svg';
import icon_news from '@icons/News.svg';



const LinkButtons = (events) => {
	const {} = events;
	const [btns, setBtns]  = useState([
		{color: '#8F49CF', icon: icon_ticket, route: '/', text: 'Онлайн запись'},
		{color: '#EB5757', icon: icon_doctor, route: '/', text: 'Наши врачи'},
		{color: '#5F78CE', icon: icon_news, route: '/', text: 'Новости'},
		{color: '#F2994A', icon: icon_message, route: '/', text: 'Задать вопрос'},
	])
	
	return (<>
		<section className={scss.wrap} id='link-buttons'>
			<div className={`container ${scss.container}`}>
				{btns.map((btn, i) => (
					<a 
						href={btn.route} 
						className={scss.btn} 
						key={i}
						style={{background: btn.color}}
					>
						<div className={scss.btn__icon}> <img src={btn.icon}/> </div>
						<div className={scss.btn__text}>{btn.text}</div>
					</a>
				))}
			</div>
		</section>
	</>);
}

export default LinkButtons;