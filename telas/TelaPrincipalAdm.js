import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, TextComponent, Image} from "react-native";
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
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: "center"
    },

    // Logo style
    viewImage: {
        display: "flex",
        alignItems: "center"
    },
    minhaLogo: {
        width: 150,
        height: 150,
    },

    // Main view of the screen
    mainView: {
        marginLeft: 20,
        marginRight: 20,
    },

    // Style of the buttons and their texts
    atividadesButton: {
        marginBottom: 20,
        backgroundColor: "#FFD60A",
        height: 50,
        display: "flex",
        justifyContent: "center",
        borderRadius: 5,
    },

    buttonText: {
        textAlign: "center",
        fontSize: 20
    },
});

export default function TelaAdm(props)
{
    const {utils, setUtils} = useContext(UtilsContext)

    return(
        <View style = {styles.viewClass}>
            <View style  = {styles.nomeCond}>
                <Text style = {styles.titleText}>Villa Tavares</Text>
            </View>

            <View style = {styles.viewImage}>
                <Image
                    style={styles.minhaLogo}
                    source={require('../img/logo.png')}
                />
            </View>

            <View style = {styles.mainView}>
                <TouchableOpacity style={styles.atividadesButton} onPress = {() => gotoUsers()}>
                    <Text style = {styles.buttonText}>Informações Gerais</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.atividadesButton} onPress = {() => props.navigation.navigate("Cadastro")}>
                    <Text style = {styles.buttonText}>Cadastrar Morador</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.atividadesButton} onPress = {() => gotoUsers()}>
                    <Text style = {styles.buttonText}>Criar Assembleia</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.atividadesButton} onPress = {() => gotoUsers()}>
                    <Text style = {styles.buttonText}>Criar Eleição</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.atividadesButton} onPress = {() => gotoUsers()}>
                    <Text style = {styles.buttonText}>Histórico de Atividades</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.atividadesButton} onPress = {() => props.navigation.navigate("LerComentario")}>
                    <Text style = {styles.buttonText}>Ler Feedbacks e Denúncias</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}