import { View, Text, StyleSheet, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Colors } from '@/constants/Colors';
import { auth } from '@/configs/firebaseConfig';
import { handleFirebaseAuthError } from '@/utils/firebaseErrorHandling';

export default function SignIn() {

    const navigation = useNavigation();
    const router = useRouter();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const handleSignIn = () => {

        if (!email && !password) {
            ToastAndroid.show('Please Enter All Details', ToastAndroid.BOTTOM);
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                ToastAndroid.show("Sign In was successful.", ToastAndroid.BOTTOM);
                // router.replace('/');
            })
            .catch((error) => {
                handleFirebaseAuthError(error);
            });
    }

    const handleSignUp = () => {
        router.replace('/auth/sign-up');
    }

    // Function to toggle the password visibility state 
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };


    return (
        <View style={styles.page}>
            <Text style={{
                fontSize: 30,
                fontFamily: 'outfit-bold',
            }}>
                Let's Sign You In
            </Text>
            <Text style={{
                fontSize: 30,
                fontFamily: 'outfit',
                color: Colors.GRAY,
            }}>
                Welcome Back 👋🏻
            </Text>
            <Text style={{
                fontSize: 30,
                fontFamily: 'outfit',
                color: Colors.GRAY,
            }}>
                You Have Been Missed!
            </Text>

            <View style={{ marginVertical: 20 }}>
                <View>
                    <Text style={styles.label}>Email</Text>
                    <View
                        style={styles.input}>
                        <TextInput
                            placeholder="Enter Your Email"
                            keyboardType='email-address'
                            onChangeText={setEmail}
                            style={{ flex: 1, padding: 0 }}
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.label}>Password</Text>
                    <View style={styles.input}>
                        <TextInput
                            placeholder="Enter Your Password"
                            onChangeText={setPassword}
                            secureTextEntry={!showPassword}
                            style={{ flex: 1, padding: 0 }}
                        />
                        <MaterialCommunityIcons
                            name={showPassword ? 'eye' : 'eye-off'}
                            size={24}
                            onPress={toggleShowPassword}
                        />
                    </View>
                </View>
            </View>

            <TouchableOpacity
                onPress={handleSignIn}
                style={styles.button}>
                <Text style={styles.buttonText}>
                    Sign In
                </Text>
            </TouchableOpacity>

            <View style={styles.container}>
                <Text style={styles.signUpPrompt}>
                    Don't have an account?
                </Text>
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={styles.signUpButton}
                >
                    <Text style={styles.signUpButtonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    page: {
        padding: 25,
        paddingTop: 80,
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    label: {
        fontFamily: 'outfit-medium',
        fontSize: 17,
        marginBottom: 5,
    },
    input: {
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderWidth: 1,
        borderRadius: 15,
        marginBottom: 20,
        fontSize: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
    },
    button: {
        backgroundColor: Colors.BLACK,
        padding: 15,
        borderRadius: 15,
        width: '100%',
        alignItems: 'center',
        elevation: 5,
    },
    buttonText: {
        fontSize: 17,
        fontFamily: 'outfit',
        color: Colors.WHITE,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    signUpPrompt: {
        fontFamily: 'outfit',
        fontSize: 17,
        marginRight: 5,
    },
    signUpButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUpButtonText: {
        fontFamily: 'outfit-bold',
        fontSize: 17,
        textDecorationLine: 'underline',
    }
})