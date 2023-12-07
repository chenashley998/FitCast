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
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const windowDimensions = Dimensions.get("window");
import BackgroundImage from "../../assets/Images/dayBackground.jpg";

export default function WeatherLog() {
  const navigation = useNavigation();

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

  const resetAllFields = () => {
    setIsDressLightChecked(false);
    setIsUmbrellaChecked(false);
    setIsJacketChecked(false);
    setIsFeelingClicked(false);
    setIsFeelingClicked2(false);
    setIsFeelingClicked3(false);
  };

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
        <View style={styles.bigtitlecontainer}>
          <Text style={styles.screenTitleText}> Suggestions Log</Text>
          {/* <TouchableOpacity onPress={setLogModalVisible}>
            <Entypo
              name="cross"
              size={50}
              color={Themes.colors.fitcastGray}
              justifyContent="flex-end"
            />
          </TouchableOpacity> */}
        </View>
        <View style={styles.divider}></View>
        <View style={styles.titlecontainer}>
          <Text style={styles.title}>Suggestions Followed:</Text>
        </View>
        <View style={styles.suggestionsView}>
          <View style={styles.suggestion}>
            <TouchableOpacity onPress={toggleDressLight}>
              {isDressLightChecked && (
                <View style={styles.suggestionCheckboxFilled}>
                  <Ionicons
                    style={styles.checkmark}
                    name="checkmark-outline"
                    size={25}
                    color={Themes.colors.logoYellow}
                  />
                </View>
              )}
              {!isDressLightChecked && (
                <View style={styles.suggestionCheckbox}></View>
              )}
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
              {isUmbrellaChecked && (
                <View style={styles.suggestionCheckboxFilled}>
                  <Ionicons
                    style={styles.checkmark}
                    name="checkmark-outline"
                    size={25}
                    color={Themes.colors.logoYellow}
                  />
                </View>
              )}
              {!isUmbrellaChecked && (
                <View style={styles.suggestionCheckbox}></View>
              )}
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
              {isJacketChecked && (
                <View style={styles.suggestionCheckboxFilled}>
                  <Ionicons
                    style={styles.checkmark}
                    name="checkmark-outline"
                    size={25}
                    color={Themes.colors.logoYellow}
                  />
                </View>
              )}
              {!isJacketChecked && (
                <View style={styles.suggestionCheckbox}></View>
              )}
            </TouchableOpacity>
            {isJacketChecked && (
              <Text style={styles.suggestionTextClicked}>Bring Layers</Text>
            )}
            {!isJacketChecked && (
              <Text style={styles.suggestionText}>Bring Layers</Text>
            )}
          </View>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.titlecontainer1}>
          <Text style={styles.title}>I felt:</Text>
        </View>
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
        <View style={styles.divider}></View>

        <View style={styles.submitcontainer}>
          <TouchableOpacity
            onPress={() => {
              resetAllFields();
              navigation.navigate("index");
            }}
          >
            <View style={styles.submitButton}>
              <Text style={styles.submitText}> Submit</Text>
            </View>
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
    fontSize: 26,
    paddingTop: 15,
  },
  bigtitlecontainer: {
    width: "90%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  divider: {
    width: "90%",
    height: 2,
    margin: "5%",
    backgroundColor: Themes.colors.fitcastGray,
  },
  title: {
    color: Themes.colors.logoYellow,
    fontSize: 20,
    //paddingTop: 15,
  },
  titlecontainer: {
    color: Themes.colors.logoYellow,
    borderwidth: 1, //paddingTop: 15,
    width: "80%",
  },
  titlecontainer1: {
    color: Themes.colors.logoYellow,
    borderwidth: 1, //paddingTop: 15,
    width: "75%",
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
  suggestionCheckboxFilled: {
    borderWidth: 3,
    borderColor: Themes.colors.logoYellow,
    backgroundColor: Themes.colors.logoYellow,
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
    borderwidth: 1,
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
  submitText: {
    fontSize: 20,
    color: Themes.colors.logoGreen,
  },
  submitcontainer: {
    width: "80%",
    borderwidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  submitButton: {
    backgroundColor: Themes.colors.logoYellow,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Themes.colors.logoGreen,
  },
});
