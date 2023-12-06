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
import { ExitHeader } from "../components/exitHeader";
import { Entypo } from "@expo/vector-icons";

import { TimelineDetailComp } from "../components/timelineDetailComp";
import RainIcon from "../../assets/Images/rainIconYellow.png"; // Adjust the path as per your folder structure
import shirtIcon from "../../assets/Images/shirtIcon.png";
import shortsIcon from "../../assets/Images/shortsIcon.png";
import pantsIcon from "../../assets/Images/pantsIcon.png";
import { useLocalSearchParams } from "expo-router";
import jacketIcon from "../../assets/Images/jacketIcon.png";
import umbrellaIcon from "../../assets/Images/umbrellaIcon.png";
import { Themes } from "../../assets/Themes";
import { Stack } from "expo-router";
import { useNavigation } from "@react-navigation/native";

const windowDimensions = Dimensions.get("window");

export default function TimelineDetail3() {
  const navigation = useNavigation();

  const leftScreen = () => {
    navigation.navigate("screens/timelineDetail2-Cloudy"); // Replace 'Home' with the actual route name of your home screen
  };

  const rightScreen = () => {
    navigation.navigate("screens/timelineDetail4-Night"); // Replace 'Home' with the actual route name of your home screen
  };

  const details = {
    time: "4pm-5pm",
    location: "Stanford, CA",
    tempIcon: RainIcon,
    temperature: "58°",
    humidity: "Med",
    windspeed: "High",
    uv: "Low",
    topIcon: jacketIcon,
    bottomIcon: pantsIcon,
    accessory: umbrellaIcon,
    headerText: "Bring warm clothes and an umbrella",
    innerText:
      "Heavy rain predicted - use an umbrella! Based on historical data, you've felt cold at times with similar weather conditions.",
    aiInsight: "*You're similar to 95% of users in this weather*",
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/Images/rainyBackground.png")}
        style={styles.backgroundImage}
      />
      <Stack.Screen
        options={{
          title: "Timeline Detail 3",
          headerStyle: { backgroundColor: Themes.colors.background },
          headerTintColor: "#fff",

          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerBackTitleVisible: false,
        }}
      />

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
              <Text style={styles.timeText_1}>{details.time} </Text>
              <Text style={styles.timeText_2}>- {details.location} </Text>
            </View>
            <View style={styles.time}>
              <Image
                style={styles.weatherIcon}
                source={details.tempIcon}
              ></Image>
              <View style={styles.tempAvg}>
                <Text style={styles.weatherTemperature}>
                  {details.temperature}
                </Text>
                <Text style={styles.avg}>avg</Text>
              </View>
            </View>
            <Text style={styles.tempDescription}>Light Showers</Text>

            <Text style={styles.weatherInfo_1}>
              Wind: {details.windspeed}{" "}
              <Text style={styles.weatherInfoBold_1}>| </Text>
              Humidity: {details.humidity}{" "}
              <Text style={styles.weatherInfoBold_1}>| </Text>
              UV: {details.uv}
            </Text>

            <View style={styles.weatherdetail}>
              <View style={styles.fitcast_suggestions}>
                <Image
                  style={styles.clothingIcon}
                  source={details.topIcon}
                ></Image>
                <Text style={styles.weatherInfo_2}> + </Text>
                <Image
                  style={styles.clothingIcon1}
                  source={details.bottomIcon}
                ></Image>
                <Text style={styles.weatherInfo_2}> + </Text>
                <Image
                  style={styles.clothingIcon}
                  source={details.accessory}
                ></Image>
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
  tempDescription: {
    fontSize: 20,
    fontWeight: "bold",
    color: Themes.colors.logoYellow,
    marginBottom: 5,
  },
  separator: {
    width: "92%", // Adjust the width as needed
    borderBottomColor: Themes.colors.logoGreen, // Change the color as needed
    borderBottomWidth: 0.8,
    marginVertical: 5, // Adjust vertical spacing as needed
  },
  clothingIcon: {
    resizeMode: "contain",
    width: windowDimensions.width * 0.13,
    height: windowDimensions.width * 0.14,
  },
  clothingIcon1: {
    resizeMode: "contain",
    width: windowDimensions.width * 0.11,
    height: windowDimensions.width * 0.11,
  },
  fitcast_suggestions: {
    flexDirection: "row",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    position: "absolute",
    resizeMode: "cover", // or 'contain', 'stretch', etc.
    width: windowDimensions.width,
    height: windowDimensions.height,
  },
  time: {
    alignItems: "center",
    flexDirection: "row",
  },
  timelineDetail: {
    flexDirection: "column",
    height: windowDimensions.height * 1,
    justifyContent: "flex-start",
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
  screenTop: {
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
    color: Themes.colors.logoYellow,
    marginBottom: 10,
    fontWeight: "bold",
  },
  timeText_2: {
    fontSize: 25,
    color: Themes.colors.logoYellow,
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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 5.46,
  },
  weatherInfo_1: {
    fontSize: 16,
    color: Themes.colors.logoYellow,
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
    color: Themes.colors.logoYellow,
    fontWeight: "bold",
  },
  weatherTemperature: {
    fontSize: 80,
    color: Themes.colors.logoYellow,
  },
  tempAvg: {
    flexDirection: "row",
  },
  avg: {
    alignContent: "flex-end",
    fontSize: 14,
    color: Themes.colors.logoYellow,
    alignSelf: "flex-end",
    marginBottom: 25,
  },
  weatherDescriptionBox: {
    marginTop: 0,
    alignItems: "flex-start",
    height: windowDimensions.height * 0.25,
    width: windowDimensions.width * 0.9,
    backgroundColor: Themes.colors.logoGreen,
    borderRadius: "30%",
    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    opacity: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 5.46,
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
