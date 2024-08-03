import { Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { FontAwesome } from '@expo/vector-icons'

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
                <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Text style={{
                        fontSize: 20,
                        fontFamily: 'outfit-bold',
                        color: Colors.BLACK,
                    }}>
                        {option?.title}
                    </Text>
                    <FontAwesome name="user" size={20} color={Colors.GRAY} style={{ marginLeft: 5 }} />
                    <Text style={{
                        fontSize: 15,
                        fontFamily: 'outfit-medium',
                        color: Colors.GRAY,
                    }}>
                        {option?.people}
                    </Text>
                </View>
                <Text style={{
                    fontSize: 16,
                    fontFamily: 'outfit-medium',
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
