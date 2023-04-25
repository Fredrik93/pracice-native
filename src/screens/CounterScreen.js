import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import CounterDetail from '../components/CounterDetail'
const CounterScreen = () => {
    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(count + 1)
    }
    return (

        <View>
            <CounterDetail
                count={count}
                increaseCount={() => increaseCount()}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})


export default CounterScreen