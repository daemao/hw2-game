import React from "react";
//компонент который выводит количество правильных и всех ответов
const counter = (props)=>{
	return <div>
		Правильные ответы:{props.correct_answers.length}/{props.answers.length}
	</div>
}
export default counter
