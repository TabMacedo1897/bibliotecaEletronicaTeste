import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default class SearchScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Tela de Pesquisa</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
       flex: 1,
       justifyContent: "center",
       alignItems: "center"
    }
})