import React, { useState } from 'react'

import { View, Text, StyleSheet } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const SquareScreen = () => {
    const CHANGE_RGB_COLOR = 15;
    const [red, setRed] = useState(0)
    const [blue, setBlue] = useState(0)
    const [green, setGreen] = useState(0)

    const setColor = (color, change) => {
        if (color === 'red') {
            if (red + change > 255 || red + change < 0) {
                return;
            } else { setRed(red + change) }
        }
    }
    return (
        <View>
            <ColorCounter
                color="Red"
                onIncrease={() => setColor('red', CHANGE_RGB_COLOR)}
                onDecrease={() => setColor('red', -1 * CHANGE_RGB_COLOR)} />
            <ColorCounter color="Blue"
                onIncrease={() => { setBlue(blue + CHANGE_RGB_COLOR) }}
                onDecrease={() => { setBlue(blue - CHANGE_RGB_COLOR) }}
            />
            <ColorCounter color="Green"
                onIncrease={() => { setGreen(green + CHANGE_RGB_COLOR) }}
                onDecrease={() => { setGreen(green - CHANGE_RGB_COLOR) }}
            />
            <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red},${green},${blue})` }} ></View>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default SquareScreen

