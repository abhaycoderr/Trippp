import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { CreateTripContext } from '@/context/CreateTripContext';
import ReviewCard from '@/components/CreateTrip/ReviewCard';

export default function ReviewTrip() {
    const navigation = useNavigation();
    const router = useRouter();
    const { tripData } = useContext(CreateTripContext) ?? {};

    if (!tripData) {
        throw new Error('CreateTripContext must be used within a CreateTripProvider');
    }

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: 'Review Trip',
        });
    }, []);

    // Extract and format trip data
    const { location, travelDuration, travelers, budget } = tripData;
    const startDate = new Date(travelDuration.startDate);
    const endDate = new Date(travelDuration.endDate);
    const travelDates = `${startDate.getDate()} ${startDate.toLocaleString('default', { month: 'short' })} to ${endDate.getDate()} ${endDate.toLocaleString('default', { month: 'short' })} (${travelDuration.totalTravelDays} days)`;
    const travelPartners = `${travelers.title} (${travelers.people} members)`;
    const travelBudget = `${budget.title} Spending`;

    const buildTrip = () => {
        // Implementation for building the trip
        router.push("/create-trip/generate-trip");
    };

    return (
        <View style={styles.page}>
            <Text style={styles.title}>Review Your Trip</Text>
            <Text style={styles.subtitle}>Before generating your trip, please review your selections.</Text>
            <ReviewCard icon="📍" heading="Destination" desc={location.name} />
            <View style={styles.divider}></View>
            <ReviewCard icon="🗓️" heading="Travel Dates" desc={travelDates} />
            <View style={styles.divider}></View>
            <ReviewCard icon="👥" heading="Travel Partners" desc={travelPartners} />
            <View style={styles.divider}></View>
            <ReviewCard icon="💰" heading="Budget" desc={travelBudget} />
            <View style={{ flex: 1 }}></View>
            <TouchableOpacity onPress={buildTrip} style={styles.button}>
                <Text style={styles.buttonText}>Build My Trip ⚙️</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        padding: 25,
        paddingTop: 100,
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    title: {
        fontSize: 30,
        fontFamily: 'outfit-bold',
    },
    subtitle: {
        fontSize: 17,
        fontFamily: 'outfit-medium',
        color: Colors.GRAY,
        marginBottom: 20,
    },
    divider: {
        borderWidth: 1,
        borderColor: Colors.LIGHT_GRAY,
        borderRadius: 20,
    },
    button: {
        backgroundColor: Colors.BLACK,
        padding: 15,
        borderRadius: 15,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'outfit',
        color: Colors.WHITE,
    },
});
