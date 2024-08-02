import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: Colors.BLACK }}>
            <Tabs.Screen name="myTrip"
                options={{
                    tabBarLabel: 'My Trip',
                    tabBarIcon: ({ color }) => <FontAwesome6 name="location-dot" size={24} color={color} />
                }}
            />
            <Tabs.Screen name="discover"
                options={{
                    tabBarLabel: 'Discover',
                    tabBarIcon: ({ color }) => <FontAwesome name="globe" size={24} color={color} />
                }}
            />
            <Tabs.Screen name="profile"
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} />
                }}
            />
        </Tabs>
    )
}
