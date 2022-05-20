import styled from "styled-components/native";

interface MyProps {
  color: string;
}

export const Container = styled.TouchableOpacity`
  background-color: ${(props: MyProps) => props.color};
  border-radius: 10px;

  width: 300px;
  height: 55px;

  elevation: 5px;

  margin-bottom: 15px;

  align-items: center;
  justify-content: center;
`;
export const Label = styled.Text`
  font-family: "Outfit_700Bold";
  font-size: 22px;
  color: #fff;
`;
