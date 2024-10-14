// components/MyTrip/MyTrip.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyTrip = () => {
  return (
    <View style={styles.container}>
      <Text>My Trip Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyTrip;
