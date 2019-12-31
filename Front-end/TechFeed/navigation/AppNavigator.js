import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from '../Components/LoginScreen'
import SignUpScreen from '../Components/SignUpScreen'
import Drawer from './DrawerNavigator'
import Login from'../Components/Login'
const stackNavigator = createStackNavigator(
    {
        LoginScreen: {
            screen: LoginScreen,
            navigationOptions: ({ navigation }) => ({
                header: null
              })
        },
        Login:{
            screen:Login,
            navigationOptions: ({ navigation }) => ({
                header: null
              })
        },
        SignUp:{
            screen: SignUpScreen,
            navigationOptions: ({ navigation }) => ({
                header: null
              })
        },
        DrawerNavigator:Drawer,
    }
);
export default createAppContainer(stackNavigator);
