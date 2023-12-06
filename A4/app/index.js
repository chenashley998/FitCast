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
} from "react-native";
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
import BackgroundImageRain from "../assets/Images/rainyBackground.png";
import BackgroundImageNight from "../assets/Images/nightBackground.png";
import BackgroundImageCloudy from "../assets/Images/cloudyBackground.jpeg";

import LogoRain from "../assets/Images/rainIconYellow.png";
import LogoCloudy from "../assets/Images/cloudIconGray.png";
import LogoNight from "../assets/Images/moonIcon.png";
import LogoNightRain from "../assets/Images/nightRainIcon.png";

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
  const [forecast, setForecast] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(BackgroundImageWarm);
  const [logoImage, setLogoImage] = useState(SunIcon);
  const [fontColor, setFontColor] = useState(Themes.colors.logoGreen);
  const [bottom_text, setBottomText] = useState([]);
  const [top_text, setTopText] = useState([]);

  const getWeatherIcon = (weatherCondition, isNight) => {
    if (isNight) {
      return LogoNight;
    } else if (weatherCondition === "Rain" || weatherCondition === "Drizzle") {
      return LogoRain;
    } else if (weatherCondition === "Clouds") {
      return LogoCloudy;
    } else {
      return SunIcon;
    }
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

  const getOutfit = (currentTemp, forecastData) => {
    let outfitNow = {};
    let outfitLater = {};

    if (currentTemp < 70) {
      outfitNow = { top: jacketIcon, bottom: pantsIcon, extra: null };
    } else {
      outfitNow = { top: shirtIcon, bottom: shortsIcon, extra: null };
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

  const currentTemp = Math.round(weather.main.temp);
  const tempHigh = Math.round(weather.main.temp_max);
  const tempLow = Math.round(weather.main.temp_min);
  //const { top, bottom, extra } = getOutfit(currentTemp);
  const { outfitNow, outfitLater } = getOutfit(currentTemp, forecast);
  const VerticalLine = () => <View style={styles.line} />;

  const areOutfitsSame = (outfitNow, outfitLater) => {
    return (
      outfitNow.top === outfitLater.top &&
      outfitNow.bottom === outfitLater.bottom &&
      outfitNow.extra === outfitLater.extra
    );
  };

  const renderOutfit = (outfit, isLater = false) => {
    const outfitItemStyle = isLater
      ? styles.outfitItem
      : styles.outfitItemLarger;

    const items = [];
    if (outfit.top) {
      items.push(
        <Image key="top" source={outfit.top} style={outfitItemStyle} />
      );
    }
    if (outfit.bottom) {
      if (items.length > 0)
        items.push(
          <Text key="plus1" style={styles.textsymbols}>
            {" "}
            +{" "}
          </Text>
        );
      items.push(
        <Image key="bottom" source={outfit.bottom} style={outfitItemStyle} />
      );
    }
    if (outfit.extra) {
      if (items.length > 0)
        items.push(
          <Text key="plus2" style={styles.textsymbols}>
            {" "}
            +{" "}
          </Text>
        );
      items.push(
        <Image key="extra" source={outfit.extra} style={outfitItemStyle} />
      );
    }
    return <View style={styles.fitCastOutfitRow}>{items}</View>;
  };

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
                {!areOutfitsSame(outfitNow, outfitLater) && (
                  <View style={styles.FitcastTextContainer}>
                    <Text style={styles.suggestionTextNow}>Now: </Text>
                  </View>
                )}
                {renderOutfit(outfitNow)}
              </View>

              {!areOutfitsSame(outfitNow, outfitLater) && (
                <>
                  <VerticalLine />
                  <View style={styles.itemsToPack}>
                    <View style={styles.FitcastTextContainer1}>
                      <Text style={styles.suggestionText}>For Later: </Text>
                    </View>
                    {renderOutfit(outfitLater)}
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
    width: 50, // Adjust size as needed
    height: 50, // Adjust size as needed
    resizeMode: "contain",
  },
  textsymbols: {
    fontSize: 18, // Adjust font size as needed
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
    resizeMode: "cover", // or 'contain', 'stretch', etc.
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
    //color: fontColor,
    alignSelf: "center",
  },
  tempDescription: {
    fontSize: 30,
    fontWeight: "bold",
    //color: fontColor,
  },
  tempHighLow: {
    fontSize: 20,
    //color: fontColor,
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
    //borderColor: "black",
    //borderWidth: "1",
  },
  fitCastBagOutline: {},
  fitCastBagItems: {},
  fitCastBagItem: {},
  fitCastDescriptionContainer: {
    marginTop: "15%",
    backgroundColor: Themes.colors.logoGreen,
    height: "100%",
    width: "100%",
    //borderRadius: 20,
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
    //justifyContent: "center", // Adjust this as needed (center, space-between, etc.)
    //alignItems: "center",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
    //borderColor: "black",
    //Width: "1",
    marginBottom: 0,
  },
});
