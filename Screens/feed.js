import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Button, TextInput } from 'react-native-web';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Feed({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Feed do Marselo</Text>

      <View style={styles.viewing}>
        <Image style={styles.img} source={require('../assets/barbie.jpg')} />
        <AntDesign name="home" size={24} color="white" />
      </View>

      

      <Text style={styles.text}>
        Olá, sou o Marselo, e este é o lugar onde compartilho um pouquinho do meu mundo, minhas ideias e tudo o que me inspira – como a Barbie, que nos ensina a sonhar sem limites! 💖🌟 Aqui você vai encontrar conteúdo sobre [insira o que você faz, como: arte, design, tecnologia, música, viagens, etc.], além de projetos que me movem e experiências que me transformaram ao longo do caminho! 🎨🎶✈️ A Barbie sempre me inspira a explorar novas possibilidades e a criar sem fronteiras, e é exatamente isso que quero dividir com vocês! 🌸✨
        Fique à vontade para explorar, conhecer um pouco mais sobre meu trabalho e se conectar comigo! 💌 Se você tiver alguma dúvida ou quiser conversar sobre os mais diversos universos (porque, como a Barbie, a gente pode ser tudo o que quiser! 😜💅), estou sempre disponível! 🌈💖
        Agradeço de coração por estar por aqui e espero que as minhas ideias façam sentido para você! 💕 Vamos juntos, porque como a Barbie diz, a diversão é garantida quando a gente acredita no nosso potencial! 💫💖 E lembre-se: a vida é mais bonita quando a gente se permite ser quem realmente somos! 🌷💕</Text>

        <Button
        title="Saiba Mais!"
        color="pink" 
      />


      <View style={styles.row}>
        <Image
          style={styles.img}
          source={{
            uri: 'https://i0.wp.com/intertvweb.com.br/wp-content/uploads/2017/09/capa-Authentic-Games.jpg?resize=800%2C445&ssl=1',
          }}
        />
        <Image
          style={styles.img}
          source={{
            uri: 'https://i0.wp.com/intertvweb.com.br/wp-content/uploads/2017/09/capa-Authentic-Games.jpg?resize=800%2C445&ssl=1',
          }}
        />
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
        color="black"
        onPress={() => navigation.navigate('Home')}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF007F',
    padding: 20,
  },
  titulo: {
    textAlign: 'left',
    width: '100%',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  viewing: {
    alignItems: 'center',
    marginBottom: 20,
  },
  img: {
    alignItems: 'flex-start',
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    alignSelf: 'flex-start',
    color: 'white',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  txtinput: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    color: 'white',
    padding: 10,
    marginBottom: 15,
  },
});
