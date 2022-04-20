import { StyleSheet, View, Image } from 'react-native'
import React from 'react'

const Logo = () => {
    return (
        <View>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/kahana.png')} style={styles.image} />
            </View>
        </View>
    )
}

export default Logo

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,

    },
    image: {
        height: 100,
        width: 200,
    },
})

