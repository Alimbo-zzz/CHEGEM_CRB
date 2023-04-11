import React from 'react';
import scss from './style.module.scss'

const LineQuestion = (events) => {
	const {} = events;
	
	return (<>
		<div className={`sec-line ${scss.wrap}`}>
			<div className={`container ${scss.container}`}>
				<h2 className='sec-title _light _m0'>Возникли вопросы?</h2>
				<a href='#' className="btn _light">Задать вопрос</a>
			</div>
		</div>
	</>);
}

export default LineQuestion;