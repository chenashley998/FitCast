import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions,
} from "react-native";

import { useLocalSearchParams } from "expo-router";

import { Themes } from "../../assets/Themes";
import { Stack } from "expo-router";
const windowDimensions = Dimensions.get("window");

export default function timeline() {
  return (
    <View style={styles.container}>
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
      <ImageBackground
        source={require("../../assets/Images/sunny.jpg")}
        style={styles.backgroundImage}
      >
        <Text> Weather Timeline Page</Text>
        <View style={styles.timeline}>
          <View style={styles.times}>
            <Text>times and weather</Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.clothes}>
            <Text>clothes</Text>
          </View>
        </View>
        <View style={styles.description}>
          <Text>It's hot today: dress light but pack an umbrella</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'contain', 'stretch', etc.
    width: windowDimensions.width,
    height: windowDimensions.height,
  },
  timeline: {
    width: "90%",
    height: "80%",
    backgroundColor: Themes.colors.weatherOrange,
    flexDirection: "row",
    borderRadius: 15,
    padding: 10,
    alignSelf: "center",
  },
  line: {
    backgroundColor: Themes.colors.paletOrange,
    flex: 1,
  },
  times: {
    flex: 30,
  },
  clothes: {
    flex: 55,
    alignItems: "flex-end",
  },
  description: {
    backgroundColor: "blue",
    alignItems: "center",
    alignSelf: "center",
    width: "80%",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: Themes.colors.background,
  },
});
