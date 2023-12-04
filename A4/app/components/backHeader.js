import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Images, Themes } from "../../assets/Themes";

const BackHeader = () => {
  const navigation = useNavigation();

  const backScreen = () => {
    navigation.goBack(); // Replace 'Home' with the actual route name of your home screen
  };

  const exitHome = () => {
    navigation.navigate("index"); // Replace 'Home' with the actual route name of your home screen
  };

  return (
    <View style={headerStyles.container}>
      <TouchableOpacity onPress={() => backScreen()}>
        <Entypo name="back" size={50} color={Themes.colors.fitcastGray} />
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
    // position: "absolute",
    //borderColor: "black",
    //borderWidth: 1,
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
