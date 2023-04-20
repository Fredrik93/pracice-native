import React, { useReducer } from 'react'

import { View, Text, StyleSheet } from 'react-native'
import ColorCounter from '../components/ColorCounter'
const CHANGE_RGB_COLOR = 15;

const reducer = (state, action) => {
    //State is === {red: number, green:number, blue:number}
    //action is === {colorToChange:'red' ||'green||'blue, amount: 15 || -15}

    switch (action.colorToChange) {
        //stopped here. you are removing state hooks and replacing them with a reducer. a reducer is useful for updating object state, just like hooks.
        // a reducer is just a function that changes state of an object.
        case 'red':
            return { ...state, red: state.red + action.amount }
        case 'green':
            return { ...state, green: state.green + action.amount }
        case 'blue':
            return { ...state, blue: state.blue + action.amount }
        default:
            return state;
    }

}

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
    const { red, green, blue } = state;
    console.log(state);
    return (
        <View>
            <ColorCounter
                color="Red"
                onIncrease={() => dispatch({ colorToChange: 'red', amount: CHANGE_RGB_COLOR })}
                onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * CHANGE_RGB_COLOR })} />
            <ColorCounter color="Blue"
                onIncrease={() => dispatch({ colorToChange: 'blue', amount: CHANGE_RGB_COLOR })}
                onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * CHANGE_RGB_COLOR })}
            />
            <ColorCounter color="Green"
                onIncrease={() => dispatch({ colorToChange: 'green', amount: CHANGE_RGB_COLOR })}
                onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * CHANGE_RGB_COLOR })}
            />
            <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red},${green},${blue})` }} ></View>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default SquareScreen

