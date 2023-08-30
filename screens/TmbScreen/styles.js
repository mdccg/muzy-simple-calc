import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: white;
  flex: 1;
`;

export const Formulario = styled.View`
  margin-right: 16px;
  margin-left: 16px;
  margin-bottom: 16px;
  justify-content: space-between;
  flex: 1;
`;

export const SecaoFormulario = styled.View``;

export const Label = styled.Text`
  font-size: 16px;
  margin-bottom: 8px;
`;

export const Input = styled.TextInput`
  border-width: 1px;
  padding: 16px;
  border-radius: 4px;
  border-color: #2d3436;
  font-size: 16px;
  margin-bottom: ${({ marginBottom }) => (marginBottom === 0 ? 0 : '24px')};
`;

export const Nota = styled.Text`
  margin-top: 8px;
  margin-bottom: 24px;
  line-height: 20px;
  font-size: 12px;
  color: #2d3436;
`;

export const SecaoResultado = styled.View`
  justify-content: space-between;
  flex: 1;
`;

export const TextoResultado = styled.Text`
  font-size: 14px;
  text-align: center;
  color: ${({ erro }) => (erro ? 'red' : 'black')};
`;