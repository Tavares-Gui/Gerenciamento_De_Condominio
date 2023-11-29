import { View, Text, StyleSheet, TextInput, TouchableOpacity, Switch, Button } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import { UtilsContext } from "./config/context"
import { useState, useContext } from 'react';
import axios from 'axios';

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
    dropDown: {
        backgroundColor: "white",
        height: 25,
        width: 225,
        marginLeft: "20%",
        marginRight: "20%",
        marginBottom: "2%",
        borderRadius: 5,
        borderColor: "white"
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
    const [password, setPassword] = useState("")
    const [vagas, setVagas] = useState(null)
    const [adm, setAdm] = useState(false)
    const {utils, setUtils} = useContext(UtilsContext)
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        {label: 1, value: 1},
    ]);
    
    const cadastro = async(nome, idade, sexo, cpf, bloco, apto, email, password, adm, vaga) => {
        try {
            const response = await axios.post("http://localhost:8080/user", {nome, cpf, idade, sexo, vagas, bloco, apto, email, password, adm})
            console.log(response)
        }
        catch (error) {
            console.error(error);
        }
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
                    autoComplete = {idade}
                    value = {idade}
                    placeholder = "Data de Nascimento:"
                    onChangeText = {e => setIdade(e)}
                />

                <TextInput
                    style = {styles.input}
                    autoComplete = {sexo}
                    value = {sexo}
                    onChangeText = {e => setSexo(e)}
                    placeholder = "Sexo:"
                />

                <TextInput
                    style = {styles.input}
                    autoComplete = {cpf}
                    value = {cpf}
                    placeholder = "CPF"
                    onChangeText = {e => setCpf(e)}
                />

                <TextInput
                    style = {styles.input}
                    autoComplete = {bloco}
                    value = {bloco}
                    onChangeText = {e => setBloco(e)}
                    placeholder="Bloco:"
                />

                <TextInput
                    style = {styles.input}
                    autoComplete = {apto}
                    value = {apto}
                    placeholder = "Número do Apartamento:"
                    onChangeText = {e => setApto(e)}
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
                    autoComplete = {password}
                    value = {password}
                    placeholder = "Senha:"
                    onChangeText = {e => setPassword(e)}
                />

                <Text style = {styles.labelText}>ADM</Text>
                <View style = {styles.viewSwitch}>
                    <Switch
                        onValueChange = {() => setAdm(!adm)}
                        value = {adm}
                        style = {{marginLeft: "7%"}}
                        trackColor = {{false: "red", true: "green"}}
                        thumbColor = {"white"}
                        activeThumbColor = {"#f4f3f4"}
                    />
                    <Text style = {styles.labelTextSwitch}>{adm ? "Sim" : "Não"}</Text>
                </View>

                <DropDownPicker
                    style = {styles.dropDown}
                    open={open}
                    value={vagas}
                    items={items}
                    setOpen={setOpen}
                    setItems={setItems}
                    setValue={setVagas}
                    placeholder="Quantidade de vagas:"
                    onChangeText = {e => setVagas(e)}
                />
            </View>

            <View style = {styles.viewButton}>
                <TouchableOpacity style={styles.cadastroButton} onPress = {() => cadastro(nome, cpf, idade, sexo, vagas, bloco, apto, email, password, adm)}>
                    <Text style = {styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton} onPress = {() => props.navigation.navigate("TelaPrincipalAdm")}>
                    <Text style = {styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}