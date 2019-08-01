import React, { Component, Fragment } from 'react'
import { Text, View, ImageBackground, StyleSheet, Button } from 'react-native'
import colors from '@constants/Colors'
import CustomSwiper from '@components/CustomSwiper'
import HeaderBar from '../components/HeaderBar'
import TabNavigator from '../navigation/HomeTabs';

class Homepage extends Component {
    // static navigationOptions = {
    //     // headerTitle instead of title
    //     title: 'youpi',
    //     header: () => <HeaderBar />,
    //     // headerStyle: {
    //     //     backgroundColor: "transparent"
    //     // },

    //   }

    flatRender = () => {
        return(
            <Fragment>
            {/* <Button
                title={'teststest'}
                onPress={() => this.props.navigation.navigate('Test')}
            /> */}
            <TabNavigator></TabNavigator>
            </Fragment>
        )
    }

    parcheminRender = () => {
        return(
            <ImageBackground
                source={require('@images/background.png')}
                style={{ height: '100%', width: '100%'}}>
            </ImageBackground>
    )}

    render() {
        return (
            <Fragment>
                <View
                    style={[localeStyle.container, { height: '100%', width: '100%'}]}>
                    {this.flatRender()}
                </View>
            </Fragment>
        )
    }
}

const localeStyle = StyleSheet.create({
    container: {
        backgroundColor: colors.linen
    }
})

export default Homepage
