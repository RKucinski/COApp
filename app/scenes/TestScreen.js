// BEGIN OF TESTING PURPOSES
import React from "react";
import { View, Text, Button } from "react-native";
import { ref } from '../db/getRequests'
import {connect} from 'react-redux'
import {example} from '@actions'

class HomeScreen extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            data: ""
        }
    }


    render() {
        console.log(this.props)
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text style={{fontSize:35}}>TESTSCREEN : FOR TESTING PURPOSES</Text>
                <Button
                    onPress={() => { 
                        const dataRecuperee = ref() 
                        this.setState ({
                            data: dataRecuperee
                        })
                        console.log(dataRecuperee)
                        console.log(this.state.data)
                    }}
                    title='Press huhu'
                />

                <Button
                    onPress={() => { 
                        this.props.example('Starwars')
                        console.log(this.props.favoriteFilm)
                    }}
                    title='Press for redux'
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        favoriteFilm: state.bestFilm
    }
}

export default connect(mapStateToProps, {example})(HomeScreen)

// END OF TESTING PURPOSES