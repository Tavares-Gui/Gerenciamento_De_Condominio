import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"

import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { pt, registerTranslation } from 'react-native-paper-dates'
import { UtilsContext } from "./config/context"
import { useState } from "react"

import { Login } from "./Login"
import { Cadastro } from "./Cadastro"
import InfosCond from "./InfosCond"
import TelaPrincipalAdm from "./TelaPrincipalAdm"
import TelaPrincipalUser from "./TelaPrincipalUser"
import LerComentario from "./LerComentario"
import FazerComentario from "./FazerComentario"
import Reservas from "./Reservas"


export default function App() {
	const [utils, setUtils] = useState({})
	const Stack = createStackNavigator()

	function logout() {
		sessionStorage.clear();
		window.location.reload(false);
	}

	return (
		<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />

					<Stack.Screen name="Cadastro" options={{
						title: 'Cadastro', headerLeft: () => null, headerRight: () => (
							<TouchableOpacity
								style={styles.touch1}
								onPress={() => logout()}
							>
								<Text>Sair</Text>
							</TouchableOpacity>
						)
					}} component={Cadastro} />

					<Stack.Screen name="TelaPrincipalAdm" options={{
						title: 'Síndico', headerLeft: () => null, headerRight: () => (
							<TouchableOpacity
								style={styles.touch1}
								onPress={() => logout()}
							>
								<Text>Sair</Text>
							</TouchableOpacity>
						)
					}} component={TelaPrincipalAdm} />

					<Stack.Screen name="TelaPrincipalUser" options={{
						title: 'Usuario', headerLeft: () => null, headerRight: () => (
							<TouchableOpacity
								style={styles.touch1}
								onPress={() => logout()}
							>
								<Text>Sair</Text>
							</TouchableOpacity>
						)
					}} component={TelaPrincipalUser} />

					<Stack.Screen name="Reservas" options={{
						title: 'Reservas', headerLeft: () => null, headerRight: () => (
							<TouchableOpacity
								style={styles.touch1}
								onPress={() => logout()}
							>
								<Text>Sair</Text>
							</TouchableOpacity>
						)
					}} component={Reservas} />

					<Stack.Screen name="FazerComentario" options={{
						title: 'Comentarios', headerLeft: () => null, headerRight: () => (
							<TouchableOpacity
								style={styles.touch1}
								onPress={() => logout()}
							>
								<Text>Sair</Text>
							</TouchableOpacity>
						)
					}} component={FazerComentario} />

					<Stack.Screen name="LerComentario" options={{
						title: 'Comentarios', headerLeft: () => null, headerRight: () => (
							<TouchableOpacity
								style={styles.touch1}
								onPress={() => logout()}
							>
								<Text>Sair</Text>
							</TouchableOpacity>
						)
					}} component={LerComentario} />

					<Stack.Screen name="InfosCond" options={{
						title: 'Informacoes', headerLeft: () => null, headerRight: () => (
							<TouchableOpacity
								style={styles.touch1}
								onPress={() => logout()}
							>
								<Text>Sair</Text>
							</TouchableOpacity>
						)
					}} component={InfosCond} />
				</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	touch1: {
	  width: "75px",
	  height: "35px",
	  backgroundColor: "black",
	  padding: "5px",
	  borderRadius: "10px",
	  marginRight: "15px",
	  justifyContent: "center",
	  alignItems: "center"
	},
});