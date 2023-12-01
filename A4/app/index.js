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
import { useSpotifyAuth, useSpotifyTracks } from "../utils";
import { StatusBar } from "expo-status-bar";
import BackgroundImage from "../assets/Images/dayBackground.jpg"; // Adjust the path as per your folder structure
import SunIcon from "../assets/Images/sunnyIconGreen.png"; // Adjust the path as per your folder structure
import fitcast from "../assets/Images/fitcast.png"; // Adjust the path as per your folder structure
import umbrella from "../assets/Images/umbrella.png";
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
import Ionicons from "@expo/vector-icons/Ionicons";
const windowDimensions = Dimensions.get("window");

export default function App() {
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
          <Text style={styles.tempText}>74°</Text>
        </View>
        <Text style={styles.tempDescription}>Sunny</Text>
        <Text style={styles.tempHighLow}>High 76° | Low 60°</Text>
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
            <View style={styles.fitCastIcons}>
              <View style={styles.fitCastOutfit}>
                <Image source={shirtIcon} style={styles.outfitTop}></Image>
                <Image source={shortsIcon} style={styles.outfitBottom}></Image>
              </View>
              <View style={styles.fitCastBag}>
                <Image source={jacketUmbrellaIcon} style={styles.bag}></Image>
              </View>
            </View>
          </View>
        </Link>
      </TouchableOpacity>

      <View style={styles.fitCastDescriptionContainer}>
        <Text style={styles.fitCastDescriptionSummary}>
          Dress light but pack a jacket and umbrella:
        </Text>
        <Text style={styles.fitCastDescriptionExtended}>
          You've typically felt hot in this weather but it'll cool down and rain
          later today
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
  phoneContainer: {
    backgroundColor: "transparent", // Set background color to transparent
    //backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: windowDimensions.width,
    height: windowDimensions.height,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'contain', 'stretch', etc.
    width: windowDimensions.width,
    height: windowDimensions.height,
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
    //borderWidth: 1,
    borderRadius: 30,
    //borderColor: "black",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: Themes.colors.weatherOrange,
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
    justifyContent: "center",
    width: 350,
    paddingBottom: 10, // Reduced from 20 to 10
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  fitCastName: {
    color: Themes.colors.logoGreen,
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
  },
  fitCastOutfit: {
    marginLeft: 10,
    marginRight: 20,
    marginBottom: 0,
    //borderColor: "black",
    //borderWidth: "1",
    alignItems: "center",
    justifyContent: "center",
  },
  outfitTop: {
    //marginBottom: 5,
    width: 80,
    height: 80,
    //borderColor: "black",
    //borderWidth: "1",
  },
  outfitBottom: {
    width: 65,
    height: 50,
    //borderColor: "black",
    //borderWidth: "1",
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
    marginTop: 50,
    backgroundColor: Themes.colors.logoGreen,
    height: "20%",
    width: "85%",
    borderRadius: 20,
    justifyContent: "flex-end", // Align content at the bottom
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 20, // Add padding at the bottom for spacing
    justifyContent: "center", // Center content vertically
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
  fitCastTitleContain: {},
  bag: {
    width: 120,
    height: 120,
  },
  fitCastIcons: {
    flexDirection: "row", // Align children in a row
    //justifyContent: "center", // Adjust this as needed (center, space-between, etc.)
    //alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
    //borderColor: "black",
    //borderWidth: "1",
    marginBottom: 0,
  },
});
