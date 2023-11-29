import { StyleSheet, View, Text, SafeAreaView } from "react-native";

import { useLocalSearchParams } from "expo-router";

import { Themes } from "../../assets/Themes";
import { Stack } from "expo-router";
import { Header } from "../components/header";

export default function locationPinner() {
  // const params = useLocalSearchParams();
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: "Weather Log",
          headerStyle: { backgroundColor: Themes.colors.background },
          headerTintColor: "#fff",

          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerBackTitleVisible: false,
        }}
      />
      <Header />
      <Text> Location Pinning Page</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: Themes.colors.background,
  },
});
