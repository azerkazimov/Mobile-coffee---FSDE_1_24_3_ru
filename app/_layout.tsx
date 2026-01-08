import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="index" 
        options={{ 
          title: "Welcome", 
          headerShown: false 
        }} 
      />
      <Stack.Screen 
        name="(tabs)" 
        options={{ 
          headerShown: false 
        }} 
      />
      <Stack.Screen 
        name="contact/page" 
        options={{ 
          title: "Contact", 
          headerShown: true 
        }} 
      />
      <Stack.Screen 
        name="coffee/page" 
        options={{ 
          title: "Coffee Details", 
          headerShown: false 
        }} 
      />
      <Stack.Screen 
        name="signin/page" 
        options={{ 
          title: "Sign In", 
          headerShown: false 
        }} 
      />
    </Stack>
  );
}
