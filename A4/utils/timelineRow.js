import { Text, View, Image, StyleSheet } from "react-native";
import { Themes } from "../assets/Themes";

const Row = ({ time, weatherIcon, temperature, clothingIcon }) => {
  return (
    <View style={styles.row}>
      <View style={styles.left}>
        <Text style={styles.time}>{time}</Text>
        <Image style={styles.weather} source={weatherIcon} />
        <Text style={styles.time}>{temperature}</Text>
      </View>

      <Image style={styles.clothing} source={clothingIcon} />
    </View>
  );
};
export default Row;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignContent: "space-between",
  },
  time: {
    flex: 1,
    color: Themes.colors.paletOrange,
  },
  weather: {
    flex: 1,
  },
  clothing: {
    flex: 1,
    width: 50,
    margin: 10,
  },
  left: {
    margin: 10,
    alignItems: "center",
  },
});
