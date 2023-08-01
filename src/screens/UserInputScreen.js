import React, { Fragment, useState } from 'react'
import { Text, View, StyleSheet, TextInput, Button, SafeAreaView } from 'react-native'
import { FlatList } from 'react-native-web'

const UserInputScreen = () => {
    const [boxName, setBoxName] = useState('')
    const [boxes, setBoxes] = useState(['boxOne', 'boxTwo'])
    const handleBoxes = () => {
        const newName = boxName;
        console.log(newName)
        setBoxes((previousValue) => [...previousValue, newName])
        setBoxName('')

    }
    console.log(boxes)
    return (<View style={styles.ViewStyle} >
        <TextInput autoCapitalize='none'
            autoCorrect='true'
            value={boxName}
            onChangeText={(value) => setBoxName(value)}
        />
        <Button title='Save' onPress={() => handleBoxes()} />

        <FlatList

            style={{ borderColor: 'black', borderWidth: 1 }}
            data={boxes}
            renderItem={({ item }) => { return < Text > Box {item}</Text> }}
            keyExtractor={(index) => index.toString() + Math.random()}
        />

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