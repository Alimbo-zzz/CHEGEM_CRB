import React, {useState} from 'react';
import scss from './style.module.scss';

import img_lift from '@images/lift.png';



const News = (events) => {
	const {} = events;
	const [news, setNews] = useState([1,2,3,4]);
	
	return (<>
		<section id='news' className={`${scss.wrap} sec`}>
			<div className={`container ${scss.container}`}>
				<h3 className='sec-title'>Главные новости</h3>
				<ul className={scss.list}>
					{news.map((item, i) => (
						<li className={scss.item} key={i}>
							<img src={img_lift} className={scss.item__img}/>
							<h5 className={scss.item__title}>В больнице заменили лифт</h5>
							<p className={`text ${scss.item__text}`}>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в </p>
						</li>
					))}
				</ul>
			</div>
		</section>
	</>);
}

export default News;