import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';

export default function GenerateTrip() {

    const navigation = useNavigation();
    const router = useRouter();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

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
        width: '100%',
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