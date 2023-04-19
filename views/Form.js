import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, Text, View, Switch, SafeAreaView, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { Pressable } from 'react-native';


export default function Form(props) {
  const [selectedSexo, setSelectedSexo] = useState('');
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState(0);
  const [limite, setLimite] = useState(0);
  const [mensagem, setMensagem] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);



  const clear = () => {
    setNome('');
    setIdade(0);
    setSelectedSexo('');
    setLimite(0);
    setIsEnabled(false);
  }

  const verificaCampos = () => {
    if (nome === '' || idade === 0 || selectedSexo === '' || limite === 0) return false;
    return true;
  }

  const handleSubmit = () => {

    if (!verificaCampos()) {
      return setMensagem('Preencha os Campos')
    }
    
    setMensagem('');
    const data = {
      nome,
      idade,
      sexo: selectedSexo,
      limite,
      estudante: isEnabled
    }


    props.navigation.navigate('Details', data);
    clear();

  };



  const formatarLimite = (limite) => {
    return limite.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />


      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require('./../assets/bb.png')}

        />
        <Text style={styles.title}>Banco de Ian Jairo</Text>
        {
          mensagem !== '' ? <Text style={{ color: 'red' }}>{mensagem}</Text>
          : null
        }
     


      </View>

      <View style={styles.form}>
        <Text style={{ color: '#0077b6' }}>Nome:</Text>
        <TextInput style={styles.input} onChangeText={setNome} value={nome} placeholder="Digite seu nome" />


        <Text style={{ color: '#0077b6' }}>Idade:</Text>
        <TextInput style={styles.input} keyboardType='numeric' onChangeText={setIdade} value={idade} placeholder="Digite sua idade" />

        <Text style={{ color: '#0077b6' }}>Sexo:</Text>

        <Picker
          selectedValue={selectedSexo}
          onValueChange={(itemValue, itemIndex) => setSelectedSexo(itemValue)}>
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Feminino" value="Feminino" />
        </Picker>

        <Text style={{ color: '#0077b6' }}>Límite de crédito: {formatarLimite(limite)}</Text>

        <Slider style={{ marginBottom: 20 }}
          onValueChange={(value) => setLimite(value)}
          minimumValue={0}
          step={1}
          value={limite}
          maximumValue={2000}
          minimumTrackTintColor="#0077b6"
          maximumTrackTintColor="#90e0ef"
        />

        <View style={styles.toggle}>
          <Text style={{ color: '#0077b6' }}>Estudante:</Text>
          <Switch
            trackColor={{ true: '#caf0f8' }}
            thumbColor={isEnabled ? '#0077b6' : '#0077b6'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        <Pressable onPress={handleSubmit} style={styles.button}>
          <Text style={styles.textButton}>Enviar</Text>
        </Pressable>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },

  form: {
    padding: 20
  },

  header: {
    alignContent: 'center',
    alignItems: 'center',
    padding: 20
  },

  image: {
    width: 300, height: 100,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0077b6'
  },

  toggle: {
    flexDirection: "row", justifyContent: 'space-between',
    marginBottom: 50
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#0077b6',
  },

  textButton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  input: {
    marginBottom: 10
  }
});
