import { FlatList, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Colors } from '@/constants/Colors';
import { CreateTripContext } from '@/context/CreateTripContext';
import { useNavigation, useRouter } from 'expo-router';
import { BudgetOptions } from '@/constants/Options';
import OptionCard from '@/components/CreateTrip/OptionCard';

export default function SelectBudget() {

    const navigation = useNavigation();
    const router = useRouter();


    const context = useContext(CreateTripContext);
    if (!context) {
        throw new Error('CreateTripContext must be used within a CreateTripProvider');
    }
    const { tripData, setTripData } = context;

    const [selectedBudget, setSelectedBudget] = useState<any>(tripData.budget);


    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: 'Select Budget',
        });
    }, []);

    const setTripDetails = () => {

        if (!selectedBudget) {
            ToastAndroid.show('Please select a budget.', ToastAndroid.LONG);
            return;
        }

        setTripData({
            ...tripData,
            budget: selectedBudget,
        })

        router.push("/create-trip/review-trip");
    };

    return (
        <View style={styles.page}>
            <Text style={styles.title}>Budget</Text>
            <Text style={styles.subtitle}>Choose spending habits for your trip</Text>
            <FlatList
                data={BudgetOptions}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        onPress={() => setSelectedBudget(item)}>
                        <OptionCard option={item} selectedOption={selectedBudget} />
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