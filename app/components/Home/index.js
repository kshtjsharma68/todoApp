import React, {Component} from 'react';
import { View, Text, ImageBackground } from 'react-native';
import style from './style';
import Operations from './Operations';
import Tasks from './Tasks'; 

export default class Home extends Component {

	render() {
		return (
			<View style={style.main}>
				<ImageBackground source={require('../../Assets/Images/homebg.jpg')} style={style.background} >
						<Tasks />	
						<Operations navigation={this.props.navigation}/>
				</ImageBackground>
			</View> 	  
			);
	}
}