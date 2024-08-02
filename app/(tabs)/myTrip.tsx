import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome6 } from '@expo/vector-icons'
import StartNewTripCard from '@/components/StartNewTripCard';
import { Colors } from '@/constants/Colors';

export default function MyTrip() {

    const [userTrips, setUserTrips] = useState([]);

    return (
        <View style={styles.page}>
            <View style={styles.header}>
                <Text style={styles.headerText}>MyTrip</Text>
                <FontAwesome6 name="circle-plus" size={35} color="black" />
            </View>

            {
                userTrips?.length == 0 ?
                    <StartNewTripCard /> : null
            }
        </View>
    )
}


const styles = StyleSheet.create({
    page: {
        padding: 25,
        paddingTop: 55,
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginBottom: 15,
    },
    headerText: {
        fontSize: 35,
        fontFamily: 'outfit-bold',
    }
})