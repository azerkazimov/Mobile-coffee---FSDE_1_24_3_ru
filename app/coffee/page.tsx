import CoffeeCard from "@/components/coffee/coffee-card";
import { coffeeData } from "@/data/coffee";
import { Coffee } from "@/types/coffee-data-types";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { FlatList, Pressable, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function CoffeePage() {
  const coffee = coffeeData as Coffee[];
  return (
    <>
    <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={22} color="black" />
        </Pressable>
        <FlatList
          data={coffee}
          renderItem={(item) => {
            return <CoffeeCard coffee={item.item} />;
          }}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap: 10,
  },
});
