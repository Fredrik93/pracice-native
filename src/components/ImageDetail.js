import React, { Fragment } from 'react'
import { StyleSheet, Text, Image, TextBase, View } from 'react-native'
const ImageDetail = (props) => {

    console.log(props)
    return (
        <View>
        <img src={props.imageSource} />
        <Text > Text: {props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({


})

export default ImageDetail;