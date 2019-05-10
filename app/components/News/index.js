import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const NewsList = news => {
	console.log(news)
	return null;
}

export default class News extends React.Component {
		constructor(props) {
			super(props);
		}

	render() {
		let { news } = this.props.navigation.state.params;

		return (
				<View>
					<NewsList news={news}/>
				</View>
		);
	}
}