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
import React, { useState, useEffect } from "react";

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
import Ionicons from "@expo/vector-icons/Ionicons";

import { Entypo } from "@expo/vector-icons";
import { Themes } from "../../assets/Themes";
import shirtIcon from "../../assets/Images/shirtIcon.png";

const ClothingItem = ({ itemName, itemImage, reset }) => {
  const [clothingItemClicked, setClothingItemClicked] = useState("false");
  const toggleClothingItemClicked = () =>
    setClothingItemClicked(!clothingItemClicked);

  const resetState = () => {
    setClothingItemClicked(false);
  };

  useEffect(() => {
    // Reset the clothing item state when the parent component triggers a reset
    setClothingItemClicked(false);
  }, [reset]);

  return (
    <TouchableOpacity onPress={toggleClothingItemClicked}>
      <View style={styles.clothingItemContainer}>
        <Text style={styles.clothingItemText}>{itemName}</Text>
        <Image style={styles.clothingItemImage} source={itemImage}></Image>
        {!clothingItemClicked && (
          <View style={styles.clothingItemBubble}></View>
        )}
        {clothingItemClicked && (
          <View style={styles.clothingItemBubbleFilled}>
            <Ionicons
              style={styles.checkmark}
              name="checkmark-outline"
              size={25}
              color={Themes.colors.fitcastGray}
            />
          </View>
        )}
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
    padding: 5,
  },
  clothingItemText: {
    color: Themes.colors.logoGreen,
  },
  clothingItemImage: {
    resizeMode: "contain",
    width: 80,
    height: 80,
  },
  clothingItemBubble: {
    backgroundColor: "white",
    borderWidth: 5,
    borderColor: Themes.colors.logoGreen,
    borderRadius: 40,
    width: 30,
    height: 30,
    // position: "absolute",
    position: "absolute",
    top: 70,
    left: 55,
  },
  clothingItemBubbleFilled: {
    backgroundColor: Themes.colors.logoGreen,
    borderWidth: 1,
    borderColor: Themes.colors.logoGreen,
    borderRadius: 40,
    width: 30,
    height: 30,
    position: "absolute",
    top: 70,
    left: 55,
  },
  checkmark: {
    color: Themes.colors.logoYellow,
    padding: 1,
    alignSelf: "center",
    justifyContent: "center",
  },
});
