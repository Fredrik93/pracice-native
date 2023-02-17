import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'


const ListScreen = () => {
    const friends = [
        { name: "Friend#1", age: 20 },
        { name: "Friend#2", age: 45 },
        { name: "Friend#3", age: 32 },
        { name: "Friend#4", age: 27 },
        { name: "Friend#5", age: 53 },
        { name: "Friend#6", age: 30 },
        { name: "Friend#7", age: 12 },
        { name: "Friend#8", age: 65 },
        { name: "Friend#9", age: 33 }
    ]
    return (
        <FlatList
            data={friends}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(friend) => friend.name}
            //you can destructure this and write renderItem=({item}) => .. instead
            renderItem={(elem) => {
                return <Text style={styles.textStyle} > {elem.item.name} - Age: {elem.item.age}</Text>
            }} />)
}



const styles = StyleSheet.create({
    textStyle: {
        backgroundColor: "yellow",
        marginVertical: 50
    }
})


export default ListScreen