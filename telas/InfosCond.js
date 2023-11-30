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

export default function InformacoesCond(props)
{
    const {utils, setUtils} = useContext(UtilsContext)

    return(
        <View style = {styles.viewClass}>
            <View style  = {styles.nomeTela}>
                <Text style = {styles.titleText}>Informações do Condomínio</Text>
            </View>

            <View style = {styles.viewInfos}>
                <Text style = {styles.infosText}>Quantidade de blocos: 4</Text>
                <Text style = {styles.infosText}>Vagas disponíveis por apartamento: 1</Text>
                <Text style = {styles.infosText}>Mensalidade do condomínio: R$200,00</Text>
                <Text style = {styles.infosText}>Quantidade total de apartamentos: 100</Text>
                <Text style = {styles.infosText}>Quantidade de apartamentos disponíveis:*A FAZER*</Text>
            </View>

            <View style = {styles.viewButton}>
                <TouchableOpacity style={styles.voltarButton} onPress = {() => props.navigation.navigate("TelaPrincipalUser")}>
                    <Text style = {styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}