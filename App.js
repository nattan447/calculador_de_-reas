import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Button,
} from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {
  const [figure, setFigure] = useState('');
  const [altura, setAltura] = useState(undefined);
  const [base, setBase] = useState(undefined);
  const [raio, setRaio] = useState(undefined);
  const handlefigure = (txt) => {
    setFigure(txt);
  };

  const calcular = () => {
     if(altura==undefined && figure=="triangulo" || base==undefined && figure=="triangulo"){
      alert("campos base e altura obrigatórios nessa figura")
    }
  else  if (figure == 'triangulo') {
      alert((base * altura) / 2);
    }
    if(base==undefined && figure=="quadrado"){
      alert("campo  base obrigatório nessa figura")
    }
     else if (figure == 'quadrado') {
      alert(base * base);
    }  if(raio==undefined && figure=="circulo"){
      alert("campo  raio obrigatório nessa figura")
    } 
    
    
     else if (figure == 'circulo' && raio!=undefined) {
      alert(Math.PI.toFixed(2) * (raio * raio))};
  
    
  };

  return (
    <SafeAreaView style={styles.container}>
    <Text style={{marginTop:30,fontSize:40,color:"red",fontWeight:"bold"}}>calculo de area </Text>
      <View style={styles.viewinput}>
        <TextInput
          value={figure}
          onChangeText={handlefigure}
          placeholder="figura plana ex. circulo,quadrado,triangulo"
          style={styles.input}></TextInput>
        <TextInput
          keyboardType="numeric"
          onChangeText={(alt) => setAltura(alt)}
          placeholder="digite a altura da figura "
          style={styles.input}></TextInput>
        <TextInput
          keyboardType="numeric"
          onChangeText={(bas) => setBase(bas)}
          placeholder="digite a base da figura"
          style={styles.input}></TextInput>
        <TextInput
          keyboardType="numeric"
          onChangeText={(r) => setRaio(r)}
          placeholder="digite o raio da figura (se possuir)"
          style={styles.input}></TextInput>
      
      </View>
      <Button onPress={calcular} title="calcular"></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  input: {
    backgroundColor: 'white',
    width: 300,
    borderRadius: 6,
    height: 40,
    paddingLeft: 10,
    margin: 10,
  },
  viewinput: {
    marginTop: 100,
  },
});
