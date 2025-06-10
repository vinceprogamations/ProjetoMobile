import { StyleSheet } from "react-native";
import { useState, useEffect} from "react";
import { View , Text,  FlatList, Image} from "react-native-web";
import CardProduct from "./cardProduct";
import { db } from "../controller";
import {collection, getDocs} from "firebase/firestore";
import { useCarrinho } from "../CarrinhoProvider";
import Carrinho from "./Carrinho";

export default function Product( navigation ){      

    const [produtos, setProdutos] = useState([  // [] de array {} de dicionario
    ]);
    const {adicionarProduto} = useCarrinho()

    useEffect(() =>{
        async function carregarProdutos() {
            try {
                const querySnapshot = await getDocs(collection(db, 'produtos'));
                const list = [];
                querySnapshot.forEach((doc) => {
                    list.push({id:doc.id, ...doc.data()});
                });

                setProdutos(list); 
            }  catch(error){
                 console.log('erro ao buscar o produto', error);
            }

        }
            carregarProdutos();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Product</Text>
            <FlatList
                data={produtos}
                renderItem={({ item }) => (
                    <CardProduct
                    id = {item.id}
                    nome = {item.nome}
                    valor = {item.valor}
                    imagem = {item.imagem}  
                    comprar={() => {
                        adicionarProduto(item)
                        navigation.navigate('Carrinho')
                    }}  
                    />
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',},
    txt:{
        fontSize: 30,
        },
    cardText:{
        fontSize: 18,
    },
    image:{
        width: 100,
        height: 100,
        marginBottom: 10,
        borderRadius: 8,
}
})