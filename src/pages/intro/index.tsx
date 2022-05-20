import React from "react";
import { StatusBar } from "expo-status-bar";

/* Styled Components */
import {
  Container,
  WrapImage,
  WrapText,
  Button,
  Title,
  Text,
  Hero,
  TextBtn,
} from "./styled";

/* SVG */
import Sally from "../../assets/icons/sally.svg";

export default function Intro({ navigation }: any) {
  return (
    <Container>
      <StatusBar style="light" />
      <WrapImage>
        <Sally width={550} height={550} style={Hero} />
      </WrapImage>
      <WrapText>
        <Title>Manage your sleep With Confort</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam maecenas
          mi non sed ut odio. Non, justo, sed facilisi et. Eget viverra urna,
          vestibulum egestas faucibus egestas. Sagittis nam velit volutpat eu
          nunc.
        </Text>
        <Button onPress={() => navigation.navigate("Entry")}>
          <TextBtn>Continue</TextBtn>
        </Button>
      </WrapText>
    </Container>
  );
}
