import React, { useState } from 'react'
import Checkbox from "expo-checkbox";
import {
    View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView, Modal
} from "react-native"
import {
    Select, FormControl, Center, Alert, ErrorMessage, CheckIcon, WarningOutlineIcon, VStack, HStack, IconButton, CloseIcon, Box,
} from "native-base";
import ApplicationSubmitted from '../../Components/ApplicationSubmitted';
import Logo from '../../Components/Logo';


const RashanForm = ({ navigation }) => {
    const [agree, setAgree] = useState(false)
    const [userName, setUserName] = useState("")
    const [fatherName, setFatherName] = useState("")
    const [email, setEmail] = useState("")
    const [CNIC, setCNIC] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [familyMembers, setFamilyMembers] = useState("")
    const [income, setIncome] = useState("")
    const [rashan, setRashan] = useState("")
    const [modalVisible, setModalVisible] = useState(false);

    const submit = async () => {
        setModalVisible(true)
        await setTimeout(() => {
            navigation.navigate("ApplicationStatus")
            setModalVisible(false)
        }
            , 2000);

    }


    return (

        <ScrollView>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <ApplicationSubmitted></ApplicationSubmitted>
                </Modal>
            </View>

            <View style={styles.container}>
                <View style={styles.LogoContainer}>
                    <Logo />
                </View>

                <Text style={styles.heading}>
                    REQUEST FOR RASHAN
                </Text>
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
                            Enter Father Name
                        </Text>
                        <TextInput style={styles.inputBox}
                            autoCapitalize="none"
                             autoComplete="off"
                            value={fatherName}
                            onChangeText={(fatherName) => setFatherName(fatherName)}
                        />

                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.textStyle}>
                            Enter Date Of Birth
                        </Text>
                        <TextInput style={styles.inputBox}
                            autoCapitalize="none"
                             autoComplete="off"
                            value={dateOfBirth}
                            onChangeText={(dateOfBirth) => setDateOfBirth(dateOfBirth)}
                        />

                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.textStyle}>
                            Enter CNIC Number
                        </Text>
                        <TextInput style={styles.inputBox}
                            autoCapitalize="none"
                             autoComplete="off"
                            value={CNIC}
                            onChangeText={(CNIC) => setCNIC(CNIC)}
                        />

                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.textStyle}>
                            Enter No of Family Members
                        </Text>
                        <TextInput style={styles.inputBox}
                            type="number"
                            autoCapitalize="none"
                             autoComplete="off"
                            value={familyMembers}
                            onChangeText={(familyMembers) => setFamilyMembers(familyMembers)}
                        />

                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.textStyle}>
                            Enter Income
                        </Text>
                        <TextInput style={styles.inputBox}
                            autoCapitalize="none"
                             autoComplete="off"
                            value={income}
                            onChangeText={(income) => setIncome(income)}
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
                        <Text style={styles.textStyle}>Choose Rashan</Text>

                        <FormControl w="300" maxW="300" isRequired style={styles.dropdown}
                        >
                            <Select
                                minWidth="200"
                                borderRadius={18}
                                height="10"
                                // accessibilityLabel="Choose Rashan"
                                placeholder="Choose Rashan"
                                _selectedItem={{
                                    endIcon: <CheckIcon size={5} />
                                }} mt="2"
                                value={rashan}
                                onValueChange={(rashan) => setRashan(rashan)}

                            >
                                <Select.Item label="One Day" value="One Day" />
                                <Select.Item label="Two Days" value="Two Days" />
                                <Select.Item label="One Week" value="One Week" />
                                <Select.Item label="One Month" value="One Month" />
                            </Select>
                            {/* <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                Please make a selection!
                            </FormControl.ErrorMessage> */}
                        </FormControl>
                    </View>

















                    <View style={styles.checkboxContainer}>
                        <Checkbox
                            value={agree}
                            onValueChange={() => setAgree(!agree)}
                            color={(agree) ? "green" : undefined}
                        />


                        <Text style={styles.checkboxText}>
                            I agree that all the provided information is valid and correct
                        </Text>
                    </View>

                    <View style={styles.buttonArea}>
                        <TouchableOpacity
                            style={[styles.button, { backgroundColor: (agree) ? "green" : "grey" }]} disabled={!agree}
                            onPress={submit}
                        >
                            <Text style={styles.loginText}>
                                Submit
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView >
    )
}

export default RashanForm

const styles = StyleSheet.create({
    container: {
        height: "100%",
        paddingHorizontal: 30,
        // paddingVertical: 80,
    },
    textStyle: {
        fontSize: 16,
        marginVertical: 4,
        // fontFamily: "JosefinSans_500Medium",

    },
    heading: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: "800",
        marginVertical: 16,
        letterSpacing: 3,
    },
    inputContainer: {
        marginTop: 20,
    },
    inputBox: {
        borderColor: "grey",
        height: 40,
        width: "100%",
        borderRadius: 18,
        borderWidth: 1,
        padding: 10,
        marginVertical: 10,

    },
    dropdown: {
        borderRadius: 18,
        width: "100%",
        borderColor: "grey",


    },
    secondContainer: {
        backgroundColor: "white",
        borderRadius: 20,
        paddingHorizontal: 20,
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