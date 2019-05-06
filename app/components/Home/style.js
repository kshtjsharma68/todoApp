import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	main: {
		flex: 1,
		flexDirection: 'row', 
	},
	background: {
		width: '100%',
		height: '100%',
		flexDirection: 'row', 
	},
	tasks: {
		width: '75%',
		borderRightColor: 'powderblue',
		borderRightWidth: 1,
		backgroundColor: 'rgba(0,0,0,0.5)', 
	},
	operations: {
		width: '25%',
		backgroundColor: 'skyblue',
		justifyContent: 'center',
		paddingTop: 20,
		paddingBottom: 20,
	},
	btn: {
	       borderWidth:1,
	       borderColor:'rgba(0,0,0,0.2)',
	       alignItems:'center',
	       justifyContent:'center',
	       width:50,
	       height:50,
	       backgroundColor:'#fff',
	       borderRadius:50,
	       margin: 5,
	} 
});