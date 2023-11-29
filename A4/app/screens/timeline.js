import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Header } from "../components/header";
import { useLocalSearchParams } from "expo-router";

import { Themes } from "../../assets/Themes";
import { Stack } from "expo-router";
const windowDimensions = Dimensions.get("window");

export default function timeline() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: "Weather Timeline",
          headerStyle: { backgroundColor: Themes.colors.background },
          headerTintColor: "#fff",

          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerBackTitleVisible: false,
        }}
      />

      <ImageBackground
        source={require("../../assets/Images/sunny.jpg")}
        style={styles.backgroundImage}
      >
        <Header />
        <View style={styles.timeline}>
          <View style={styles.times}>
            <Text>times and the weather</Text>
          </View>
          <View style={styles.clothes}>
            <Text>clothes</Text>
          </View>
        </View>
        <View style={styles.description}>
          <Text style={styles.text}>
            It's hot today: dress {"\n"}
            light but pack an umbrella
          </Text>
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
  timeline: {
    width: "90%",
    height: "70%",
    backgroundColor: Themes.colors.weatherOrange,
    flexDirection: "row",
    borderRadius: 15,
    padding: 10,
    alignSelf: "center",
    marginTop: 30,
  },
  line: {
    backgroundColor: Themes.colors.paletOrange,
    flex: 1,
  },
  times: {
    flex: 30,
  },
  clothes: {
    flex: 55,
    alignItems: "flex-end",
  },
  description: {
    backgroundColor: Themes.colors.logoYellow,
    padding: 10,
    margin: 10,
    borderRadius: 15,
    alignItems: "center",
    alignSelf: "center",
    width: "80%",
    height: "12%",
  },
  text: {
    fontSize: 25,
    alignItems: "center",
    textAlign: "center",
    textAlignVertical: "center",
    alignContent: "center",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: Themes.colors.background,
  },
});

// import React from "react";
// import { StyleSheet, View, Text, SafeAreaView } from "react-native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
// import { Themes } from "../../assets/Themes";
// import { Header } from "../components/header";

// const Stack = createStackNavigator();

// const WeatherTimelineScreen = () => {
//   return (
//     <View>
//       <Header title="Weather Timeline" />
//       <Text> Weather Timeline Page</Text>
//     </View>
//   );
// };

// export default function timeline() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen
//             name="WeatherTimeline"
//             component={WeatherTimelineScreen}
//             options={{
//               title: "Weather Log",
//               headerStyle: { backgroundColor: Themes.colors.background },
//               headerTintColor: "#fff",
//               headerTitleStyle: {
//                 fontWeight: "bold",
//               },
//               headerBackTitleVisible: false,
//             }}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "flex-start",
//     backgroundColor: Themes.colors.background,
//   },
// });

// import React from "react";
// import { StyleSheet, View, Text, SafeAreaView } from "react-native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
// import { Themes } from "../../assets/Themes";
// import { Header } from "../components/Header";

// const Stack = createStackNavigator();

// const WeatherTimelineScreen = () => {
//   return (
//     <View>
//       <Header title="Weather Timeline" />
//       <Text> Weather Timeline Page</Text>
//     </View>
//   );
// };

// export default function Timeline() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen
//             name="WeatherTimeline"
//             component={WeatherTimelineScreen}
//             options={{
//               title: "Weather Log",
//               headerStyle: { backgroundColor: Themes.colors.background },
//               headerTintColor: "#fff",
//               headerTitleStyle: {
//                 fontWeight: "bold",
//               },
//               headerBackTitleVisible: false,
//             }}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "flex-start",
//     backgroundColor: Themes.colors.background,
//   },
// });
