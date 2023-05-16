import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const TextScreen = () => {
    const [password, setPassword] = useState('')

    const checkLengthOfPassword = () => {
        return password.length < 4 ? <Text>Password must be longer than 5 characters</Text> : null

    }
    return (
        <View>
            <TextInput
                style={styles.input}
                autoCapitalize='none'
                autoCorrect='false'
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
            />
            <Text>Enter password: {password}</Text>
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