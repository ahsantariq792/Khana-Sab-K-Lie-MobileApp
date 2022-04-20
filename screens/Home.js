import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Logo from '../Components/Logo'
const Home = () => {
    return (
        <View style={styles.Container}>
            <Text style={styles.textStyle}>WELCOME</Text>

<View>
    
</View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.buttonStyle}
                // onPress={() =>
                //     navigation.navigate("Home")
                // }    
                >
                    <Text style={styles.buttonText}> Login </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonStyle}
                // onPress={() =>
                //     navigation.navigate("Home")
                // }
                >
                    <Text style={styles.buttonText}> Create Account </Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center"
    },
    textStyle: {
        fontSize: 28,
        fontWeight: "400",
        marginTop: 18,

    },
    buttonContainer: {
        flex: 1,
        justifyContent: "center",
    },
    buttonStyle: {
        backgroundColor: "green",
        fontSize: 20,
        padding: 10,
        margin: 8,
        borderRadius: 10,
        width: 200,
        textAlign: "center",
        height: 40,
    },
    buttonText: {
        color: "white",
        textAlign: "center",

    }

})