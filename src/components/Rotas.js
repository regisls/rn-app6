import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';

import Principal from './components/Principal';
import SobreJogo from './components/SobreJogo';
import OutrosJogos from './components/OutroJogo';
import Resultado from './components/Resultado';

const Rotas = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene
          key="principal"
          component={Principal}
          title="Cara ou Coroa"
          initial
        />
        <Scene key="sobre" component={SobreJogo} title="Sobre o jogo" />
        <Scene key="outrosjogos" component={OutrosJogos} title="Outros Jogos" />
        <Scene key="resultado" component={Resultado} title="Resultado" />
      </Stack>
    </Router>
  );
};

export default Rotas;
