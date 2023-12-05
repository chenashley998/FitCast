import Modal from "react-native-modal";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { ClothingItem } from "../../components/locationClothingItem";
import Location from "../../../assets/Images/location.png";
import smarterPicture from "../../../assets/Images/gettingSmarter.png";

import { Themes } from "../../../assets/Themes";
const windowDimensions = Dimensions.get("window");

const SmartModal = (props) => {
  const [text, onChangeText] = React.useState("");
  let isSmartModalVisible = props.isSmartModalVisible;
  const onSmartToggleModal = props.onSmartToggleModal;

  const setSmartModalVisible = () => {
    onSmartToggleModal();
  };
  return (
    <Modal
      propagateSwipe={true}
      isVisible={isSmartModalVisible}
      onSwipeComplete={() => setSmartModalVisible(false)}
      swipeDirection="down"
      style={styles.modal}
    >
      <View style={styles.wrapperView}>
        <Image source={smarterPicture} style={styles.image} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrapperView: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // flex: 1,
  },
});

export { SmartModal };
