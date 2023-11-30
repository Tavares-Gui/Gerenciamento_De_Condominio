import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, TextComponent} from "react-native";
import { useState, useContext } from 'react';
import { UtilsContext } from "./config/context"

const styles = StyleSheet.create({
    // General view
    viewClass: 
    {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#003566",
        height: "100%",
    },

    // Tittle of the project
    nomeCond: {
        backgroundColor: "#FFD60A",
        height: 50,
        display: "flex",
        justifyContent: "center",
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center"
    },

    // Tittle of the screen
    nomeTela: {
        marginLeft: 40,
        marginRight: 40,
        backgroundColor: "#FFD60A",
        height: 50,
        display: "flex",
        justifyContent: "center",
    },

    // View that contains the infos and infos style
    viewInfos: {
        borderColor: "#FFD60A",
        borderWidth: 2,
        marginLeft: 20,
        marginRight: 20,
    },
    infosText: {
        margin: 5,
        color: "white"
    },

    // Button "Voltar" style
    viewButton: 
    {
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: 100
    },
    voltarButton: {
        backgroundColor: "#FFD60A",
        height: 50,
        display: "flex",
        justifyContent: "center",
        marginHorizontal: "30%",
        borderRadius: 5,
    },
    buttonText: {
        textAlign: "center",
        fontSize: 30
    },
});

export default function ComentarioAdm(props)
{
    const {utils, setUtils} = useContext(UtilsContext)

    return(
        <View style = {styles.viewClass}>
            <View style  = {styles.nomeTela}>
                <Text style = {styles.titleText}>Feedbacks e Denúncias</Text>
            </View>

            <View style = {styles.viewInfos}>
                
            </View>

            <View style = {styles.viewButton}>
                <TouchableOpacity style={styles.voltarButton} onPress = {() => props.navigation.navigate("TelaPrincipalAdm")}>
                    <Text style = {styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}