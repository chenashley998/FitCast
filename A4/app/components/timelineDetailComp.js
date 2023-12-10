import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { Themes } from "../../assets/Themes";
const windowDimensions = Dimensions.get("window");

const TimelineDetailComp = (props) => {
  const navigation = useNavigation();

  const rightScreen = () => {
    navigation.navigate("screens/timelineDetail1");
  };

  return (
    <View style={styles.timelineDetail}>
      <View style={styles.screenTop}>
        <TouchableOpacity>
          <Entypo
            name="chevron-thin-left"
            size={50}
            color={Themes.colors.fitcastGray}
          />
        </TouchableOpacity>
        <View style={styles.weatherContent}>
          <View style={styles.time}>
            <Text style={styles.timeText_1}>{props.time} </Text>
            <Text style={styles.timeText_2}>- {props.location} </Text>
          </View>
          <View style={styles.time}>
            <Image style={styles.weatherIcon} source={props.tempIcon}></Image>
            <Text style={styles.weatherTemperature}>{props.temperature}</Text>
          </View>
          <Text style={styles.weatherInfo_1}>
            Humidity: {props.humidity}{" "}
            <Text style={styles.weatherInfoBold_1}>| </Text>
            Windspeed: {props.windspeed}{" "}
            <Text style={styles.weatherInfoBold_1}>| </Text>
            UV: {props.uv}
          </Text>
          <View style={styles.weatherdetail}>
            <View style={styles.fitcast_suggestions}>
              <Image
                style={styles.clothingIcon}
                source={props.bottomIcon}
              ></Image>
              <Text style={styles.weatherInfo_2}> + </Text>
              <Image style={styles.clothingIcon} source={props.topIcon}></Image>
              <Text style={styles.weatherInfo_2}> , </Text>
              <Image
                style={styles.clothingIcon}
                source={props.accessory}
              ></Image>
              <Text style={styles.weatherInfo_2}> for later </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => rightScreen()}>
          <Entypo
            name="chevron-thin-right"
            size={50}
            color={Themes.colors.fitcastGray}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.weatherDescriptionBox}>
        <Text style={styles.weatherDescriptionText_2}>{props.headerText}</Text>
        <View style={styles.AIinsightbox}>
          <Text style={styles.weatherDescriptionText_1}>{props.innerText}</Text>
        </View>
        <View style={styles.AIinsightbox}>
          <Text style={styles.AIinsight}>{props.aiInsight} </Text>
        </View>
      </View>
    </View>
  );
};
export { TimelineDetailComp };

const styles = StyleSheet.create({
  separator: {
    width: "92%",
    borderBottomColor: Themes.colors.logoGreen,
    borderBottomWidth: 0.8,
    marginVertical: 5,
  },
  clothingIcon: {
    resizeMode: "contain",
    width: windowDimensions.width * 0.13,
    height: windowDimensions.width * 0.14,
  },
  fitcast_suggestions: {
    flexDirection: "row",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: windowDimensions.width,
    height: windowDimensions.height,
  },
  time: {
    alignItems: "center",
    flexDirection: "row",
  },
  timelineDetail: {
    height: 400,
    flexDirection: "column",
    height: windowDimensions.height * 0.7,
    justifyContent: "center",
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
  screenTop: {
    height: windowDimensions.height * 0.55,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  weatherContent: {
    marginTop: 35,
    marginHorizontal: -9,

    height: windowDimensions.height * 0.35,
    width: windowDimensions.width * 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  timeText_1: {
    fontSize: 30,
    color: Themes.colors.logoYellow,
    marginBottom: 10,
    fontWeight: "bold",
  },
  timeText_2: {
    fontSize: 25,
    color: Themes.colors.logoYellow,
    marginBottom: 10,
  },
  weatherIcon: {
    resizeMode: "contain",
    width: windowDimensions.width * 0.1,
    height: windowDimensions.width * 0.1,
  },
  weatherdetail: {
    alignItems: "center",
    flexDirection: "column",
    width: windowDimensions.width * 0.72,
    backgroundColor: Themes.colors.logoYellow,
    borderRadius: "15%",
    padding: 3,
    justifyContent: "center",
    marginTop: 10,
  },
  weatherInfo_1: {
    fontSize: 15,
    color: Themes.colors.logoYellow,
    marginBottom: 12,
    fontWeight: "400",
  },
  weatherInfo_2: {
    fontSize: 13.5,
    marginHorizontal: 2,
    color: Themes.colors.logoGreen,
    fontWeight: "600",
  },
  weatherInfoBold_1: {
    fontSize: 14,
    color: Themes.colors.logoYellow,
    fontWeight: "bold",
  },
  weatherTemperature: {
    fontSize: 80,
    color: Themes.colors.logoYellow,
  },
  weatherDescriptionBox: {
    marginTop: 0,
    alignItems: "flex-start",
    height: windowDimensions.height * 0.2,
    backgroundColor: Themes.colors.logoGreen,
    borderRadius: "30%",
    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
  weatherDescriptionText_1: {
    color: Themes.colors.logoYellow,
    fontWeight: "400",
    fontSize: 12,
  },
  AIinsightbox: {
    marginTop: 3,
    width: "100%",
    alignItems: "center",
  },
  AIinsight: {
    color: Themes.colors.white,
    fontStyle: "italic",
    fontSize: 10,
    fontWeight: "300",
    marginTop: 10,
  },
  weatherDescriptionText_2: {
    color: Themes.colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
});
