import React, {useState} from 'react'
import { StyleSheet, View, Text } from 'react-native'


const CounterDetail = ()=> {
const [count,setCounter] = useState(0);
    const decreaseValue = () => {
        if(count > 0){
            setCounter(count-1)
        }
    }
    return (<View>
        <Text> Count: {count}</Text>
        <button onClick={()=> setCounter(count+1)} > Increase </button>
        <button onClick={()=> decreaseValue() } >Decrease </button>
        </View>)
}

const styles = StyleSheet.create({

})
export default CounterDetail