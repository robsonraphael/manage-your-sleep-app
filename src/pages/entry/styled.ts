import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;

  background-color: #fff;

  width: 100%;
  height: 100%;
`;
export const WrapText = styled.View`
  align-items: center;

  width: 100%;
  height: 90px;

  margin-top: 45px;
`;
export const WrapLogin = styled.View``;
export const WrapButton = styled.View``;
export const WrapInput = styled.View`
  align-items: center;

  width: 80%;
  height: 200px;

  padding: 10px;

  margin-top: 20px;
`;
export const WrapSign = styled.View`
  padding: 10px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const LoginMedia = styled.View``;
export const SocialMedia = styled.View`
  width: 200px;

  margin-top: 10px;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  align-self: center;
`;
export const Bar = styled.View`
  width: 50px;
  height: 5px;

  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
`;

export const Title = styled.Text`
  font-family: "Outfit_700Bold";
  font-size: 30px;
  color: #464444;

  margin-bottom: 6px;
`;
export const Text = styled.Text`
  font-family: "Outfit_300Light";
  font-size: 13px;
  color: black;
  text-align: center;

  width: 307px;
`;
export const Help = styled.Text`
  font-family: "Outfit_500Medium";
  font-size: 15px;
  color: #2d2626;
  align-self: flex-end;
  margin-right: 10px;
`;

export const TextSign = styled.Text`
  font-family: "Outfit_500Medium";
  font-size: 12px;
  color: #101010;
  padding-left: 6px;
  padding-right: 6px;
`;

export const Email = styled.TextInput.attrs({
  placeholder: "Username, Email & Phone Number",
  placeholderTextColor: "#666161",
})`
  font-family: "Outfit_500Medium";
  font-size: 15px;

  border-radius: 10px;

  width: 300px;
  height: 55px;

  padding: 10px;

  background-color: #f3f3f3;
  margin-bottom: 10px;

  elevation: 5px;
`;
export const Password = styled.TextInput.attrs({
  placeholder: "Password",
  placeholderTextColor: "#666161",
  secureTextEntry: true,
})`
  font-family: "Outfit_500Medium";
  font-size: 15px;

  border-radius: 10px;

  width: 300px;
  height: 55px;

  padding: 10px;

  background-color: #f3f3f3;
  margin-bottom: 10px;

  elevation: 5px;
`;
export const Circle = styled.Pressable`
  width: 50px;
  height: 50px;

  border-radius: 25px;
  background-color: #ece9ec;

  align-items: center;
  justify-content: center;
`;
