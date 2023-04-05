import React,{useState} from 'react'
import { Button, StyleSheet, Text, View} from 'react-native'

const ColorCCounter = ({color, onIncrease, onDecrease}) => {
    return (
        <View>
        <Text> {color} </Text>
        <Button title={`Increase ${color}`}
        onPress={()=> onIncrease()
        }
    
        />
        <Button title={`Decrease ${color} `}
                    onPress={()=> onDecrease()}
        />
    </View>)
}

const styles = StyleSheet.create({})
export default ColorCCounter