import { createDrawerNavigator } from 'react-navigation-drawer';

import TimeTable from '../Components/TimeTable'
export default createDrawerNavigator({
    Home:{  
        screen: TimeTable,
        navigatorOptions: {
            drawerLabel: 'Home',
            header: null,
          }
    },
    kk:{  
        screen: TimeTable,
        navigatorOptions: {
            drawerLabel: 'Home',
            header: null,
          }
    }
},{
    initialRouteName:'Home',
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  });