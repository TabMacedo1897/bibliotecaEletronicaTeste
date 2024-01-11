import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput, ImageBackground, Image} from 'react-native'

export default class TransactionScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ImageBackground>
                    <View style={styles.containerImagens}>
                        <Text>Ola</Text>
                        <Image/>
                        <Image/>
                    </View>
                    
                    <View style={styles.containerInputs}>

                    </View>
                </ImageBackground>
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