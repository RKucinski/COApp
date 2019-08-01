import React, { Component } from 'react'
import { createStackNavigator } from "react-navigation";
import Homepage from '../scenes/Homepage';
import HomeTabs from './HomeTabs';



const HomeStack = createStackNavigator({
  Home: Homepage
}, 
{
        headerMode: 'none',

});

export default HomeStack