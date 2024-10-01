import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { CreateTripContext } from '@/context/CreateTripContext';
import { AI_PROMPT } from '@/constants/Options';
import { chatSession } from '@/configs/AIModelConfig';
import { auth, db } from '@/configs/firebaseConfig';
import { setDoc, doc } from 'firebase/firestore';

export default function GenerateTrip() {

    const navigation = useNavigation();
    const router = useRouter();
    const user = auth.currentUser;

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const { tripData } = useContext(CreateTripContext) ?? {};

    useEffect(() => {
        tripData && GenerateAiTrip()
    }, []);


    const GenerateAiTrip = async () => {
        const { location, travelDuration, travelers, budget } = tripData;

        const FINAL_PROMPT = AI_PROMPT
            .replaceAll('{location}', location?.name)
            .replaceAll('{totalDays}', travelDuration?.totalTravelDays)
            .replaceAll('{totalNights}', (travelDuration?.totalTravelDays - 1).toString())
            .replaceAll('{traveler}', travelers?.title)
            .replaceAll('{budget}', budget?.title)


        console.log(FINAL_PROMPT);
        const result = await chatSession.sendMessage(FINAL_PROMPT);
        const tripResponse = JSON.parse(result.response.text())
        const docId = (Date.now()).toString();
        console.log(tripResponse);
        // router.replace('../(tabs)/results.jsx');
        router.push("/(tabs)/results.jsx");

        await setDoc(doc(db, "userTrips", docId), {
            docId: docId,
            userEmail: user?.email || '',
            tripPlan: tripResponse,
            tripData: tripData,
        });

        

       
    }

    return (
        <View style={styles.page}>
            <Text style={styles.title}>⚙️</Text>
            <Text style={styles.title}>Please Wait...</Text>
            <Text style={styles.subtitle}>We are working to generate your dream trip 🧳</Text>
            <Image source={require('@/assets/images/plane.gif')} style={styles.image} />
            <Text style={styles.subtitle}>Don't Go Back</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: 25,
        paddingTop: 100,
        flex: 1,
        backgroundColor: Colors.WHITE,
        alignItems: 'center',
        gap: 5,
    },
    image: {
        width: '80%',
        objectFit: 'contain',
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
        textAlign: 'center'
    },
});