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
import { useNavigation } from "@react-navigation/native";

import { TimelineDetailComp } from "../components/timelineDetailComp";
import SunIcon from "../../assets/Images/sunIconLight.png"; // Adjust the path as per your folder structure
import shirtIcon from "../../assets/Images/shirtIcon.png";
import shortsIcon from "../../assets/Images/shortsIcon.png";
import { useLocalSearchParams } from "expo-router";
import jacketIcon from "../../assets/Images/jacketIcon.png";
import umbrellaIcon from "../../assets/Images/umbrellaIcon.png";
import pantsIcon from "../../assets/Images/pantsIcon.png";

import { Themes } from "../../assets/Themes";
import { Stack } from "expo-router";
const windowDimensions = Dimensions.get("window");

export default function TimelineDetail() {
  const navigation = useNavigation();

  const leftScreen = () => {
    navigation.navigate("screens/timelineDetail3-Rainy"); // Replace 'Home' with the actual route name of your home screen
  };

  const details = {
    time: "6pm",
    location: "Stanford CA",
    tempIcon: SunIcon,
    temperature: "40°",
    humidity: "Med",
    windspeed: "Low",
    uv: "Low",
    topIcon: pantsIcon,
    bottomIcon: jacketIcon,
    accessory: pantsIcon,
    headerText: "Layer up and keep the Jacket",
    innerText:
      "Based on historical data, you've felt extremely cold at times with similar weather conditions. It is also predicted to get much colder as the night progresses",
    aiInsight: "*You're similar to 70% of users in this weather*",
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/Images/sunny.jpg")}
        style={styles.backgroundImage}
      />
      <Stack.Screen
        options={{
          title: "Timeline Detail",
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
              <Text style={styles.weatherTemperature}>
                {details.temperature}
              </Text>
            </View>
            <Text style={styles.weatherInfo_1}>
              Humidity: {details.humidity}{" "}
              <Text style={styles.weatherInfoBold_1}>| </Text>
              Windspeed: {details.windspeed}{" "}
              <Text style={styles.weatherInfoBold_1}>| </Text>
              UV: {details.uv}
            </Text>
            <View style={styles.weatherdetail}>
              <View style={styles.fitcast_suggestions}>
                <Text style={styles.weatherInfo_2}> 2 x </Text>
                <Image
                  style={styles.clothingIcon}
                  source={details.bottomIcon}
                ></Image>
                <Text style={styles.weatherInfo_2}> + </Text>
                <Image
                  style={styles.clothingIcon_1}
                  source={details.topIcon}
                ></Image>
              </View>
            </View>
          </View>
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
  clothingIcon_1: {
    resizeMode: "contain",
    width: windowDimensions.width * 0.1,
    height: windowDimensions.width * 0.1,
  },
  fitcast_suggestions: {
    flexDirection: "row",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    borderWidth: 1,
    borderColor: "red",

    resizeMode: "cover", // or 'contain', 'stretch', etc.
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
    height: 400,
    flexDirection: "column",
    height: windowDimensions.height * 0.7,
    justifyContent: "center",
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
  screenTop: {
    //flex: 1,
    // borderColor: "red",
    // borderWidth: 1,
    height: windowDimensions.height * 0.55,
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
    width: windowDimensions.width * 0.72,
    backgroundColor: Themes.colors.logoYellow,
    borderRadius: "15%",
    padding: 3,
    justifyContent: "center",
    marginTop: 10,
  },
  weatherInfo_1: {
    fontSize: 15,
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
  weatherDescriptionBox: {
    marginTop: 0,
    alignItems: "flex-start",
    height: windowDimensions.height * 0.2,
    backgroundColor: Themes.colors.logoGreen,
    borderRadius: "30%",
    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
  weatherDescriptionText_1: {
    color: Themes.colors.logoYellow,
    fontWeight: "400",
    fontSize: 12,
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
    fontSize: 10,
    fontWeight: "300",
    marginTop: 10,
  },
  weatherDescriptionText_2: {
    color: Themes.colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
});
