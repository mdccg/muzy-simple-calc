import React from 'react';
import { Texto, BotaoContainer } from './styles';

const Botao = ({ children, onPress, backgroundColor }) => (
  <BotaoContainer onPress={onPress} borderColor={backgroundColor}>
    <Texto color={backgroundColor}>{children}</Texto>
  </BotaoContainer>
);

export default Botao;