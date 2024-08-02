import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

export default function Login() {

    const router = useRouter();

    return (
        <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
                <Image source={require('./../assets/images/login.png')}
                    style={styles.image}
                />
            </View>
            <View style={styles.container}>
                <View style={styles.heading}>
                    <Text style={styles.title}>
                        WanderAI 🌍
                    </Text>
                    <Text style={styles.subtitle}>
                        Your AI Travel Planner 🤖
                    </Text>
                </View>
                <Text style={styles.description}>
                    Explore the world effortlessly with our AI-powered travel planner. Get personalized travel plans and recommendations tailored just for you.
                </Text>
                <TouchableOpacity
                    onPress={() => router.push('/auth/sign-in')}
                    style={styles.button}>
                    <Text style={styles.buttonText}>
                        Get Started
                    </Text>
                </TouchableOpacity>
                <View style={styles.spacer} />
                <View>
                    <Text style={styles.footerText}>
                        Made with ❤️ by Vineet Kumar
                    </Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    imageContainer: {
        paddingTop: '10%',
        backgroundColor: '#069494',
    },
    image: {
        width: '100%',
        height: 480,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
        marginTop: '-10%',
        padding: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        gap: 10,
        justifyContent: 'space-between',
    },
    heading: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontFamily: 'outfit-bold',
    },
    subtitle: {
        fontSize: 14,
        fontFamily: 'outfit-medium',
    },
    description: {
        fontSize: 17,
        fontFamily: 'outfit',
        color: Colors.GRAY,
        textAlign: 'center',
    },
    button: {
        backgroundColor: Colors.BLACK,
        padding: 15,
        borderRadius: 15,
        marginTop: 20,
        width: '80%',
        alignItems: 'center',
        elevation: 5,
    },
    buttonText: {
        fontSize: 17,
        fontFamily: 'outfit',
        color: Colors.WHITE,
    },
    spacer: {
        flex: 1,
    },
    footerText: {
        textAlign: 'center',
    }
})
