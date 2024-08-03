import { StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Colors } from '@/constants/Colors';
import { CreateTripContext } from '@/context/CreateTripContext';
import { useNavigation, useRouter } from 'expo-router';
import CalendarPicker from 'react-native-calendar-picker';

export default function SelectDates(this: any) {

    const navigation = useNavigation();
    const router = useRouter();

    const [startDate, setStartDate] = useState<Date>(new Date);
    const [endDate, setEndDate] = useState<Date>(new Date);

    const context = useContext(CreateTripContext);
    if (!context) {
        throw new Error('CreateTripContext must be used within a CreateTripProvider');
    }
    const { tripData, setTripData } = context;


    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: 'Select Dates',
        });
    }, []);

    const setTripDetails = () => {

        if (!startDate && !endDate) {
            ToastAndroid.show('Please select start and end dates.', ToastAndroid.LONG);
            return;
        }

        const millisecondsDiff = endDate?.getTime() - startDate?.getTime();
        const totalTravelDays = Math.round(millisecondsDiff / (1000 * 60 * 60 * 24)) + 1


        setTripData({
            ...tripData,
            startDate: startDate,
            endDate: endDate,
            totalTravelDays: totalTravelDays,
        })

        // router.push("/create-trip/select-dates");
    };

    const onDateChange = (date: any, type: any) => {
        if (type == 'START_DATE')
            setStartDate(date);
        else
            setEndDate(date);
    }

    return (
        <View style={styles.page}>
            <Text style={styles.title}>Travel Dates</Text>
            <View style={{ marginVertical: 20 }}>
                <CalendarPicker
                    onDateChange={onDateChange}
                    allowRangeSelection
                    allowBackwardRangeSelect
                    startFromMonday
                    // scrollable
                    showDayStragglers
                    maxRangeDuration={10}
                    minDate={new Date()}
                    selectedRangeStyle={{ backgroundColor: Colors.BLACK }}
                    selectedDayTextColor={Colors.WHITE}
                />
            </View>
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
    button: {
        backgroundColor: Colors.BLACK,
        padding: 15,
        borderRadius: 15,
        marginTop: 10,
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