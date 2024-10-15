import React from 'react';
import { ScrollView } from 'react-native';
import { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRouter } from 'expo-router';
import FlightDetails from '../../components/FlightDetails';
import HotelList from '../../components/HotelList';
import PlaceList from '../../components/PlaceList';
import DailyPlan from '../../components/DailyPlan';
import {tripData} from '../../components/TripContext'; // Assuming tripData is exported

const Result = () => {
  const [loanAmountInput, setLoanAmountInput] = useState('');
  const [loanAmount, setLoanAmount] = useState(0);
    const navigation = useNavigation();
    const router = useRouter();


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


    const movetoLoan = () => {
      router.replace("/(tabs)/loan");
    }
  return (
    <ScrollView style={{ padding: 20 }}>
      <FlightDetails flight={tripData.flight} />
      <HotelList hotels={tripData.hotel} />
      <PlaceList places={tripData.placesToVisit} />
      <DailyPlan dailyPlan={tripData.dailyPlan} />

    <View  style={styles.container2}>
    <Text>Are you specially abled?</Text>
    <Text style={{marginBottom:20}}>Get Donations from NGO connected with us...</Text>

    <TouchableOpacity style={styles.loanButton} onPress={movetoLoan}>
        <Text style={styles.loanButtonText}>Wanna Get Loan</Text>
      </TouchableOpacity>
 </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },

  container2: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    marginBottom:50
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
    marginTop:5
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
    marginBottom: 10,
  },
  loanButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign:"center"
  },
});

export default Result;
