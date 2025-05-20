import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../controller';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Register({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");


  const RegistroUsuario  = () => {
            createUserWithEmailAndPassword(auth, email, senha)
  .then((userCredential) => {
    console.log('usuario cadastrado!',userCredential.user.email);
    navigation.navigate('TelaLogin');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
        }
  
    return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Página de Cadastro</Text>


      <TextInput
        style={styles.txtinput}
        placeholder="Nome:"
        placeholderTextColor={'#999'}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.txtinput}
        placeholder="Senha:"
        placeholderTextColor={'#999'}
        secureTextEntry={true} 
        value={senha}
        onChangeText={setSenha}
      />

      <Button
        title="Cadastrar"
        color="black"
        onPress={RegistroUsuario} 
      />

    <Button
        title="Voltar para login"
        color="black"
        onPress={() => navigation.navigate('TelaLogin')} 
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    backgroundColor: 'green',
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
