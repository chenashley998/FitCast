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
import {
  useSpotifyAuth,
  useSpotifyTracks,
  millisToMinutesAndSeconds,
} from "../utils";
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

  let content = null;
  if (token && tracks) {
    content = (
      <>
        <View style={styles.topBar}>
          <View style={styles.topBarContainer}>
            <Image source={Images.spotify} style={styles.tracksLogo} />
            <Text style={styles.tracksText}>My Top Tracks</Text>
          </View>
        </View>

        <FlatList
          style={styles.flatList}
          data={tracks}
          renderItem={({ item, index }) => (
            <>
              <StatusBar style="light" />
              <View style={styles.songContainer}>
                <TouchableOpacity>
                  <Link
                    href={{
                      pathname: "./songPreview",
                      params: {
                        previewUrl: item.previewUrl,
                      },
                    }}
                    asChild
                  >
                    <Ionicons
                      name="play-circle"
                      size={30}
                      color={Themes.colors.spotify}
                    />
                  </Link>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Link
                    style={styles.songDetailLink}
                    href={{
                      pathname: "/songDetail",
                      params: {
                        externalUrl: item.externalUrl,
                      },
                    }}
                    // asChild
                  >
                    <View style={styles.rightSongContainer}>
                      <Image
                        source={{
                          uri: item.imageUrl,
                        }}
                        style={styles.coverImg}
                      />
                      <View style={styles.songInfoContainer}>
                        <Text style={styles.songTitle} numberOfLines={1}>
                          {item.songTitle}
                        </Text>
                        <Text style={styles.songArtist} numberOfLines={1}>
                          {createArtistList(item.songArtists)}
                        </Text>
                      </View>
                      <View style={styles.songAlbumContainer}>
                        <Text style={styles.songAlbum} numberOfLines={1}>
                          {item.albumName}
                        </Text>
                      </View>
                      <Text style={styles.songLength}>
                        {millisToMinutesAndSeconds(item.duration)}
                      </Text>
                    </View>
                  </Link>
                </TouchableOpacity>
              </View>
            </>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <Stack.Screen options={{ header: () => null }} />
        <StatusBar style="light" />
      </>
    );
  } else {
    content = (
      <>
        <StatusBar style="light" />
        <SpotifyAuthButton />
        <Stack.Screen options={{ header: () => null }} />
      </>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
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
  tracksLogo: {
    // flex: 2,
    resizeMode: "contain",
    height: 25,
    width: 25,
  },
  tracksText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    paddingLeft: 10,
  },

  flatList: {
    width: Dimensions.get("window").width,
  },
  authButton: {
    backgroundColor: Themes.colors.spotify,
    width: 250,
    height: 40,
    borderRadius: 30,
  },
  authButtonView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  authButtonLogo: {
    flex: 2,
    resizeMode: "contain",
    height: 25,
  },
  authButtonText: {
    flex: 8,
    color: Themes.colors.white,
    fontSize: 16,
  },

  songDetailLink: {
    flex: 1,
  },
  songContainer: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    color: "white",
    padding: 5,
  },
  rightSongContainer: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    width: 350,
    flexDirection: "row",
    color: "white",
    padding: 5,
  },
  coverImg: {
    resizeMode: "contain",
    height: 70,
    width: 70,
  },
  songInfoContainer: {
    flex: 6,
    flexDirection: "column",
    marginRight: 5,
    marginLeft: 10,
  },
  songTitle: {
    color: "white",
    fontWeight: "400",
  },
  songArtist: {
    color: "white",
    paddingTop: 1,
    fontWeight: "200",
  },
  songAlbumContainer: {
    flex: 4,
  },
  songAlbum: {
    color: "white",
  },
  songLength: {
    // flex: 1,
    color: "white",
    width: 35,
    paddingLeft: 4,
  },
});
