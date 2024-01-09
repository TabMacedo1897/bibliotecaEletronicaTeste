import React, {Component} from 'react'
import {View, Text, Stylesheet, TouchableOpacity} from 'react-native'

export default class TransactionScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Tela de Transação</Text>
            </View>
        )
    }
}
const styles = Stylesheet.create({
    container:{
       flex: 1,
       justifyContent: "center",
       alignItems: "center"
    }
})