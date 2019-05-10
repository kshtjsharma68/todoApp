import React from 'react';
import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import style from './style';
import Icon from "react-native-vector-icons/Ionicons";
import news from "../../Config/News";
import News from '../News/index';

const AlertMessage = msg => {console.log(msg)
	return (
			ToastAndroid.showWithGravity(
						msg, ToastAndroid.SHORT, ToastAndroid.CENTER, 25, 50
				)
		);
}

export default class Operations extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			news : [ ]
		}
	}

	static getDerivedStateFromProps(props, state) {
			let { news } 				= state;
			let { navigation } 			= props;
			if ( news.length ) {
					navigation.navigate('news',{news: news});
			}	
			return null;
	}

	handleButton = _ => {
		const { navigation } = this.props;
		navigation.navigate('taskAdd');
	}
	handleNews = _ => {
		let news_url = news.url+'&apiKey='+news.key;
		fetch(news_url)
		.then((res) => res.json())
		.then((res) => this.setState({ news: [ ...res.articles ] }))
		.catch((err) => console.log(err) ); 
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