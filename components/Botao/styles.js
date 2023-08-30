import styled from 'styled-components/native';

export const BotaoContainer = styled.TouchableOpacity`
  margin-top: 8px;
  background-color: transparent;
  border-radius: 4px;
  border-width: 4px;
  justify-content: center;
  align-items: center;
  height: 48px;
  border-color: ${({ borderColor }) => borderColor};
`;

export const Texto = styled.Text`
  font-family: ${({ theme }) => theme.font.black};
  font-size: 14px;
  text-transform: uppercase;
  color: ${({ color }) => color};
`;