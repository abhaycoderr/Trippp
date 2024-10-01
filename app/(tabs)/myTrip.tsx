import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesome6 } from '@expo/vector-icons'
import StartNewTripCard from '@/components/StartNewTripCard';
import { Colors } from '@/constants/Colors';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '@/configs/firebaseConfig';
import { useNavigation, useRouter } from 'expo-router';

export default function MyTrip() {

    const [userTrips, setUserTrips] = useState([]);
    const user = auth.currentUser;
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        user&&GetMyTrips();
    },[user])

    const GetMyTrips = async() => {
        setLoading(true);
        setUserTrips([]);
        const q = query(collection(db, 'UserTrips'), where('userEmail', "==", user?.email));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            setUserTrips(prev=>[...prev,doc.data()])
        });
        setLoading(false);
    }


    return (
        <View style={styles.page}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Holidate</Text>
                <FontAwesome6 name="circle-plus" size={35} color="black" />
            </View>
        
            {
                userTrips?.length == 0 ?
                    <StartNewTripCard /> 
                    : 
                    <UserTripList userTrips={userTrips}/>
            }
        
        </View>
    )
}


const styles = StyleSheet.create({
    page: {
        padding: 25,
        paddingTop: 55,
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginBottom: 15,
    },
    headerText: {
        fontSize: 35,
        fontFamily: 'outfit-bold',
        color:'orange'
    }
})