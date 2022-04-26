import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";

/* SVG */
import Sally from "../../assets/sally.svg";

export default function Intro({navigation} : any) {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View>
        <Sally width={420} height={420} style={styles.heroSVG}/>
      </View>
      <View style={styles.containerText}>
        <Text style={styles.title}>Compartilhe suas Habilidades Junto à comunidade</Text>
        <Text style={styles.text}>
          Compartilhe suas Habilidades junto a milhares de pessoas em todo o mundo, crie laços com pessoas do mesmo interesse. Transforme a vida de alguem ao redor do Mundo.
        </Text>
        <Pressable style={styles.btn} onPress={() => navigation.navigate('signIn')}>
          <Text style={styles.btnText}>Continue</Text>
        </Pressable>
      </View>
    </View>
  );
}

/* Styles */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F89AEE",
  },
  title: {
    fontSize: 20,
    width: 300,
    textAlign: "center",
    color: "#464444",
    fontWeight: "bold",
    padding: 10,
  },
  heroSVG: {
    position: "relative",
    right: 80,
    bottom: 65,
  },
  containerText: {
    alignItems: "center",
    backgroundColor: "#F8f8f8",
    borderTopLeftRadius: 30,
    borderTopEndRadius: 30,
    position: "absolute",
    height: '50%',
    width: '100%',
    bottom: 0,
  },
  text: {
    textAlign: "center",
    fontSize: 14,
    padding: 5,
  },
  btn: {
    backgroundColor: "#F89AEE",
    width: "70%",
    height: "15%",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    position: 'relative',
    top: 45,
  },
  btnText: {
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#f8f8f8",
  },
});
