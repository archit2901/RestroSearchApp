import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation"; 

const navigator = createStackNavigator({
       Search : SearchScreen,
       ResultsShow : ResultsShowScreen     
    },
    {
        intialRouteName : 'Search',
        defaultNavigationOptions : {
          title : 'Restaurant Search'
    }
});
  
export default createAppContainer(navigator);