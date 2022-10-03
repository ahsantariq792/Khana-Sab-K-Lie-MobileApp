import { View, Text, TextInput, StyleSheet, Alert, Modal, ToastAndroid, Button, StatusBar } from "react-native"
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

const LoginUser = ({ navigation }) => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [modalVisible, setModalVisible] = useState(false);

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
            // setModalVisible(true)
            // setTimeout(() => {
            //     setModalVisible(false)
            // }, 2000);
            showToastWithGravity()
        }
        else {
            navigation.navigate("MapPage")
        }
    }


    return (
        <View style={styles.container}>
            <View>
                <Logo />
            </View>


            {/* <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <LoginAlert />
                </Modal>
            </View> */}

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

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                            navigation.navigate("Signup")
                        }
                    >
                        <Text style={styles.loginText}>
                            Create new Account
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

export default LoginUser;