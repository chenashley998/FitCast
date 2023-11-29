import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { Header } from "../components/header";
import { useLocalSearchParams } from "expo-router";

import { Themes } from "../../assets/Themes";
import { Stack } from "expo-router";

export default function timeline() {
  // const params = useLocalSearchParams();
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
      <Header />
      <Text> Weather Timeline Page</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
