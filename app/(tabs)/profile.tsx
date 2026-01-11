import Button from "@/components/ui/button";
import { layoutTheme } from "@/constant/theme";
import { useTheme } from "@/hooks/use-theme";
import { ThemeType } from "@/types/theme-types";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

export default function Profile() {
  const router = useRouter();
  const { colorScheme } = useTheme();
  const styles = getStyles(colorScheme);

  const { width } = useWindowDimensions();

  if (Platform.OS === "ios") {
    console.log("ios");
  } else {
    console.log("android");
  }

  const handleLogout = () => {
    AsyncStorage.removeItem("isLoggedIn");
    router.push("/signin/page");
  };

  return (
    <>
      <StatusBar
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
      />
      <View style={{...styles.container, width: width}}>
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.text}>Welcome to your profile page!</Text>
        <Button onPress={handleLogout} style={styles.logoutButton}>
          <Text>Logout</Text>
        </Button>
      </View>
    </>
  );
}

const getStyles = (colorSchema: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      height: "50%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:
        Platform.OS === "ios"
          ? colorSchema === "dark"
            ? layoutTheme.colors.primary[700]
            : layoutTheme.colors.background.white
          : colorSchema === "dark"
          ? layoutTheme.colors.secondary[700]
          : layoutTheme.colors.background.white,
      padding: 20,
    },
    boxContainer: {
      width: "100%",
      height: 100,
      borderWidth: 1,
      borderColor:
        colorSchema === "dark"
          ? layoutTheme.colors.secondary[500]
          : layoutTheme.colors.background.white,
      backgroundColor:
        colorSchema === "dark"
          ? layoutTheme.colors.primary[900]
          : layoutTheme.colors.background.white,
    },

    title: {
      fontSize: 32,
      fontWeight: "bold",
      fontFamily: layoutTheme.fonts.sora.bold,
      marginBottom: 10,
      color:
        colorSchema === "light"
          ? layoutTheme.colors.text.primary
          : layoutTheme.colors.text.inverse,
    },
    text: {
      fontSize: 16,
      fontFamily: layoutTheme.fonts.sora.regular,
      color:
        colorSchema === "light"
          ? layoutTheme.colors.text.primary
          : layoutTheme.colors.text.tertiary,
      marginBottom: 50,
    },
    logoutButton: {
      paddingHorizontal: 20,
    },
  });
