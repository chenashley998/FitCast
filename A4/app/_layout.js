import { Drawer } from "expo-router/drawer";
import { Header } from "./components/header";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Themes } from "../assets/Themes";

export default function Layout() {
  // Define the drawer styling within screenOptions
  const drawerScreenOptions = {
    drawerActiveTintColor: Themes.colors.logoYellow, // Placeholder color for active item (Change as needed)
    drawerInactiveTintColor: "#fff", // Placeholder color for inactive items (Change as needed)
    drawerItemStyle: { marginVertical: 5 }, // Style for each drawer item
    drawerLabelStyle: {
      fontSize: 18, // Font size for the labels (Adjust as needed)
      // Add other label styles here
    },
    drawerContentStyle: {
      backgroundColor: Themes.colors.logoGreen, // Placeholder background color for drawer (Change as needed)
      // Add other container styles here
    },
    // Add other drawer screen options if needed
  };

  return (
    <Drawer
      screenOptions={{
        ...drawerScreenOptions, // Apply the drawer styling here
        drawerPosition: "right",
        header: () => <Header />,
        headerRight: () => <DrawerToggleButton />,
      }}
    >
      {/* Your Drawer Screens */}
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Home",
          headerShown: true,
          header: () => <Header />,
          title: "Home",
        }}
      />
      <Drawer.Screen
        name="screens/weatherLog"
        options={{
          drawerLabel: "Weather Log",
          headerShown: false,
          header: () => <Header />,
          title: "Weather Log",
        }}
      />
      <Drawer.Screen
        name="screens/timeline"
        options={{
          drawerLabel: "Clothing Timeline",
          header: () => <Header />,
          headerShown: false,
          title: "Timeline",
        }}
      />
      <Drawer.Screen
        name="screens/locationPinner"
        options={{
          drawerLabel: "Location Pinner",
          headerShown: false,
          title: "Location Pinner",
        }}
      />
      <Drawer.Screen //DELETE LATER
        name="screens/timelineDetail1-Sunny"
        options={{
          drawerLabel: "Weather Timeline 1",
          header: () => <Header />,
          headerShown: false,
          title: "Timeline",
        }}
      />
      <Drawer.Screen //DELETE LATER
        name="screens/timelineDetail2-Cloudy"
        options={{
          drawerLabel: "Weather Timeline 2",
          header: () => <Header />,
          headerShown: false,
          title: "Timeline",
        }}
      />
      <Drawer.Screen //DELETE LATER
        name="screens/timelineDetail3-Rainy"
        options={{
          drawerLabel: "Weather Timeline 3",
          header: () => <Header />,
          headerShown: false,
          title: "Timeline",
        }}
      />
      <Drawer.Screen //DELETE LATER
        name="screens/timelineDetail4-Night"
        options={{
          drawerLabel: "Weather Timeline 4",
          header: () => <Header />,
          headerShown: false,
          title: "Timeline",
        }}
      />
    </Drawer>
  );
}
