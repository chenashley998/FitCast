import { StyleSheet } from "react-native";

import { useLocalSearchParams } from "expo-router";
import { WebView } from "react-native-webview";

import { Themes } from "../assets/Themes";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";

export default function songPreview() {
  // const params = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Song Preview",
          headerStyle: { backgroundColor: Themes.colors.background },
          headerTintColor: "#fff",

          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerBackTitleVisible: false,
        }}
      />
      <Text> ALOHA</Text>
      <StatusBar style="light" />
    </View>
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
