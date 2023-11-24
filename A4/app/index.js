import {
  Image,
  StyleSheet,
  SafeAreaView,
  Text,
  Pressable,
  FlatList,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useSpotifyAuth, useSpotifyTracks } from "../utils";
import { StatusBar } from "expo-status-bar";
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
    <>
      <View style={styles.weatherInfoContainer}>
        <View style={styles.temperatureContainer}>
          <Image style={styles.tempIcon}></Image>
          <Text style={styles.tempText}></Text>
        </View>
        <Text style={styles.tempDescription}></Text>
        <Text style={styles.tempHighLow}></Text>
      </View>

      <View style={styles.fitCastContainer}>
        <Text style={styles.fitCastName}>Your FitCast</Text>
        <View style={styles.fitCastOutfit}>
          <Image style={styles.outfitTop}></Image>
          <Image style={styles.outfitBottom}></Image>
        </View>
        <View style={styles.fitCastBag}>
          <Image style={styles.fitCastBagOutline}>
            <View style={styles.fitCastBagItems}>{fitCastBagItems}</View>
          </Image>
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
    </>
  );

  return (
    <SafeAreaView style={styles.phoneContainer}>
      <StatusBar style="light" />
      <View style={backgroundImage}>
        <View style={styles.topBar}>
          <View style={styles.topBarContainer}>
            <Image source={Images.spotify} style={styles.fitCastLogo} />
            <Text style={styles.fitCastText}>My Top Tracks</Text>
          </View>
        </View>
        {homescreen}
        <Stack.Screen options={{ header: () => null }} />
        <StatusBar style="light" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  phoneContainer: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
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
    height: 25,
    width: 25,
  },
  fitCastText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    paddingLeft: 10,
  },
});
