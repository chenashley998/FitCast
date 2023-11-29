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
        <View style={styles.timeline}>
          <View style={styles.times}>
            <Text>times and weather</Text>
          </View>
          <View style={styles.clothes}>
            <Text>clothes</Text>
          </View>
        </View>
        <View style={styles.description}>
          <Text style={styles.text}>
            It's hot today: dress {"\n"}
            light but pack an umbrella
          </Text>
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
    height: "70%",
    backgroundColor: Themes.colors.weatherOrange,
    flexDirection: "row",
    borderRadius: 15,
    padding: 10,
    alignSelf: "center",
    marginTop: 30,
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
    backgroundColor: Themes.colors.logoYellow,
    padding: 10,
    margin: 10,
    borderRadius: 15,
    alignItems: "center",
    alignSelf: "center",
    width: "80%",
    height: "12%",
  },
  text: {
    fontSize: 25,
    alignItems: "center",
    textAlign: "center",
    textAlignVertical: "center",
    alignContent: "center",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: Themes.colors.background,
  },
});
