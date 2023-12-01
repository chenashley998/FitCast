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
import { Entypo } from "@expo/vector-icons";
import { ExitHeader } from "../components/exitHeader";
import { TimelineDetailComp } from "../components/timelineDetailComp";

import SunIcon from "../../assets/Images/sunIconLight.png"; // Adjust the path as per your folder structure
import shirtIcon from "../../assets/Images/shirtIcon.png";
import shortsIcon from "../../assets/Images/shortsIcon.png";
import { useLocalSearchParams } from "expo-router";
import umbrellaIcon from "../../assets/Images/umbrellaIcon.png";

import { Themes } from "../../assets/Themes";
import { Stack } from "expo-router";
const windowDimensions = Dimensions.get("window");

export default function TimelineDetail() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/Images/sunny.jpg")}
        style={styles.backgroundImage}
      >
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
            <TouchableOpacity>
              <Entypo
                name="chevron-thin-left"
                size={50}
                color={Themes.colors.fitcastGray}
              />
            </TouchableOpacity>
            <View style={styles.weatherContent}>
              <View style={styles.time}>
                <Text style={styles.timeText_1}>3pm </Text>
                <Text style={styles.timeText_2}>- Stanford University </Text>
              </View>
              <View style={styles.time}>
                <Image style={styles.weatherIcon} source={SunIcon}></Image>
                <Text style={styles.weatherTemperature}>74°F</Text>
              </View>
              <Text style={styles.weatherInfo_1}>
                Humidity: Med <Text style={styles.weatherInfoBold_1}>| </Text>
                Windspeed: Low <Text style={styles.weatherInfoBold_1}>| </Text>
                UV: High
              </Text>
              <View style={styles.weatherdetail}>
                {/*<Text style={styles.weatherInfo_2}>
                  Mostly sunny from 3-4pm but expect cloudier conditions at 4pm
                  then rain at 5pm{" "}
        </Text>
                <View style={styles.separator} />*/}
                <View style={styles.fitcast_suggestions}>
                  <Image style={styles.clothingIcon} source={shirtIcon}></Image>
                  <Text style={styles.weatherInfo_2}> + </Text>
                  <Image
                    style={styles.clothingIcon}
                    source={shortsIcon}
                  ></Image>
                  <Text style={styles.weatherInfo_2}> , </Text>
                  <Image
                    style={styles.clothingIcon}
                    source={umbrellaIcon}
                  ></Image>
                  <Text style={styles.weatherInfo_2}> for later </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity>
              <Entypo
                name="chevron-thin-right"
                size={50}
                color={Themes.colors.fitcastGray}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.weatherDescriptionBox}>
            <Text style={styles.weatherDescriptionText_2}>
              Dress lightly & wear sunscreen
            </Text>
            <View style={styles.AIinsightbox}>
              <Text style={styles.weatherDescriptionText_1}>
                Based on historical data, you've typically felt hot in medium
                heat and humidity
              </Text>
            </View>
            <View style={styles.AIinsightbox}>
              <Text style={styles.AIinsight}>
                *You're similar to 30% of users in this weather*
              </Text>
            </View>
          </View>
        </View>
{/*>>>>>>> main*/}
      </ImageBackground>
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
    width: windowDimensions.width * 0.04,
    height: windowDimensions.width * 0.04,
  },
  fitcast_suggestions: {
    flexDirection: "row",
    alignItems: "center",
  },

  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'contain', 'stretch', etc.
    width: windowDimensions.width,
    height: windowDimensions.height,
  },

  time: {
    alignItems: "center",
    flexDirection: "row",
  },
  timelineDetail: {
    borderColor: "black",
    borderWidth: 1,
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
    borderColor: "red",
    borderWidth: 1,
    height: windowDimensions.height * 0.55,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  weatherContent: {
    // borderColor: "white",
    // borderRadius: "20%",
    borderColor: "blue",
    borderWidth: 1,
    marginTop: 35,
    // borderWidth: 1,
    height: windowDimensions.height * 0.35,
    width: windowDimensions.width * 0.75,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 0,
  },
  timeText_1: {
    fontSize: 25,
    color: Themes.colors.white,
    marginBottom: 10,
    fontWeight: "bold",
  },
  timeText_2: { fontSize: 25, color: Themes.colors.white, marginBottom: 10 },
  weatherIcon: {
    resizeMode: "contain",
    width: windowDimensions.width * 0.1,
    height: windowDimensions.width * 0.1,
  },
  weatherdetail: {
    alignItems: "center",
    flexDirection: "column",
    width: windowDimensions.width * 0.4,
    backgroundColor: Themes.colors.logoYellow,
    borderRadius: "15%",
    padding: 3,
    justifyContent: "center",
    marginTop: 10,
  },
  weatherInfo_1: {
    fontSize: 14,
    color: Themes.colors.white,
    marginBottom: 12,
  },
  weatherInfo_2: {
    fontSize: 11.5,
    color: Themes.colors.logoGreen,
  },
  weatherInfoBold_1: {
    fontSize: 14,
    color: Themes.colors.white,
    fontWeight: "bold",
  },
  weatherTemperature: {
    fontSize: 80,
    color: Themes.colors.white,
  },
  weatherDescriptionBox: {
    marginTop: 0,
    alignItems: "flex-start",
    height: windowDimensions.height * 0.16,

    backgroundColor: Themes.colors.logoGreen,
    borderRadius: "30%",
    paddingTop: 25,
    paddingLeft: 15,
    paddingRight: 15,
  },
  weatherDescriptionText_1: {
    color: Themes.colors.white,
    fontSize: 13,
    fontWeight: "500",
  },
  AIinsightbox: {
    // borderColor: "white",
    // borderWidth: 1,
    width: "100%",
    alignItems: "center",
  },
  AIinsight: {
    color: Themes.colors.white,
    fontStyle: "italic",
    opacity: 0.8,
    fontSize: 10,
    fontWeight: "500",
    marginTop: 10,
  },
  weatherDescriptionText_2: {
    color: Themes.colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },

});
