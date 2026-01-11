import CoffeeCard from "@/components/coffee/coffee-card";
import { coffeeData } from "@/data/coffee";
import { useTheme } from "@/hooks/use-theme";
import { FlatList, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const { colorScheme } = useTheme();
  return (
    <>
      <StatusBar
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
      />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={coffeeData}
          renderItem={({ item }) => <CoffeeCard coffee={item} />}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  listContainer: {
    padding: 10,
  },
});
