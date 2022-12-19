import React, { Fragment } from 'react'
import { StyleSheet, Text, Image, TextBase, View } from 'react-native'
import ImageDetail from '../components/ImageDetail'
const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="forest" />
            <ImageDetail title="beach" />
            <ImageDetail title="mountain" />
        </View>
    )
}

const styles = StyleSheet.create({


})

export default ImageScreen;