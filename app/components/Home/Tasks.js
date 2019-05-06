import React from 'react';
import { View, Text } from 'react-native';
import style from './style';

export default class Tasks extends React.Component {
	render() {
		return (
				<View style={style.tasks}>
					<Text>tasks</Text>			
				</View>
			);
	}
}