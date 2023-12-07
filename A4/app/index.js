import {
  Image,
  StyleSheet,
  SafeAreaView,
  Text,
  Pressable,
  FlatList,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Button,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppState } from "react-native";

import { LocationModal } from "./screens/modals/locationModal";
import { LogModal } from "./screens/modals/logModal";
import { SmartModal } from "./screens/modals/smartModal";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import BackgroundImage from "../assets/Images/dayBackground.jpg"; // Adjust the path as per your folder structure
import SunIcon from "../assets/Images/sunnyIconGreen.png"; // Adjust the path as per your folder structure
import fitcast from "../assets/Images/fitcast.png"; // Adjust the path as per your folder structure
import umbrella from "../assets/Images/umbrella.png";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import BackgroundImageWarm from "../assets/Images/dayBackground.jpg";
import BackgroundImageCold from "../assets/Images/coldBackground.png";
import pantsIcon from "../assets/Images/pantsIcon.png";
import shirtIcon from "../assets/Images/shirtIcon.png";
import shortsIcon from "../assets/Images/shortsIcon.png";
import umbrellaIcon from "../assets/Images/umbrellaIcon.png";
import jacketIcon from "../assets/Images/jacketIcon.png";
import bagIcon from "../assets/Images/bagIcon.png";
import jacketUmbrellaIcon from "../assets/Images/jacketUmbrellaIcon.png";

import * as Font from "expo-font";

import { Header } from "./components/header";
import { Images, Themes } from "../assets/Themes";

import { Link, Stack } from "expo-router/";
const windowDimensions = Dimensions.get("window");

export default function App() {
  const [weather, setWeather] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(BackgroundImage);
  const [isSmartModalVisible, setSmartModalVisible] = useState(false);
  const [isLocationModalVisible, setLocationModalVisible] = useState(false);
  const [isLogModalVisible, setLogModalVisible] = useState(false);
  const toggleSmartModal = () => {
    setSmartModalVisible(!isSmartModalVisible);
  };
  const toggleLogModal = () => {
    setLogModalVisible(!isLogModalVisible);
  };
  const toggleLocationModal = () => {
    setLocationModalVisible(!isLocationModalVisible);
  };
  const handleSmartToggleModalFromComponent = () => {
    toggleSmartModal();
  };
  const handleLogToggleModalFromComponent = () => {
    toggleLogModal();
  };
  const handleAppStateChange = (nextAppState) => {
    if (nextAppState === "active" || nextAppState === "background") {
      resetVisitedScreenFlag();
    }
  };

  const resetVisitedScreenFlag = async () => {
    try {
      // Reset the flag when the app is completely refreshed
      const hasVisitedScreen = await AsyncStorage.getItem("hasVisitedScreen");
      console.log("before refresh: ", hasVisitedScreen);
      await AsyncStorage.setItem("hasVisitedScreen", "false");

      // await AsyncStorage.removeItem("hasVisitedScreen");
    } catch (error) {
      console.error("Error resetting visit flag on app refresh:", error);
    }
  };

  useEffect(() => {
    // Add an AppState change listener
    const appStateSubscription = AppState.addEventListener(
      "change",
      handleAppStateChange
    );

    // Clean up the subscription when the component is unmounted
    return () => {
      appStateSubscription.remove();
    };
  }, []);

  const checkFirstVisit = async () => {
    try {
      const hasVisitedScreen = await AsyncStorage.getItem("hasVisitedScreen");
      console.log("visited: ", hasVisitedScreen);
      setLogModalVisible(true);
      // setLocationModalVisible(true);
      // setSmartModalVisible(true);
      // if (hasVisitedScreen == null || hasVisitedScreen == false) {
      //   // The screen is being visited for the first time during this session
      //   // Show the modal
      //   // setLocationModalVisible(true);
      //   console.log("HIIIIII");
      //   setLogModalVisible(true);

      //   // Set the flag to indicate that the screen has been visited
      //   await AsyncStorage.setItem("hasVisitedScreen", "true");
      //   const hasVisitedScreen1 = await AsyncStorage.getItem(
      //     "hasVisitedScreen"
      //   );
      //   console.log("after true: ", hasVisitedScreen1);
      // } else {
      //   // The screen has been visited during this session
      //   // Do not show the modal
      //   // setLocationModalVisible(false);
      //   console.log("hello");

      //   setLogModalVisible(false);
      // }
    } catch (error) {
      console.error("Error checking first visit:", error);
    }
  };

  // Call checkFirstVisit when your component mounts
  useEffect(() => {
    checkFirstVisit();
    resetVisitedScreenFlag();
  }, []);

  const handleSmartOpenFromComponent = () => {
    setLogModalVisible(false);

    setTimeout(() => {
      setSmartModalVisible(true);

      // Automatically close SmartModal after a delay (adjust the time as needed)
      setTimeout(() => {
        setSmartModalVisible(false);
      }, 1000); // Adjust the delay as needed
    }, 500);
    // Adjust the delay as needed
  };

  const handleLocationToggleModalFromComponent = () => {
    setLocationModalVisible(false);

    setTimeout(() => {
      setSmartModalVisible(true);

      // Automatically close SmartModal after a delay (adjust the time as needed)
      setTimeout(() => {
        setSmartModalVisible(false);
      }, 1000); // Adjust the delay as needed
    }, 500);
  };
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = "f076a815a1cbbdb3f228968604fdcc7a";
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=Palo%20Alto&appid=${apiKey}&units=imperial`
        );
        const data = await response.json();
        setWeather(data);
        setBackgroundImage(
          data.main.temp > 20 ? BackgroundImageWarm : BackgroundImageCold
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeather();
  }, []);

  // Function to determine the outfit based on temperature
  const getOutfit = (temp) => {
    if (temp > 68) {
      // Warmer than 68°F
      return { top: shirtIcon, bottom: shortsIcon, extra: null };
    } else if (temp > 50) {
      // Between 50°F and 68°F
      return { top: shirtIcon, bottom: pantsIcon, extra: jacketIcon };
    } else {
      // Cooler than 50°F
      return { top: jacketIcon, bottom: pantsIcon, extra: umbrellaIcon };
    }
  };

  if (!weather) return <Text>Loading...</Text>;

  const currentTemp = Math.round(weather.main.temp);
  const tempHigh = Math.round(weather.main.temp_max);
  const tempLow = Math.round(weather.main.temp_min);
  const { top, bottom, extra } = getOutfit(currentTemp);

  const VerticalLine = () => <View style={styles.line} />;

  let fitCastBagItems = null;
  fitCastBagItems = (
    <>
      <Image style={styles.fitCastBagItem}></Image>
    </>
  );

  let homescreen = (
    <View style={styles.homescreen}>
      <View style={styles.weatherInfoContainer}>
        <View style={styles.temperatureContainer}>
          <Image source={SunIcon} style={styles.tempIcon}></Image>
          <Text style={styles.tempText}>72°</Text>
        </View>
        <Text style={styles.tempDescription}>Clear</Text>
        <View style={{ height: 30, width: 200 }}>
          <Button title="Location modal" onPress={toggleLocationModal} />
          <LocationModal
            isLocationModalVisible={isLocationModalVisible}
            onLocationToggleModal={handleLocationToggleModalFromComponent}
          />
        </View>
        <View style={{ height: 30, width: 200 }}>
          <Button title="Smarter modal" onPress={toggleSmartModal} />
          <SmartModal
            isSmartModalVisible={isSmartModalVisible}
            onSmartToggleModal={handleSmartToggleModalFromComponent}
          />
        </View>
        <View style={{ height: 30, width: 200 }}>
          <Button title="Log modal" onPress={toggleLogModal} />
          <LogModal
            isLogModalVisible={isLogModalVisible}
            onLogToggleModal={handleLogToggleModalFromComponent}
            handleSmartOpenFromComponent={handleSmartOpenFromComponent}
          />
        </View>
        <Text style={styles.tempHighLow}>High 75° | Low 50°</Text>
      </View>

      <TouchableOpacity>
        <Link
          href={{
            pathname: "./screens/timeline",
            params: {
              // previewUrl: item.previewUrl,
            },
          }}
          // asChild
        >
          <View style={styles.fitCastContainer}>
            <View style={styles.fitCastTitleContain}>
              <Text style={styles.fitCastName}>Your FitCast</Text>
            </View>
            <View style={styles.items}>
              <View style={styles.itemsToWear}>
                <View style={styles.FitcastTextContainer}>
                  <Text style={styles.suggestionTextNow}>Now:</Text>
                  <Text style={styles.suggestionText}> Dress light </Text>
                </View>
                <View style={styles.iconcontainer}>
                  <View style={styles.fitCastIcons}>
                    <View style={styles.fitCastOutfit}>
                      <Image
                        source={shirtIcon}
                        style={styles.outfitTop}
                      ></Image>
                      {/* <Text style={styles.textsymbols}> + </Text> */}
                      <Image
                        source={shortsIcon}
                        style={styles.outfitBottom}
                      ></Image>
                    </View>
                  </View>
                </View>
              </View>
              <VerticalLine />
              <View style={styles.itemsToPack}>
                <View style={styles.FitcastTextContainer1}>
                  <Text style={styles.suggestionTextLater}>Later:</Text>
                  <Text style={styles.suggestionText}> Layer Up </Text>
                </View>
                <View style={styles.iconcontainer}>
                  <View style={styles.fitCastOutfitLater}>
                    <View style={styles.fitCastOutfit}>
                      <Image
                        source={jacketIcon}
                        style={styles.outfitOpacity}
                      ></Image>
                      {/* <Text style={styles.textsymbols}> + </Text> */}
                      <Image
                        source={pantsIcon}
                        style={styles.outfitOpacityPants}
                      ></Image>
                    </View>
                    <Text style={styles.textsymbols}>+ </Text>

                    <Image
                      source={umbrellaIcon}
                      style={styles.outfitOpacityUmbrella}
                    ></Image>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Link>
      </TouchableOpacity>

      <View style={styles.fitCastDescriptionContainer}>
        <Text style={styles.fitCastDescriptionSummary}>
          Dress light, but pack warm clothes and an umbrella for later
        </Text>
        <Text style={styles.fitCastDescriptionExtended}>
          You typically feel hot in these weather conditions. Later it will cool
          down and rain, be prepared
        </Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
      <SafeAreaView>
        <StatusBar style="light" />
        <Header />
        {/* <View style={styles.topBar}>
         <View style={styles.topBarContainer}>
           <Image source={fitcast} style={styles.fitCastLogo} />
           <Text style={styles.fitCastText}>FitCast</Text>
         </View>
       </View> */}

        {homescreen}
        <Stack.Screen options={{ header: () => null }} />
        <StatusBar style="light" />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  iconcontainer: {
    height: "120%",
  },
  phoneContainer: {
    backgroundColor: "transparent", // Set background color to transparent
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: windowDimensions.width,
    height: windowDimensions.height,
  },
  FitcastTextContainer: {
    paddingLeft: "5%",
    marginTop: 5,
    flexDirection: "row",
  },
  FitcastTextContainer1: {
    paddingLeft: "0%",
    marginTop: 5,
    flexDirection: "row",
  },
  suggestionTextNow: {
    color: Themes.colors.logoGreen,
    fontWeight: "bold",
    fontSize: 18,
    //marginBottom: "5%",
  },
  suggestionTextLater: {
    color: Themes.colors.logoGreen,
    fontWeight: "bold",
    fontSize: 18,
    opacity: 0.8,
    //marginBottom: "5%",
  },
  suggestionText: {
    color: Themes.colors.logoGreen,
    fontSize: 18,
  },
  itemsToWear: {
    justifyContent: "space-between",
    flexDirection: "column",
    height: windowDimensions.height * 0.18,
    width: "43%",
    resizeMode: "contain",
    padding: 5,
  },
  itemsToPack: {
    justifyContent: "space-between",
    flexDirection: "column",
    height: windowDimensions.height * 0.18,
    width: "52%",

    padding: 5,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'contain', 'stretch', etc.
    width: windowDimensions.width,
    height: windowDimensions.height,
  },
  outfitOpacity: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    opacity: 0.5,
  },
  outfitOpacityUmbrella: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    opacity: 0.5,
  },
  outfitOpacityPants: {
    width: 58,
    height: 58,
    resizeMode: "contain",
    opacity: 0.5,
  },
  items: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  textsymbols: {
    color: Themes.colors.logoGreen,
    fontSize: 20,
  },
  topBar: {
    flexDirection: "row",
    height: 60,
    width: Dimensions.get("window").width,
    alignItems: "center",
    justifyContent: "center",
  },
  topBarContainer: {
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "center",
  },
  fitCastLogo: {
    // flex: 2,
    resizeMode: "contain",
    height: 200,
    width: 150,
  },
  fitCastText: {
    fontSize: 25,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  //HOMESCREEN
  homescreen: {
    flexDirection: "column",
    alignItems: "center",
  },
  //Weather info container
  weatherInfoContainer: {
    borderRadius: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: windowDimensions.height * 0.25,
    marginBottom: "5%",
  },
  temperatureContainer: {
    //borderColor: "black",
    //borderWidth: 1,
    height: 110,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  tempIcon: {
    height: 50,
    resizeMode: "contain",
  },
  tempText: {
    fontSize: 100,
    color: Themes.colors.logoGreen,
    alignSelf: "center",
  },
  tempDescription: {
    fontSize: 30,
    fontWeight: "bold",
    color: Themes.colors.logoGreen,
  },
  tempHighLow: {
    fontSize: 20,
    color: Themes.colors.logoGreen,
  },
  //Fitcast container
  fitCastContainer: {
    backgroundColor: Themes.colors.logoYellow,
    borderRadius: 30,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: "1%",
    width: windowDimensions.width * 0.9,
    height: windowDimensions.height * 0.32,
    paddingTop: 20,
    paddingBottom: 10, // Reduced from 20 to 10
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 5.46,
    opacity: 0.8,
    elevation: 6,
  },
  fitCastName: {
    color: Themes.colors.logoGreen,
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: "2%",
  },
  fitCastOutfit: {
    marginLeft: 10,
    // marginRight: 10,
    marginBottom: 0,
    //width: "85%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  fitCastOutfitLater: {
    //marginLeft: 10,
    marginRight: 10,
    marginBottom: 0,
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    width: 2, // Adjust the width of the line
    backgroundColor: Themes.colors.logoGreen, // Color of the line
    marginHorizontal: 8, // Adjust the margin as needed
    marginTop: 5,
    height: "120%",
  },
  outfitTop: {
    width: 63,
    height: 63,
  },
  outfitBottom: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },

  fitCastDescriptionContainer: {
    marginTop: "15%",
    backgroundColor: Themes.colors.logoGreen,
    height: "100%",
    width: "100%",
    opacity: 0.8,
    alignItems: "center",
    paddingTop: "5%",
    paddingHorizontal: 5,
    //paddingBottom: 10, // Add padding at the bottom for spacing
    justifyContent: "flex-start", // Center content vertically
  },
  fitCastDescriptionSummary: {
    color: Themes.colors.logoYellow,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "left",
    alignSelf: "flex-start",
    paddingHorizontal: 18,
  },
  fitCastDescriptionExtended: {
    color: Themes.colors.logoYellow,
    fontSize: 17,
    marginTop: 10,
    paddingHorizontal: 18,
    opacity: 1,
    textAlign: "left",
    alignSelf: "flex-start",
    fontStyle: "italic",
  },
  fitCastTitleContain: {
    alignItems: "center",
    width: "90%",
  },

  fitCastIcons: {
    marginTop: 5,
    marginBottom: 0,
  },
});
