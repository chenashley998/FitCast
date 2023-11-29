import { Drawer } from "expo-router/drawer";
import { Header } from "./components/header";
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function Layout() {
  return (
    <Drawer
      screenOptions={{
        // headerShown: true,
        drawerPosition: "right",
        header: () => <Header />,
        headerRight: () => <DrawerToggleButton />,
      }}
    >
      <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Home",
          headerShown: true,
          header: () => <Header />,
          title: "Home",
        }}
      />
      <Drawer.Screen
        name="screens/weatherLog" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Weather Log",
          headerShown: false,
          header: () => <Header />,
          title: "Weather Log",
        }}
      />
      <Drawer.Screen
        name="screens/timeline" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Weather Timeline",
          headerShown: false,
          title: "overview",
        }}
      />
      <Drawer.Screen
        name="screens/locationPinner" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Location Pinner",
          headerShown: false,
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
