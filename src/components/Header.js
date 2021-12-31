import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={headerContainer}>
      <Text style={header}> Helium</Text>
      <Text style={tag}>Todays breakdown:</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    marginTop: 25,
    alignItems: "center",
    paddingBottom: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
  },
  
});

const { headerContainer, header, tag } = styles;

export default Header;