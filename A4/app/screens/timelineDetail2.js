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
import { TimelineDetailComp } from "../components/timelineDetailComp";
import SunIcon from "../../assets/Images/sunIconLight.png"; // Adjust the path as per your folder structure
import shirtIcon from "../../assets/Images/shirtIcon.png";
import shortsIcon from "../../assets/Images/shortsIcon.png";
import { useLocalSearchParams } from "expo-router";
import umbrellaIcon from "../../assets/Images/umbrellaIcon.png";
import { Themes } from "../../assets/Themes";
import { Stack } from "expo-router";
const windowDimensions = Dimensions.get("window");

export default function TimelineDetail2() {
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
      <TimelineDetailComp
        time="2pm"
        location="Stanford CA"
        tempIcon={SunIcon}
        temperature="63°"
        humidity="Med"
        windspeed="Med"
        uv="Low"
        topIcon={shortsIcon}
        bottomIcon={shirtIcon}
        accessory={umbrellaIcon}
        headerText="Bring a jacket"
        innerText="Based on historical data, you've felt cold at times with similar weather conditions. Windspeed is increasing, moisturiser may be helpful"
        aiInsight="*You're similar to 60% of users in this weather*"
      />
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

  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'contain', 'stretch', etc.
    width: windowDimensions.width,
    height: windowDimensions.height,
    position: "absolute",
  },
});
