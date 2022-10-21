import React from 'react'
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps'

const HomeScreen = () => {
    return <View> 
        <Text style={styles.text} > {"Home Screen"} </Text>
        <Button
        onPress={()=> console.log("Button Pressed")}
        title='Go to Components Demo' />

        <TouchableOpacity
        onPress={()=>{console.log("List Pressed")}}
        >
            <Text>Go To List Demo</Text>
            </TouchableOpacity>      
         </View> 
}

const styles = StyleSheet.create({
    text:{
        fontSize:30
    }
})

export default HomeScreen