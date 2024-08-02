import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

export default function StartNewTripCard() {
    const router = useRouter();

    const navigateToSearchPlaceScreen = () => {
        router.push("/create-trip/search-place")
    }

    return (
        <View style={styles.container}>
            <Entypo name="location" size={50} color="black" />
            <Text style={styles.title}>No Trips Planned Yet</Text>
            <Text style={styles.subTitle}>It's time to set your travel dreams in motion! Click the button below to begin crafting your unforgettable journey.</Text>
            <TouchableOpacity
                onPress={navigateToSearchPlaceScreen}
                style={styles.button}>
                <Text style={styles.buttonText}>
                    Start a New Trip
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        backgroundColor: Colors.WHITE,
    },
    title: {
        fontSize: 30,
        fontFamily: 'outfit-bold',
        color: Colors.BLACK,
    },
    subTitle: {
        fontSize: 17,
        fontFamily: 'outfit-bold',
        color: Colors.GRAY,
        textAlign: 'center',
    },
    button: {
        backgroundColor: Colors.BLACK,
        padding: 15,
        borderRadius: 15,
        marginTop: 20,
        width: '70%',
        alignItems: 'center',
        elevation: 5,
    },
    buttonText: {
        fontSize: 17,
        fontFamily: 'outfit',
        color: Colors.WHITE,
    },

})