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
    clothingIcon3: require("../../assets/Images/emptyImage.png"),
    route: "screens/timelineDetail1-Sunny",
  },
  {
    time: "12:00pm",
    weatherIcon: require("../../assets/Images/sunIcon.png"),
    temperature: "76°",
    clothingIcon1: require("../../assets/Images/downwardArrow.png"),
    clothingIcon2: require("../../assets/Images/downwardArrow.png"),
    clothingIcon3: require("../../assets/Images/emptyImage.png"),
    route: "screens/timelineDetail1-Sunny",
  },
  {
    time: "1:00pm",
    weatherIcon: require("../../assets/Images/cloudsunIcon.png"),
    temperature: "70°",
    clothingIcon1: require("../../assets/Images/downwardArrow.png"),
    clothingIcon2: require("../../assets/Images/downwardArrow.png"),
    clothingIcon3: require("../../assets/Images/emptyImage.png"),
    route: "screens/timelineDetail1-Sunny",
  },
  {
    time: "2:00pm",
    weatherIcon: require("../../assets/Images/cloudIcon.png"),
    temperature: "65°",
    clothingIcon1: require("../../assets/Images/jacketIcon.png"),
    clothingIcon2: require("../../assets/Images/downwardArrow.png"),
    clothingIcon3: require("../../assets/Images/emptyImage.png"),
    route: "screens/timelineDetail2-Cloudy",
  },
  {
    time: "3:00pm",
    weatherIcon: require("../../assets/Images/cloudIcon.png"),
    temperature: "63°",
    clothingIcon1: require("../../assets/Images/downwardArrow.png"),
    clothingIcon2: require("../../assets/Images/downwardArrow.png"),
    clothingIcon3: require("../../assets/Images/emptyImage.png"),
    route: "screens/timelineDetail2-Cloudy",
  },
  {
    time: "4:00pm",
    weatherIcon: require("../../assets/Images/rainIcon.png"),
    temperature: "61°",
    clothingIcon1: require("../../assets/Images/downwardArrow.png"),
    clothingIcon2: require("../../assets/Images/pantsIcon.png"),
    clothingIcon3: require("../../assets/Images/umbrellaIcon.png"),
    route: "screens/timelineDetail3-Rainy",
  },
  {
    time: "5:00pm",
    weatherIcon: require("../../assets/Images/rainIcon.png"),
    temperature: "60°",
    clothingIcon1: require("../../assets/Images/downwardArrow.png"),
    clothingIcon2: require("../../assets/Images/downwardArrow.png"),
    clothingIcon3: require("../../assets/Images/downwardArrow.png"),
    route: "screens/timelineDetail3-Rainy",
  },
  {
    time: "6:00pm",
    weatherIcon: require("../../assets/Images/moonIcon.png"),
    temperature: "61°",
    clothingIcon1: require("../../assets/Images/downwardArrow.png"),
    clothingIcon2: require("../../assets/Images/downwardArrow.png"),
    clothingIcon3: require("../../assets/Images/emptyImage.png"),
    route: "screens/timelineDetail4-Night",
  },
  {
    time: "7:00pm",
    weatherIcon: require("../../assets/Images/sunIcon.png"),
    temperature: "60°",
    clothingIcon1: require("../../assets/Images/downwardArrow.png"),
    clothingIcon2: require("../../assets/Images/downwardArrow.png"),
    clothingIcon3: require("../../assets/Images/emptyImage.png"),
    route: "screens/timelineDetail4-Night",
  },
  {
    time: "8:00pm",
    weatherIcon: require("../../assets/Images/sunIcon.png"),
    temperature: "60°",
    clothingIcon1: require("../../assets/Images/downwardArrow.png"),
    clothingIcon2: require("../../assets/Images/downwardArrow.png"),
    clothingIcon3: require("../../assets/Images/emptyImage.png"),
    route: "screens/timelineDetail4-Night",
  },
  {
    time: "9:00pm",
    weatherIcon: require("../../assets/Images/sunIcon.png"),
    temperature: "60°",
    clothingIcon1: require("../../assets/Images/downwardArrow.png"),
    clothingIcon2: require("../../assets/Images/downwardArrow.png"),
    clothingIcon3: require("../../assets/Images/emptyImage.png"),
    route: "screens/timelineDetail4-Night",
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
      <View style={styles.title_container}>
        <Text style={styles.title}>Clothing Timeline</Text>
      </View>
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
          Dress light but pack umbrella and a jacket for later
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
  title: {
    fontSize: 25,
    color: Themes.colors.logoYellow,
    fontWeight: "bold",
    paddingTop: 15,
    textShadowColor: "#000", // Outline color
    textShadowOffset: { width: 1, height: 1 }, // Outline offset
  },
  timeline: {
    width: "90%",
    height: "70%",
    backgroundColor: Themes.colors.logoYellow,
    flexDirection: "row",
    borderRadius: 15,
    padding: 10,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 8,
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
    justifyContent: "center",
    alignSelf: "center",
    width: "80%",
    height: "10%",
  },
  text: {
    fontSize: 15,
    alignItems: "center",
    textAlign: "center",
    textAlignVertical: "center",
    alignContent: "center",
    color: Themes.colors.paletLightgreen,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: Themes.colors.background,
  },
});
