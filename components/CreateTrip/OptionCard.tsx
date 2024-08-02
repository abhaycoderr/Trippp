import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

export default function OptionCard({ option, selectedTraveler }) {
    return (
        <View
            style={[{
                padding: 20,
                backgroundColor: Colors.LIGHT_GRAY,
                marginVertical: 10,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderRadius: 15,
                borderWidth: 3,
                borderColor: Colors.LIGHT_GRAY,
            }, selectedTraveler?.id == option?.id && {
                borderWidth: 3,
                borderColor: Colors.BLACK,
            }]}
        >
            <View>
                <Text style={{
                    fontSize: 20,
                    fontFamily: 'outfit-bold',
                    color: Colors.BLACK,
                }}>
                    {option?.title}
                </Text>
                <Text style={{
                    fontSize: 17,
                    fontFamily: 'outfit',
                    color: Colors.GRAY,
                }}>
                    {option?.desc}
                </Text>
            </View>
            <View>
                <Text style={{ fontSize: 25 }}>{option?.icon}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})