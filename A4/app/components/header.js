import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Images, Themes } from "../../assets/Themes";

const Header = () => {
  const navigation = useNavigation();

  const navigateHome = () => {
    navigation.navigate("index");
  };

  return (
    <View style={headerStyles.container}>
      <TouchableOpacity onPress={navigateHome}>
        <Image
          source={require("../../assets/Images/fitcast.png")}
          style={{ width: 150, height: 70 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Entypo name="menu" size={50} color={Themes.colors.fitcastGray} />
      </TouchableOpacity>
    </View>
  );
};

export { Header };

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
