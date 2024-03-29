import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Logo from '../Components/Logo'


const Home = ({ navigation }) => {
    return (
        <View style={styles.Container}>
            <View style={styles.subContainer}>
                <View style={styles.LogoContainer}>
                    <Logo />
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.textheadingStyle}>Welcome To Khana Sab K Lie</Text>
                    <Text style={styles.textStyle}>Powered By Saylani</Text>
                </View>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() =>
                        navigation.navigate("LoginUser")
                    }
                >
                    <Text style={styles.buttonText}> Public User </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() =>
                        navigation.navigate("LoginManager")
                    }
                >
                    <Text style={styles.buttonText}> Manager </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        paddingVertical: 240,
    },
    LogoContainer: {
        marginBottom: 60,
    },
    subContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    textContainer: {
        marginBottom: 35
    },
    textStyle: {
        textAlign: "center",
        fontSize: 16,
    },
    textheadingStyle: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: 'bold'
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