import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity  } from 'react-native';
import style from './style';
import { TasksContext } from '../../Context/tasks';

const  __keyExtractor = (item, index) => `${index}`;

const TasksList = ({tasks}) => {
	if ( tasks.length ) {
		return (
			<FlatList
				  data={tasks}
				  keyExtractor={__keyExtractor}
				  renderItem={({item}) => RenderedTask(item)}
				/>
		);
	} else {
		return <View></View>;
	}
} 
  
function ViewTask(props) {
	console.log(props)
}

const RenderedTask = item => {
	return (
			<TouchableOpacity onPress={() => console.log(item)}><View style={style.task}><Text style={style.task_title}>{item.title}</Text></View></TouchableOpacity>
		);
}

export default function Tasks() {
	let { tasks } = React.useContext( TasksContext );

	return(
			<View style={style.tasks}>
				<TasksList tasks={tasks} />
			</View>
		);
}