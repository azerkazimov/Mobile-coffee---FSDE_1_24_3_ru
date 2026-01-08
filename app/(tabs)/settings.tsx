import { layoutTheme } from "@/constant/theme";
import { useTheme } from "@/hooks/use-theme";
import { ThemeType } from "@/types/theme-types";
import { StyleSheet, Text, View } from "react-native";

export default function Settings() {
  const { colorScheme } = useTheme();
  const styles = getStyles(colorScheme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.text}>Configure your app settings here.</Text>
    </View>
  );
}

const getStyles = (colorSchema: ThemeType) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:
        colorSchema === "dark"
          ? layoutTheme.colors.primary[700]
          : layoutTheme.colors.background.white,
      padding: 20,
    },
    title: {
      fontSize: 32,
      fontWeight: "bold",
      marginBottom: 10,
      color:
        colorSchema === "light"
          ? layoutTheme.colors.text.primary
          : layoutTheme.colors.text.inverse,
    },
    text: {
      fontSize: 16,
      color:
        colorSchema === "light"
          ? layoutTheme.colors.text.primary
          : layoutTheme.colors.text.tertiary,
    },
  });
