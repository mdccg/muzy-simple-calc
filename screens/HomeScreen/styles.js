import styled from 'styled-components/native';
import Botao from '../../components/Botao';

export const Container = styled.View`
  background-color: #fff;
  padding: 24px;
  padding-top: 64px;
  flex: 1;
  justify-content: space-between;
`;

export const Titulos = styled.View``;

export const Titulo = styled.Text`
  font-family: ${({ theme }) => theme.font.black};
  font-size: 32px;
`;

export const Subtitulo = styled.Text`
  font-size: 16px;
  margin-top: 12px;
  line-height: 28px;
`;

export const MuzyLindo = styled.Image`
  width: 256px;
  height: 256px;
  align-self: center;
`;

MuzyLindo.defaultProps = {
  style: {
    resizeMode: 'contain',
  }
};

export const Botoes = styled.View``;