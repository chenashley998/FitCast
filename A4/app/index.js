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
import { StatusBar } from "expo-status-bar";
import BackgroundImage from "../assets/Images/dayBackground.jpg"; // Adjust the path as per your folder structure
import SunIcon from "../assets/Images/sunnyIconGreen.png"; // Adjust the path as per your folder structure
import fitcast from "../assets/Images/fitcast.png"; // Adjust the path as per your folder structure
import umbrella from "../assets/Images/umbrella.png";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";

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

const VerticalLine = () => {
  return <View style={styles.line} />;
};

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
            <View style={styles.items}>
              <View style={styles.itemsToWear}>
                <View style={styles.FitcastTextContainer}>
                  <Text style={styles.suggestionTextNow}>Now: </Text>
                </View>
                <View style={styles.fitCastIcons}>
                  <View style={styles.fitCastOutfit}>
                    <Image source={shirtIcon} style={styles.outfitTop}></Image>
                    <Text style={styles.textsymbols}> + </Text>
                    <Image
                      source={shortsIcon}
                      style={styles.outfitBottom}
                    ></Image>
                  </View>
                </View>
              </View>
              <VerticalLine />
              <View style={styles.itemsToPack}>
                <View style={styles.FitcastTextContainer1}>
                  <Text style={styles.suggestionText}>For Later: </Text>
                </View>
                <View style={styles.fitCastOutfit}>
                  <Image
                    source={jacketIcon}
                    style={styles.outfitOpacity}
                  ></Image>
                  <Text style={styles.textsymbols}> + </Text>
                  <Image
                    source={pantsIcon}
                    style={styles.outfitOpacityPants}
                  ></Image>
                  <Text style={styles.textsymbols}> + </Text>

                  <Image
                    source={umbrellaIcon}
                    style={styles.outfitOpacity}
                  ></Image>
                </View>
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
  },
  suggestionText: {
    color: Themes.colors.logoGreen,
  },
  itemsToWear: {
    justifyContent: "space-between",
    flexDirection: "column",
    height: windowDimensions.height * 0.1,
    width: "45%",
    // backgroundColor: "white",
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
    alignItems: "center",
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
    width: 350,
    height: windowDimensions.height * 0.2,
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
    borderwidth: 1,
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
    height: 90,
  },
  outfitTop: {
    //marginBottom: 5,
    width: 50,
    height: 50,
    //borderColor: "black",
    //borderWidth: "1",
  },
  outfitBottom: {
    width: 50,
    height: 50,
    resizeMode: "contain",
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
    marginTop: "25%",
    backgroundColor: Themes.colors.logoGreen,
    height: "30%",
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
    borderwidth: 1,
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
    //borderWidth: "1",
    marginBottom: 0,
  },
});
