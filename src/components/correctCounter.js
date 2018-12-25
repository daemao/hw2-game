import React from "react";

const counter = (props)=>{
	return <div>
		Правильные ответы:{props.correct_answers.length}/{props.answers.length}
	</div>
}
export default counter
