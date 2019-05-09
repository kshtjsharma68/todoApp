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
				  renderItem={({item}) => console.log(item)}
				/>
		);
	} else {
		return <Text></Text>;
	}
}

const __renderItems = ({item}) => {
	return (
			<RenderedTask item={item}/>
		);
}

function viewTask(item) {
	console.log(item)
}

const RenderedTask = ({item}) => {console.log(item)
	return (
			<TouchableOpacity onPress={(item) => console.log(item)}><Text>{item.key}</Text></TouchableOpacity>
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