import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation, useRouter } from 'expo-router';
import FlightDetails from '../../components/FlightDetails';
import HotelList from '../../components/HotelList';
import PlaceList from '../../components/PlaceList';
import DailyPlan from '../../components/DailyPlan';
import {tripData} from '../../components/TripContext'; // Assuming tripData is exported

const Result = () => {
    const navigation = useNavigation();
    const router = useRouter();
  return (
    <ScrollView style={{ padding: 20 }}>
      <FlightDetails flight={tripData.flight} />
      <HotelList hotels={tripData.hotel} />
      <PlaceList places={tripData.placesToVisit} />
      <DailyPlan dailyPlan={tripData.dailyPlan} />
    </ScrollView>
  );
};

export default Result;
