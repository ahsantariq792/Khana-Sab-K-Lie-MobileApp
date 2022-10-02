import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'

export default function MapPage({navigation}) {
    return (
        <View style={styles.container}>
            <Text>MapPage</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() =>
                    navigation.navigate("RashanForm")
                }
            >
                <Text style={styles.buttonText}>
                    REQUEST FOR FOOD
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
    },
    buttonText: {
        color: "white",
        textAlign: "center",

    },
    button: {
        backgroundColor: "green",
        height: 40,
        width: "60%",
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
    },

})