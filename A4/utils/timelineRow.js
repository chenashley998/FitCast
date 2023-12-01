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
  },
  time: {
    color: Themes.colors.paletOrange,
  },
  weather: {
    resizeMode: "contain",
    margin: 5,
  },
  clothing: {
    flex: 1,
    //width: 50,
    margin: 10,
    aspectRatio: 1,
    resizeMode: "contain",
  },
  left: {
    //margin: 10,
    alignItems: "center",
    flex: 1,
  },
  right: {
    flexDirection: "row",
    //margin: 10,
    alignItems: "center",
    flex: 3,
  },
});
