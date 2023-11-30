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
import { Header } from "../components/header";

import { useLocalSearchParams } from "expo-router";

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
              <Text style={styles.timeText}>3 PM</Text>
              <Image style={styles.weatherIcon}></Image>
              <Text style={styles.weatherTemperature}>74</Text>
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
            <Text style={styles.weatherDescriptionText}>
              It might rain at this time, grab an umbrella just in case!
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'contain', 'stretch', etc.
    width: windowDimensions.width,
    height: windowDimensions.height,
  },
  timelineDetail: {
    borderColor: "blue",
    borderWidth: 1,
    height: 400,
    flexDirection: "column",
  },
  screenTop: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  weatherContent: { borderColor: "red", borderWidth: 1, height: 300 },
  timeText: {},
  weatherIcon: {},
  weatherTemperature: {},
  weatherDescriptionBox: {},
  weatherDescriptionText: {},
});
