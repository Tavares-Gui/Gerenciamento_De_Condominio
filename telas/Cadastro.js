import { View, Text, StyleSheet, TextInput, TouchableOpacity, Switch, Button } from "react-native";
import { useState, useContext } from 'react';
import { UtilsContext } from "./config/context"

const styles = StyleSheet.create({
    viewClass: 
    {
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
    viewForm: 
    {
        display: "flex",
        justifyContent: "flex-start",
    },
    viewButton: 
    {
        display: "flex",
        justifyContent: "flex-end",
    },
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
    cadastroButton: {
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

            <View style = {styles.viewForm}>
                <Text style = {styles.labelText}>Nome Completo:</Text>
                <TextInput
                    style = {styles.input}
                    autoComplete = {nome}
                    value = {nome}
                    onChangeText = {e => setNome(e)}
                />

                <Text style = {styles.labelText}>Email:</Text>
                <TextInput 
                    style = {styles.input}
                    autoComplete = {email}
                    value = {email}
                    onChangeText = {e => setEmail(e)}
                />

                <Text style = {styles.labelText}>CPF:</Text>
                <TextInput
                    style = {styles.input}
                    autoComplete = {cpf}
                    value = {cpf}
                    onChangeText = {e => setCpf(e)}
                />


                <View style = {styles.viewRowUser}>
                    <Text style = {styles.labelText}>Data de Nascimento:</Text>
                    <TextInput
                        style = {styles.input}
                        autoComplete = {idade}
                        value = {idade}
                        onChangeText = {e => setIdade(e)}
                    />

                    <Text style = {styles.labelText}>Sexo:</Text>
                    <TextInput
                        style = {styles.input}
                        autoComplete = {sexo}
                        value = {sexo}
                        onChangeText = {e => setSexo(e)}
                    />
                </View>

                <View style = {styles.viewRowApto}>
                    <Text style = {styles.labelText}>Número do Apartamento:</Text>
                    <TextInput
                        style = {styles.input}
                        autoComplete = {apto}
                        value = {apto}
                        onChangeText = {e => setApto(e)}
                    />

                    <Text style = {styles.labelText}>Bloco:</Text>
                    <TextInput
                        style = {styles.input}
                        autoComplete = {bloco}
                        value = {bloco}
                        onChangeText = {e => setBloco(e)}
                    />

                    <Text style = {styles.labelText}>Quantidade de vagas:</Text>
                    <TextInput
                        style = {styles.input}
                        autoComplete = {vagas}
                        value = {vagas}
                        onChangeText = {e => setVagas(e)}
                    />
                </View>


                <Text style = {styles.labelText}>Senha:</Text>
                <TextInput style = {styles.input} secureTextEntry = {true}/>

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

            {/* <View style = {styles.viewButton}>
                <TouchableOpacity style={styles.CadastroButton} onPress = {() => gotoUsers()}>
                    <Text style = {styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton} onPress = {() => props.navigation.navigate("Login")}>
                    <Text style = {styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
            </View> */}
        </View>
    )
}