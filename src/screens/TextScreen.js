import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const TextScreen = () => {
    const [name, setName] = useState('')

    const checkLengthOfPassword = () => {
        return name.length < 5 ? <Text>Password must be longer than 5 characters</Text> : null

    }
    return (
        <View>
            <TextInput
                style={styles.input}
                autoCapitalize='none'
                autoCorrect='false'
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />
            <Text>Enter password: {name}</Text>
            {checkLengthOfPassword()}
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})
export default TextScreen