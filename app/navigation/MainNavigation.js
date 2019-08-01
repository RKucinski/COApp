import React from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeStack from "./HomeStack";
import HeaderBar from "../components/HeaderBar"
import TestScreen from '../scenes/TestScreen'


const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: HomeStack
    },
    Test : TestScreen
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: {
      header: () => <HeaderBar />
    }
  }
)

const Navigation = createAppContainer(AppNavigator)
export default Navigation
