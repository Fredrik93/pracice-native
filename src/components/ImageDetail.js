import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ImageDetail = ({imageSource, title,score}) => {
    return (
        <View>
        <img src={imageSource} />
        <Text > Text: {title}</Text>
        <Text> Score - {score} </Text>
        </View>
    )
}

const styles = StyleSheet.create({


})

export default ImageDetail;