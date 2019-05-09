import React from 'react';
import { ScrollView ,View, Text, TextInput, TouchableOpacity, Button, Keyboard, ToastAndroid, DatePickerAndroid } from 'react-native';
import style from './style';
import DatePicker from 'react-native-datepicker';
import Icon from "react-native-vector-icons/Ionicons";
import { TasksContext, TasksConsumer } from '../../Context/tasks';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const checkForm = ({ title, area, date }) => {
		let response = false;

		if ( title !== undefined && area !== undefined && date !== undefined ) {
			response = true;
		}  

		return response;
	}

class Add extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	_handleInput = input => {
		this.setState(input);
	}

	submit = addTask => {
		let msg = ''; 
		try {
			let check = checkForm(this.state);
			if (check) {
				addTask(this.state);
				msg = 'All saved successfully...'; 
				this.props.navigation.navigate('Home');
			} else {
				msg = 'Input values missing';
			}
		} catch (err) {
			 msg = err;
		} 
		ToastAndroid.showWithGravity(
					msg, ToastAndroid.SHORT, ToastAndroid.CENTER, 25, 50
				);
	}

	render() {
		return  (
			<ScrollView>
				<View style={style.addView}>
					<Text>Title</Text>
					<TextInput 
						style={style.formTextInput}
						placeHolder="Title for task"
						onChangeText={text => this._handleInput({title: text})}
						maxLength={20}
						value={this.state.title}
						onBlur={Keyboard.dismiss}
						autoCorrect={true}
					/>
				</View>
				<View>
					<Text> details</Text>
					<TextInput 
						style={{...style.formTextInput,fontSize: 14, height: 100}}
						multiline = {true}
						numberOfLines={4}
						onChangeText={text => this._handleInput({area: text})}
						value={this.state.area}
					/>
				</View>
				<View>
					<Text>Select completion date</Text>
					<DatePicker
				          style={{width: '100%'}} 
				          date={this.state.date} //initial date from state
				          mode="date" //The enum of date, datetime and time
				          placeholder="select date"
				          format="DD-MM-YYYY"
				          minDate="01-01-2016"
				          maxDate="01-01-2019"
				          confirmBtnText="Confirm"
				          cancelBtnText="Cancel"
				          customStyles={{
				            dateIcon: {
				              position: 'absolute',
				              left: 0,
				              top: 4,
				              marginLeft: 0
				            },
				            dateInput: {
				              marginLeft: 36
				            }
				          }}
				          onDateChange={date => this.setState({date: date})} 
				        />
				</View>
				<View style={style.bottom}>
					<TasksConsumer>
						{({ state, addTask }) => (
							<TouchableOpacity 
								style={style.submitButton}
								onPress={() => this.submit(addTask)}
							><Icon name="ios-save" size={30} color="#ccc" />
							</TouchableOpacity>
						)}
					</TasksConsumer>	
				</View>
			</ScrollView>	
			);
	}
}

Add.ContextType = TasksContext;
export default Add;