import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';

class SobreJogo extends Component {
  render() {
    return <Text style={styles.configCena}>Informações sobre o jogo</Text>;
  }
}

const styles = StyleSheet.create({
  configCena: {
    flex: 1,
    backgroundColor: '#61bd8c',
  },
});

export default SobreJogo;
