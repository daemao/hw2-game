import React from "react";
import style from "./game.css";
import CorrectCounter from "./correctCounter";
//Компонент который отвечает за игру
class Game extends React.Component{
	//Конструктор который вызывается при создании компонента
	constructor(props){
		super(props);
		//создание стейта для игры
		this.state={
			//массив с возможными ответами
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
//Массив ответов который пригодится для будущего отслеживания всех ответов
			answers:[],
			correct_answers:[],//Массив правильных ответов
			wrong_answers:[],//массив неверных ответов 
			colors:["red","green","blue","black"],//массив возможных ответов
			points:0,//количество правильных ответов
			current_question_index:Math.floor(Math.random() * 4),//рандомайзер вопроса
			current_color_index:Math.floor(Math.random() * 4)//рандомайзер для цвета вопроса
		}
	}
	//срабатывает при нажатии на цвет
	make_answer(answer,options){
		var state_answers = this.state.answers;
		var state_correct_answers= this.state.correct_answers;
		var state_wrong_answers = this.state.wrong_answers;
		var state_points = this.state.points;
//проходится по массиву и находит подходяший вопрос и проверяет на правильность
		options.map(element=>{
			if(element.style === answer) {
//добавляет в массив с ответами 
				state_answers.push(options);
				//если правильный то сохраняет в масиве для правильных и добовляет очко
				if(element.isCorrect){
					state_points = state_points + 1;
					state_correct_answers.push(options);
				}else{//добавляет в массив с ошибками 
					state_wrong_answers.push(options);
				}
			}
		})
//меняет стейт для текущего вопроса
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
