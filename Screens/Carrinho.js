import { View , Text , FlatList, Image , StyleSheet} from 'react-native';
import { useCarrinho } from '../CarrinhoProvider';

export default function Carrinho(){      
    const { carrinho } = useCarrinho();


    return (
        <View style={styles.container}>
            <Text style={styles.txt}> Carrinho </Text>
            <FlatList
            data={carrinho}
            renderItem={({item}) => (
            <View style={styles.card}>
                <Image style={styles.img} source={{uri: item.imagem}}/>
                <Text style={styles.txtprod}>{item.nome} </Text>
                <Text style={styles.txtprod}> R$ {item.valor}</Text>
            </View>
            )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
        backgroundColor: '#f5f5f5',
    },
    txt: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    img: {
        width: 100,
        height: 100,
        marginBottom: 10,
        borderRadius: 8,
    },
    txtprod: {
        fontSize: 18,
        marginVertical: 2,
    },
});