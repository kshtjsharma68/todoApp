import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../components/Home/index';
import New from '../components/Task/index';
import News from '../components/News/index';

const AppNavigator = createStackNavigator({
	Home: {
		screen: Home 
	},
	taskAdd: {
		screen: New
	},
	news: {
		screen	: News
	}
}, {
	defaultNavigationOptions: {
		header: null 
	}
});

export default createAppContainer(AppNavigator);