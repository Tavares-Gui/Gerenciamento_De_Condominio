import { View, Text, StyleSheet, TextInput, TouchableOpacity, Switch, Button } from "react-native";
import { useState, useContext } from 'react';
import { UtilsContext } from "./config/context"

const styles = StyleSheet.create({
    // General view
    viewClass: 
    {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#003566",
        height: "100%"
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
    
    // General css of inputs and their tittles 
    viewForm: 
    {
        display: "flex",
        justifyContent: "flex-start",
    },
    labelText: 
    {
        paddingLeft: "20%",
        color: "white"
    },
    input: 
    {
        backgroundColor: "white",
        height: 25,
        marginLeft: "20%",
        marginRight: "20%",
        marginBottom: "2%",
        borderRadius: 5
    },
    inputRow: 
    {
        backgroundColor: "white",
        height: 25,
        marginLeft: "20%",
        marginRight: "20%",
        marginBottom: "2%",
        borderRadius: 5
    },

    // Css of the Switch
    viewSwitch:
    {
        paddingLeft: "14%",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row"
    },
    labelTextSwitch: 
    {
        paddingLeft: "3%",
        color: "white"
    },
    
    // Views to aline de inputs
    viewRowUser: {
        display: "inline",
    },
    viewRowApto: {
        display: "inline",
    },
    
    // Buttons to register and cancel
    viewButton: 
    {
        display: "flex",
        justifyContent: "flex-end",
    },
    cadastroButton: {
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

export function Cadastro(props)
{

    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [sexo, setSexo] = useState("")
    const [email, setEmail] = useState("")
    const [cpf, setCpf] = useState("")
    const [apto, setApto] = useState("")
    const [bloco, setBloco] = useState("")
    const [vagas, setVagas] = useState("")
    const [notificacao, setNotificacao] = useState(false)
    const {utils, setUtils} = useContext(UtilsContext)

    const attUser = async() => {
        try {
            const response = await axios("http://localhost:8080/user", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
        }
        catch (error) {
            console.error(error);
        }
    }

    function gotoUsers()
    {
        if(utils.dados)
        {
            setUtils({...utils, dados: [...utils.dados, {
                nome: nome,
                idade: idade,
                sexo: sexo,
                notificacao: notificacao
            }]})
        }
        else
        {
            setUtils({...utils, dados: [{
                nome: nome,
                idade: idade,
                sexo: sexo,
                notificacao: notificacao
            }]}) 
        }

        props.navigation.navigate("Usuarios")
    }

    return(
        <View style = {styles.viewClass}>
            <View style  = {styles.nomeCond}>
                <Text style = {styles.titleText}>Villa Tavares</Text>
            </View>

            <View style  = {styles.nomeTela}>
                <Text style = {styles.titleText}>Cadastro de Usuários</Text>
            </View>

            <View style = {styles.viewForm}>
                <TextInput
                    style = {styles.input}
                    autoComplete = {nome}
                    value = {nome}
                    placeholder = "Nome Completo:"
                    onChangeText = {e => setNome(e)}
                />

                <TextInput 
                    style = {styles.input}
                    autoComplete = {email}
                    value = {email}
                    placeholder = "Email:"
                    onChangeText = {e => setEmail(e)}
                />

                <TextInput
                    style = {styles.input}
                    autoComplete = {cpf}
                    value = {cpf}
                    placeholder = "CPF"
                    onChangeText = {e => setCpf(e)}
                />

                <TextInput
                    style = {styles.inputRow}
                    autoComplete = {idade}
                    value = {idade}
                    placeholder = "Data de Nascimento:"
                    onChangeText = {e => setIdade(e)}
                />

                <TextInput
                    style = {styles.inputRow}
                    autoComplete = {sexo}
                    value = {sexo}
                    onChangeText = {e => setSexo(e)}
                    placeholder = "Sexo:"
                />

                <TextInput
                    style = {styles.inputRow}
                    autoComplete = {apto}
                    value = {apto}
                    placeholder = "Número do Apartamento:"
                    onChangeText = {e => setApto(e)}
                />

                <TextInput
                    style = {styles.inputRow}
                    autoComplete = {bloco}
                    value = {bloco}
                    onChangeText = {e => setBloco(e)}
                    placeholder="Bloco:"
                />

                <TextInput
                    style = {styles.inputRow}
                    autoComplete = {vagas}
                    value = {vagas}
                    onChangeText = {e => setVagas(e)}
                    placeholder="Quantidade de vagas:"   
                />

                <TextInput 
                    style = {styles.input} 
                    secureTextEntry = {true}
                    placeholder="Senha:"    
                />

                <Text style = {styles.labelText}>ADM</Text>
                <View style = {styles.viewSwitch}>
                    <Switch
                        onValueChange = {() => setNotificacao(!notificacao)}
                        value = {notificacao}
                        style = {{marginLeft: "7%"}}
                        trackColor = {{false: "red", true: "green"}}
                        thumbColor = {"white"}
                        activeThumbColor = {"#f4f3f4"}
                    />
                    <Text style = {styles.labelTextSwitch}>{notificacao ? "Sim" : "Não"}</Text>
                </View>
            </View>

            <View style = {styles.viewButton}>
                <TouchableOpacity style={styles.cadastroButton} onPress = {() => gotoUsers()}>
                    <Text style = {styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton} onPress = {() => props.navigation.navigate("TelaPrincipalAdm")}>
                    <Text style = {styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}