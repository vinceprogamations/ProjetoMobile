import { StyleSheet } from "react-native";
import { useState } from "react";
import { View , Text, FlatList, Image} from "react-native-web";
import CardProduct from "./cardProduct";

export default function Product(){      

    const [produtos, setProdutos] = useState([  // [] de array {} de dicionario
        { id: 1, nome: 'Acido De Bateria', valor: 200.50, imagem:'https://down-br.img.susercontent.com/file/88194ed1e44b512ad8999ba6128b441f'},
        { id: 2, nome: 'Naftalina Liquida', valor: 150.75, imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZckxzJL_1am9Tk8HBPJqU7DgJPI11vHjDA&s'},
        { id: 3, nome: 'Cloro pra piscina', valor: 180.20, imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG3XgcR_l6Da-zlMNRP9VUDcKihopxzqCugA&s'},
        { id: 4, nome: 'Sabonete Facial', valor: 220.40, imagem:'data:image/jpeg;base64,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'},
      
    ]);
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Produtos de Skin Care</Text>
            <FlatList
                data={produtos}
                renderItem={({ item }) => (
                    <CardProduct
                    id = {item.id}
                    nome = {item.nome}
                    valor = {item.valor}
                    imagem = {item.imagem}  
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