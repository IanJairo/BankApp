import { StyleSheet, View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

export default function Details({ route }) {
  const dados = route.params;
  const formatarLimite = (limite) => {
    return limite.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.titulo}>Dados do cliente</Text>

      <View style={styles.linha} >
        <Text style={styles.label}>Nome: </Text>
        <Text style={styles.text}>{dados.nome}</Text>
      </View>

      <View style={styles.linha} >
        <Text style={styles.label}>Idade: </Text>
        <Text style={styles.text}>{dados.idade} {dados.idade > 1? 'anos' : 'ano'}</Text>
      </View>

      <View style={styles.linha} >
        <Text style={styles.label}>Sexo: </Text>
        <Text style={styles.text}>{dados.sexo}</Text>
      </View>

      <View style={styles.linha} >
        <Text style={styles.label}>Limite: </Text>

        <Text style={styles.text}>{formatarLimite(dados.limite)}</Text>
      </View>

      <View style={styles.linha} >
        <Text style={styles.label}>Estudante: </Text>
        <Text style={styles.text}>{dados.estudante ? 'Sim' : 'Não'}</Text>
      </View>


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 20,
    color: '#0077b6',
  },

  text: {
    paddingTop: 2,
  },

  label: {
    color: '#0077b6',
  },

  linha: {

    paddingBottom: 10,
  }

});  
