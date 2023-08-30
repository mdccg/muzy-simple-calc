import { useState } from 'react';
import { View } from 'react-native';
import Botao from './../../components/Botao';
import Voltar from './../../components/Voltar';
import { Container, Formulario, Label, Nota, SecaoFormulario, SecaoResultado, Input, TextoResultado } from './styles';

const CaloriasScreen = ({ navigation }) => {
  const [peso, setPeso] = useState('');
  const [duracao, setDuracao] = useState('');
  const [gastoPorMinuto, setGastoPorMinuto] = useState('5');
  const [erro, setErro] = useState(false);
  const [mensagem, setMensagem] = useState('');

  const calcular = () => {
    const substituiVirgula = (string = '') => string.replace(/\,/g, '.');
    
    let _peso = Number(substituiVirgula(peso));
    let _duracao = Number(substituiVirgula(duracao));
    let _gastoPorMinuto = Number(substituiVirgula(gastoPorMinuto));

    if (isNaN(_peso) || _peso === 0 || _peso < 0) {
      setMensagem('Informe o peso corretamente.');
      setErro(true);
      return;
    }

    if (isNaN(_duracao) || _duracao === 0 || _duracao < 0) {
      setMensagem('Informe a duração corretamente.');
      setErro(true);
      return;
    }

    if (isNaN(_gastoPorMinuto) || _gastoPorMinuto === 0 || _gastoPorMinuto < 0) {
      setMensagem('Informe o gasto corretamente.');
      setErro(true);
      return;
    }

    const calorias = _gastoPorMinuto * _duracao * _peso;

    setMensagem(`Parabéns pelo seu progresso! Dessa vez, você conseguiu queimar ${calorias.toLocaleString()} calorias. Não desista do seu objetivo.`);
    setErro(false);
  }

  return (
    <Container>
      <Voltar goBack={navigation.goBack} />

      <Formulario>
        <SecaoFormulario>
          <Label>Peso (kg):</Label>
          <Input
            keyboardType="numeric"
            placeholder="Informe o seu peso"
            placeholderTextColor="#636e72"
            value={peso}
            onChangeText={setPeso}
          />

          <Label>Duração da caminhada (minutos):</Label>
          <Input
            keyboardType="numeric"
            placeholder="Informe a duração da caminhada"
            placeholderTextColor="#636e72"
            value={duracao}
            onChangeText={setDuracao}
          />

          <Label>Gasto calórico por minuto:</Label>
          <Input
            keyboardType="numeric"
            placeholder="5"
            placeholderTextColor="#636e72"
            value={gastoPorMinuto}
            onChangeText={setGastoPorMinuto}
            marginBottom={0}
          />
          <Nota marginBottom={0}>
            Este é o valor estimado para uma caminhada moderada. Altere-o de acordo com a intensidade da atividade física.
          </Nota>
        </SecaoFormulario>

        <SecaoResultado>
          <View />
          <TextoResultado erro={erro}>{mensagem}</TextoResultado>
          <Botao onPress={calcular} backgroundColor="#0984e3">
            Calcular
          </Botao>
        </SecaoResultado>
      </Formulario>
    </Container>
  );
}

export default CaloriasScreen;