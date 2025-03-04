import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';

import { HapticTab } from '@/src/components/HapticTab';
import { IconSymbol } from '@/src/components/ui/IconSymbol';
import TabBarBackground from '@/src/components/ui/TabBarBackground';
import { Colors } from '@/src/constants/Colors';
import { useColorScheme } from '@/src/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <BlurView intensity={50} style={styles.blurContainer}>
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            headerShown: false,
            tabBarButton: HapticTab,
            tabBarBackground: TabBarBackground,
            tabBarStyle: {
              ...Platform.select({
                ios: {
                  position: 'absolute',
                  bottom: 0,
                  borderRadius: 30,
                  overflow: 'hidden',
                  marginHorizontal: 20,
                  height: 70,
                },
                default: {},
              }),
              backgroundColor: 'transparent',
            },
          }}>
          <Tabs.Screen
            name="index"
            options={{
              title: 'Home',
              tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
            }}
          />
          <Tabs.Screen
            name="explore"
            options={{
              title: 'Explore',
              tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
            }}
          />
        </Tabs>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'flex-end',
  },
  blurContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    borderRadius: 30,
    overflow: 'hidden',
    marginHorizontal: 20,
    height: 70,
  },
});
