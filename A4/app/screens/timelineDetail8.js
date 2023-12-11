import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import BackgroundImageWarm from "../../assets/Images/dayBackground.jpg";
import BackgroundImageCold from "../../assets/Images/coldBackground.png";
import BackgroundImageRain from "../../assets/Images/rainyBackground.png";
import BackgroundImageNight from "../../assets/Images/nightBackground.png";
import BackgroundImageCloudy from "../../assets/Images/cloudyBackground.jpeg";

import LogoNightRain from "../../assets/Images/nightRainIcon.png";
import LogoRain from "../../assets/Images/rainIconYellow.png";
import LogoCloudy from "../../assets/Images/cloudIconGray.png";
import LogoNight from "../../assets/Images/moonIcon.png";

import pantsIcon from "../../assets/Images/pantsIcon.png";
import shirtIcon from "../../assets/Images/shirtIcon.png";
import shortsIcon from "../../assets/Images/shortsIcon.png";
import umbrellaIcon from "../../assets/Images/umbrellaIcon.png";
import jacketIcon from "../../assets/Images/jacketIcon.png";
import { ExitHeader } from "../components/exitHeader";
import { Entypo } from "@expo/vector-icons";
import SunIcon from "../../assets/Images/sunnyIconGreen.png";
import emptyImage from "../../assets/Images/emptyImage.png";
import { useLocalSearchParams } from "expo-router";
import { Themes } from "../../assets/Themes";
import { Stack } from "expo-router";
const windowDimensions = Dimensions.get("window");

export default function TimelineDetail1() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(BackgroundImageWarm);
  const [logoImage, setLogoImage] = useState(SunIcon);
  const [fontColor, setFontColor] = useState(Themes.colors.logoGreen);
  const [timelineData, setTimelineData] = useState([]);
  const [data, setProcessedData] = useState([]);
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
  const isNightTime = (militaryTime) => {
    const hours = parseInt(militaryTime.split(":")[0], 10); // Extract hours from military time
    return hours >= 17 || hours <= 7; // Check if it's between 5 PM and 7 AM
  };
  const i = 8;

  useEffect(() => {
    const apiKey = "f076a815a1cbbdb3f228968604fdcc7a";

    const fetchWeatherAndForecast = async () => {
      try {
        let weatherResponse, weatherData;

        // Fetch and set current weather for i = 0
        if (i === 0) {
          weatherResponse = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=Palo%20Alto&appid=${apiKey}&units=imperial`
          );
          weatherData = await weatherResponse.json();
          setWeather(weatherData);
        }

        // Fetch forecast
        const forecastResponse = await fetch(
          `http://api.openweathermap.org/data/2.5/forecast?q=Palo%20Alto&appid=${apiKey}&units=imperial`
        );
        const forecastData = await forecastResponse.json();

        let item, timeLabel, weatherCondition, isNight, temp;

        if (i === 0) {
          // Use current weather data
          item = weatherData;
          timeLabel = "NOW";
        } else {
          // Use forecast data
          item = forecastData.list[i - 1]; // Adjust index for forecast data
          timeLabel = new Date(item.dt * 1000).getHours() + ":00";
        }

        //item = forecastData.list[i]; // Adjust index for forecast data
        const date = new Date(item.dt * 1000);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? "PM" : "AM";
        const formattedHours = hours % 12 || 12; // Convert 24-hour time to 12-hour format
        const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
        timeLabel = `${formattedHours}:${formattedMinutes} ${ampm}`;
        militaryTime =
          date.getHours() +
          ":" +
          (date.getMinutes() < 10 ? "0" : "") +
          date.getMinutes();

        weatherCondition = item.weather[0].main;
        temp = Math.round(item.main.temp);
        const isRaining =
          weatherCondition === "Rain" || weatherCondition === "Drizzle";

        // Determine outfit
        let outfit = {
          top: temp < 70 ? jacketIcon : shirtIcon,
          bottom: temp < 70 ? pantsIcon : shortsIcon,
          extra: isRaining ? umbrellaIcon : null,
        };
        let topText, bottomText;

        const isCold = temp < 70;

        if (isCold && !isRaining) {
          topText = "It is chilly out, dress warm and in layers";
          bottomText =
            "Based on historical data you've typically felt cold in this weather, make sure to layer up";
        } else if (!isCold && !isRaining) {
          topText = "Dress light";
          bottomText =
            "Based on historical data you've typically felt hot in this weather";
        } else if (isCold && isRaining) {
          topText = "Grab an umbrella!";
          bottomText =
            "Based on historical data you've typically felt cold in this weather, make sure to layer up and pack an umbrella for the rain!";
        } else if (!isCold && isRaining) {
          topText = "Grab an umbrella!";
          bottomText =
            "Based on historical data you've typically felt hot in this weather, make sure to dress light and pack an umbrella for the rain!";
        }
        //isNight = true;
        setProcessedData({
          time: timeLabel,
          weatherIcon: getWeatherIcon(weatherCondition, isNight),
          //temperature: `${temp}°`,
          clothingIcon1: outfit.top,
          clothingIcon2: outfit.bottom,
          clothingIcon3: outfit.extra,
          route: `screens/timelineDetail${i}`,
          weatherCondition: item.weather[0].main, // e.g., "Rain", "Clouds"
          temperature: `${Math.round(item.main.temp)}°`,
          isNight: isNightTime(militaryTime),
          topText: topText,
          bottomText: bottomText,
        });
      } catch (error) {
        console.error("Error fetching weather or forecast data:", error);
      }
    };

    fetchWeatherAndForecast();
  }, []);
  useEffect(() => {
    if (data && data.weatherCondition) {
      const isRaining = ["Rain", "Drizzle"].includes(data.weatherCondition);
      const isCloudy = data.weatherCondition === "Clouds";
      const isCold = data.temperature <= 50;

      if (isRaining && data.isNight) {
        setBackgroundImage(BackgroundImageNight);
        setLogoImage(LogoNightRain);
        setFontColor(Themes.colors.logoYellow);
      } else if (isRaining) {
        setBackgroundImage(BackgroundImageRain);
        setLogoImage(LogoRain);
        setFontColor(Themes.colors.logoYellow);
      } else if (data.isNight) {
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
  }, [data]); // Depend on `data` instead of `weather`

  const navigation = useNavigation();
  const rightScreen = () => {
    navigation.navigate("screens/timelineDetail9");
  };

  const leftScreen = () => {
    navigation.navigate("screens/timelineDetail7");
  };
  const details = {
    time: data.time,
    location: "Stanford, CA",
    tempIcon: logoImage,
    temperature: data.temperature,
    //humidity: "Med",
    //windspeed: "Low",
    //uv: "High",
    topIcon: data.clothingIcon2,
    bottomIcon: data.clothingIcon1,
    accessory: data.clothingIcon3,
    headerText: data.topText,
    innerText: data.bottomText,
    aiInsight: "*You're similar to 30% of users in this weather*",
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={backgroundImage} style={styles.backgroundImage} />
      {/* <Stack.Screen
            options={{
              title: "Timeline Detail 1",
              headerStyle: { backgroundColor: Themes.colors.background },
              headerTintColor: "#fff",
     
     
              headerTitleStyle: {
                fontWeight: "bold",
              },
              headerBackTitleVisible: false,
            }}
          /> */}

      <ExitHeader />

      <View style={styles.timelineDetail}>
        <View style={styles.screenTop}>
          <TouchableOpacity onPress={() => leftScreen()}>
            <Entypo
              name="chevron-thin-left"
              size={50}
              color={Themes.colors.fitcastGray}
            />
          </TouchableOpacity>
          <View style={styles.weatherContent}>
            <View style={styles.time}>
              <Text style={[styles.timeText_1, { color: fontColor }]}>
                {details.time}{" "}
              </Text>
              <Text style={[styles.timeText_2, { color: fontColor }]}>
                - {details.location}{" "}
              </Text>
            </View>
            <View style={styles.time}>
              <Image
                style={styles.weatherIcon}
                source={details.tempIcon}
              ></Image>
              <View style={styles.tempAvg}>
                <Text style={[styles.weatherTemperature, { color: fontColor }]}>
                  {details.temperature}
                </Text>
              </View>
            </View>

            <View style={styles.weatherdetail}>
              <View style={styles.fitcast_suggestions}>
                <Image
                  style={styles.clothingIcon}
                  source={details.bottomIcon}
                ></Image>
                <Text style={styles.weatherInfo_2}> + </Text>
                <Image
                  style={styles.clothingIcon}
                  source={details.topIcon}
                ></Image>
                {/* Conditionally render the 'extra' item and its preceding '+' sign */}
                {details.accessory && (
                  <>
                    <Text style={styles.weatherInfo_2}> + </Text>
                    <Image
                      style={styles.clothingIcon}
                      source={details.accessory}
                    ></Image>
                  </>
                )}
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={() => rightScreen()}>
            <Entypo
              name="chevron-thin-right"
              size={50}
              color={Themes.colors.fitcastGray}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.weatherDescriptionBox}>
          <Text style={styles.weatherDescriptionText_2}>
            {details.headerText}
          </Text>
          <View style={styles.AIinsightbox}>
            <Text style={styles.weatherDescriptionText_1}>
              {details.innerText}
            </Text>
          </View>
          <View style={styles.AIinsightbox}>
            <Text style={styles.AIinsight}>{details.aiInsight} </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  separator: {
    width: "92%",
    borderBottomColor: Themes.colors.logoGreen,
    borderBottomWidth: 0.8,
    marginVertical: 5,
  },
  clothingIcon: {
    resizeMode: "contain",
    width: windowDimensions.width * 0.13,
    height: windowDimensions.width * 0.14,
  },
  fitcast_suggestions: {
    flexDirection: "row",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    position: "absolute",
    resizeMode: "cover",
    width: windowDimensions.width,
    height: windowDimensions.height,
  },
  time: {
    alignItems: "center",
    flexDirection: "row",
  },
  timelineDetail: {
    // borderColor: "black",
    // borderWidth: 1,
    flexDirection: "column",
    height: windowDimensions.height * 1,
    justifyContent: "flex-start",
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
  screenTop: {
    //flex: 1,
    // borderColor: "red",
    // borderWidth: 1,
    height: windowDimensions.height * 0.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  weatherContent: {
    // borderColor: "white",
    // borderRadius: "20%",
    // borderColor: "blue",
    // borderWidth: 1,
    marginTop: 35,
    marginHorizontal: -9,
    // borderWidth: 1,
    height: windowDimensions.height * 0.35,
    width: windowDimensions.width * 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  timeText_1: {
    fontSize: 30,
    color: Themes.colors.logoGreen,
    marginBottom: 10,
    fontWeight: "bold",
  },
  timeText_2: {
    fontSize: 25,
    color: Themes.colors.logoGreen,
    marginBottom: 10,
  },
  weatherIcon: {
    resizeMode: "contain",
    width: windowDimensions.width * 0.1,
    height: windowDimensions.width * 0.1,
  },
  weatherdetail: {
    alignItems: "center",
    flexDirection: "column",
    width: windowDimensions.width * 0.9,
    backgroundColor: Themes.colors.logoYellow,
    borderRadius: "15%",
    padding: 3,
    justifyContent: "center",
    marginTop: 10,
  },
  weatherInfo_1: {
    fontSize: 15,
    color: Themes.colors.logoGreen,
    marginBottom: 12,
    fontWeight: "400",
  },
  weatherInfo_2: {
    fontSize: 13.5,
    marginHorizontal: 2,
    color: Themes.colors.logoGreen,
    fontWeight: "600",
  },
  weatherInfoBold_1: {
    fontSize: 14,
    color: Themes.colors.logoGreen,
    fontWeight: "bold",
  },
  weatherTemperature: {
    fontSize: 80,
    color: Themes.colors.logoGreen,
  },
  tempAvg: {
    flexDirection: "row",
  },
  avg: {
    alignContent: "flex-end",
    fontSize: 14,
    color: Themes.colors.logoGreen,
    alignSelf: "flex-end",
    marginBottom: 25,
  },
  weatherDescriptionBox: {
    alignItems: "flex-start",
    width: windowDimensions.width * 0.9,
    height: windowDimensions.height * 0.25,
    backgroundColor: Themes.colors.logoGreen,
    borderRadius: "30%",
    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  weatherDescriptionText_1: {
    color: Themes.colors.logoYellow,
    fontWeight: "400",
    fontSize: 14,
  },
  AIinsightbox: {
    // borderColor: "white",
    // borderWidth: 1,
    marginTop: 3,
    width: "100%",
    alignItems: "center",
  },
  AIinsight: {
    color: Themes.colors.white,
    fontStyle: "italic",
    fontSize: 14,
    fontWeight: "300",
    marginTop: 10,
  },
  weatherDescriptionText_2: {
    color: Themes.colors.white,
    fontSize: 23,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
