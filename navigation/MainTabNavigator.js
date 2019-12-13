import React from 'react'
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"
import HomeScreen from "../Screen/HomeScreen"
import SettingsScreen from "../Screen/SettingsScreen"
import { createAppContainer } from "react-navigation"
import Icon from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from 'react-navigation-stack'
import DetailsScreen from "../Screen/DetailsScreen"




const homeNavigator = createStackNavigator(
    {
        Home: { 
            screen: HomeScreen,
            navigationOptions: {
                title: 'A la Une des INFOS'
              }
         },
            

         DetailsScreen: { screen: DetailsScreen }
    },
    
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }
    });

const tabNavigator = createMaterialBottomTabNavigator({
    Home: {
        screen: homeNavigator,
        navigationOptions: {
            tabBarLabel: 'Accueil',
            tabBarIcon: ({ tintColor }) => (
                <Icon color={tintColor} size={25} name={'ios-home'} />
            )
        }
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: {
            tabBarLabel: 'Paramètres',
            tabBarIcon: ({ tintColor }) => (
                <Icon color={tintColor} size={25} name={'ios-settings'} />
            ),
            barStyle: { backgroundColor: 'red' }
        }
    }
},
    {
        initialRouteName: 'Home'
    }
);

export default createAppContainer(tabNavigator);