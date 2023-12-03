import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";

import { useLocalSearchParams } from "expo-router";

import BackgroundImage from "../../assets/Images/dayBackground.jpg"; // Adjust the path as per your folder structure
import Location from "../../assets/Images/location.png"; // Adjust the path as per your folder structure

import { Themes } from "../../assets/Themes";
import { Stack } from "expo-router";
import { ExitHeader } from "../components/exitHeader";
const windowDimensions = Dimensions.get("window");

export default function locationPinner() {
  // const params = useLocalSearchParams();
  const [text, onChangeText] = React.useState("Useless Text");

  return (
    <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
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
        <ExitHeader />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Location Pinner</Text>
          <View style={styles.divider}></View>
          <Text style={styles.question}>Pin this location?</Text>
          <Image source={Location} style={styles.locationImage}></Image>
          <View style={styles.userAnswerContainer}>
            <View style={styles.locationNameQuestionContainer}>
              <Text style={styles.locationNameQuestion}>
                Name this location:
              </Text>
              <TextInput
                style={styles.locationTextInput}
                onChangeText={onChangeText}
                value={text}
              />
            </View>
            <TouchableOpacity>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Inside</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Outside</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.clothingItemsSelectionContainer}></View>
          </View>

          <TouchableOpacity>
            <View style={styles.nextButton}>
              <Text style={styles.nextButtonText}>Next</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'contain', 'stretch', etc.
    width: windowDimensions.width,
    height: windowDimensions.height,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  contentContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
  },
  title: {},
  divider: {
    borderWidth: 1,
    width: 50,
    height: 1,
    borderColor: Themes.colors.logoGreen,
  },
  question: {},
  locationImage: {},
  userAnswerContainer: {
    // flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  locationNameQuestionContainer: {
    // flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    // height: 700,
  },

  locationNameQuestion: {},
  locationTextInput: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    backgroundColor: "white",
  },
  button: {
    borderWidth: 1,
    borderColor: Themes.colors.logoGreen,
  },
  buttonText: {},
  clothingItem: {
    flex: 1,
    maxWidth: "25%", // 100% devided by the number of rows you want
    alignItems: "center",

    // my visual styles; not important for the grid
    padding: 10,
    backgroundColor: "rgba(249, 180, 45, 0.25)",
    borderWidth: 1.5,
    borderColor: "#fff",
  },
});
