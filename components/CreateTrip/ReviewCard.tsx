import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';

export default function ReviewCard({ icon, heading, desc }) {
    return (
        <View style={styles.container}>
            <Text style={styles.icon}>{icon}</Text>
            <View style={styles.textContainer}>
                <Text style={styles.heading}>{heading}</Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    icon: {
        fontSize: 30,
    },
    textContainer: {
        flex: 1,
    },
    heading: {
        fontSize: 18,
        fontFamily: 'outfit-medium',
        color: Colors.GRAY,
    },
    desc: {
        fontSize: 19,
        fontFamily: 'outfit-bold',
        color: Colors.BLACK,
    },
});
