import { Drawer } from "expo-router/drawer";
import { Stack } from "expo-router/stack";
import { Header } from "./components/header";
import { ExitHeader } from "./components/exitHeader";

import { DrawerToggleButton } from "@react-navigation/drawer";
import { Themes } from "../assets/Themes";

export default function Layout() {
  // Define the drawer styling within screenOptions
  const drawerScreenOptions = {
    drawerActiveTintColor: Themes.colors.logoYellow,
    drawerInactiveTintColor: "#fff",
    drawerItemStyle: { marginVertical: 5 },
    drawerLabelStyle: {
      fontSize: 18,
    },
    drawerContentStyle: {
      backgroundColor: Themes.colors.logoGreen,
    },
  };

  return (
    <Drawer
      screenOptions={{
        ...drawerScreenOptions,
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
          drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen
        name="screens/timeline"
        options={{
          drawerLabel: "FitCast Timeline",
          header: () => <Header />,
          headerShown: false,
          title: "FitCast Timeline",
        }}
      />
      <Drawer.Screen
        name="screens/locationPinner"
        options={{
          drawerLabel: "Location Log",
          headerShown: false,
          title: "Location Pinner",
        }}
      />
      <Drawer.Screen
        name="screens/weatherLog"
        options={{
          // presentation: "modal",
          drawerLabel: "Suggestions Log",
          headerShown: false,
          header: () => <Header />,
          title: "Suggestions Log",
        }}
      />
      <Drawer.Screen
        name="screens/timelineDetail0"
        options={{
          drawerLabel: "Weather Timeline 1",
          header: () => <Header />,
          headerShown: false,
          title: "Timeline",
          drawerItemStyle: { height: 0 },
        }}
      />

      <Drawer.Screen
        name="screens/timelineDetail1"
        options={{
          drawerLabel: "Weather Timeline 1",
          header: () => <Header />,
          headerShown: false,
          title: "Timeline",
          drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen
        name="screens/timelineDetail2"
        options={{
          drawerLabel: "Weather Timeline 2",
          header: () => <Header />,
          headerShown: false,
          title: "Timeline",
          drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen
        name="screens/timelineDetail3"
        options={{
          drawerLabel: "Weather Timeline 3",
          header: () => <Header />,
          headerShown: false,
          title: "Timeline",
          drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen
        name="screens/timelineDetail4"
        options={{
          drawerLabel: "Weather Timeline 4",
          header: () => <ExitHeader />,
          headerShown: false,
          title: "Timeline",
          drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen
        name="screens/timelineDetail5"
        options={{
          drawerLabel: "Weather Timeline 5",
          header: () => <ExitHeader />,
          headerShown: false,
          title: "Timeline",
          drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen
        name="screens/timelineDetail6"
        options={{
          drawerLabel: "Weather Timeline 6",
          header: () => <ExitHeader />,
          headerShown: false,
          title: "Timeline",
          drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen
        name="screens/timelineDetail7"
        options={{
          drawerLabel: "Weather Timeline 7",
          header: () => <ExitHeader />,
          headerShown: false,
          title: "Timeline",
          drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen
        name="screens/timelineDetail8"
        options={{
          drawerLabel: "Weather Timeline 8",
          header: () => <ExitHeader />,
          headerShown: false,
          title: "Timeline",
          drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen
        name="screens/timelineDetail9"
        options={{
          drawerLabel: "Weather Timeline 9",
          header: () => <ExitHeader />,
          headerShown: false,
          title: "Timeline",
          drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen
        name="screens/timelineDetail10"
        options={{
          drawerLabel: "Weather Timeline 10",
          header: () => <ExitHeader />,
          headerShown: false,
          title: "Timeline",
          drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen
        name="components/backHeader"
        options={{
          headerShown: false,
          drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen
        name="components/exitHeader"
        options={{
          headerShown: false,
          drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen
        name="components/header"
        options={{
          headerShown: false,
          drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen
        name="components/locationClothingItem"
        options={{
          headerShown: false,
          drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen
        name="components/timelineDetailComp"
        options={{
          headerShown: false,
          drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen
        name="screens/modals/locationModal"
        options={{
          headerShown: false,
          drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen
        name="screens/modals/logModal"
        options={{
          headerShown: false,
          drawerItemStyle: { height: 0 },
        }}
      />
      <Drawer.Screen
        name="screens/modals/smartModal"
        options={{
          headerShown: false,
          drawerItemStyle: { height: 0 },
        }}
      />
    </Drawer>
  );
}
