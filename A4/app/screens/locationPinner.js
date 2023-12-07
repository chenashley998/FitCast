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
import { useState, useRef } from "react";
import MapView from "react-native-maps";
import { useNavigation } from "@react-navigation/native";

import { useLocalSearchParams } from "expo-router";
import BackgroundImage from "../../assets/Images/dayBackground.jpg"; // Adjust the path as per your folder structure
import Location from "../../assets/Images/location.png"; // Adjust the path as per your folder structure
import { Themes } from "../../assets/Themes";
import { Stack } from "expo-router";
import { ClothingItem } from "../components/locationClothingItem";
import shirtIcon from "../../assets/Images/shirtIcon.png";

import { Header } from "../components/header";
const windowDimensions = Dimensions.get("window");

export default function locationPinner() {
  const scrollViewRef = useRef();
  // const params = useLocalSearchParams();
  const [text1, onChangeText1] = React.useState("");
  const [text2, onChangeText2] = React.useState("");
  const [isFeelingClicked, setIsFeelingClicked] = useState(false);
  const [isFeelingClicked2, setIsFeelingClicked2] = useState(false);
  const [isFeelingClicked3, setIsFeelingClicked3] = useState(false);
  const [isInside, setIsInside] = React.useState(false);
  const [isOutside, setIsOutside] = React.useState(false);
  const [resetClothingItems, setResetClothingItems] = useState(false);

  const navigation = useNavigation();

  const resetAllFields = () => {
    onChangeText1("");
    onChangeText2("");
    setIsFeelingClicked(false);
    setIsFeelingClicked2(false);
    setIsFeelingClicked3(false);
    setIsInside(false);
    setIsOutside(false);
    setResetClothingItems((prev) => !prev);
    scrollViewRef.current?.scrollTo({ x: 0, y: 0, animated: true });
  };

  const handleInsideOutside = (response) => {
    switch (response) {
      case "Inside":
        setIsInside(true);
        setIsOutside(false);
        break;
      case "Outside":
        setIsInside(false);
        setIsOutside(true);
        break;
      default:
        break;
    }
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

        <Header />

        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Location Pinner</Text>
          </View>
          <View style={styles.titleContainer}>
            <View style={styles.separator} />
          </View>
          <ScrollView
            ref={scrollViewRef}
            contentContainerStyle={styles.scrollView}
          >
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: 37.42631303388066,
                longitude: -122.17179519196625,
                latitudeDelta: 0.00222,
                longitudeDelta: 0.00121,
              }}
            />

            <View style={styles.userAnswerContainer}>
              <View style={styles.locationNameQuestionContainer}>
                <Text style={styles.locationNameQuestion}>
                  Name this location:
                </Text>
                <TextInput
                  style={styles.locationTextInput}
                  onChangeText={onChangeText1}
                  value={text1}
                />
              </View>
              <View style={styles.titleContainer}>
                <View style={styles.separator} />
              </View>
              <Text style={styles.question}>Location Information</Text>

              <TouchableOpacity onPress={() => handleInsideOutside("Inside")}>
                {!isInside && (
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>Inside</Text>
                  </View>
                )}
                {isInside && (
                  <View style={styles.buttonClicked}>
                    <Text style={styles.buttonTextClicked}>Inside</Text>
                  </View>
                )}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleInsideOutside("Outside")}>
                {!isOutside && (
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>Outside</Text>
                  </View>
                )}
                {isOutside && (
                  <View style={styles.buttonClicked}>
                    <Text style={styles.buttonTextClicked}>Outside</Text>
                  </View>
                )}
              </TouchableOpacity>
              <Text style={styles.question}>
                Additional Info (ie lecture hall, in the shade/sun)
              </Text>
              <TextInput
                style={styles.locationTextInput}
                onChangeText={onChangeText2}
                value={text2}
                //placeholder="Lecture hall, in the shade, etc."
              />
              <View style={styles.clothingItemsSelectionContainer}></View>
              <View style={styles.titleContainer}>
                <View style={styles.separator} />
              </View>
              <Text style={styles.question}>What are you wearing?</Text>

              <View style={styles.clothingItemsSelectorContainer}>
                <View style={styles.clothingItemsSelectorRow}>
                  <ClothingItem
                    itemName="Shirt"
                    itemImage={require("../../assets/Images/shirtIcon.png")}
                    reset={resetClothingItems}
                  />
                  <ClothingItem
                    itemName="Shorts"
                    itemImage={require("../../assets/Images/shortsIcon.png")}
                    reset={resetClothingItems}
                  />
                  <ClothingItem
                    itemName="Jacket"
                    itemImage={require("../../assets/Images/jacketIcon.png")}
                    reset={resetClothingItems}
                  />
                </View>
                <View style={styles.clothingItemsSelectorRow}>
                  <ClothingItem
                    itemName="Pants"
                    itemImage={require("../../assets/Images/pantsIcon.png")}
                    reset={resetClothingItems}
                  />
                  <ClothingItem
                    itemName="Scarf"
                    itemImage={require("../../assets/Images/scarfIcon.png")}
                    reset={resetClothingItems}
                  />
                  <ClothingItem
                    itemName="Sunglasses"
                    itemImage={require("../../assets/Images/sunglassIcon.png")}
                    reset={resetClothingItems}
                  />
                </View>
              </View>
            </View>
            <View>
              <View style={styles.titleContainer}>
                <View style={styles.separator} />
              </View>
              <Text style={styles.question}>I felt...</Text>
              <View style={styles.temperatureView}>
                <TouchableOpacity
                  onPress={() => handleTemperaturePref("Too Hot")}
                >
                  {!isFeelingClicked && (
                    <View style={styles.temperaturePrefButton}>
                      <Text style={styles.temperaturePrefText}>Too Hot</Text>
                    </View>
                  )}
                  {isFeelingClicked && (
                    <View style={styles.temperaturePrefButtonClicked}>
                      <Text style={styles.temperaturePrefTextClicked}>
                        Too Hot
                      </Text>
                    </View>
                  )}
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleTemperaturePref("Just Right")}
                >
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
                <TouchableOpacity
                  onPress={() => handleTemperaturePref("Too Cold")}
                >
                  {!isFeelingClicked3 && (
                    <View style={styles.temperaturePrefButton}>
                      <Text style={styles.temperaturePrefText}>Too Cold</Text>
                    </View>
                  )}
                  {isFeelingClicked3 && (
                    <View style={styles.temperaturePrefButtonClicked}>
                      <Text style={styles.temperaturePrefTextClicked}>
                        Too Cold
                      </Text>
                    </View>
                  )}
                </TouchableOpacity>
              </View>
              <View style={styles.titleContainer}>
                <View style={styles.separator} />
              </View>
            </View>
            <View style={styles.submitButtonContainer}>
              <TouchableOpacity
                onPress={() => {
                  resetAllFields();
                  navigation.navigate("index");
                }}
              >
                <View style={styles.submitButton}>
                  <Text style={styles.submitButtonText}>Submit</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  separator: {
    height: 1.5,
    width: 200,
    borderWidth: 1,
    borderColor: Themes.colors.fitcastGray,
    margin: 5,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'contain', 'stretch', etc.
    width: windowDimensions.width,
    height: windowDimensions.height,
  },
  container: {
    flex: 1,
  },
  scrollView: {
    height: 1250,
    // padding: 20,
    // height: 2000,
    // //width: 400,
    alignItems: "center",
  },
  map: {
    margin: 10,
    width: "85%",
    height: "18%",
    borderRadius: 10,
    alignSelf: "center",
  },
  contentContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    width: windowDimensions.width * 0.85,
    height: windowDimensions.height * 0.8,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    //marginTop: 30,
    //paddingTop: 10,
    backgroundColor: Themes.colors.logoGreen,
    alignSelf: "center",
    borderRadius: 20,
  },
  title: {
    color: Themes.colors.logoYellow,
    fontWeight: "bold",
    fontSize: 25,
    paddingTop: 15,
    paddingBottom: 5,
    alignSelf: "center",
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
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
    paddingTop: 20,
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
    marginTop: 2,
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
  submitButton: {
    // position: "absolute",
    //bottom: 0,
    //right: 0,
    width: 70,
    backgroundColor: Themes.colors.logoYellow,
    marginRight: 15,
    alignSelf: "flex-end",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Themes.colors.logoGreen,
  },
  submitButtonText: {
    color: Themes.colors.logoGreen,
  },
  submitButtonContainer: {
    height: 50,
    width: "100%",
    paddingTop: 10,
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
  temperatureView: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 200,
  },
});
