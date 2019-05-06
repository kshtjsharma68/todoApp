import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	addView: {
		flex: 1,
		paddingTop: 10
	},
	formTextInput: {
		borderColor: '#CCCCCC',
  		borderTopWidth: 1,
  		borderBottomWidth: 1,
  		height: 50,
  		marginLeft: 10,
  		marginRight: 10,
  		fontSize: 25,
  		paddingLeft: 20,
  		paddingRight: 20
	},
	bottom: {
		flex: 1,
		paddingTop: 10,
		justifyContent: 'center'
	},
	submitButton: {
		backgroundColor: '#228B22',
		fontWeight: 'bold',
		alignItems: 'center',
    	padding: 10
	}
});