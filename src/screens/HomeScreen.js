import React from 'react'
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native'
import ImageScreen from './ImageScreen'
import ListScreen from './ListScreen'

const HomeScreen = ({ navigation }) => {
    return <View style={styles.image} >

        <ImageScreen />

        <Text style={styles.text} > {"Home Screen"} </Text>
        <Button
            onPress={() => navigation.navigate("Components")}
            title='Go to Components Demo' />
        <View style={styles.space} />
        <Button title='Go to List Demo'
            onPress={() => { navigation.navigate('List') }}
        />
        <View style={styles.space} />

        <TouchableOpacity
            onPress={() => { navigation.navigate('List') }}
        >
            <Text>Go To List Demo</Text>
        </TouchableOpacity>

        <Button title='Go to Image Demo'
            onPress={() => { navigation.navigate('Images') }}
        />



    </View>
}

const styles = StyleSheet.create({
    image: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: "2px solid black"
    },
    text: {
        fontSize: 30
    },
    space: {
        width: 20, // or whatever size you need
        height: 20,
    },
})

export default HomeScreen