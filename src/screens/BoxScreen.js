import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle} >  Box  1</Text>
            <Text style={styles.textStyle} >  Box  2</Text>
            <Text style={styles.textStyle} >  Box  3 </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'

    },
    textStyle: {
        borderWidth: 2,
        borderColor: 'red',
        margin: 5
    }
})
export default BoxScreen