import { View, Text, TextInput, StyleSheet, ToastAndroid } from "react-native"
import { TouchableOpacity } from "react-native";
import { react, useState } from "react";
import Logo from "../../Components/Logo";
// import {
//     JosefinSans_400Regular,
//     JosefinSans_500Medium,
//     JosefinSans_700Bold,
// } from "@expo-google-fonts/josefin-sans";

// import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";

const LoginManager = ({ navigation }) => {


    const [agree, setAgree] = useState(false)
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    // let [fontsLoad, error] = useFonts({
    //     JosefinSans_400Regular,
    //     JosefinSans_500Medium,
    //     JosefinSans_700Bold,
    // });


    // if (!fontsLoad) {
    //     return <AppLoading />;
    // }
    const showToastWithGravity = () => {
        ToastAndroid.showWithGravity(
            "Invalid ID or Password",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
    };

    const submit = () => {
        console.log(userName)
        console.log(password)
        if (userName.length < 3 || password.length < 8) {
            showToastWithGravity()
        }
        else {
            navigation.navigate("ManagerHome")
        }
    }


    return (
        <View style={styles.container}>
            <View>
                <Logo />
            </View>

            <View style={styles.headingContainer}>
                <Text style={styles.headingStyle}>
                    Welcome Branch Manager !
                </Text>
                <Text style={styles.headingStyle}>
                    Enter Credentials
                </Text>
            </View>

            <View style={styles.inputForm}>
                <View style={styles.inputContainer}>
                    <Text style={styles.textStyle}>
                        Enter Email
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

                <View style={styles.buttonArea}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={submit}
                    >
                        <Text style={styles.loginText}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        paddingHorizontal: 30,
        paddingVertical: 80,
    },
    textStyle: {
        fontSize: 16,
        marginTop: 8,
        marginBottom: 5,
        // fontFamily: "JosefinSans_500Medium",
    },
    headingContainer: {
        marginTop: 40,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    headingStyle: {
        fontSize: 18,
    },
    inputContainer: {
        marginBottom: 20,
    },
    inputBox: {
        borderColor: "black",
        height: 40,
        width: "100%",
        borderRadius: 5,
        borderWidth: 1,
        padding: 10,
    },
    checkboxContainer: {
        marginVertical: 20,
        display: "flex",
        flexDirection: "row",
    },
    button: {
        backgroundColor: "green",
        height: 40,
        width: "80%",
        borderRadius: 5,
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
    }
});

export default LoginManager; 