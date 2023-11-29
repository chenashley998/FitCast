import { Text, View, Image, StyleSheet } from "react-native";

const Row = ({ time, weatherIcon, clothingIcon }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.time}>{time}</Text>
      <Text style={styles.weather}>{weatherIcon}</Text>
      <Text style={styles.clothing}>{clothingIcon}</Text>
    </View>
  );
};
export default Row;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignContent: "space-between",
    alignItems: "stretch",
  },
  time: {
    flex: 1,
  },
  weather: {
    flex: 1,
  },
  clothing: {
    flex: 1,
  },
});
