import { View, Text, StyleSheet } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>tenho os dois componentes</Text>
    </View>
  );
}

export function Gallery(){
    return(
        <View style={styles.containerGallery}>
            <Text>Essa é minha galeria!</Text>
        </View>
    )
}

export function Artist(){
    return(
        <View style={styles.containerArtist}>
            <Text>Esses sao meus artistas</Text>
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  containerArtist:{
    flex: 2,
    backgroundColor:'red'
  },
  containerGallery:{
    flex: 3,
    backgroundColor:'white'
  }
});
