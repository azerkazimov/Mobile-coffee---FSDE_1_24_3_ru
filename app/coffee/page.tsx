import CoffeeCard from "@/components/coffee/coffee-card";
import { coffeeData } from "@/data/coffee";
import { FlatList, StyleSheet, View } from "react-native";

export default function CoffeePage() {
  return (
    <View style={styles.container}>
      <FlatList
        data={coffeeData}
        renderItem={({ item }) => <CoffeeCard coffee={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
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

