import React from "react";
import { View, Image, Text, Button, StyleSheet } from "react-native";
import image from "../components/balloon.png";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "serif",
    backgroundColor: "white",
  },
  heading: {
    fontSize: "50px",
    fontFamily: "serif",
    padding: 5,
  },
  tagline: {
    padding: 5,
    paddingBottom: 15,
    fontFamily: "serif",
    fontSize: "25px",
  },
  button: {
    margin: 5,
    padding: 15,
    color: "#FFB201",
  },
});

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={{ height: 300, width: 90 }} />
      <Text style={styles.heading}>Helium</Text>
      <Text style={styles.tagline}>A cryptocurrency tracker.</Text>

      <Button
        title="take a look"
        onPress={() => navigation.navigate("MainScreen")}
        color="#FFB201"
        style={styles.button}
      >
      </Button>
    </View>
  );
};

export default Home;