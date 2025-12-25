import { Image } from "expo-image";
import { Link } from "expo-router";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal={false}>
        <Image
          source={require("@/assets/images/cup.png")}
          style={{ width: 160, height: 160, resizeMode: "contain" }}
        />
        <Image
          source={{
            uri: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg?quality=90&resize=500,454",
          }}
          style={{ width: 160, height: 160, resizeMode: "contain" }}
        />
        <Image
          source={{
            uri: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg?quality=90&resize=500,454",
          }}
          style={{ width: 160, height: 160, resizeMode: "contain" }}
        />
        <Image
          source={{
            uri: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg?quality=90&resize=500,454",
          }}
          style={{ width: 160, height: 160, resizeMode: "cover" }}
        />
        <Image
          source={{
            uri: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg?quality=90&resize=500,454",
          }}
          style={{ width: 160, height: 160, resizeMode: "contain" }}
        />
        <Image
          source={{
            uri: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg?quality=90&resize=500,454",
          }}
          style={{ width: 160, height: 160, resizeMode: "contain" }}
        />
        <Image
          source={{
            uri: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg?quality=90&resize=500,454",
          }}
          style={{ width: 160, height: 160, resizeMode: "contain" }}
        />
        <Image
          source={{
            uri: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg?quality=90&resize=500,454",
          }}
          style={{ width: 160, height: 160, resizeMode: "contain" }}
        />
        <Image
          source={{
            uri: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg?quality=90&resize=500,454",
          }}
          style={{ width: 160, height: 160, resizeMode: "contain" }}
        />
        <Image
          source={{
            uri: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg?quality=90&resize=500,454",
          }}
          style={{ width: 160, height: 160, resizeMode: "contain" }}
        />
        <Image
          source={{
            uri: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg?quality=90&resize=500,454",
          }}
          style={{ width: 160, height: 160, resizeMode: "contain" }}
        />
      </ScrollView>

      <View style={{ gap: 10, width: "100%" }}>
        <TextInput
          style={styles.formContainer}
          onChangeText={(text) => console.log(text)}
          placeholder="Enter your name"
        />
        <TextInput
            style={styles.formContainer}
          onChangeText={(text) => console.log(text)}
          placeholder="Enter your email address"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.formContainer}
          onChangeText={(text) => console.log(text)}
          placeholder="Enter your password"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.formContainer}
          onChangeText={(text) => console.log(text)}
          placeholder="Enter your number"
          keyboardType="numeric"
          maxLength={10}
        />
        <Pressable
          onPress={() => console.log("Submit")}
          style={styles.button}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            Submit
          </Text>
        </Pressable>
      </View>

      {/* h1, h2, h3, h4, h5, h6, p, span */}
      <Text
        style={{
          fontSize: 26,
          fontWeight: "bold",
          color: Platform.OS === "ios" ? "blue" : "green",
        }}
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        hello world in green and bold and number of lines 1 and ellipsize mode
        tail
      </Text>
      {/* <a href="/contact/page">Go to Contact Page</a>  => <Link/>*/}
      <Link href="/contact/page">Go to Contact Page</Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  formContainer: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
  },
  button:{
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  }
});
