import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Página de Login</Text>

      <TextInput
        style={styles.txtinput}
        placeholder="Nome"
        placeholderTextColor={'#999'}
      />

      <TextInput
        style={styles.txtinput}
        placeholder="Senha"
        placeholderTextColor={'#999'}
        secureTextEntry={true} 
      />

      <Button
        title="Login"
        color="black"
        onPress={() => navigation.navigate('Home')} 
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
