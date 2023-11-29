import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={headerStyles.container}>
      <View>
        <Text>Header</Text>
        {/* <Text>{screen}</Text> */}
      </View>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Entypo name="menu" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export { Header };

const headerStyles = StyleSheet.create({
  container: {
    // position: "absolute",
    borderColor: "black",
    borderWidth: 1,
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "transparent",
    elevation: 5,
    height: 50,
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
// import { StyleSheet, View, Text, Dimensions } from "react-native";

// import { Images, Themes } from "../../assets/Themes";
// const windowDimensions = Dimensions.get("window");

// export default function Header() {
//   // const params = useLocalSearchParams();
//   return (
//     <View style={styles.topBar}>
//       <View style={styles.topBarContainer}>
//         <Image source={Images.spotify} style={styles.fitCastLogo} />
//         <Text style={styles.fitCastText}>FitCast Header</Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   topBar: {
//     flexDirection: "row",
//     height: 60,
//     width: Dimensions.get("window").width,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   topBarContainer: {
//     flexDirection: "row",

//     alignItems: "center",
//     justifyContent: "center",
//   },
//   fitCastLogo: {
//     // flex: 2,
//     resizeMode: "contain",
//     height: 25,
//     width: 25,
//   },
//   fitCastText: {
//     fontSize: 25,
//     fontWeight: "bold",
//     paddingLeft: 10,
//   },
// });
