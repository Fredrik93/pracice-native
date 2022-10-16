import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps'

const HomeScreen = (props) => {
    return <Text> {props.homeText} </Text>
}



export default HomeScreen