import { sora_font } from "@/constant/sora";

import { useLayoutFonts } from "@/hooks/use-fonts";
import { Stack } from "expo-router";
import { Text } from "react-native";

export default function LayoutContent() {
  const { loaded, error } = useLayoutFonts(sora_font);
  if (!loaded) {
    return null;
  }
  if (error) {
    return <Text>Error loading fonts</Text>;
  }

  
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          title: "Welcome",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="contact/page"
        options={{
          title: "Contact",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="coffee/page"
        options={{
          title: "Coffee Details",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signin/page"
        options={{
          title: "Sign In",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
