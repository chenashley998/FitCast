import { StyleSheet } from "react-native";

import { useLocalSearchParams } from "expo-router";
import { WebView } from "react-native-webview";

import { Themes } from "../assets/Themes";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";

export default function songPreview() {
  const params = useLocalSearchParams();
  return (
    <WebView
      style={styles.container}
      source={{ uri: params.previewUrl }}
      onError={(syntheticEvent) => {
        const { nativeEvent } = syntheticEvent;
        console.error("WebView error:", nativeEvent);
      }}
    >
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
      <StatusBar style="light" />
    </WebView>
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
