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
import BackgroundImage from "../assets/Images/sunny.jpg"; // Adjust the path as per your folder structure
import SunIcon from "../assets/Images/sunIcon.png"; // Adjust the path as per your folder structure
import fitcast from "../assets/Images/fitcast.png"; // Adjust the path as per your folder structure
import umbrella from "../assets/Images/umbrella.png";
import shirtIcon from "../assets/Images/shirtIcon.png";
import shortsIcon from "../assets/Images/shortsIcon.png";
import umbrellaIcon from "../assets/Images/umbrellaIcon.png";
import bagIcon from "../assets/Images/bagIcon.png";

import * as Font from "expo-font";

// import { Header } from "./components/header";
import { Images, Themes } from "../assets/Themes";

import { Link, Stack } from "expo-router/";
import Ionicons from "@expo/vector-icons/Ionicons";
const windowDimensions = Dimensions.get("window");

export default function App() {
  const { token, getSpotifyAuth } = useSpotifyAuth();

  const tracks = useSpotifyTracks(token);

  const SpotifyAuthButton = () => (
    <Pressable onPress={() => getSpotifyAuth()} style={styles.authButton}>
      <View style={styles.authButtonView}>
        <Image source={Images.spotify} style={styles.authButtonLogo} />
        <Text style={styles.authButtonText}>CONNECT WITH SPOTIFY</Text>
      </View>
    </Pressable>
  );

  function createArtistList(artists) {
    let artistList = "";
    for (i = 0; i < artists.length; i++) {
      artistList += artists[i].name;
      if (i < artists.length - 1) {
        artistList += ", ";
      }
    }
    return artistList;
  }

  let fitCastBagItems = null;
  fitCastBagItems = (
    <>
      <Image style={styles.fitCastBagItem}></Image>
    </>
  );

  let homescreen = (
    <View style={styles.homescreen}>
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
          <View style={styles.weatherInfoContainer}>
            <View style={styles.temperatureContainer}>
              <Image source={SunIcon} style={styles.tempIcon}></Image>
              <Text style={styles.tempText}>74°</Text>
            </View>
            <Text style={styles.tempDescription}>Sunny</Text>
            <Text style={styles.tempHighLow}>High 76 | Low 67</Text>
          </View>
        </Link>
      </TouchableOpacity>
      <View style={styles.fitCastContainer}>
        <View style={styles.fitCastTitleContain}>
          <Text style={styles.fitCastName}>Your FitCast</Text>
        </View>
        <View style={styles.fitCastOutfit}>
          <Image source={shirtIcon} style={styles.outfitTop}></Image>
          <Image source={shortsIcon} style={styles.outfitBottom}></Image>
        </View>
        <View style={styles.fitCastBag}>
          <ImageBackground source={bagIcon} style={styles.fitCastBagOutline}>
            <View style={styles.fitCastBagItems}>{fitCastBagItems}</View>
          </ImageBackground>
        </View>
      </View>

      <View style={styles.fitCastDescriptionContainer}>
        <Text style={styles.fitCastDescriptionSummary}>
          You've typically felt hot in this weather:
        </Text>
        <Text style={styles.fitCastDescriptionExtended}>
          wear a t-shirt and shorts + pack an umbrella for the afternoon
        </Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
      <SafeAreaView>
        <StatusBar style="light" />
        <View style={styles.topBar}>
          <View style={styles.topBarContainer}>
            <Image source={fitcast} style={styles.fitCastLogo} />
            <Text style={styles.fitCastText}>FitCast</Text>
          </View>
        </View>
        {/* <Header /> */}
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
  },
  //Weather info container
  weatherInfoContainer: {
    //borderWidth: 1,
    borderRadius: 30,
    //borderColor: "black",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Themes.colors.weatherOrange,
    padding: 10,
    width: 250,
    height: 250,
    //margin: 30,
  },
  temperatureContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  tempIcon: {},
  tempText: {
    fontSize: 78,
    color: Themes.colors.paletOrange,
  },
  tempDescription: {
    fontSize: 20,
    fontWeight: "bold",
    color: Themes.colors.paletOrange,
  },
  tempHighLow: {
    fontSize: 15,
    color: Themes.colors.paletOrange,
  },
  //Fitcast container
  fitCastContainer: {
    backgroundColor: Themes.colors.logoYellow,
    borderRadius: 30,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  fitCastName: {
    color: Themes.colors.paletLightYellow,
    fontSize: 25,
    fontWeight: "bold",
  },
  fitCastOutfit: {},
  outfitTop: {},
  outfitBottom: {},
  fitCastBag: {},
  fitCastBagOutline: {},
  fitCastBagItems: {},
  fitCastBagItem: {},
  fitCastDescriptionContainer: {
    backgroundColor: Themes.colors.logoGreen,
    borderRadius: 30,
    height: "30%",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  fitCastDescriptionSummary: {
    color: Themes.colors.logoYellow,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  fitCastDescriptionExtended: {
    color: Themes.colors.logoYellow,
    fontSize: 18,
    textAlign: "center",
  },
  fitCastTitleContain: {},
});
