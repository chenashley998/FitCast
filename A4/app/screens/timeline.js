import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  StatusBar,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import BackgroundImageWarm from "../../assets/Images/dayBackground.jpg";
import BackgroundImageCold from "../../assets/Images/coldBackground.png";
import BackgroundImageRain from "../../assets/Images/rainyBackground.png";
import BackgroundImageNight from "../../assets/Images/nightBackground.png";
import BackgroundImageCloudy from "../../assets/Images/cloudyBackground.jpeg";

import LogoRain from "../../assets/Images/rainIcon.png";
import LogoCloudy from "../../assets/Images/cloudIcon.png";
import LogoNight from "../../assets/Images/moonIconOrange.png";
import SunIcon from "../../assets/Images/sunIcon.png";
import LogoNightRain from "../../assets/Images/rainNightIconOrange.png";

import pantsIcon from "../../assets/Images/pantsIcon.png";
import shirtIcon from "../../assets/Images/shirtIcon.png";
import shortsIcon from "../../assets/Images/shortsIcon.png";
import umbrellaIcon from "../../assets/Images/umbrellaIcon.png";
import jacketIcon from "../../assets/Images/jacketIcon.png";

import arrowIcon from "../../assets/Images/downwardArrow.png";
import dashIcon from "../../assets/Images/dash.png";
import { Header } from "../components/header";

import { Themes } from "../../assets/Themes";
import { Stack } from "expo-router";
import Row from "../../utils/timelineRow";

const windowDimensions = Dimensions.get("window");
const isNightTime = (militaryTime) => {
  const hours = parseInt(militaryTime.split(":")[0], 10); // Extract hours from military time
  return hours >= 17 || hours <= 7; // Check if it's between 5 PM and 7 AM
};

export default function timeline() {
  const [weather, setWeather] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(BackgroundImageWarm);
  const [logoImage, setLogoImage] = useState(SunIcon);
  const [fontColor, setFontColor] = useState(Themes.colors.logoGreen);
  const [timelineData, setTimelineData] = useState([]);
  const [bottom_text, setBottomText] = useState([]);

  useEffect(() => {
    const apiKey = "f076a815a1cbbdb3f228968604fdcc7a";
    const fetchWeatherAndForecast = async () => {
      try {
        const weatherResponse = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=Palo%20Alto&appid=${apiKey}&units=imperial`
        );
        const weatherData = await weatherResponse.json();
        setWeather(weatherData);

        const forecastResponse = await fetch(
          `http://api.openweathermap.org/data/2.5/forecast?q=Palo%20Alto&appid=${apiKey}&units=imperial`
        );
        const forecastData = await forecastResponse.json();

        const next12Hours = [];
        let lastOutfit = { top: null, bottom: null, extra: null };
        let wasRaining = false;

        for (let i = 0; i < 11; i++) {
          const route = `screens/timelineDetail${i}`;
          let item, timeLabel, weatherCondition, isNight, temp;

          if (i === 0) {
            item = weatherData;
            weatherCondition = item.weather[0].main;
            timeLabel = "NOW";
            const currentTime = new Date().getTime() / 1000;
            isNight =
              currentTime > weatherData.sys.sunset ||
              currentTime < weatherData.sys.sunrise;
          } else {
            item = forecastData.list[i - 1];
            weatherCondition = item.weather[0].main;
            const date = new Date(item.dt * 1000);
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const ampm = hours >= 12 ? "PM" : "AM";
            const formattedHours = hours % 12 || 12;
            const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
            timeLabel = `${formattedHours}:${formattedMinutes} ${ampm}`;
            militaryTime =
              date.getHours() +
              ":" +
              (date.getMinutes() < 10 ? "0" : "") +
              date.getMinutes();
            isNight = isNightTime(militaryTime);
          }

          const isRaining =
            weatherCondition === "Rain" || weatherCondition === "Drizzle";
          //isNight = item.sys.pod === "n";
          temp = Math.round(item.main.temp);

          let outfit = {
            top: temp < 70 ? jacketIcon : shirtIcon,
            bottom: temp < 70 ? pantsIcon : shortsIcon,
            extra: isRaining ? umbrellaIcon : wasRaining ? dashIcon : null,
          };

          let outfitToShow = {
            top: outfit.top === lastOutfit.top ? arrowIcon : outfit.top,
            bottom:
              outfit.bottom === lastOutfit.bottom ? arrowIcon : outfit.bottom,
            extra:
              outfit.extra === lastOutfit.extra && lastOutfit.extra !== null
                ? arrowIcon
                : outfit.extra,
          };

          next12Hours.push({
            time: timeLabel,
            weatherIcon: getWeatherIcon(weatherCondition, isNight),
            temperature: `${temp}°`,
            clothingIcon1: outfitToShow.top,
            clothingIcon2: outfitToShow.bottom,
            clothingIcon3: outfitToShow.extra || dashIcon,
            route: route,
          });
          lastOutfit = { ...outfit };
          wasRaining = isRaining;
        }

        setTimelineData(next12Hours);
      } catch (error) {
        console.error("Error fetching weather or forecast data:", error);
      }
    };

    fetchWeatherAndForecast();
  }, []);

  const getWeatherIcon = (weatherCondition, isNight) => {
    if (
      isNight &&
      (weatherCondition === "Rain" || weatherCondition === "Drizzle")
    ) {
      return LogoNightRain;
    } else if (isNight) {
      return LogoNight;
    } else if (weatherCondition === "Rain" || weatherCondition === "Drizzle") {
      return LogoRain;
    } else if (weatherCondition === "Clouds") {
      return LogoCloudy;
    } else {
      return SunIcon;
    }
  };

  const navigation = useNavigation();
  const onTimelinePress = (route) => {
    navigation.navigate(route);
  };
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
      temp = Math.round(weather.main.temp);
      let isCold = temp < 70;
      if (isCold && !isRaining) {
        setBottomText("It is chilly out, dress warm and in layers");
      } else if (!isCold && !isRaining) {
        setBottomText("Dress light");
      } else if (isCold && isRaining) {
        setBottomText("Grab an umbrella!");
      } else if (!isCold && isRaining) {
        setBottomText("Grab an umbrella!");
      }
      isCold = weather.main.temp <= 50;
      if (isRaining && isNight) {
        setBackgroundImage(BackgroundImageNight);
        setLogoImage(LogoNightRain);
        setFontColor(Themes.colors.logoYellow);
      }
      if (isNight) {
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

  const renderRow = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => onTimelinePress(item.route)}>
        <Row
          time={item.time}
          weatherIcon={item.weatherIcon}
          temperature={item.temperature}
          clothingIcon1={item.clothingIcon1}
          clothingIcon2={item.clothingIcon2}
          clothingIcon3={item.clothingIcon3}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        style={styles.backgroundImage}
      ></ImageBackground>
      <StatusBar style="light" />
      <Image source={backgroundImage} style={styles.backgroundImage} />

      <Stack.Screen
        options={{
          title: "Clothing Timeline",
          headerStyle: { backgroundColor: Themes.colors.background },
          headerTintColor: fontColor,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerBackTitleVisible: false,
        }}
      />

      <Header />
      <View style={styles.title_container}>
        <Text style={[styles.title, { color: fontColor }]}>
          Clothing Timeline
        </Text>
      </View>
      <View style={styles.timeline}>
        <View style={styles.times}>
          <FlatList
            data={timelineData}
            renderItem={renderRow}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
      <View style={styles.description}>
        <Text style={styles.text}>{bottom_text}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: windowDimensions.width,
    height: windowDimensions.height,
    position: "absolute",
  },
  title: {
    fontSize: 25,
    color: Themes.colors.logoGreen,
    fontWeight: "bold",
    paddingTop: 15,
    textShadowColor: "#000", // Outline color
    textShadowOffset: { width: 1, height: 1 }, // Outline offset
  },
  timeline: {
    width: "90%",
    height: "70%",
    backgroundColor: Themes.colors.logoYellow,
    flexDirection: "row",
    borderRadius: 15,
    padding: 10,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 8,
  },

  times: {
    flex: 1,
  },
  clothes: {
    flex: 1,
    alignItems: "flex-end",
  },
  description: {
    backgroundColor: Themes.colors.logoYellow,
    padding: 10,
    margin: 10,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: "80%",
    height: "10%",
  },
  text: {
    fontSize: 18,
    alignItems: "center",
    textAlign: "center",
    textAlignVertical: "center",
    alignContent: "center",
    fontWeight: "bold",
    color: Themes.colors.logoGreen,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: Themes.colors.background,
  },
});
