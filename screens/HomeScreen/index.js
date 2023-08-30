import React from 'react';
import { Botoes, Container, MuzyLindo, Subtitulo, Titulo, Titulos } from './styles';
import Botao from '../../components/Botao';

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <Titulos>
        <Titulo>Sua saúde, nossa satisfação</Titulo>
        <Subtitulo>Saiba o quanto você precisa comer e o quanto você já ganhou (ou perdeu…)</Subtitulo>
      </Titulos>

      <MuzyLindo source={require('./../../assets/muzy-lindo.gif')} />

      <Botoes>
        <Botao onPress={() => navigation.navigate('TmbScreen')} backgroundColor="#2ECC71">
          Taxa de metabolismo basal
        </Botao>

        <Botao onPress={() => navigation.navigate('CaloriasScreen')} backgroundColor="#E74C3C">
          Taxa de calorias queimadas
        </Botao>
      </Botoes>
    </Container>
  );
}

export default HomeScreen;