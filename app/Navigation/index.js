import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../components/Home/index';
import New from '../components/Task/index';

const AppNavigator = createStackNavigator({
	Home: {
		screen: Home 
	},
	taskAdd: {
		screen: New
	}
});

export default createAppContainer(AppNavigator);