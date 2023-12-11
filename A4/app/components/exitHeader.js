import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Images, Themes } from "../../assets/Themes";

const ExitHeader = () => {
  const navigation = useNavigation();

  const returnHome = () => {
    navigation.navigate("index"); // Replace 'Home' with the actual route name of your home screen
  };

  const exitTimeline = () => {
    navigation.navigate("screens/timeline"); // Replace 'Home' with the actual route name of your home screen
  };

  return (
    <View style={headerStyles.container}>
      <TouchableOpacity onPress={() => returnHome()}>
        <Image
          source={require("../../assets/Images/fitcast.png")}
          style={{ width: 150, height: 70 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => exitTimeline()}>
        <Entypo name="cross" size={50} color={Themes.colors.fitcastGray} />
      </TouchableOpacity>
    </View>
  );
};

export { ExitHeader };

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
