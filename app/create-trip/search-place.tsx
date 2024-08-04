import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { CreateTripContext } from '@/context/CreateTripContext';

export default function SearchPlace() {
    const navigation = useNavigation();
    const router = useRouter();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: 'Search Place',
        });
    }, []);

    const context = useContext(CreateTripContext);
    if (!context) {
        throw new Error('CreateTripContext must be used within a CreateTripProvider');
    }
    const { tripData, setTripData } = context;

    const setTripDetails = () => {
        setTripData({
            location: {
                name: "Bengaluru",
                coordinates: "12.97295073319404, 77.59422758358563",
                photo: "https://lh5.googleusercontent.com/p/AF1QipOC9lHhSEATYjUCjehr70U0jUjF3jGX5zepjE0=w408-h458-k-no",
                url: "https://maps.app.goo.gl/rM2HXpUWcmxut8wCA",
            }
        });

        router.push("/create-trip/select-traveler");
    };

    return (
        <View style={styles.page}>
            <GooglePlacesAutocomplete
                placeholder='Search Place'
                fetchDetails={true}
                minLength={4}
                debounce={500}
                styles={{
                    textInputContainer: {
                        borderWidth: 1,
                        borderRadius: 5,
                        marginTop: 25,
                        paddingTop: 5,
                    }
                }}
                onPress={(data, details = null) => {
                    console.log(data, details);
                }}
                query={{
                    key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
                    language: 'en',
                }}
            />
            <TouchableOpacity
                onPress={setTripDetails}
                style={styles.button}
            >
                <Text style={styles.buttonText}>
                    Start a New Trip
                </Text>
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
});
