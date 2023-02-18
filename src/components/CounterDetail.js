import React, {useState} from 'react'
import { StyleSheet, View, Text } from 'react-native'


const CounterDetail = ()=> {
const [count,setCounter] = useState(0);

    return (<View>
        <Text> Count: {count}</Text>
        <button onClick={()=> setCounter(count+1)} > Increase </button>
        </View>)
}

const styles = StyleSheet.create({

})
export default CounterDetail