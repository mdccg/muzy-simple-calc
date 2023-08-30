import { useState } from 'react';
import { View } from 'react-native';
import Botao from './../../components/Botao';
import Voltar from './../../components/Voltar';
import { Container, SecaoFormulario, Formulario, Nota, SecaoResultado, TextoResultado, Input, Label } from './styles';

const TmbScreen = ({ navigation }) => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [idade, setIdade] = useState('');
  const [erro, setErro] = useState(false);
  const [mensagem, setMensagem] = useState('');

  const calcular = () => {
    const substituiVirgula = (string = '') => string.replace(/\,/g, '.');
    
    let _peso = Number(substituiVirgula(peso));
    let _altura = Number(substituiVirgula(altura));
    let _idade = Number(idade);

    if (isNaN(_peso) || _peso === 0 || _peso < 0) {
      setMensagem('Informe o peso corretamente.');
      setErro(true);
      return;
    }

    if (isNaN(_altura) || _altura === 0 || _altura < 0) {
      setMensagem('Informe a altura corretamente.');
      setErro(true);
      return;
    }

    if (isNaN(_idade) || _idade === 0 || _idade < 0 || (_idade - Math.floor(_idade) !== 0)) {
      setMensagem('Informe a idade corretamente.');
      setErro(true);
      return;
    }

    const taxa = 88.362 + (13.397 * _peso) + (4.799 * _altura) - (5.677 * _idade);

    setMensagem(`Sua taxa de metabolismo basal é de ${taxa.toLocaleString()} calorias por dia. Uma dica: frango e ovo são alimentos ricos em proteína.`);
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
            marginBottom={0}
          />
          <Nota>Sinta-se à vontade para usar a vírgula ou o ponto como separador da parte fracionária do número.</Nota>

          <Label>Altura (metros):</Label>
          <Input
            keyboardType="numeric"
            placeholder="Informe a sua altura"
            placeholderTextColor="#636e72"
            value={altura}
            onChangeText={setAltura}
          />

          <Label>Idade:</Label>
          <Input
            keyboardType="numeric"
            placeholder="Informe a sua idade"
            placeholderTextColor="#636e72"
            value={idade}
            onChangeText={setIdade}
          />
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

export default TmbScreen;