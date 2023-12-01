import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Header } from "../components/header";
import { useLocalSearchParams } from "expo-router";

import { Themes } from "../../assets/Themes";
import { Stack } from "expo-router";
import Row from "../../utils/timelineRow";
const windowDimensions = Dimensions.get("window");
const testData = [
  {
    time: "NOW",
    weatherIcon: require("../../assets/Images/sunIcon.png"),
    temperature: "74°",
    clothingIcon1: require("../../assets/Images/shirtIcon.png"),
    clothingIcon2: require("../../assets/Images/shortsIcon.png"),
    clothingIcon3: require("../../assets/Images/emptyWeatherOrange.png"),
    route: "screens/timelineDetail1-Sunny",
  },
  {
    time: "11:00",
    weatherIcon: require("../../assets/Images/sunIcon.png"),
    temperature: "74°",
    clothingIcon1: require("../../assets/Images/shirtIcon.png"),
    clothingIcon2: require("../../assets/Images/emptyWeatherOrange.png"),
    clothingIcon3: require("../../assets/Images/emptyWeatherOrange.png"),
    route: "screens/timelineDetail2-Cloudy",
  },
  {
    time: "12:00",
    weatherIcon: require("../../assets/Images/sunIcon.png"),
    temperature: "74°",
    clothingIcon1: require("../../assets/Images/emptyWeatherOrange.png"),
    clothingIcon2: require("../../assets/Images/shortsIcon.png"),
    clothingIcon3: require("../../assets/Images/umbrellaIcon.png"),
    route: "screens/timelineDetail1-Sunny",
  },
];

export default function timeline() {
  const navigation = useNavigation();
  const onTimelinePress = (route) => {
    navigation.navigate(route);
  };

  const renderRow = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => onTimelinePress(item.route)}>
        <Row
          time={item.time}
          weatherIcon={item.weatherIcon}
          temperature={item.temperature}
          clothingIcon1={item.clothingIcon1}
          clothingIcon2={item.clothingIcon2}
          clothingIcon3={item.clothingIcon3}
        />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require("../../assets/Images/sunny.jpg")}
        style={styles.backgroundImage}
      />

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
      <View style={styles.timeline}>
        <View style={styles.times}>
          <FlatList
            data={testData}
            renderItem={renderRow}
            keyExtractor={(item) => item.time}
          />
        </View>
      </View>
      <View style={styles.description}>
        <Text style={styles.text}>
          It's hot today: dress {"\n"}
          light but pack an umbrella
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'contain', 'stretch', etc.
    width: windowDimensions.width,
    height: windowDimensions.height,
    position: "absolute",
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
  /*line: {
    backgroundColor: Themes.colors.paletOrange,
    flex: 1,
  },*/
  times: {
    flex: 1,
  },
  clothes: {
    flex: 1,
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
