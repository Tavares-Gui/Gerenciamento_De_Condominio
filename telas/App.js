import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import {Login} from "./Login" 
import {Cadastro} from "./Cadastro"
// import Usuarios from "./Usuarios"
import {UtilsContext} from "./config/context"
import { useState } from "react"

export default function App() {
	const [utils, setUtils] = useState({})
	const Stack = createStackNavigator()
	return(
		<NavigationContainer>
			<UtilsContext.Provider value = {{utils, setUtils}}>
				<Stack.Navigator>
					<Stack.Screen name = "Cadastro" options = {{headerShown: false}} component = {Cadastro} />
					<Stack.Screen name = "Login" options = {{headerShown: false}} component = {Login} />
					{/* <Stack.Screen name = "Usuarios" options = {{headerShown: false}} component = {Usuarios} /> */}
				</Stack.Navigator>
			</UtilsContext.Provider>
		</NavigationContainer>
	);
}