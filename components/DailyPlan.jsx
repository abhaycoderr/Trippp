import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DailyPlan = ({ dailyPlan }) => {
  return (
    <View>
      <Text style={styles.header}>Daily Plan</Text>
      {dailyPlan.map((day, index) => (
        <View key={index} style={styles.dayContainer}>
          <Text style={styles.dayHeader}>{day.day}</Text>
          {day.schedule.map((activity, i) => (
            <Text key={i}>Visit {activity.place} - Best time: {activity.bestTimeToVisit}</Text>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  header: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  dayContainer: { marginBottom: 15 },
  dayHeader: { fontWeight: 'bold', marginBottom: 5 }
});

export default DailyPlan;
