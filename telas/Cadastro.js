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
    nameCond: {
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
    nameTela: {
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

    const [name, setName] = useState("")
    const [birthday, setBirthday] = useState("")
    const [sex, setSex] = useState("")
    const [cpf, setCpf] = useState("")
    const [bloco, setBloco] = useState("")
    const [apto, setApto] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [adm, setAdm] = useState(false)
    const [vagas, setVagas] = useState(null)
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        {label: 1, value: 1},
    ]);
    const {utils, setUtils} = useContext(UtilsContext)
    
    const cadastro = async(name, birthday, sex, cpf, bloco, apto, email, password, adm, vagas) => {
        try {
            const response = await axios.post("http://localhost:8080/user", {name, birthday, sex, cpf, bloco, apto, email, password, adm, vagas})
            console.log(response)
        }
        catch (error) {
            console.error(error);
        }
    }

    return(
        <View style = {styles.viewClass}>
            <View style  = {styles.nameTela}>
                <Text style = {styles.titleText}>Cadastro de Usuários</Text>
            </View>

            <View style = {styles.viewForm}>
                <TextInput
                    style = {styles.input}
                    autoComplete = {name}
                    value = {name}
                    placeholder = "Nome Completo:"
                    onChangeText = {e => setName(e)}
                />

                <TextInput
                    style = {styles.input}
                    autoComplete = {birthday}
                    value = {birthday}
                    placeholder = "Data de Nascimento:"
                    onChangeText = {e => setBirthday(e)}
                />

                <TextInput
                    style = {styles.input}
                    autoComplete = {sex}
                    value = {sex}
                    onChangeText = {e => setSex(e)}
                    placeholder = "Sexo:"
                />

                <TextInput
                    style = {styles.input}
                    autoComplete = {cpf}
                    value = {cpf}
                    placeholder = "CPF:"
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
                <TouchableOpacity style={styles.cadastroButton} onPress = {() => cadastro(name, birthday, sex, cpf, bloco, apto, email, password, adm, vagas)}>
                    <Text style = {styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton} onPress = {() => props.navigation.navigate("TelaPrincipalAdm")}>
                    <Text style = {styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}