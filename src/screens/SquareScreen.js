import React, { useState } from 'react'

import { View, Text, StyleSheet } from 'react-native'
import ColorCounter from '../components/ColorCounter'
import { log } from 'react-native-reanimated';

const SquareScreen = () => {
    const CHANGE_RGB_COLOR = 15;
    const [red, setRed] = useState(0)
    const [blue, setBlue] = useState(0)
    const [green, setGreen] = useState(0)

    const setColor = (color, change) => {
        switch (color) {
            case 'red':
                console.log(red);
                red + change > 255 || red + change < 0 ? null : setRed(red + change)
                return;
            case 'blue':
                console.log(blue);
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
                return;
            case 'green':
                console.log(green);
                green + change > 255 || green + change < 0 ? null : setGreen(green + change)
                return;

            default:
                break;
        }

    }
    return (
        <View>
            <ColorCounter
                color="Red"
                onIncrease={() => setColor('red', CHANGE_RGB_COLOR)}
                onDecrease={() => setColor('red', -1 * CHANGE_RGB_COLOR)} />
            <ColorCounter color="Blue"
                onIncrease={() => { setColor('blue', CHANGE_RGB_COLOR) }}
                onDecrease={() => { setColor('blue', -1 * CHANGE_RGB_COLOR) }}
            />
            <ColorCounter color="Green"
                onIncrease={() => { setColor('green', CHANGE_RGB_COLOR) }}
                onDecrease={() => { setColor('green', -1 * CHANGE_RGB_COLOR) }}
            />
            <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red},${green},${blue})` }} ></View>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default SquareScreen

