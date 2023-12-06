import { Drawer } from "expo-router/drawer";
import { Stack } from "expo-router/stack";
import { Header } from "./components/header";
import { ExitHeader } from "./components/exitHeader";

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
          // presentation: "modal",
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
      <Drawer.Screen
        name="screens/locationPinner2"
        options={{
          drawerLabel: "Location Pinner2",
          headerShown: false,
          title: "Location Pinner2",
        }}
      />
      <Drawer.Screen //DELETE LATER
        name="screens/timelineDetail0"
        options={{
          drawerLabel: "Weather Timeline 1",
          header: () => <Header />,
          headerShown: false,
          title: "Timeline",
        }}
      />

      <Drawer.Screen //DELETE LATER
        name="screens/timelineDetail1"
        options={{
          drawerLabel: "Weather Timeline 1",
          header: () => <Header />,
          headerShown: false,
          title: "Timeline",
          // drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen //DELETE LATER
        name="screens/timelineDetail2"
        options={{
          drawerLabel: "Weather Timeline 2",
          header: () => <Header />,
          headerShown: false,
          title: "Timeline",
          // drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen //DELETE LATER
        name="screens/timelineDetail3"
        options={{
          drawerLabel: "Weather Timeline 3",
          header: () => <Header />,
          headerShown: false,
          title: "Timeline",
          // drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen //DELETE LATER
        name="screens/timelineDetail4"
        options={{
          drawerLabel: "Weather Timeline 4",
          header: () => <ExitHeader />,
          headerShown: false,
          title: "Timeline",
          // drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen //DELETE LATER
        name="screens/timelineDetail5"
        options={{
          drawerLabel: "Weather Timeline 5",
          header: () => <ExitHeader />,
          headerShown: false,
          title: "Timeline",
        }}
      />
      <Drawer.Screen //DELETE LATER
        name="screens/timelineDetail6"
        options={{
          drawerLabel: "Weather Timeline 6",
          header: () => <ExitHeader />,
          headerShown: false,
          title: "Timeline",
        }}
      />
      <Drawer.Screen //DELETE LATER
        name="screens/timelineDetail7"
        options={{
          drawerLabel: "Weather Timeline 7",
          header: () => <ExitHeader />,
          headerShown: false,
          title: "Timeline",
        }}
      />
      <Drawer.Screen //DELETE LATER
        name="screens/timelineDetail8"
        options={{
          drawerLabel: "Weather Timeline 8",
          header: () => <ExitHeader />,
          headerShown: false,
          title: "Timeline",
        }}
      />
      <Drawer.Screen //DELETE LATER
        name="screens/timelineDetail9"
        options={{
          drawerLabel: "Weather Timeline 9",
          header: () => <ExitHeader />,
          headerShown: false,
          title: "Timeline",
        }}
      />
      <Drawer.Screen //DELETE LATER
        name="screens/timelineDetail10"
        options={{
          drawerLabel: "Weather Timeline 10",
          header: () => <ExitHeader />,
          headerShown: false,
          title: "Timeline",
        }}
      />
    </Drawer>
  );
}
