import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "./Header";
import CurrentCryptoCall from "./CryptoAPICall";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: 'white'
    },
  });
  

const MainScreen = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Header />
      <CurrentCryptoCall />
    </View>
  );
};

export default MainScreen;