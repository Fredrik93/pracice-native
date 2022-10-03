import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ComponentsScreen from './src/ComponentScreen';

const navigator = createStackNavigator(
  {
    Home: ComponentsScreen,
    Components: ComponentsScreen,
  },
  {
    initialRouteName: 'Components',
    defaultNavigationOptions: {
      title: 'Home',
    },
  }
);

export default createAppContainer(navigator);