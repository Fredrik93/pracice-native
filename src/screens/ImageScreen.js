import React, { Fragment } from 'react'
import { StyleSheet, Text, Image, TextBase, View } from 'react-native'
import forest from '../../assets/forest.jpg'

import ImageDetail from '../components/ImageDetail'
const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="forest" imageSource={forest} />
            <ImageDetail title="beach" imageSource={require('../../assets/mountain.jpg')} />
            <ImageDetail title="mountain" imageSource={require('../../assets/beach.jpg')} />
        </View>
    )
}

const styles = StyleSheet.create({


})

export default ImageScreen;