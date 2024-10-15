import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import FileInput from '../../components/FileInput';

const LoanPage = () => {
    const [loanAmountInput, setLoanAmountInput] = useState('');
    const [ngoAmountInput, setngoAmountInput] = useState('0');
    const [loanAmount, setLoanAmount] = useState(0);
    const [ngoAmount, setngoAmount] = useState(0);
    const [speciallyAbled, setSpeciallyAbled] = useState(false); // Use a boolean to indicate state

    const handleLoanRequest = () => {
        console.log('Requested Loan Amount:', loanAmountInput);
        setLoanAmount(loanAmountInput);
        setLoanAmountInput('');
    };
    const ngoAmountInputRequest = () => {
        console.log('Requested Loan Amount:', loanAmountInput);
        setngoAmount(ngoAmountInput);
        setngoAmountInput('');
    };

    const handleFileAccepted = (isAccepted) => {
        console.log('File accepted:', isAccepted);
        setSpeciallyAbled(isAccepted); // Set state based on file selection
    };

    return (
        <ScrollView style={{ padding: 20, marginTop: 50 }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 20 }}>Loan Page</Text>

            <View style={styles.walletSection}>
                <Text style={styles.walletText}>Aren't you out of budget, we can help with</Text>
                <Text style={styles.walletText}>Holidate Wallet</Text>
                <Text style={styles.walletAmount}>Original Amount - &#8377;{loanAmount}</Text>
                <Text>
                    Payback Amount - {'>'} ₹{loanAmount} + GST(18%) + Service cost (5%) = ₹
                    {(loanAmount * 1.18 + loanAmount * 0.05).toFixed(2)}
                </Text>
            </View>

            <TextInput
                style={styles.loanInput}
                placeholder="Enter Loan Amount"
                keyboardType="numeric"
                value={loanAmountInput}
                onChangeText={setLoanAmountInput}
            />

            <TouchableOpacity style={styles.loanButton} onPress={handleLoanRequest}>
                <Text style={styles.loanButtonText}>Get Loan</Text>
            </TouchableOpacity>

            <Text>Are you specially abled?</Text>
            <Text style={{ marginBottom: 20 }}>Get Donations from NGO connected with us...</Text>
            <Text style={{ marginBottom: 20 }}>Submit your specially abled certification</Text>

            <FileInput onFileAccepted={handleFileAccepted} />

            <Text style={styles.walletAmount}>NGO Amount - &#8377;{ngoAmount}</Text>
            <Text style={{fontWeight:"bold"}}>NOTE : No Payback required...</Text>

            {speciallyAbled && ( // Only show the input if the user is specially abled
                <View>
                    <TextInput
                        style={styles.loanInput}
                        placeholder="Enter Money from NGO"
                        keyboardType="numeric"
                        value={ngoAmountInput}
                        onChangeText={setngoAmountInput}
                    />
                    <TouchableOpacity style={styles.loanButton} onPress={ngoAmountInputRequest}>
                        <Text style={styles.loanButtonText}>Get approval from NGO</Text>
                    </TouchableOpacity>
                </View>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    walletSection: {
        alignItems: 'center',
        marginBottom: 20,
    },
    walletText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
    },
    walletAmount: {
        fontSize: 16,
        marginTop: 5,
        marginBottom:10
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
        marginBottom: 50,
    },
    loanButtonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: "center",
    },
});

export default LoanPage;
