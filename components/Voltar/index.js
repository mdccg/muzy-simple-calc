import React from 'react';
import FlechaEsquerdaIcone from './../icons/FlechaEsquerda';
import { Hitbox, VoltarContainer } from './styles';

const iconSize = 24;

const Voltar = ({ goBack }) => {
  return (
    <VoltarContainer>
      <Hitbox onPress={goBack}>
        <FlechaEsquerdaIcone width={iconSize} height={iconSize} color="red" />
      </Hitbox>
    </VoltarContainer>
  );
}

export default Voltar;