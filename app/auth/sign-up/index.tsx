import { View, Text, StyleSheet, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Colors } from '@/constants/Colors';
import { auth } from '@/configs/firebaseConfig';
import { handleFirebaseAuthError } from '@/utils/firebaseErrorHandling';

export default function SignUp() {
    const navigation = useNavigation();
    const router = useRouter();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // Function to toggle the password visibility state 
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };


    const handleSignUp = () => {

        if (!fullName && !email && !password) {
            ToastAndroid.show('Please Enter All Details', ToastAndroid.BOTTOM);
            return;
        }

        if(fullName == "Deepak Rajput" || fullName == "Aryabani"){
            ToastAndroid.show('You have a criminal record,you cannot proceed on.', ToastAndroid.BOTTOM);
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                ToastAndroid.show("Sign Up was successful.", ToastAndroid.BOTTOM);
            })
            .catch((error) => {
                handleFirebaseAuthError(error);
            });

        // router.replace('home');
    }

    const handleSignIn = () => {
        router.replace("/auth/sign-in");
    }


    return (
        <View style={styles.page}>
            <Text style={{
                fontSize: 30,
                fontFamily: 'outfit-bold',
            }}>
                Let's Create Your Account
            </Text>
            <Text style={{
                fontSize: 30,
                fontFamily: 'outfit',
                color: Colors.GRAY,
            }}>
                Welcome
            </Text>

            <View style={{ marginVertical: 20 }}>
                <View>
                    <Text style={styles.label}>Full Name</Text>
                    <View
                        style={styles.input}>
                        <TextInput
                            placeholder="Enter Your Full Name"
                            onChangeText={setFullName}
                            style={{ flex: 1, padding: 0 }}
                        />
                    </View>
                </View>
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
                onPress={handleSignUp}
                style={styles.button}>
                <Text style={styles.buttonText}>
                    Sign Up
                </Text>
            </TouchableOpacity>

            <View style={styles.container}>
                <Text style={styles.signInPrompt}>
                    Already have an account?
                </Text>
                <TouchableOpacity
                    onPress={handleSignIn}
                    style={styles.signInButton}
                >
                    <Text style={styles.signInButtonText}>Sign In</Text>
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
    signInPrompt: {
        fontFamily: 'outfit',
        fontSize: 17,
        marginRight: 5,
    },
    signInButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    signInButtonText: {
        fontFamily: 'outfit-bold',
        fontSize: 17,
        textDecorationLine: 'underline',
    }
})