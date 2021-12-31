import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import axios from "axios";

const apikey = { key: "API_KEY" };
const apiBaseUrl = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${apikey.key}`;

const styles = StyleSheet.create({
  cointainer: {
    backgroundColor: "white",
    padding: '5%'
  },
  card: {
    padding: 15,
    margin: 10,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    width: 300,
  },
  price: {
    alignItems: "center",
    padding: 10,
  },
  change: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 15,
  },
});

const CurrentCryptoCall = () => {
  const [display, setDisplay] = useState(true);
  const [result, setResult] = useState();

  // API call
  useEffect(() => {
    axios
      .get(apiBaseUrl)
      .then((response) => {
        console.log(response.data.data);
        setResult(response.data.data.splice(0, 15));
        setDisplay(false);
      })
      .catch((err) => {
        setResult("Oh no! Our table.... its bROkeN");
      });
  }, []);

  return (
    <ScrollView style={styles.cointainer}>
      {display ||
        result.map((coin) => {
          return (
            <View key={coin.id} style={styles.card}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: 5,
                }}
              >
                <Text>{coin.cmc_rank}.</Text>
                <Text style={{ fontWeight: "bold", fontSize: '15px' }}>{coin.name}</Text>
                <Text>{coin.symbol}</Text>
              </View>
              {/* Price */}
              <View style={styles.price}>
                <Text style={{ fontSize: "20px" }}>
                  {" "}
                  ${Math.round(coin.quote.USD.price).toLocaleString()}
                </Text>
              </View>
              {/* Percent change 25hr and 7days */}
              <View style={styles.change}>
                <Text
                  style={{
                    color:
                      coin.quote.USD.percent_change_24h >= 0 ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {Math.round(
                    coin.quote.USD.percent_change_24h
                  ).toLocaleString()}
                  % 24hr
                </Text>
                <Text
                  style={{
                    color:
                      coin.quote.USD.percent_change_7d >= 0 ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {Math.round(
                    coin.quote.USD.percent_change_7d
                  ).toLocaleString()}
                  % 7d
                </Text>
              </View>
            </View>
          );
        })}
    </ScrollView>
  );
};

export default CurrentCryptoCall;