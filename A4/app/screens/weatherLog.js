import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Header } from "../components/header";
import { Themes } from "../../assets/Themes";
import { Stack } from "expo-router";

const windowDimensions = Dimensions.get("window");

export default function WeatherLog() {
  // States for checkboxes
  const [isDressLightChecked, setIsDressLightChecked] = useState(false);
  const [isUmbrellaChecked, setIsUmbrellaChecked] = useState(false);

  // Function to toggle checkbox state
  const toggleDressLight = () => setIsDressLightChecked(!isDressLightChecked);
  const toggleUmbrella = () => setIsUmbrellaChecked(!isUmbrellaChecked);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <Stack.Screen
        options={{
          title: "Weather Log",
          headerStyle: { backgroundColor: Themes.colors.background },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 70,
          },
          headerBackTitleVisible: false,
        }}
      />
      <Header />
      <View style={styles.contentContainer}>
        <Text style={styles.screenTitleText}> Weather Log</Text>
        <View style={styles.divider}></View>
        <Text style={styles.title}>Suggestions Followed</Text>
        <View style={styles.suggestionsView}>
          <View style={styles.suggestion}>
            <Text style={styles.suggestionText}>Dress Light</Text>
            <TouchableOpacity onPress={toggleDressLight}>
              <View style={styles.suggestionCheckbox}>
                {isDressLightChecked && (
                  <Text style={styles.checkmark}>✔️</Text>
                )}
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.suggestion}>
            <Text style={styles.suggestionText}>Umbrella</Text>
            <TouchableOpacity onPress={toggleUmbrella}>
              <View style={styles.suggestionCheckbox}>
                {isUmbrellaChecked && <Text style={styles.checkmark}>✔️</Text>}
              </View>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  checkmark: {
    color: Themes.colors.logoGreen,
  },
  screenContainer: {
    width: windowDimensions.width,
    height: windowDimensions.height - 100,
  },
  contentContainer: {
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
    aspectRatio: 1,
    width: 30,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  temperatureView: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 300,
  },
  temperaturePrefButton: {
    borderWidth: 3,
    borderColor: Themes.colors.logoGreen,
    width: 100,
    borderRadius: 5,
  },
  temperaturePrefText: {},
});
