import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PlaceList = ({ places }) => {
  return (
    <View>
      <Text style={styles.header}>Places to Visit</Text>
      {places.map((place, index) => (
        <View key={index} style={styles.placeContainer}>
          <Image source={{ uri: place.imageUrl }} style={styles.image} />
          <Text>{place.name}</Text>
          <Text>{place.details}</Text>
          <Text>Ticket Price: {place.ticketPricing}</Text>
          <Text>Travel Time: {place.timeToTravel}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  header: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  placeContainer: { marginBottom: 20 },
  image: { width: '100%', height: 150, marginBottom: 10 }
});

export default PlaceList;
