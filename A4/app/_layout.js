import { Drawer } from "expo-router/drawer";
// import { Header } from "./components/header";
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function Layout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerPosition: "right",
        // header: () => <Header />,
        headerRight: () => <DrawerToggleButton />,
      }}
    >
      <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Home",
          headerShown: true,
          title: "Home",
        }}
      />
      <Drawer.Screen
        name="screens/weatherLog" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Weather Log",
          headerShown: true,
          title: "Weather Log",
        }}
      />
      <Drawer.Screen
        name="screens/timeline" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Weather Timeline",
          headerShown: true,
          title: "overview",
        }}
      />
      <Drawer.Screen
        name="screens/locationPinner" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Location Pinner",
          headerShown: true,
          title: "Location Pinner",
        }}
      />
    </Drawer>
  );
}

//Stack
// import { Stack } from "expo-router";

// export default function Layout() {
//   return <Stack />;
// }
