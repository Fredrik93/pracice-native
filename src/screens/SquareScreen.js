import React, { useReducer } from 'react'

import { View, Text, StyleSheet } from 'react-native'
import ColorCounter from '../components/ColorCounter'
const CHANGE_RGB_COLOR = 15;

const reducer = (state, action) => {
    //State is === {red: number, green:number, blue:number}
    //action is === {type:'change_red' ||'change_green||'change_blue, payload: 15 || -15}

    switch (action.type) {
        //stopped here. you are removing state hooks and replacing them with a reducer. a reducer is useful for updating object state, just like hooks.
        // a reducer is just a function that changes state of an object.
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0
                //if true then return the old state, otherwise update it 
                ? state : { ...state, red: state.red + action.payload }
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0
                ? state : { ...state, green: state.green + action.payload }
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
                ? state : { ...state, blue: state.blue + action.payload }
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
                onIncrease={() => dispatch({ type: 'change_red', payload: CHANGE_RGB_COLOR })}
                onDecrease={() => dispatch({ type: 'change_red', payload: -1 * CHANGE_RGB_COLOR })} />
            <ColorCounter color="Blue"
                onIncrease={() => dispatch({ type: 'change_blue', payload: CHANGE_RGB_COLOR })}
                onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * CHANGE_RGB_COLOR })}
            />
            <ColorCounter color="Green"
                onIncrease={() => dispatch({ type: 'change_green', payload: CHANGE_RGB_COLOR })}
                onDecrease={() => dispatch({ type: 'change_green', payload: -1 * CHANGE_RGB_COLOR })}
            />
            <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red},${green},${blue})` }} ></View>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default SquareScreen

