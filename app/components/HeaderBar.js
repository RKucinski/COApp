import React, { Component } from 'react'
import { Text, View, StyleSheet, Platform, StatusBar, Image, ImageBackground } from 'react-native'
import colors from '@constants/Colors'
import Icon from 'react-native-vector-icons/Ionicons';
import PictoButton from './PictoButton';

const heightStatusBar = StatusBar.currentHeight

export default class HeaderBar extends Component {

    flatRender = () => {
        return(
            <View style={[localeStyle.container, {backgroundColor: colors.brown}]}>
                <View style={[{flex: 1}, localeStyle.items]}>
                    <PictoButton 
                        image={require("@icons/home.png")}
                        style={localeStyle.picto}
                        theme={"light"}
                    />
                </View>
                <View style={[{flex: 4}, localeStyle.items]}>                
                    <Image 
                        source={require('@images/CO_Logo.png')}
                        style={{height: 50, width:'100%'}}
                        resizeMode='contain'
                    />
                </View>
                <View style={[{flex: 1}, localeStyle.items]}>                
                    <PictoButton 
                        image={require("@icons/more.png")}
                        style={localeStyle.picto}
                        theme={"light"}
                    />
                </View>
            </View>
        )}

    parcheminRender = () => {
        return(
            <ImageBackground
                source={require('@images/fondHeaderBar.png')}
                style={{height: 56}}>
                <View style={localeStyle.container}>
                    <View style={[{flex: 1}, localeStyle.items]}>
                        <PictoButton 
                            image={require("@icons/home.png")}
                            style={localeStyle.picto}
                            theme={"light"}
                        />
                    </View>
                    <View style={[{flex: 4}, localeStyle.items]}>                
                        <Image 
                            source={require('@images/CO_Logo.png')}
                            style={{height: 50, width:'100%'}}
                            resizeMode='contain'
                        />
                    </View>
                    <View style={[{flex: 1}, localeStyle.items]}>                
                        <PictoButton 
                            image={require("@icons/more.png")}
                            style={localeStyle.picto}
                            theme={"light"}
                        />
                    </View>
                </View>
            </ImageBackground>
        )}



    render() {
        console.log('Inside HeaderBar')
        console.log(this.props)

        return (
            this.flatRender()
        )
    }
}

const localeStyle = StyleSheet.create({
    container: {
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 10,
        marginTop: Platform.OS === 'ios' ? heightStatusBar : 0,
    },
    text: {
        color: colors.linen
    },
    items: {
        alignItems: 'center'
    },
    picto: {
        height: 30,
        width : 30,
        
    },
})