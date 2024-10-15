import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

const FileInput = ({ onFileAccepted }) => {
    const [data, setData] = useState(false); // State to track if a file has been selected
    const [fileName, setFileName] = useState(''); // State to track the name of the selected file

    const pickDocument = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({
                type: 'application/pdf', // Allow only PDF files
                copyToCacheDirectory: true,
            });

            // Log the result for debugging
            console.log('File selection result:', result);

            // Check if the selection was successful
            if (result && !result.canceled) { // Check if the result is not canceled
                onFileAccepted(true);
                setData(true);
                setFileName(result.assets[0].name); // Set the name of the selected file
            } else {
                console.log('File selection canceled or failed:', result);
                onFileAccepted(false); // Indicate file selection failed
            }
        } catch (error) {
            console.error('Error picking document:', error);
            onFileAccepted(false); // Indicate an error occurred
        }
    };

    return (
        <View>
            {data ? (
                <Text style={{ marginBottom: 20 }}>Selected File: {fileName}</Text> // Display selected file name
            ) : (
                <Button title="Select Document" onPress={pickDocument} />
            )}
        </View>
    );
};

export default FileInput;
