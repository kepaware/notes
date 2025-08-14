import { AuthProvider } from "@/contexts/AuthContext";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <AuthProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#ff8c00",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
          },
          contentStyle: {
            paddingHorizontal: 10,
            paddingTop: 10,
            backgroundColor: "fff",
          },
        }}
      >
        {/* Main Page: */}
        <Stack.Screen name="index" options={{ title: "Home" }} />

        {/* SubPages: */}
        <Stack.Screen name="notes" options={{ headerTitle: "Notes" }} />
      </Stack>
    </AuthProvider>
  );
};

export default RootLayout;
