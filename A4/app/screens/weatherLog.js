import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { useLocalSearchParams } from "expo-router";

import { Themes } from "../../assets/Themes";
import { Stack } from "expo-router";

const windowDimensions = Dimensions.get("window");

export default function weatherLog() {
  // const params = useLocalSearchParams();
  return (
    <View style={styles.screenContainer}>
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
      <View style={styles.contentContainer}>
        <Text style={styles.screenTitleText}> Weather Log</Text>
        <View style={styles.divider}></View>
        <Text style={styles.title}>Suggestions Followed</Text>
        <View style={styles.suggestionsView}>
          <View style={styles.suggestion}>
            <Text style={styles.suggestionText}>Dress Light</Text>
            <TouchableOpacity>
              <View style={styles.suggestionCheckbox}></View>
            </TouchableOpacity>
          </View>
          <View style={styles.suggestion}>
            <Text style={styles.suggestionText}>Umbrella</Text>
            <TouchableOpacity>
              <View style={styles.suggestionCheckbox}></View>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.title}>I felt...</Text>
        <View style={styles.temperatureView}>
          <TouchableOpacity>
            <View style={styles.temperaturePrefButton}>
              <Text style={styles.temperaturePrefText}>Too Hot</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.temperaturePrefButton}>
              <Text style={styles.temperaturePrefText}>Just Right</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    width: windowDimensions.width,
    height: windowDimensions.height - 100,
  },
  contentContainer: {
    // width: 300,
    borderWidth: 1,
    borderColor: "red",
    width: windowDimensions.width,

    height: windowDimensions.height - 100,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1,
  },
  screenTitleText: { color: Themes.colors.logoGreen, fontWeight: "bold" },
  divider: {
    borderWidth: 1,
    width: 50,
    height: 1,
    borderColor: Themes.colors.logoGreen,
  },
  title: { color: Themes.colors.logoGreen },
  suggestionsView: {},
  suggestion: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
  },
  suggestionText: {},
  suggestionCheckbox: {
    borderWidth: 3,
    borderColor: Themes.colors.logoGreen,
    color: "white",
    aspectRatio: 1,
    width: 30,
    borderRadius: 5,
  },
  temperatureView: {
    // borderWidth: 1,
    // borderColor: Themes.colors.logoGreen,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 300,
  },
  temperaturePrefButton: {
    borderWidth: 3,
    borderColor: Themes.colors.logoGreen,
    color: "white",
    resizeMode: "contain",
    width: 100,
    borderRadius: 5,
  },
  temperaturePrefText: {},
});
