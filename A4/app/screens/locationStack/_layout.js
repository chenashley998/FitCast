import { Drawer } from "expo-router/drawer";
import { Stack } from "expo-router/stack";
import { Header } from "../../components/header";
// import { ExitHeader } from "./components/header";

import { DrawerToggleButton } from "@react-navigation/drawer";
import { Themes } from "../../../assets/Themes";

export default function LocationLayout() {
  return (
    <Stack
      screenOptions={{
        // ...drawerScreenOptions, // Apply the drawer styling here
        drawerPosition: "right",
        // header: () => <Header />,
        // headerRight: () => <DrawerToggleButton />,
      }}
    >
      <Stack.Screen
        name="../index"
        options={{
          // Hide the header for all other routes.
          headerShown: true,
          title: "HOMEE",
        }}
      />
      <Stack.Screen
        name="./locationModal"
        options={{
          // Set the presentation mode to modal for our modal route.
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
