import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRouter } from 'expo-router'
import { handleFirebaseAuthError } from '@/utils/firebaseErrorHandling';
const ProfileScreen = () => {
  // State for loan amount input
  const [loanAmountInput, setLoanAmountInput] = useState('');
  
  const navigation = useNavigation();
    const router = useRouter();
  // State for actual loan amount stored after pressing the "Get Loan" button
  const [loanAmount, setLoanAmount] = useState(0);

  const handleLoanRequest = () => {
    // Log the entered loan amount
    console.log('Requested Loan Amount:', loanAmountInput);

    // Set the loan amount to the entered value after 5 seconds
    setTimeout(() => {
      setLoanAmount(loanAmountInput);
      console.log(`Loan amount updated to: ${loanAmountInput}`);
      
      // Clear the input field after the loan is updated
      setLoanAmountInput('');
    }, 5000);

    
  };

  const handlelogout = () => {
    router.replace("/auth/sign-up");
  }
  
  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <Image
        source={{ uri: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600' }} // Placeholder for user profile
        style={styles.profileImage}
      />

      {/* User Name */}
      <Text style={styles.userName}>Aditya Pandey</Text>

      {/* Emergency SOS */}
      <View style={styles.sosSection}>
        <Text style={styles.sosText}>Emergency SOS</Text>
        <Text style={styles.sosNumber}>112</Text>
      </View>

     

      

      {/* Logout Button */}
      <TouchableOpacity style={{backgroundColor:'black',marginTop:20,padding:20,borderRadius:10,}} onPress={handlelogout}>
        <Text style={{color:"white"}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    marginTop:30
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  walletSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  walletText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  walletAmount: {
    fontSize: 16,
    marginTop: 5,
  },
  sosSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  sosText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sosNumber: {
    fontSize: 16,
    marginTop: 5,
  },
  loanInput: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
  loanButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  loanButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ProfileScreen;
