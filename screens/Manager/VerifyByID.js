import { View, Text, TextInput, StyleSheet, Alert, Modal, ToastAndroid, Button, StatusBar } from "react-native"
import { TouchableOpacity } from "react-native";
import { react, useState } from "react";
import Logo from "../../Components/Logo";


const VerifyByID = ({ navigation }) => {
    const [userID, setuserID] = useState("")


    const showToastWithGravity = () => {
        ToastAndroid.showWithGravity(
            "Invalid ID",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
    };


    const submit = () => {
        console.log(userID)
        if (userID.length < 8) {
            showToastWithGravity()
        }
        return
    }


    return (
        <View style={styles.container}>
            <View>
                <Logo />
            </View>

            <View style={styles.inputForm}>
                <View style={styles.inputContainer}>
                    <Text style={styles.textStyle}>
                        Enter ID to Verify
                    </Text>
                    <TextInput style={styles.inputBox}
                        autoCapitalize="none"
                        value={userID}
                        onChangeText={(userID) => setuserID(userID)}
                    />

                </View>

                <View style={styles.buttonArea}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={submit}
                    >
                        <Text style={styles.loginText}>
                            Verify ID
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                            navigation.navigate("VerifyByQR")
                        }
                    >
                        <Text style={styles.loginText}>
                            Verify By QR code
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        paddingHorizontal: 20,
        paddingVertical: 80,
    },
    textStyle: {
        fontSize: 16,
        marginTop: 8,
        marginBottom: 5,
        // fontFamily: "JosefinSans_500Medium",

    },
    inputContainer: {
        marginTop: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,

    },
    inputForm: {
        marginTop: 100,
        backgroundColor: "white",
        borderRadius: 20,
    },
    inputBox: {
        borderColor: "black",
        height: 40,
        width: "100%",
        borderRadius: 5,
        borderWidth: 1,
        padding: 10,
        borderRadius: 18,
    },

    checkboxContainer: {
        marginVertical: 20,
        display: "flex",
        flexDirection: "row",
    },
    checkboxText: {
        marginLeft: 10,
        // fontFamily: "JosefinSans_500Medium",

    },
    button: {
        backgroundColor: "green",
        height: 40,
        width: "80%",
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
    },
    buttonArea: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    loginText: {
        color: "white",
        textAlign: "center",

    }
});

export default VerifyByID;