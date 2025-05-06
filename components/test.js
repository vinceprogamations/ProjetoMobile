import { View, Text, StyleSheet, Image } from 'react-native';
import { Button, TextInput } from 'react-native-web';

export default function Test() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tenho duas imagens</Text>
      
      <View style={styles.viewing}>
        <Image style={styles.img} source={require('../assets/roblox.jpg')} />
      </View>

      <Text style={styles.text}>Tenho duas imagens</Text>

      <View style={styles.row}>
        <Image style={styles.img} source={{ uri: "https://i0.wp.com/intertvweb.com.br/wp-content/uploads/2017/09/capa-Authentic-Games.jpg?resize=800%2C445&ssl=1" }} />
        <Image style={styles.img} source={{ uri: "https://i0.wp.com/intertvweb.com.br/wp-content/uploads/2017/09/capa-Authentic-Games.jpg?resize=800%2C445&ssl=1" }} />
      </View>

    <TextInput
      style={styles.txtinput}
      placeholder="Nome"
      placeholderTextColor={'white'}
    />

    <TextInput
    style={styles.txtinput}
      placeholder="Mensagem"
      placeholderTextColor={'white'}

    />





    <Button
        title="Enviar"
        color='black'
    />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#970700', 
    padding: 20,
  },
  titulo: {
    textAlign: 'left',
    width: '100%',
  },
  viewing: {
    alignItems: 'flex-end',
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 5,
    padding: 20,
  },
  text: {
    fontSize: 20,
    alignSelf: 'flex-end',
    color: 'black', 
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  txtinput: {
    borderWidth: 1,
  }
});
