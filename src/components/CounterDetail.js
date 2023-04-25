import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'


const CounterDetail = ({ count, increaseCount, decreaseCount }) => {
    return (<View>
        <Text> Count: {count}</Text>
        <Button title='Increase' onPress={() => increaseCount()} />
        <Button title='Decrease' onPress={() => decreaseCount()} />
    </View>)
}

const styles = StyleSheet.create({

})
export default CounterDetail