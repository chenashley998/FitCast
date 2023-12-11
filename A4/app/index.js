import {
  Image,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import SunIcon from "../assets/Images/sunnyIconGreen.png";
import BackgroundImageWarm from "../assets/Images/dayBackground.jpg";
import BackgroundImageCold from "../assets/Images/coldBackground.png";
import BackgroundImageRain from "../assets/Images/rainyBackground.png";
import BackgroundImageNight from "../assets/Images/nightBackground.png";
import BackgroundImageCloudy from "../assets/Images/cloudyBackground.jpeg";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppState } from "react-native";

import { LocationModal } from "./screens/modals/locationModal";
import { LogModal } from "./screens/modals/logModal";
import { SmartModal } from "./screens/modals/smartModal";

import LogoRain from "../assets/Images/rainIconYellow.png";
import LogoCloudy from "../assets/Images/cloudIconGray.png";
import LogoNight from "../assets/Images/moonIcon.png";
import LogoNightRain from "../assets/Images/nightRainIcon.png";

import pantsIcon from "../assets/Images/pantsIcon.png";
import shirtIcon from "../assets/Images/shirtIcon.png";
import shortsIcon from "../assets/Images/shortsIcon.png";
import umbrellaIcon from "../assets/Images/umbrellaIcon.png";
import jacketIcon from "../assets/Images/jacketIcon.png";

import { Header } from "./components/header";
import { Images, Themes } from "../assets/Themes";

import { Link, Stack } from "expo-router/";
const windowDimensions = Dimensions.get("window");

export default function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(BackgroundImageWarm);
  const [logoImage, setLogoImage] = useState(SunIcon);
  const [fontColor, setFontColor] = useState(Themes.colors.logoGreen);
  const [bottom_text, setBottomText] = useState([]);
  const [top_text, setTopText] = useState([]);
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

  const onLocationCloseModal = () => {
    setLocationModalVisible(false);
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
      await AsyncStorage.setItem("hasVisitedScreen", "false");

      // await AsyncStorage.removeItem("hasVisitedScreen");
    } catch (error) {
      console.error("Error resetting visit flag on app refresh:", error);
    }
  };

  useEffect(() => {
    const appStateSubscription = AppState.addEventListener(
      "change",
      handleAppStateChange
    );

    return () => {
      appStateSubscription.remove();
    };
  }, []);

  const checkFirstVisit = async () => {
    try {
      var random_num = Math.floor(Math.random() * 3);
      console.log("num: ", random_num);
      if (random_num == 0) {
        setLogModalVisible(true);
      } else if (random_num == 1) {
        setLocationModalVisible(true);
      }
      //else 2: will just show blank screen
    } catch (error) {
      console.error("Error checking first visit:", error);
    }
  };

  useEffect(() => {
    checkFirstVisit();
    resetVisitedScreenFlag();
  }, []);

  const handleLogSubmitFromComponent = () => {
    setLogModalVisible(false);
    handleSmartSubmitFromComponent();
  };

  const handleSmartSubmitFromComponent = () => {
    setTimeout(() => {
      setSmartModalVisible(true);
      setTimeout(() => {
        setSmartModalVisible(false);
      }, 1000);
    }, 500);
  };

  const handleLocationToggleModalFromComponent = () => {
    setLocationModalVisible(false);
    handleSmartSubmitFromComponent();
  };

  useEffect(() => {
    const apiKey = "f076a815a1cbbdb3f228968604fdcc7a";
    const fetchWeatherAndForecast = async () => {
      try {
        // Fetch current weather
        const weatherResponse = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=Palo%20Alto&appid=${apiKey}&units=imperial`
        );
        const weatherData = await weatherResponse.json();
        setWeather(weatherData);

        // Fetch forecast
        const forecastResponse = await fetch(
          `http://api.openweathermap.org/data/2.5/forecast?q=Palo%20Alto&appid=${apiKey}&units=imperial`
        );
        const forecastData = await forecastResponse.json();
        setForecast(forecastData.list);
      } catch (error) {
        console.error("Error fetching weather or forecast data:", error);
      }
    };

    fetchWeatherAndForecast();
  }, []);

  useEffect(() => {
    if (weather) {
      const currentTime = new Date().getTime() / 1000;
      const isNight =
        currentTime > weather.sys.sunset || currentTime < weather.sys.sunrise;
      const isRaining = weather.weather.some(
        (condition) => condition.main === "Rain" || condition.main === "Drizzle"
      );
      const isCloudy = weather.weather.some(
        (condition) => condition.main === "Clouds"
      );
      let temp = weather.main.temp;
      let isCold = temp < 70;
      if (isCold && !isRaining) {
        setBottomText(
          "Based on historical data you've typically felt cold in this weather, make sure to layer up"
        );
        setTopText("It is chilly out, dress warm and in layers");
      } else if (!isCold && !isRaining) {
        setTopText("Dress light");
        setBottomText(
          "Based on historical data you've typically felt hot in this weather"
        );
      } else if (isCold && isRaining) {
        setTopText("Grab an umbrella!");
        setBottomText(
          "Based on historical data you've typically felt cold in this weather, make sure to layer up and pack an umbrella for the rain!"
        );
      } else if (!isCold && isRaining) {
        setTopText("Grab an umbrella!");
        setBottomText(
          "Based on historical data you've typically felt hot in this weather, make sure to dress light and pack an umbrella for the rain!"
        );
      }
      isCold = weather.main.temp <= 50;

      if (isRaining && isNight) {
        setBackgroundImage(BackgroundImageNight);
        setLogoImage(LogoNightRain);
        setFontColor(Themes.colors.logoYellow);
      } else if (isRaining) {
        setBackgroundImage(BackgroundImageRain);
        setLogoImage(LogoRain);
        setFontColor(Themes.colors.logoYellow);
      } else if (isNight) {
        setBackgroundImage(BackgroundImageNight);
        setLogoImage(LogoNight);
        setFontColor(Themes.colors.logoYellow);
      } else if (isCloudy && !isCold) {
        setBackgroundImage(BackgroundImageCloudy);
        setLogoImage(LogoCloudy);
        setFontColor(Themes.colors.fitcastGray);
      } else if (isCold) {
        setBackgroundImage(BackgroundImageCold);
        setLogoImage(SunIcon); // Update with cold weather logo if available
        setFontColor(Themes.colors.fitcastGray);
      } else {
        setBackgroundImage(BackgroundImageWarm);
        setLogoImage(SunIcon);
        setFontColor(Themes.colors.logoGreen);
      }
    }
  }, [weather]);

  const getOutfit = (currentTemp, forecastData, isRainingNow) => {
    let outfitNow = {};
    let outfitLater = {};

    if (currentTemp < 70) {
      outfitNow = { top: jacketIcon, bottom: pantsIcon, extra: null };
    } else {
      outfitNow = { top: shirtIcon, bottom: shortsIcon, extra: null };
    }

    // Add umbrella icon if it's currently raining
    if (isRainingNow) {
      outfitNow.extra = umbrellaIcon;
    }

    // Initialize outfitLater as the same as outfitNow
    outfitLater = { ...outfitNow };

    let isRainLater = false;

    // Check the next 4 forecast entries for rain and temperature change
    for (let i = 0; i < forecastData.length && i < 4; i++) {
      const futureTemp = Math.round(forecastData[i].main.temp);
      const futureCondition = forecastData[i].weather[0].main;

      // Check for rain in the future
      if (futureCondition === "Rain" && !isRainLater) {
        outfitLater.extra = umbrellaIcon;
        isRainLater = true;
      }

      // Check for significant temperature change
      if (
        (futureTemp <= 70 && currentTemp > 70) ||
        (futureTemp > 70 && currentTemp <= 70)
      ) {
        outfitLater.top = futureTemp <= 70 ? jacketIcon : shirtIcon;
        outfitLater.bottom = futureTemp <= 70 ? pantsIcon : shortsIcon;
      }
    }

    return { outfitNow, outfitLater };
  };

  if (!weather || !forecast) return <Text>Loading...</Text>;
  const isRainingNow = weather.weather.some(
    (condition) => condition.main === "Rain" || condition.main === "Drizzle"
  );

  const currentTemp = Math.round(weather.main.temp);
  const tempHigh = Math.round(weather.main.temp_max);
  const tempLow = Math.round(weather.main.temp_min);
  //const { top, bottom, extra } = getOutfit(currentTemp);
  const { outfitNow, outfitLater } = getOutfit(
    currentTemp,
    forecast,
    isRainingNow
  );
  const VerticalLine = () => <View style={styles.line} />;

  const areOutfitsSame = (outfitNow, outfitLater) => {
    return (
      outfitNow.top === outfitLater.top &&
      outfitNow.bottom === outfitLater.bottom &&
      outfitNow.extra === outfitLater.extra
    );
  };

  // Function to render outfit icons
  const renderOutfit = (outfit, useLargeIcons) => {
    const iconStyle = useLargeIcons
      ? styles.largeOutfitItem
      : styles.outfitItem;

    return (
      <View style={styles.fitCastOutfitRow}>
        <Image source={outfit.top} style={iconStyle} />
        <Text style={styles.textsymbols}>+</Text>
        <Image source={outfit.bottom} style={iconStyle} />
        {outfit.extra && (
          <>
            <Text style={styles.textsymbols}>+</Text>
            <Image source={outfit.extra} style={iconStyle} />
          </>
        )}
      </View>
    );
  };

  // Inside the homescreen View
  <View style={styles.itemsToWear}>
    {renderOutfit(outfitNow, areOutfitsSame(outfitNow, outfitLater))}
  </View>;
  {
    !areOutfitsSame(outfitNow, outfitLater) && (
      <>
        <VerticalLine />
        <View style={styles.itemsToPack}>
          {renderOutfit(outfitLater, true)}{" "}
          {/* Always true for smaller icons */}
        </View>
      </>
    );
  }

  let homescreen = (
    <View style={styles.homescreen}>
      <View style={styles.weatherInfoContainer}>
        <View style={styles.temperatureContainer}>
          <Image source={logoImage} style={styles.tempIcon}></Image>
          <Text style={[styles.tempText, { color: fontColor }]}>
            {currentTemp}°
          </Text>
        </View>
        <Text style={[styles.tempDescription, { color: fontColor }]}>
          {weather.weather[0].main}
        </Text>
        <View style={{ height: 0, width: 0 }}>
          <LocationModal
            isLocationModalVisible={isLocationModalVisible}
            onLocationToggleModal={handleLocationToggleModalFromComponent}
            onLocationCloseModal={onLocationCloseModal}
          />
        </View>
        <View style={{ height: 0, width: 0 }}>
          <SmartModal
            isSmartModalVisible={isSmartModalVisible}
            onSmartToggleModal={handleSmartToggleModalFromComponent}
          />
        </View>
        <View style={{ height: 0, width: 0 }}>
          <LogModal
            isLogModalVisible={isLogModalVisible}
            onLogToggleModal={handleLogToggleModalFromComponent}
            handleLogSubmitFromComponent={handleLogSubmitFromComponent}
          />
        </View>
        <Text style={[styles.tempHighLow, , { color: fontColor }]}>
          High {tempHigh}° | Low {tempLow}°
        </Text>
      </View>

      <TouchableOpacity>
        <Link href={{ pathname: "./screens/timeline", params: {} }}>
          <View style={styles.fitCastContainer}>
            <View style={styles.fitCastTitleContain}>
              <Text style={styles.fitCastName}>Your FitCast</Text>
            </View>
            <View style={styles.items}>
              <View style={styles.itemsToWear}>
                {renderOutfit(
                  outfitNow,
                  areOutfitsSame(outfitNow, outfitLater)
                )}
              </View>

              {!areOutfitsSame(outfitNow, outfitLater) && (
                <>
                  <VerticalLine />
                  <View style={styles.itemsToPack}>
                    {renderOutfit(outfitLater, true)}{" "}
                    {/* Always true for smaller icons */}
                  </View>
                </>
              )}
            </View>
          </View>
        </Link>
      </TouchableOpacity>

      <View style={styles.fitCastDescriptionContainer}>
        <Text style={styles.fitCastDescriptionSummary}>{top_text} </Text>
        <Text style={styles.fitCastDescriptionExtended}>{bottom_text}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <SafeAreaView>
        <StatusBar style="light" />
        <Header />
        {homescreen}
        <Stack.Screen options={{ header: () => null }} />
        <StatusBar style="light" />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  largeOutfitItem: {
    width: 80, // Larger width for icons
    height: 80, // Larger height for icons
    resizeMode: "contain",
  },
  smallIcon: {
    width: 30, // Smaller width for icons
    height: 30, // Smaller height for icons
    resizeMode: "contain",
    marginHorizontal: 2, // Reduced space between icons
  },
  fitCastIcons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  fitCastOutfitRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  outfitItem: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  textsymbols: {
    fontSize: 18,
    marginHorizontal: 5, // Space around plus symbols
  },
  iconcontainer: {
    height: "120%",
    //borderwidth: 1,
  },
  phoneContainer: {
    backgroundColor: "transparent", // Set background color to transparent
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: windowDimensions.width,
    height: windowDimensions.height,
  },
  FitcastTextContainer: { paddingLeft: "5%" },
  FitcastTextContainer1: { paddingLeft: 0 },
  suggestionTextNow: {
    color: Themes.colors.logoGreen,
    fontWeight: "bold",
    fontSize: 16,
  },
  suggestionText: {
    color: Themes.colors.logoGreen,
    fontSize: 16,
  },
  itemsToWear: {
    justifyContent: "space-between",
    flexDirection: "column",
    height: windowDimensions.height * 0.1,
    width: "45%",
    //borderRadius: "10%",
    //borderColor: Themes.colors.logoGreen,
    padding: 5,
  },
  itemsToPack: {
    justifyContent: "space-between",
    flexDirection: "column",
    height: windowDimensions.height * 0.1,
    width: "45%",
    //backgroundColor: "white",
    //borderRadius: "10%",
    //borderColor: Themes.colors.logoGreen,
    padding: 5,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: windowDimensions.width,
    height: windowDimensions.height,
  },
  outfitOpacity: {
    width: 35,
    height: 35,
    resizeMode: "contain",
    opacity: 0.6,
  },
  outfitOpacityPants: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    opacity: 0.6,
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
    justifyContent: "space-between",
  },
  //Weather info container
  weatherInfoContainer: {
    borderRadius: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    height: 250,
    marginTop: 10,
    marginBottom: 20,
  },
  temperatureContainer: {
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
    alignSelf: "center",
  },
  tempDescription: {
    fontSize: 30,
    fontWeight: "bold",
  },
  tempHighLow: {
    fontSize: 20,
  },
  //Fitcast container
  fitCastContainer: {
    backgroundColor: Themes.colors.logoYellow,
    borderRadius: 30,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: 350,
    height: windowDimensions.height * 0.23,
    paddingTop: 15,
    paddingBottom: 10, // Reduced from 20 to 10
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  fitCastName: {
    color: Themes.colors.logoGreen,
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  fitCastOutfit: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 0,
    width: "85%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    width: 1, // Adjust the width of the line
    backgroundColor: Themes.colors.logoGreen, // Color of the line
    marginHorizontal: 8, // Adjust the margin as needed
    marginTop: 5,
    height: 120,
  },
  outfitTop: {
    width: 60,
    height: 60,
  },
  outfitBottom: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  fitCastBag: {
    marginLeft: 20,
  },
  fitCastBagOutline: {},
  fitCastBagItems: {},
  fitCastBagItem: {},
  fitCastDescriptionContainer: {
    marginTop: "15%",
    backgroundColor: Themes.colors.logoGreen,
    height: "100%",
    width: "100%",
    opacity: 0.9,
    justifyContent: "flex-end", // Align content at the bottom
    alignItems: "center",
    paddingTop: "8%",
    paddingHorizontal: 5,
    paddingBottom: 20, // Add padding at the bottom for spacing
    justifyContent: "flex-start", // Center content vertically
  },
  fitCastDescriptionSummary: {
    color: Themes.colors.logoYellow,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "left",
    alignSelf: "flex-start",
    paddingLeft: 18,
  },
  fitCastDescriptionExtended: {
    color: Themes.colors.logoYellow,
    fontSize: 17,
    paddingTop: 5,
    paddingLeft: 18,
    textAlign: "left",
    alignSelf: "flex-start",
    fontStyle: "italic",
  },
  fitCastTitleContain: {
    alignItems: "center",
    width: "90%",
  },
  bag: {
    width: 120,
    height: 120,
  },
  fitCastIcons: {
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 0,
  },
});
