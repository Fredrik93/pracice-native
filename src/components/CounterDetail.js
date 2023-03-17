import React, { useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'


const CounterDetail = () => {
    const [count, setCounter] = useState(0);
    const decreaseValue = () => {
        if (count > 0) {
            setCounter(count - 1)
        }
    }
    return (<View>
        <Text> Count: {count}</Text>
        <Button title='Increase' onPress={() => { alert("tjeenare") }} />
    </View>)
}

const styles = StyleSheet.create({

})
export default CounterDetail