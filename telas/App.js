import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import {Login} from "./Login" 
import {Cadastro} from "./Cadastro"
import InfosCond from "./InfosCond"
import TelaPrincipalAdm from "./TelaPrincipalAdm"
import TelaPrincipalUser from "./TelaPrincipalUser"
import LerComentario from "./LerComentario"
import FazerComentario from "./FazerComentario"
import Reservas from "./Reservas"
import {UtilsContext} from "./config/context"
import { useState } from "react"

export default function App() {
	const [utils, setUtils] = useState({})
	const Stack = createStackNavigator()
	return(
		<NavigationContainer>
			<UtilsContext.Provider value = {{utils, setUtils}}>
				<Stack.Navigator>
					<Stack.Screen name = "TelaPrincipalUser" options = {{headerShown: false}} component = {TelaPrincipalUser} />
					<Stack.Screen name = "TelaPrincipalAdm" options = {{headerShown: false}} component = {TelaPrincipalAdm} />
					<Stack.Screen name = "Cadastro" options = {{headerShown: false}} component = {Cadastro} />
					<Stack.Screen name = "Reservas" options = {{headerShown: false}} component = {Reservas} />
					<Stack.Screen name = "FazerComentario" options = {{headerShown: false}} component = {FazerComentario} />
					<Stack.Screen name = "LerComentario" options = {{headerShown: false}} component = {LerComentario} />
					<Stack.Screen name = "Login" options = {{headerShown: false}} component = {Login} />
					<Stack.Screen name = "InfosCond" options = {{headerShown: false}} component = {InfosCond} />
				</Stack.Navigator>
			</UtilsContext.Provider>
		</NavigationContainer>
	);
}