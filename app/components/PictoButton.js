import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '@constants/Colors'

class PictoButton extends Component {
    render() {
        const { style, image, theme } = this.props

        return (
            
            <View style={localStyle.container}>
                <TouchableOpacity>
                    <Image 
                        source={image} 
                        resizeMode={'cover'}
                        style={[localStyle.Image, style]}
                        tintColor = {theme === "light" ? colors.linen : colors.brown} />
                </TouchableOpacity>
            </View>
        )
    }
}

const localStyle = StyleSheet.create({
    container: {
        
    },
    Image: {
        height: 25,
        width: 25
    }
})


export default PictoButton