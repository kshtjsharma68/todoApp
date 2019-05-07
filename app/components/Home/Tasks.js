import React from 'react';
import { View, Text, Button } from 'react-native';
import style from './style';
import { TasksConsumer } from '../../Context/index';

const TaskList = props => {
		return (
				<TasksConsumer>
				{context => <Button title="Click me" color="#CCCCCC" onPress={() => props.update(context)}/>}  
				</TasksConsumer>
			);
	}

export default class Tasks extends React.Component {

	constructor(props) {
		super(props); 
	}

	updateState = context => {
		console.log(context.set('tasks', {new: 1})) 
	}

	render() {
		return (
				<View style={style.tasks}>
					<TaskList update={this.updateState}/>			
				</View>
			);
	}
}