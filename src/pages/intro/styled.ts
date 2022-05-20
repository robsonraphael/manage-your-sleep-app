import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;

  background-color: #f89aee;
`;
export const WrapImage = styled.View`
  align-items: center;
  height: 420px;
`;
export const WrapText = styled.View`
  background-color: rgba(255, 255, 255, 0.8);

  align-items: center;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;

  position: absolute;
  bottom: 0;

  width: 100%;
  height: 370px;

  elevation: 1px;
`;
export const Text = styled.Text`
  text-align: left;
  font-family: "Roboto_400Regular";
  font-size: 14px;
  color: rgba(0, 0, 0, 0.7);

  width: 350px;
  margin-top: 7px;
`;
export const Title = styled.Text`
  font-size: 30px;
  font-family: "Roboto_700Bold";
  color: rgba(0, 0, 0, 0.9);
  text-align: center;

  width: 300px;
  margin-top: 10px;
  margin-bottom: 5px;
`;
export const Button = styled.Pressable`
  width: 250px;
  height: 50px;

  border-radius: 12px;

  align-items: center;
  justify-content: center;

  background-color: #f89aee;

  position: relative;
  top: 25%;

  elevation: 2px;
`;

export const TextBtn = styled.Text`
  font-family: "Roboto_700Bold";
  font-size: 20px;
  color: #fff;
  width: 90px;
`;

export const Hero = {
  right: 30,
  bottom: 75,
};
