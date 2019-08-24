import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Profile from '~/pages/Profile';

const Routes = createAppContainer(
    createStackNavigator(

        { 
            Main: {
                screen: Main, 
                navigationOptions: {
                    header: null,
                }
            }, 
            Profile: {
                screen: Profile, 
                navigationOptions: {
                    title: "Usuários Salvos",               
                    headerTintColor: "black",
                }
            }
        }
        
        ,
        
        {
            initialRouteName: 'Main'
        }

        )
    );

export default Routes;
