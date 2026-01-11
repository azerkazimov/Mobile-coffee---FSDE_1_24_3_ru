import { Coffee } from "@/types/coffee-data-types";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Button from "../ui/button";
import useCount from "@/store/use-count";
import { useEffect, useState } from "react";

export default function CoffeeCard({ coffee }: { coffee: Coffee }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const { increment, decrement, reset, count } = useCount();
  return (
    <View style={styles.container}>
      {isLoading ? <Text>Loading...</Text> : ""}
      <View style={styles.cardContainer}>
        <Text>
          <Ionicons name="star" size={16} color="orange" />
          {coffee.rating}
        </Text>
        <Image source={{ uri: coffee.image }} style={styles.image} />
        <Text style={styles.title}>{coffee.title}</Text>
        <Text style={styles.description}>{coffee.description}</Text>
        <Text style={styles.price}>$ {coffee.price}</Text>
        <View style={styles.buttonContainer}>
          <Button onPress={() => decrement()} style={styles.button}>-</Button>
          <Text>Count: {count}</Text>
          <Button onPress={() => increment()} style={styles.button}>+</Button>
        </View>
        <Button onPress={() => reset()}>Reset</Button>
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
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "flex-end",
  },
  button: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gray",
    flexDirection: "row",
    gap: 10,
  },
  buttonContainer: {

    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
});
