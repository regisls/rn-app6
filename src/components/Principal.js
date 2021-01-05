import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableHighlight} from 'react-native';
import {Actions} from 'react-native-router-flux';

const logo = require('../imgs/logo.png');
const btnJogar = require('../imgs/botao_jogar.png');
const btnSobre = require('../imgs/sobre_jogo.png');
const btnOutrosJogos = require('../imgs/outros_jogos.png');

class Principal extends Component {
  render() {
    return (
      <View style={styles.cenaPrincipal}>
        <View style={styles.apresentacaoJogo}>
          <Image source={logo} />
          <TouchableHighlight
            onPress={() => {
              Actions.resultado();
            }}>
            <Image source={btnJogar} />
          </TouchableHighlight>
        </View>
        <View style={styles.rodape}>
          <TouchableHighlight
            onPress={() => {
              Actions.sobre();
            }}>
            <Image source={btnSobre} />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              Actions.outrosjogos();
            }}>
            <Image source={btnOutrosJogos} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cenaPrincipal: {
    flex: 1,
    backgroundColor: '#61bd8c',
  },
  apresentacaoJogo: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rodape: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Principal;
