import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

import { useLocalSearchParams } from "expo-router";
import { Themes } from "../assets/Themes";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function songDetail() {
  const params = useLocalSearchParams();
  return (
    <WebView
      style={styles.container}
      source={{ uri: params.externalUrl }}
      onError={(syntheticEvent) => {
        const { nativeEvent } = syntheticEvent;
        console.error("WebView error:", nativeEvent);
      }}
    >
      <StatusBar style="light" />

      <Stack.Screen
        options={{
          title: "Song Details",
          headerStyle: { backgroundColor: Themes.colors.background },
          headerBackTitleVisible: false,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTintColor: "#fff",
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
    justifyContent: "flex-start",
    flexDirection: "column",
    //width:
    backgroundColor: Themes.colors.background,
    alignItems: "center",
  },
});
