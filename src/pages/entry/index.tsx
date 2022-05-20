import React from "react";
import {StatusBar} from "expo-status-bar";

/* Styled Components */
import {
  Container,
  WrapText,
  Title,
  Text,
  WrapInput,
  Email,
  Password,
  Help,
  WrapButton,
  LoginMedia,
  SocialMedia,
  WrapSign,
  Bar,
  TextSign,
  Circle,
} from "./styled";

/* Components */
import { SignIn, SignUp } from "../../components/button";

/* SVG */
import Google from "../../assets/icons/google.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Apple from "../../assets/icons/apple.svg";

const Entry = () => {
  return (
    <Container>
      <StatusBar style='dark'/>
      <WrapText>
        <Title>Welcome Back</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam maecenas
          mi non sed ut odio. Non, justo, sed facilisi et.
        </Text>
      </WrapText>

      <WrapInput>
        <Email />
        <Password />
        <Help>Forgot Password ?</Help>
      </WrapInput>

      <WrapButton>
        <SignIn />
        <SignUp />
      </WrapButton>

      <LoginMedia>
        <WrapSign>
          <Bar />
          <TextSign>Or Sign Up With</TextSign>
          <Bar />
        </WrapSign>
        <SocialMedia>
          <Circle>
            <Google width={35} height={35} />
          </Circle>
          <Circle>
            <Facebook width={35} height={35} />
          </Circle>
          <Circle>
            <Apple width={35} height={35} />
          </Circle>
        </SocialMedia>
      </LoginMedia>
    </Container>
  );
};

export default Entry;
