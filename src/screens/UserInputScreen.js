import React, { Fragment } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const UserInputScreen = () => {
    return (<View style={styles.ViewStyle} >
        <Text style={styles.TextStyle}>Child one</Text>
        <Text style={styles.TextStyle}>Child two</Text>
        <Text style={styles.TextStyle}>Child threeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</Text>
        <Text style={styles.TextStyle}>Child four</Text>



    </View >)
}
const styles = StyleSheet.create({
    Main: { backgroundColor: 'yellow' },
    ViewStyle: {

        borderWidth: 3,
        borderColor: 'black',
        //this is aligning stuff in the centre (flexbox stuff)
        alignItems: 'center'
    },
    TextStyle: {
        borderWidth: 3,
        borderColor: 'red'
    }
})

export default UserInputScreen