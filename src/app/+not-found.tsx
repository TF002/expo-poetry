import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import ThemedCom from "@/src/components/ThemedCom";


export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ThemedCom.View style={styles.container}>
        <ThemedCom.Text type="title">This screen doesn't exist.</ThemedCom.Text>
        <Link href="/" style={styles.link}>
          <ThemedCom.Text type="link">Go to home screen!</ThemedCom.Text>
        </Link>
      </ThemedCom.View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
