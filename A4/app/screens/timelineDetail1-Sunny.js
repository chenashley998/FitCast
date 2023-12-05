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

import { ExitHeader } from "../components/exitHeader";
import { Entypo } from "@expo/vector-icons";
import SunIcon from "../../assets/Images/sunnyIconGreen.png"; // Adjust the path as per your folder structure
import shirtIcon from "../../assets/Images/shirtIcon.png";
import shortsIcon from "../../assets/Images/shortsIcon.png";
import emptyImage from "../../assets/Images/emptyImage.png";
import { useLocalSearchParams } from "expo-router";
import umbrellaIcon from "../../assets/Images/umbrellaIcon.png";
import { Themes } from "../../assets/Themes";
import { Stack } from "expo-router";
const windowDimensions = Dimensions.get("window");

export default function TimelineDetail1() {
  const navigation = useNavigation();

  const rightScreen = () => {
    navigation.navigate("screens/timelineDetail2-Cloudy"); // Replace 'Home' with the actual route name of your home screen
  };
  const details = {
    time: "Now-1pm",
    location: "Stanford, CA",
    tempIcon: SunIcon,
    temperature: "73°",
    humidity: "Med",
    windspeed: "Low",
    uv: "High",
    topIcon: shortsIcon,
    bottomIcon: shirtIcon,
    accessory: emptyImage,
    headerText: "Dress lightly, use sunscreen!",
    innerText:
      "Based on historical data, you've typically felt hot in this heat in combination with medium humidity. The UV index is also abnormally high.",
    aiInsight: "*You're similar to 30% of users in this weather*",
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/Images/dayBackground.jpg")}
        style={styles.backgroundImage}
      />
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
          <Entypo
            name="chevron-thin-left"
            size={50}
            opacity={0}
            color={Themes.colors.fitcastGray}
          />
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
            <Text style={styles.tempDescription}>Clear</Text>

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
                  style={styles.clothingIcon1}
                  source={details.bottomIcon}
                ></Image>
                <Text style={styles.weatherInfo_2}> + </Text>
                <Image
                  style={styles.clothingIcon}
                  source={details.topIcon}
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
    color: Themes.colors.logoGreen,
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
    width: windowDimensions.width * 0.12,
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
    // borderColor: "black",
    // borderWidth: 1,
    flexDirection: "column",
    height: windowDimensions.height * 1,
    justifyContent: "flex-start",
    paddingTop: 40,
    // paddingBottom: 30,
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
    fontSize: 16,
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
    fontSize: 18,
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
    opacity: 1,
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
