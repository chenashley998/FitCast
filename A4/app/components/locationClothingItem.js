// import {
//   StyleSheet,
//   View,
//   Text,
//   Link,
//   Dimensions,
//   TouchableOpacity,
//   Image,
// } from "react-native";
// import { Entypo } from "@expo/vector-icons";
// import { Themes } from "../../assets/Themes";

// const ClothingItem = (props) => {
//   return (

//   );
// };
// export { ClothingItem };

// const styles = StyleSheet.create({});
import {
  StyleSheet,
  View,
  Text,
  Link,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Themes } from "../../assets/Themes";
import shirtIcon from "../../assets/Images/shirtIcon.png";

const ClothingItem = (props) => {
  return (
    <TouchableOpacity>
      <View style={styles.clothingItemContainer}>
        <Text style={styles.clothingItemText}>Shirt</Text>
        <Image style={styles.clothingItemImage} source={shirtIcon}></Image>
        <View style={styles.clothingItemBubble}></View>
      </View>
    </TouchableOpacity>
  );
};
export { ClothingItem };

const styles = StyleSheet.create({
  clothingItemContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  clothingItemText: {},
  clothingItemImage: {},
  clothingItemBubble: {
    backgroundColor: "white",
    borderWidth: 5,
    borderColor: Themes.colors.logoGreen,
    borderRadius: 40,
    width: 40,
    height: 40,
    // position: "absolute",
    position: "absolute",
    top: 70,
    left: 40,
  },
});
