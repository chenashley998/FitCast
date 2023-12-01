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
        <TimelineDetailComp
          time="3pm"
          location="Stanford University"
          tempIcon="sunny"
          temperature="74"
          fahrenheit="true"
          humidity="Med"
          windspeed="Low"
          uv="High"
          topIcon="shorts"
          bottomIcon="shirt"
          accessory="umbrella"
          headerText="Dress lightly & wear sunscreen"
          innerText="Based on historical data, you've typically felt hot in medium heat
          and humidity"
          aiInsight="*You're similar to 30% of users in this weather*"
        />
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

  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'contain', 'stretch', etc.
    width: windowDimensions.width,
    height: windowDimensions.height,
  },
});
