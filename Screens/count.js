import { View, Text, Button, StyleSheet } from "react-native-web";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

export default function Count(){
    
    const [contador, setContador] = useState(0)

    function Aumentar(){
        setContador(contador+1)
    }
    function Diminuir(){
        if (contador > 0){
        setContador(contador-1)
        }
    }
    
    return(
        <View style={styles.container}>
            <Text styles={styles.title}>Meu contador</Text>
            <Text styles={styles.txt}> {contador} </Text>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={Aumentar}> + </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={Diminuir}> - </TouchableOpacity>
            
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'center'
    },
    title:{
        fontSize: 100,
        color:'#FF007F'
    },
    txt:{
        fontSize: 15,
        alignItems:'center',
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        gap: '10'
    }
});