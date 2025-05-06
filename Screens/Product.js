import { StyleSheet } from "react-native";
import { useState } from "react";
import { View , Text, FlatList, Image} from "react-native-web";

export default function Product(){      

    const [produtos, setProdutos] = useState([  // [] de array {} de dicionario
        { id: 1, nome: 'Notebook', valor: 200.50, imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGWSjNaA32j96ex_Uum8plIQSYtgYQwWUHtw&s'},
        { id: 2, nome: 'Cadeira', valor: 150.75, imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGWSjNaA32j96ex_Uum8plIQSYtgYQwWUHtw&s'},
        { id: 3, nome: 'Smartphone', valor: 180.20, imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGWSjNaA32j96ex_Uum8plIQSYtgYQwWUHtw&s'},
        { id: 4, nome: 'Mesa', valor: 220.40, imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGWSjNaA32j96ex_Uum8plIQSYtgYQwWUHtw&s'},
        { id: 5, nome: 'Cafeteira', valor: 130.10, imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGWSjNaA32j96ex_Uum8plIQSYtgYQwWUHtw&s'},
        { id: 6, nome: 'Televisão', valor: 250.60, imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGWSjNaA32j96ex_Uum8plIQSYtgYQwWUHtw&s'},
        { id: 7, nome: 'Fritadeira', valor: 170.90, imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGWSjNaA32j96ex_Uum8plIQSYtgYQwWUHtw&s'},
        { id: 8, nome: 'Geladeira', valor: 200.00, imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGWSjNaA32j96ex_Uum8plIQSYtgYQwWUHtw&s'},
        { id: 9, nome: 'Micro-ondas', valor: 210.30, imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGWSjNaA32j96ex_Uum8plIQSYtgYQwWUHtw&s'},
        { id: 10, nome: 'Lâmpada', valor: 180.50, imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGWSjNaA32j96ex_Uum8plIQSYtgYQwWUHtw&s'},
    ]);
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Product</Text>
            <FlatList
                data={produtos}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.cardText}>ID: {item.id}</Text>
                        <Text style={styles.cardText}>{item.nome} - R$ {item.valor.toFixed(2)}</Text>
                        <Image source={{ uri:item.imagem }} style={styles.image} />
                    </View>
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
    card:{
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        width: 300,
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