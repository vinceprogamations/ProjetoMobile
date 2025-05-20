import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from "../controller";

export default function Cadastrar({ navigation }) {

    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");
    const [imagem, setImagem] = useState("");

    const CadastrarProduto = async () => {
      try {
        await addDoc(collection(db, 'produtos'), {
          nome,
          valor: parseFloat(valor),
          imagem
          
        });
        setNome();
        setValor();
        setImagem();
      }
      catch {
        console.log('erro ao cadastrar produto' , error)
      }
    }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro de Produto</Text>

      <TextInput
        style={styles.txtinput}
        placeholder="Nome:"
        placeholderTextColor={'#999'}
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.txtinput}
        placeholder="Valor:"
        placeholderTextColor={'#999'}
        value={valor}
        onChangeText={setValor}
      />

      <TextInput
        style={styles.txtinput}
        placeholder="Imagem:"
        placeholderTextColor={'#999'}
        value={imagem}
        onChangeText={setImagem}
      />

      <View style={styles.buttonContainer}>
        <Button
          title="Cadastrar Produto"
          color="black"
          onPress={CadastrarProduto}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',   
    alignItems: 'center',       
    backgroundColor: '#FCF5E5',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 60,
  },
  txtinput: {
    width: '40%',               
    height: 40,
    borderWidth: 1,
    borderColor: '#fff',
    color: 'white',
    paddingHorizontal: 10,
    marginBottom: 15,
    borderRadius: 20,
    backgroundColor: 'black',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '40%',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom:15,    // necessário para arredondar corretamente o botão
  },
});
