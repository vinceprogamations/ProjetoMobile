import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import {auth} from '../controller';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login({ navigation }) {
  
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const VerificaUser = () => {
    signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
    navigation.navigate('Home')
  
    // 
  })
  .catch((error) => {
      console.log('Erro ao fazer login. ',error.message);
  });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Página de Login</Text>

      <TextInput
        style={styles.txtinput}
        placeholder="Nome"
        placeholderTextColor={'#999'}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.txtinput}
        placeholder="Senha"
        placeholderTextColor={'#999'}
        value={senha}
        onChangeText={setSenha}
      />

      <Button
        title="Login"
        color="black"
        onPress={VerificaUser}
      />

      <Button
        title="Cadastrar"
        color="black"
        onPress={() => navigation.navigate('TelaCadastro')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    backgroundColor: '#970700',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  txtinput: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    color: 'white',
    padding: 10,
    marginBottom: 15,
  },
});
