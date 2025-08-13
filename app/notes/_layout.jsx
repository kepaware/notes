import { Stack } from "expo-router";

const NoteLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name="notes" options={{ title: "Notes" }} /> */}
    </Stack>
  );
};

export default NoteLayout;
