import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

export default function Discover() {
    return (
        <View>
            <Text>Discover</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: 25,
        paddingTop: 100,
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
})