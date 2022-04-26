import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";

/* SVG */
import Google from "../../assets/google.svg";
import Facebook from "../../assets/facebook.svg";
import Apple from "../../assets/apple.svg";

const SignIn = ({ navigation }: any) => {
  return (
    <View>
      <View style={styles.containerWelcome}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.text}>
          Seja bem vindo a nossa página de login, seu Feedback ajuda muito. Caso
          haja algum erro, comunique conósco.
        </Text>
      </View>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholder="Username, Email or Phone Number"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          keyboardType="default"
        />
        <Text style={styles.textForg}>Forgot Password ?</Text>
      </View>

      <View style={styles.containerBtn}>
        <Pressable style={styles.btnSignIn}>
          <Text style={styles.btnText}>Sign In</Text>
        </Pressable>
        <Pressable style={styles.btnSignUp}>
          <Text style={styles.btnText}>Sign Up</Text>
        </Pressable>
      </View>

      <View>
        <View style={styles.containerBar}>
          <View style={styles.bar} />
          <Text style={styles.textSign}>Or Sign Up With</Text>
          <View style={styles.bar} />
        </View>
        <View style={styles.socialMedia}>
          <Google style={styles.logo} width={40} height={40} />
          <Facebook style={styles.logo} width={40} height={40} />
          <Apple width={40} height={40} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#464444",
    fontSize: 26,
    textAlign: "center",
    marginBottom: 2,
  },
  text: {
    textAlign: "center",
  },
  containerBtn: {
    alignItems: "center",
    height: "35%",
  },
  btnSignIn: {
    backgroundColor: "#F89AEE",
    width: "80%",
    height: "30%",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  btnSignUp: {
    backgroundColor: "#878086",
    width: "80%",
    height: "30%",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  btnText: {
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#f8f8f8",
  },
  containerWelcome: {
    margin: 10,
  },
  containerInput: {
    alignItems: "center",
    height: 200,
  },
  input: {
    backgroundColor: "#E2DEE1",
    color: "#000",
    width: 300,
    height: 60,
    marginTop: 20,
    borderRadius: 10,
    paddingLeft: 10,
  },
  textForg: {
    padding: 12,
    color: "#767275",
    width: "100%",
    textAlign: "right",
    paddingRight: 60,
  },
  socialMedia: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
  },
  logo: {
    marginRight: 20,
  },
  containerBar: {
    textAlign: "center",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  bar: {
    width: "10%",
    height: 5,
    backgroundColor: "#F89AEE",
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 0,
    borderRadius: 10,
  },
  textSign: {
    textAlign: "center",
    fontSize: 13,
    fontWeight: "bold",
  },
});

export default SignIn;
