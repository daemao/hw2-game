import React from "react";
import style from "./game.css";
import CorrectCounter from "./correctCounter";
class Game extends React.Component{
	constructor(props){
		super(props);
		this.state={
			questions:[
				{
					text:" красный ",
					answers:
						[
							{style:"blue",isCorrect:false},
							{style:"red",isCorrect:true},
							{style:"green",isCorrect:false},
							{style:"black",isCorrect:false}
						]

				},
				{
					text:" зеленый ",
					answers:
						[
							{style:"blue",isCorrect:false},
							{style:"red",isCorrect:false},
							{style:"green",isCorrect:true},
							{style:"black",isCorrect:false}
						]

				},
				{
					text:" синий ",
					answers:
						[
							{style:"blue",isCorrect:true},
							{style:"red",isCorrect:false},
							{style:"green",isCorrect:false},
							{style:"black",isCorrect:false}
						]

				},
				{
					text:" черный ",
					answers:
						[
							{style:"blue",isCorrect:false},
							{style:"red",isCorrect:false},
							{style:"green",isCorrect:false},
							{style:"black",isCorrect:true}
						]
					}
			],
			answers:[],
			correct_answers:[],
			wrong_answers:[],
			colors:["red","green","blue","black"],
			points:0,
			current_question_index:Math.floor(Math.random() * 4),
			current_color_index:Math.floor(Math.random() * 4)
		}
	}
	make_answer(answer,options){
		var state_answers = this.state.answers;
		var state_correct_answers= this.state.correct_answers;
		var state_wrong_answers = this.state.wrong_answers;
		var state_points = this.state.points;
		options.map(element=>{
			if(element.style === answer) {
				state_answers.push(options);
				if(element.isCorrect){
					state_points = state_points + 1;
					state_correct_answers.push(options);
				}else{
					state_wrong_answers.push(options);
				}
			}
		})
		this.setState({
			correct_answers:state_correct_answers,
			wrong_answers:state_wrong_answers,
			answers:state_answers,
			points:state_points,
			current_question_index:Math.floor(Math.random() * 4),
			current_color_index:Math.floor(Math.random() * 4)
		});
	}

	render(){
		return (
			<div>

				<h1>Нажми на
				<span style={{"color":this.state.colors[this.state.current_color_index]}}>
					{this.state.questions[this.state.current_question_index].text}
				</span>
			  цвет</h1>
				{this.state.questions[this.state.current_question_index].answers.map(element=>{
					return <div
						className={style.option} style={{"background":element.style}}
						onClick={e=>{this.make_answer(element.style,this.state.questions[this.state.current_question_index].answers)}}>
					</div>
				})}
					<CorrectCounter correct_answers = {this.state.correct_answers} answers={this.state.answers}/>
			</div>
		)
	}
}
export default Game;
