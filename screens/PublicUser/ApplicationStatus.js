import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ApplicationStatus = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/kahana.png')} style={styles.image} />
      </View>
      <View style={styles.bodyStyle}>
        <Text style={styles.headingStyle}>Thanks For Your Response</Text>
        <Text style={styles.paraStyle}> Your Application has been submitted. Please wait for 2-3 days we will respond you</Text>
        <Text style={styles.subheadingStyle}>Details</Text>
        <Text style={styles.textStyle}>Submitted on : 22/22/22</Text>
        <Text style={styles.textStyle}>Rashan For: Month </Text>
        <Text style={styles.textStyle}>Status: Pending </Text>
      </View>

      <View style={styles.buttonArea}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("MapPage")
        }
        >
          <Text style={styles.loginText}>
            Go Back To Home
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default ApplicationStatus

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: "center"
  },
  imageContainer: {
    marginVertical: 20
  },
  image: {
    height: 100,
    width: 200,
  },
  headingStyle: {
    fontSize: 18,
    marginVertical: 10,
    fontWeight: "bold",
    textAlign: "center",

  },
  textStyle: {
    fontSize: 16,
    marginVertical: 5,
    textAlign: "center",
  },
  paraStyle: {
    marginVertical: 10,
    textAlign: "center",
    width: 300
  },
  subheadingStyle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "800",
    marginVertical: 10,
  },
  bodyStyle: {
    marginTop: 60,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    backgroundColor: "green",
    height: 40,
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
})