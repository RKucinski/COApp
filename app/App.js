import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground} from 'react-native';
import firebase from 'react-native-firebase'
import Navigation from './navigation/MainNavigation'
import { Provider } from 'react-redux'
import Store from './configureStore'
import HeaderBar from './components/HeaderBar';

// const ref = firebase.firestore()

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class App extends Component {


  componentDidMount() {
  //   firebase.firestore().collection('test').onSnapshot((snapshot) => {
  //     const posts = []
  //     snapshot.forEach((doc) =>{ 
  //         posts.push(doc._data)
  //     })
  //     console.log(posts)
  // })
  }
  

  render() {
    return (
      <Provider store={Store}>
          {/* <HeaderBar /> */}
          <ImageBackground
            source={require('@images/background.png')}
            style={{ height: '100%', width: '100%'}}>
            <Navigation/> 
          </ImageBackground>
      </Provider>
    )
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
