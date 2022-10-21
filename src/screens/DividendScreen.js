import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'



const DividendScreen = ( ) => {
    const listOfStuff=[
        {name: "Coca Cola", dividend: 12},
        {name: "Kinnevik", dividend: 5}

    ]
return  (
    <View>
    <FlatList
        data={listOfStuff}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.name}
        //you can destructure this and write renderItem=({item}) => .. instead
        renderItem={(obj) => {
            return <Text style={styles.textStyle} > {obj.item.name} - Dividend total: {obj.item.dividend}</Text>
        }} />
   
        </View>
        )
}


const styles = StyleSheet.create({
    textStyle: {
      
        marginVertical: 5
    }
})

export default DividendScreen;

