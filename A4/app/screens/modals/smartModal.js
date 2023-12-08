import Modal from "react-native-modal";
import { StyleSheet, View, Dimensions, Image } from "react-native";
import React from "react";

import smarterPicture from "../../../assets/Images/gettingSmarter.png";

const SmartModal = (props) => {
  let isSmartModalVisible = props.isSmartModalVisible;
  // const onSmartToggleModal = props.onSmartToggleModal;

  // const setSmartModalVisible = () => {
  //   onSmartToggleModal();
  // };
  return (
    <Modal
      propagateSwipe={true}
      isVisible={isSmartModalVisible}
      swipeDirection="down"
      style={styles.modal}
      animationIn="bounceIn"
      animationOut="bounceOut"
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
