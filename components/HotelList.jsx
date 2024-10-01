import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const HotelList = ({ hotels }) => {
  return (
    <View>
      <Text style={styles.header}>Hotels</Text>
      {hotels.map((hotel, index) => (
        <View key={index} style={styles.hotelContainer}>
          <Image source={{ uri: hotel.imageUrl }} style={styles.image} />
          <Text>{hotel.name}</Text>
          <Text>{hotel.address}</Text>
          <Text>Price: {hotel.price}</Text>
          <Text>Rating: {hotel.rating}</Text>
          <Text>{hotel.description}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  header: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  hotelContainer: { marginBottom: 20 },
  image: { width: '100%', height: 150, marginBottom: 10 }
});

export default HotelList;
