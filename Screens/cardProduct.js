import {View, Text, Image, StyleSheet} from 'react-native';

export default function CardProduct({id,nome,valor,imagem}){
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={{uri:imagem }}></Image>
            <Text style={styles.txtItem}>
                {nome} R$ - {valor.toFixed(2)}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',},
    txt:{
        fontSize: 30,
        },
    card:{
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        width: 300,
    },
    txtItem:{
        fontSize: 18,
    },
    image:{
        width: 100,
        height: 100,
        marginBottom: 10,
        borderRadius: 8,
}
})