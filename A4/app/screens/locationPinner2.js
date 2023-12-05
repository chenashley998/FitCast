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
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { useLocalSearchParams } from "expo-router";
import BackgroundImage from "../../assets/Images/dayBackground.jpg"; // Adjust the path as per your folder structure
import Location from "../../assets/Images/location.png"; // Adjust the path as per your folder structure
import { Themes } from "../../assets/Themes";
import { Stack } from "expo-router";
import { ClothingItem } from "../components/locationClothingItem";

import { BackHeader } from "../components/backHeader";
const windowDimensions = Dimensions.get("window");

export default function locationPinner2() {
  const navigation = useNavigation();
  const backScreen = () => {
    navigation.navigate("screens/locationPinner"); // Replace 'Home' with the actual route name of your home screen
  };
  const nextScreen = () => {
    navigation.navigate("index"); // Replace 'Home' with the actual route name of your home screen
  };
  // const params = useLocalSearchParams();
  const [text, onChangeText] = React.useState("");
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
        <BackHeader />
        <ScrollView style={styles.scrollView}>
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

              <View style={styles.clothingItemsSelectorContainer}>
                <View style={styles.clothingItemsSelectorRow}>
                  <ClothingItem />
                  <ClothingItem />
                  <ClothingItem />
                </View>
                <View style={styles.clothingItemsSelectorRow}>
                  <ClothingItem />
                  <ClothingItem />
                  <ClothingItem />
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity>
            <View style={styles.nextButton}>
              <Text style={styles.nextButtonText}>Next</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
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
  scrollView: {
    height: 3000,
  },
  contentContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
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
  title: {
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
  question: {
    color: Themes.colors.logoYellow,
    fontSize: 20,
    paddingTop: 0,
  },
  locationImage: { resizeMode: "contain", width: 270 },
  userAnswerContainer: {
    padding: 5,
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

  locationNameQuestion: {
    fontSize: 18,
    padding: 5,
    marginLeft: 10,
    color: Themes.colors.logoYellow,
  },
  locationTextInput: {
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    borderColor: "white",
    backgroundColor: Themes.colors.logoYellow,
  },
  button: {
    borderWidth: 3,
    borderColor: Themes.colors.logoYellow,
    width: 200,
    borderRadius: 5,
    padding: 5,
    margin: 5,
  },
  buttonClicked: {
    borderWidth: 3,
    borderColor: Themes.colors.logoYellow,
    backgroundColor: Themes.colors.logoYellow,
    width: 200,
    borderRadius: 5,
    padding: 5,
    margin: 5,
  },
  buttonText: {
    fontSize: 18,
    alignSelf: "center",
    color: Themes.colors.logoYellow,
  },
  buttonTextClicked: {
    fontSize: 18,
    alignSelf: "center",
    fontWeight: "bold",
    color: Themes.colors.logoGreen,
  },
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
  clothingItemsSelectorContainer: {
    backgroundColor: Themes.colors.logoYellow,
    borderRadius: 20,
    padding: 5,
    // flex: 1,
    flexDirection: "column",
    // height: 200,
    alignContent: "flex-start",
    justifyContent: "flex-start",
  },
  clothingItemsSelectorRow: {
    flexDirection: "row",
    // flex: 1,
    // borderWidth: 1,
    // borderColor: "red",
  },
  nextButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: Themes.colors.logoYellow,
    margin: 20,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Themes.colors.logoGreen,
  },
});
