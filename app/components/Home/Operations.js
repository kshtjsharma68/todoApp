import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import style from './style';
import Icon from "react-native-vector-icons/Ionicons";
import news from "../../Config/News";

export default class Operations extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			news : [ ]
		}
	}

	handleButton = _ => {
		const { navigation } = this.props;
		navigation.navigate('taskAdd');
	}
	handleNews = _ => {
		let news_url = news.url+'&apiKey='+news.key; console.log(news_url)
		fetch(news_url)
		.then((res) => res.json())
		.then((res) => console.log(res))
		.catch((err) => console.error('error',err) ); 
	}
	render() {

		return (
				<View style={style.operations}>
					 <TouchableOpacity
					   style={{...style.btn, color: '#841584'}}
						onPress={this.handleNews}
						title="News"
						color="#228B22"
					 >
					   <Icon name="ios-locate"  size={30} color="#01a699" />
					 </TouchableOpacity>
					 <TouchableOpacity
					   style={style.btn}
					    onPress={this.handleButton}
						title="Add Task" 
						color="#841584"
					 >
					   <Icon name="ios-add" color="#ccc" size={30}/>
					 </TouchableOpacity>
				</View>
			);
	}
}