import { Coffee } from "@/types/coffee-data-types";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CoffeeCard({ coffee }: { coffee: Coffee }) {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text>
          <Ionicons name="star" size={16} color="orange" />
          {coffee.rating}
        </Text>
        <Image source={{ uri: coffee.image }} style={styles.image} />
        <Text style={styles.title}>{coffee.title}</Text>
        <Text style={styles.description}>{coffee.description}</Text>
        <Text style={styles.price}>$ {coffee.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
  },
  cardContainer: {
    gap: 10,
  },
  image: {
    height: 200,
    resizeMode: "cover",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 10,
    color: "gray",
  }
  ,
  price: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "flex-end",
  },
});
