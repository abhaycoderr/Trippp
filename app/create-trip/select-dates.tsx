import { StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Colors } from '@/constants/Colors';
import { CreateTripContext } from '@/context/CreateTripContext';
import { useNavigation, useRouter } from 'expo-router';
import CalendarPicker from 'react-native-calendar-picker';

export default function SelectDates(this: any) {

    const navigation = useNavigation();
    const router = useRouter();

    const [startDate, setStartDate] = useState<Date>();
    const [endDate, setEndDate] = useState<Date>();

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

        const millisecondsDiff = (endDate?.getTime() || 0) - (startDate?.getTime() || 0);
        const totalTravelDays = Math.round(millisecondsDiff / (1000 * 60 * 60 * 24)) + 1

        if (totalTravelDays < 1) {
            ToastAndroid.show('Please select at-least one day.', ToastAndroid.LONG);
            return;
        }

        setTripData({
            ...tripData,
            travelDuration: {
                startDate: startDate,
                endDate: endDate,
                totalTravelDays: totalTravelDays,
            }
        })

        router.push("/create-trip/select-budget");
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
            <View style={{ marginVertical: 20, flex: 1 }}>
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
            <View style={styles.noteContainer}>
                <Text style={styles.noteHeading}>
                    Note:
                </Text>
                <Text style={styles.noteText} >
                    Tap on the same date 2 times for a single day trip.
                </Text>
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
    noteContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: 10,
        padding: 10,
    },
    noteHeading: {
        flexGrow: 1,
        fontSize: 18,
        fontFamily: 'outfit-bold',
    },
    noteText: {
        flexShrink: 1,
        fontSize: 15,
        fontFamily: 'outfit',
        color: Colors.GRAY,
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