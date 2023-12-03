import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Header } from "../components/header";
import { Themes } from "../../assets/Themes";
import { Stack } from "expo-router";

const windowDimensions = Dimensions.get("window");
import BackgroundImage from "../../assets/Images/dayBackground.jpg";

export default function WeatherLog() {
  // States for checkboxes
  const [isDressLightChecked, setIsDressLightChecked] = useState(false);
  const [isUmbrellaChecked, setIsUmbrellaChecked] = useState(false);
  const [isJacketChecked, setIsJacketChecked] = useState(false);
  const [isFeelingClicked, setIsFeelingClicked] = useState(false);
  const [isFeelingClicked2, setIsFeelingClicked2] = useState(false);
  const [isFeelingClicked3, setIsFeelingClicked3] = useState(false);

  // Function to toggle checkbox state
  const toggleDressLight = () => setIsDressLightChecked(!isDressLightChecked);
  const toggleUmbrella = () => setIsUmbrellaChecked(!isUmbrellaChecked);
  const toggleJacket = () => setIsJacketChecked(!isJacketChecked);
  const toggleIsFeelingClicked = () => setIsFeelingClicked(!isFeelingClicked);
  const toggleIsFeelingClicked2 = () =>
    setIsFeelingClicked2(!isFeelingClicked2);
  const toggleIsFeelingClicked3 = () =>
    setIsFeelingClicked3(!isFeelingClicked3);

  const handleTemperaturePref = (preference) => {
    switch (preference) {
      case "Too Hot":
        setIsFeelingClicked(true);
        setIsFeelingClicked2(false);
        setIsFeelingClicked3(false);
        break;
      case "Just Right":
        setIsFeelingClicked(false);
        setIsFeelingClicked2(true);
        setIsFeelingClicked3(false);
        break;
      case "Too Cold":
        setIsFeelingClicked(false);
        setIsFeelingClicked2(false);
        setIsFeelingClicked3(true);
        break;
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ImageBackground
        source={BackgroundImage}
        style={styles.backgroundImage}
      ></ImageBackground>
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
            <TouchableOpacity onPress={toggleDressLight}>
              <View style={styles.suggestionCheckbox}>
                {isDressLightChecked && (
                  <Text style={styles.checkmark}>✔️</Text>
                )}
              </View>
            </TouchableOpacity>
            {isDressLightChecked && (
              <Text style={styles.suggestionTextClicked}>Dress Light</Text>
            )}
            {!isDressLightChecked && (
              <Text style={styles.suggestionText}>Dress Light</Text>
            )}
          </View>
          <View style={styles.suggestion}>
            <TouchableOpacity onPress={toggleUmbrella}>
              <View style={styles.suggestionCheckbox}>
                {isUmbrellaChecked && <Text style={styles.checkmark}>✔️</Text>}
              </View>
            </TouchableOpacity>
            {isUmbrellaChecked && (
              <Text style={styles.suggestionTextClicked}>Bring Umbrella</Text>
            )}
            {!isUmbrellaChecked && (
              <Text style={styles.suggestionText}>Bring Umbrella</Text>
            )}
          </View>
          <View style={styles.suggestion}>
            <TouchableOpacity onPress={toggleJacket}>
              <View style={styles.suggestionCheckbox}>
                {isJacketChecked && <Text style={styles.checkmark}>✔️</Text>}
              </View>
            </TouchableOpacity>
            {isJacketChecked && (
              <Text style={styles.suggestionTextClicked}>Bring Jacket</Text>
            )}
            {!isJacketChecked && (
              <Text style={styles.suggestionText}>Bring Jacket</Text>
            )}
          </View>
        </View>
        <Text style={styles.title}>I felt...</Text>
        <View style={styles.temperatureView}>
          <TouchableOpacity onPress={() => handleTemperaturePref("Too Hot")}>
            {!isFeelingClicked && (
              <View style={styles.temperaturePrefButton}>
                <Text style={styles.temperaturePrefText}>Too Hot</Text>
              </View>
            )}
            {isFeelingClicked && (
              <View style={styles.temperaturePrefButtonClicked}>
                <Text style={styles.temperaturePrefTextClicked}>Too Hot</Text>
              </View>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTemperaturePref("Just Right")}>
            {!isFeelingClicked2 && (
              <View style={styles.temperaturePrefButton}>
                <Text style={styles.temperaturePrefText}>Just Right</Text>
              </View>
            )}
            {isFeelingClicked2 && (
              <View style={styles.temperaturePrefButtonClicked}>
                <Text style={styles.temperaturePrefTextClicked}>
                  Just Right
                </Text>
              </View>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTemperaturePref("Too Cold")}>
            {!isFeelingClicked3 && (
              <View style={styles.temperaturePrefButton}>
                <Text style={styles.temperaturePrefText}>Too Cold</Text>
              </View>
            )}
            {isFeelingClicked3 && (
              <View style={styles.temperaturePrefButtonClicked}>
                <Text style={styles.temperaturePrefTextClicked}>Too Cold</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'contain', 'stretch', etc.
    width: windowDimensions.width,
    height: windowDimensions.height,
    position: "absolute",
  },
  checkmark: {
    color: Themes.colors.logoGreen,
    backgroundColor: Themes.colors.logoYellow,
  },
  screenContainer: {
    width: windowDimensions.width,
    height: windowDimensions.height - 100,
  },
  contentContainer: {
    width: windowDimensions.width * 0.8,
    height: windowDimensions.height * 0.8,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    marginTop: 30,
    paddingTop: 10,
    backgroundColor: Themes.colors.logoGreen,
    alignSelf: "center",
    borderRadius: 20,
  },

  screenTitleText: {
    color: Themes.colors.logoYellow,
    fontWeight: "bold",
    fontSize: 25,
    paddingTop: 15,
  },
  divider: {
    width: 50,
    height: 1,
    margin: 20,
    backgroundColor: Themes.colors.logoYellow,
  },
  title: {
    color: Themes.colors.logoYellow,
    fontSize: 20,
    paddingTop: 15,
  },
  suggestionsView: {
    padding: 5,
  },
  suggestion: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 5,
    width: 200,
  },
  suggestionText: {
    fontSize: 18,
    padding: 5,
    marginLeft: 10,
    color: Themes.colors.logoYellow,
  },
  suggestionTextClicked: {
    fontSize: 18,
    padding: 5,
    marginLeft: 10,
    fontWeight: "bold",
    color: Themes.colors.logoYellow,
  },
  suggestionCheckbox: {
    borderWidth: 3,
    borderColor: Themes.colors.logoYellow,
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
  },
  temperaturePrefButton: {
    borderWidth: 3,
    borderColor: Themes.colors.logoYellow,
    width: 200,
    borderRadius: 5,
    padding: 5,
    margin: 5,
  },
  temperaturePrefButtonClicked: {
    borderWidth: 3,
    borderColor: Themes.colors.logoYellow,
    backgroundColor: Themes.colors.logoYellow,
    width: 200,
    borderRadius: 5,
    padding: 5,
    margin: 5,
  },
  temperaturePrefText: {
    fontSize: 18,
    alignSelf: "center",
    color: Themes.colors.logoYellow,
  },
  temperaturePrefTextClicked: {
    fontSize: 18,
    alignSelf: "center",
    fontWeight: "bold",
    color: Themes.colors.logoGreen,
  },
});
