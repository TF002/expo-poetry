import React from 'react';
import { BlurView } from 'expo-blur';
import { Platform, StyleSheet } from "react-native";


const TabBarBackground = () => {
  return (
    <BlurView style={styles.container} intensity={Platform.OS === "ios" ? 80 : 100} >
      {/* You can add additional content here if needed */}
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 60,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginBottom: 0,
  },
});

export default TabBarBackground; 