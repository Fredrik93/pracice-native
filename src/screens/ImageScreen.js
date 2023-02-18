import React, { Fragment } from 'react'
import { StyleSheet, Text, Image, TextBase, View } from 'react-native'
import forest from '../../assets/forest.jpg'

import ImageDetail from '../components/ImageDetail'
const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="forest" imageSource={forest} score="9" />
            <ImageDetail title="beach" imageSource={require('../../assets/mountain.jpg')  }score="9"  />
            <ImageDetail title="mountain" imageSource={require('../../assets/beach.jpg') }score="9" />
        </View>
    )
}

const styles = StyleSheet.create({


})

export default ImageScreen;