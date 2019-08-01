import React, { Component } from 'react'
import { Text, View } from 'react-native'
import example from '@assets/example.json'
import { FlatList } from 'react-native-gesture-handler';

class CustomSwiper extends Component {

    
    render() {
        return (
            <View>
                <FlatList> {/* Flatlist for badges */}

                </FlatList>

                <FlatList> {/* Flatlist for content */}

                </FlatList>
            </View>
        )
    }
}




export default CustomSwiper
