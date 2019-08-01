import React from 'react'
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Scene1 from '../scenes/HomeTabsScenes/Scene1'
import Scene2 from '../scenes/HomeTabsScenes/Scene2'
import Scene3 from '../scenes/HomeTabsScenes/Scene3'
import HeaderBar from '../components/HeaderBar';
import BottomNavigator from '../components/TESTComponent'
import BottomBar from '../components/TESTComponent'

const HomeTabs = createBottomTabNavigator(
    {
        One: Scene1,
        Two: Scene2,
        Three: Scene3,
    },
    {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            // const { routeName } = navigation.state;
            // let IconComponent = Ionicons;
            // let iconName;
            // if (routeName === 'Home') {
            // iconName = `ios-information-circle${focused ? '' : '-outline'}`;
            // // Sometimes we want to add badges to some icons. 
            // // You can check the implementation below.
            // IconComponent = HomeIconWithBadge; 
            // } else if (routeName === 'Settings') {
            // iconName = `ios-options`;
            // }
            // You can return any component that you like here!
            // return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
    }),
    tabBarComponent: BottomBar
    // tabBarOptions: {
    //     activeTintColor: 'tomato',
    //     inactiveTintColor: 'gray',
    //     style: {
    //         width: '80%',
    //         backgroundColor: 'transparent',
    //         position: 'relative',
    //         borderWidth: 0
            
    //     }
    // },
    }
)
const TabNavigator = createAppContainer(HomeTabs)
export default TabNavigator