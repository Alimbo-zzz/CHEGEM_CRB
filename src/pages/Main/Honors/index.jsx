import React, {useState} from 'react';
import scss from './style.module.scss';

import img_sertificate from '@images/doc_1.png';

const Honors = (events) => {
	const {} = events;
	const [list, setList] = useState([1,2,3,4,5,6])
	
	return (<>
		<section className={`${scss.wrap} sec`}>
			<div className="container">
				<h2 className='sec-title'>Сертификаты</h2>
				<ul className={scss.list}>
					{list.map((el, i) => (
						<li key={i} className={scss.item}>
							<img src={img_sertificate} />
						</li>
					))}
				</ul>
			</div>
		</section>
	</>);
}

export default Honors;