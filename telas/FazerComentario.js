import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, TextComponent, TextInput } from "react-native";
import { useState, useContext } from 'react';
import { UtilsContext } from "./config/context"

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

export default function ComentarioUser(props)
{
    const [denuncia, setDenuncia] = useState("");
    const [feedback, setFeedback] = useState("");

    return(
        <View style = {styles.viewClass}>
            <View style  = {styles.nomeCond}>
                <Text style = {styles.titleText}>Villa Tavares</Text>
            </View>

            <View style = {styles.viewForm}>

                <Text style = {styles.labelText}>Denuncia:</Text>
                <TextInput
                    style = {styles.input}
                    autoComplete = {denuncia}
                    value = {denuncia}
                    onChangeText = {e => setDenuncia(e)}
                />

                <Text style = {styles.labelText}>Feedback:</Text>
                <TextInput
                    style = {styles.input}
                    secureTextEntry = {true}
                    value = {feedback}
                    onChangeText = {e => setFeedback(e)}
                />
            </View>

            <View style = {styles.viewButton}>
                <TouchableOpacity style={styles.loginButton} onPress = {() => props.navigation.navigate("TelaPrincipalUser")}>
                    <Text style = {styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton} onPress = {() => props.navigation.navigate("TelaPrincipalUser")}>
                    <Text style = {styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}