import React, { useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import * as Permissions from 'expo-permissions';
import Voice from 'react-native-voice';
import { useNavigation } from '@react-navigation/native';

const VoiceCommand = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const requestPermissions = async () => {
      const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
      if (status !== 'granted') {
        console.error('Permission to access microphone was denied');
      }
    };

    requestPermissions(); // Request microphone permissions

    // Set up event listeners for voice recognition
    Voice.onSpeechResults = (e) => handleSpeechResults(e.value);

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const startRecognition = async () => {
    try {
      await Voice.start('en-US');
    } catch (error) {
      console.error('Error starting voice recognition:', error);
    }
  };

  const handleSpeechResults = (results) => {
    console.log('Speech results:', results);
    const command = results[0].toLowerCase();

    if (command.includes('loan page')) {
      navigation.replace('/(tabs)/loan');
    } else if (command.includes('chats page')) {
      navigation.replace('/(tabs)/chat');
    }
  };

  return (
    <View>
      <Text>Say "Loan Page" or "Chats Page"</Text>
      <Button title="Start Voice Command" onPress={startRecognition} />
    </View>
  );
};

export default VoiceCommand;
