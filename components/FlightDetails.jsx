import React from 'react';
import { View, Text, Linking, StyleSheet } from 'react-native';

const FlightDetails = ({ flight }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Flight Details</Text>
      <Text>Airline: {flight.details.airline}</Text>
      <Text>Flight Number: {flight.details.flightNumber}</Text>
      <Text>Departure: {flight.details.departureAirport} at {flight.details.departureTime} on {flight.details.departureDate}</Text>
      <Text>Arrival: {flight.details.arrivalAirport} at {flight.details.arrivalTime} on {flight.details.arrivalDate}</Text>
      <Text>Price: {flight.price.amount} {flight.price.currency}</Text>
      <Text style={styles.link} onPress={() => Linking.openURL(flight.bookingUrl)}>Book Flight</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
  header: { fontSize: 18, fontWeight: 'bold' },
  link: { color: 'blue', textDecorationLine: 'underline' }
});

export default FlightDetails;
