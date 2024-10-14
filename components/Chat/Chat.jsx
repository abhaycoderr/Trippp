import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';

const Chat = () => {
    const [message, setMessage] = useState('');
    const [chatMessages, setChatMessages] = useState([
        { id: '1', sender: 'bot', message: 'Hello! How are you?' },
        { id: '12', sender: 'bot', message: "What's your plan for Dehradun??" },
    ]);
    const flatListRef = useRef(null); // Create a ref for the FlatList

    const handleSend = () => {
        if (message.trim()) {
            const newMessage = {
                id: (chatMessages.length + 1).toString(), // New ID for the message
                sender: 'user',
                message,
            };
            setChatMessages((prevMessages) => [...prevMessages, newMessage]); // Update the chat messages
            setMessage(''); // Clear the input field

            // Scroll to the bottom after adding a new message
            flatListRef.current.scrollToEnd({ animated: true });
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={100} // Adjust if needed based on your layout
        >
            <FlatList
                ref={flatListRef} // Assign the ref to the FlatList
                data={chatMessages}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={[styles.messageContainer, item.sender === 'user' ? styles.userMessage : styles.botMessage]}>
                        <Text style={styles.messageText}>{item.message}</Text>
                    </View>
                )}
                contentContainerStyle={{ paddingBottom: 20 }} // Extra padding at the bottom
            />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Type a message..."
                    value={message}
                    onChangeText={setMessage} // Update the message state
                />
                <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
                    <Text style={styles.sendButtonText}>Send</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    messageContainer: {
        padding: 10,
        borderRadius: 15,
        marginVertical: 5,
        maxWidth: '75%',
    },
    userMessage: {
        backgroundColor: '#d1e7dd',
        alignSelf: 'flex-end', // Align user messages to the right
    },
    botMessage: {
        backgroundColor: '#cfe2ff',
        alignSelf: 'flex-start', // Align bot messages to the left
    },
    messageText: {
        fontSize: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        borderTopWidth: 1,
        borderColor: '#ddd',
        paddingVertical: 10,
    },
    input: {
        flex: 1,
        padding: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        marginRight: 10,
    },
    sendButton: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sendButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default Chat;
