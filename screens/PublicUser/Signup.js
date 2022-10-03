import Checkbox from "expo-checkbox";
import {
    View, Text, TextInput, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, SafeAreaView, ScrollView, TouchableWithoutFeedback, Keyboard
} from "react-native"
import { react, useState } from "react";
import Logo from "../../Components/Logo";

const Signup = ({ navigation }) => {

    const [agree, setAgree] = useState(false)
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")


    const submit = () => {
        console.log(userName)
        console.log(email)
        console.log(phoneNumber)
        console.log(password)
    }

    return (
        <>
            <ScrollView style={styles.container}>

                <View style={styles.LogoContainer}>
                    <Logo />
                </View>
                <View>
                    <Text style={styles.heading}>
                        SIGNUP
                    </Text>
                </View>
                <View style={styles.secondContainer}>

                    <View style={styles.inputContainer}>
                        <Text style={styles.textStyle}>
                            Enter Name
                        </Text>
                        <TextInput style={styles.inputBox}
                            autoCapitalize="none"
                             autoComplete="off"
                            value={userName}
                            onChangeText={(username) => setUserName(username)}
                        />

                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.textStyle}>
                            Enter Email
                        </Text>
                        <TextInput style={styles.inputBox}
                            autoCapitalize="none"
                             autoComplete="off"
                            value={email}
                            onChangeText={(email) => setEmail(email)}
                        />

                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.textStyle}>
                            Enter Phone Number
                        </Text>
                        <TextInput style={styles.inputBox}
                            autoCapitalize="none"
                            autoComplete="off"
                            value={phoneNumber}
                            onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
                        />

                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.textStyle}>
                            Enter Password
                        </Text>
                        <TextInput style={styles.inputBox}
                            autoCapitalize="none"
                             autoComplete="off"
                            secureTextEntry={true}
                            value={password}
                            onChangeText={(password) => setPassword(password)}
                        />

                    </View>



                    <View style={styles.checkboxContainer}>
                        <Checkbox
                            value={agree}
                            onValueChange={() => setAgree(!agree)}
                            color={(agree) ? "green" : undefined}
                        />


                        <Text style={styles.checkboxText}>
                            I agree with the terms and conditions
                        </Text>
                    </View>

                    <View style={styles.buttonArea}>
                        <TouchableOpacity
                            style={[styles.button, { backgroundColor: (agree) ? "green" : "grey" }]} disabled={!agree}
                            onPress={submit}
                        >
                            <Text style={styles.loginText}>
                                Register
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        paddingHorizontal: 30,
        paddingVertical: 12,
    },
    heading: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: "800",
        letterSpacing: 3,
    },
    textStyle: {
        fontSize: 16,
        marginVertical: 4,
        // fontFamily: "JosefinSans_500Medium",
    },
    inputContainer: {
        marginTop: 20,
    },
    LogoContainer: {
        marginBottom: 20,
    },
    inputBox: {
        borderColor: "black",
        height: 40,
        width: "100%",
        borderRadius: 18,
        borderWidth: 1,
        padding: 10,
    },
    secondContainer: {
        backgroundColor: "white",
        borderRadius: 20,
        paddingHorizontal: 20,
        marginTop: 8,
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
        backgroundColor: "blue",
        height: 40,
        width: "80%",
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
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

    },
    imageContainer: {
        flex: 1,
        alignItems: "center",
        marginVertical: 20,
    },
    image: {
        height: 100,
        width: 200,
    },
});

export default Signup;