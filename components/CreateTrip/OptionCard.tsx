import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { FontAwesome } from '@expo/vector-icons'

export default function OptionCard({ option, selectedOption }) {
    return (
        <View
            style={[
                styles.container,
                selectedOption?.id === option?.id && styles.selectedContainer
            ]}>
            <View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        {option?.title}
                    </Text>
                    {
                        option?.people ?
                            <View style={styles.peopleContainer}>
                                <FontAwesome name="user" size={20} color={Colors.GRAY} style={{ marginLeft: 5 }} />
                                <Text style={styles.people}>
                                    {option?.people}
                                </Text>
                            </View>
                            : null
                    }
                </View>
                <Text style={styles.desc}>
                    {option?.desc}
                </Text>
            </View>
            <View>
                <Text style={styles.icon}>{option?.icon}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: Colors.LIGHT_GRAY,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 15,
        borderWidth: 3,
        borderColor: Colors.LIGHT_GRAY,
    },
    selectedContainer: {
        borderColor: Colors.BLACK,
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    title: {
        fontSize: 20,
        fontFamily: 'outfit-bold',
        color: Colors.BLACK,
    },
    desc: {
        fontSize: 16,
        fontFamily: 'outfit-medium',
        color: Colors.GRAY,
    },
    peopleContainer: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    people: {
        fontSize: 15,
        fontFamily: 'outfit-medium',
        color: Colors.GRAY,
    },
    icon: {
        fontSize: 30
    },

})