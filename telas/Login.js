import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useState } from 'react';

const styles = StyleSheet.create({
    viewClass: {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#003566",
        height: "100%"
    },
    nomeCond: {
        backgroundColor: "#FFD60A",
        height: 50,
        display: "flex",
        justifyContent: "center",
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: "center"
    },
    labelText: {
        paddingLeft: "20%",
        color: "white"
    },
    input: {
        backgroundColor: "white",
        height: 25,
        marginLeft: "20%",
        marginRight: "20%",
        borderRadius: 5
    },
    viewForm: {
        display: "flex",
        justifyContent: "flex-start",
    },
    viewButton: {
        display: "flex",
        justifyContent: "flex-end",
    },
    loginButton: {
        backgroundColor: "#FFD60A",
        height: 50,
        display: "flex",
        justifyContent: "center",
        marginHorizontal: "30%",
        borderRadius: 5,
        marginBottom: 50
    },
    buttonText: {
        textAlign: "center",
        fontSize: 30
    },
});

export function Login(props)
{
    const [cpf, setCPF] = useState("");
    const [senha, setSenha] = useState("");

    return(
        <View style = {styles.viewClass}>
            <View style  = {styles.nomeCond}>
                <Text style = {styles.titleText}>Villa Tavares</Text>
            </View>

            <View style = {styles.viewForm}>

                <Text style = {styles.labelText}>CPF:</Text>
                <TextInput
                    style = {styles.input}
                    autoComplete = {cpf}
                    value = {cpf}
                    onChangeText = {e => setCPF(e)}
                />

                <Text style = {styles.labelText}>Senha:</Text>
                <TextInput
                    style = {styles.input}
                    secureTextEntry = {true}
                    value = {senha}
                    onChangeText = {e => setSenha(e)}
                />
            </View>

            <View style = {styles.viewButton}>
                <TouchableOpacity style={styles.loginButton} onPress = {() => props.navigation.navigate("Usuarios")}>
                    <Text style = {styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}