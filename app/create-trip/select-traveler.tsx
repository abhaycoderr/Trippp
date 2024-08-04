import { FlatList, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Colors } from '@/constants/Colors';
import { useNavigation, useRouter } from 'expo-router';
import { TravelerOptions } from '@/constants/Options';
import OptionCard from '@/components/CreateTrip/OptionCard';
import { CreateTripContext } from '@/context/CreateTripContext';

export default function SelectTraveler() {

    const navigation = useNavigation();
    const router = useRouter();

    const context = useContext(CreateTripContext);
    if (!context) {
        throw new Error('CreateTripContext must be used within a CreateTripProvider');
    }
    const { tripData, setTripData } = context;


    const [selectedTraveler, setSelectedTraveler] = useState<any>(tripData.travelers);

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: 'Select Traveler',
        });
    }, []);

    const setTripDetails = () => {
        if (!selectedTraveler) {
            ToastAndroid.show('Please select traveler category.', ToastAndroid.LONG);
            return;
        }
        setTripData({
            ...tripData,
            travelers: selectedTraveler,
        })

        router.push("/create-trip/select-dates");
    };

    return (
        <View style={styles.page}>
            <Text style={styles.title}>Who's Traveling</Text>
            <Text style={styles.subtitle}>Choose your travelers</Text>

            <FlatList
                data={TravelerOptions}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        onPress={() => setSelectedTraveler(item)}>
                        <OptionCard option={item} selectedOption={selectedTraveler} />
                    </TouchableOpacity>
                )}
            />

            <TouchableOpacity
                onPress={setTripDetails}
                style={styles.button}
            >
                <Text style={styles.buttonText}>
                    Continue
                </Text>
            </TouchableOpacity>
        </View>
    )
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
        fontSize: 20,
        fontFamily: 'outfit-medium',
    },
    button: {
        backgroundColor: Colors.BLACK,
        padding: 15,
        borderRadius: 15,
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        elevation: 5,
    },
    buttonText: {
        fontSize: 17,
        fontFamily: 'outfit',
        color: Colors.WHITE,
    },
});