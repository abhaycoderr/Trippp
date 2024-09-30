import {view, text} from 'react-native'
import React from 'react'
import { View } from 'react-native-web'

export default function UserTripList({userTrips}) {
    return(
        <View>
            <View style={{
            marginTop:20
        }}>
            <Image source={require('./../../assets/images/enableLogging.pnj')}/>
            style={{
                width:'100%',
                height:240,
                objectFit:'cover',
                borderRadius:15
                }}
            </View>
        </View>
    )
}