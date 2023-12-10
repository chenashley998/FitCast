import { Text, View, Image, StyleSheet } from "react-native";
import { Themes } from "../assets/Themes";

const Row = ({
  time,
  weatherIcon,
  temperature,
  clothingIcon1,
  clothingIcon2,
  clothingIcon3,
}) => {
  return (
    <View style={styles.row}>
      <View style={styles.left}>
        <Text style={styles.time}>{time}</Text>
        <Image style={styles.weather} source={weatherIcon} />
        <Text style={styles.time}>{temperature}</Text>
      </View>
      <View style={styles.right}>
        <Image style={styles.clothing} source={clothingIcon1} />
        <Image style={styles.clothing} source={clothingIcon2} />
        <Image style={styles.clothing} source={clothingIcon3} />
      </View>
    </View>
  );
};
export default Row;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 5,
    paddingBottom: 7,
  },
  time: {
    color: Themes.colors.paletOrange,
  },
  weather: {
    resizeMode: "contain",
    margin: 1,
  },
  clothing: {
    flex: 1,
    margin: 10,
    aspectRatio: 1,
    resizeMode: "contain",
  },
  left: {
    alignItems: "center",
    flex: 1,
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    flex: 3,
  },
});
