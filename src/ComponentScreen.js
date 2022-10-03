import React, { Fragment } from 'react'
import { Text, StyleSheet } from 'react-native'
import HomeScreen from './screens/HomeScreen'

const ComponentsScreen = () => {
    return (
        <Fragment>
            <HomeScreen homeText="The Home Screen rendered" />
        </Fragment>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default ComponentsScreen