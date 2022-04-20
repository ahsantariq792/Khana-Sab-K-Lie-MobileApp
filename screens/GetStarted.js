import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Logo from '../Components/Logo'

const GetStarted = ({ navigation }) => {

    return (
        <View style={styles.Container}>
            <View style={styles.LogoContainer}>
                <Logo />
            </View>
            <View style={styles.footer}>
                <View >
                    <Text style={styles.footerText}>
                        Stay Connected With Saylani
                    </Text>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.buttonStyle}
                            onPress={() =>
                                navigation.navigate("Home")
                            }
                        >
                            <Text style={styles.buttonText}> Get Started </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        marginTop: 25,
    },
    LogoContainer: {
        marginVertical: 140,
        // marginBottom: 200,
    },
    footer: {
        flex: 1,
        backgroundColor: "#32CD32",
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        marginTop: 120,
    },
    footerText: {
        fontSize: 30,
        paddingHorizontal: 15,
        marginHorizontal: 20,
        marginTop: 20,
    },
    buttonContainer: {
        alignItems: "flex-end",
        flex: 1,
    },
    buttonStyle: {
        backgroundColor: "white",
        fontSize: 20,
        padding: 8,
        margin: 8,
        borderRadius: 8,
        height: 40,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '400',
    },
})
export default GetStarted