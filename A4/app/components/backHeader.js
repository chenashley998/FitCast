import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { Images, Themes } from "../../assets/Themes";

const BackHeader = () => {
  const navigation = useNavigation();

  const backScreen = () => {
    navigation.goBack();
  };

  const exitHome = () => {
    navigation.navigate("index");
  };

  return (
    <View style={headerStyles.container}>
      <TouchableOpacity onPress={() => backScreen()}>
        <Ionicons
          name="arrow-back-outline"
          size={50}
          color={Themes.colors.fitcastGray}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => exitHome()}>
        <Entypo name="cross" size={50} color={Themes.colors.fitcastGray} />
      </TouchableOpacity>
    </View>
  );
};

export { BackHeader };

const headerStyles = StyleSheet.create({
  container: {
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "transparent",
    elevation: 5,
    height: 70,
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
