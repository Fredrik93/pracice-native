import React, { useReducer, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import CounterDetail from '../components/CounterDetail'

const reducer = (state, action) => {
    switch (action.type) {
        case 'change_count':
            return { ...state, count: state.count + action.payload }
        default:
            return state
    }
}
const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    const increaseCount = () => {
        dispatch({ type: 'change_count', payload: 1 })
    }
    return (

        <View>
            <CounterDetail
                count={state.count}
                increaseCount={() => increaseCount()}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})


export default CounterScreen