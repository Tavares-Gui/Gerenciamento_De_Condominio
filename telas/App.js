import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import {UtilsContext} from "./config/context"
import { useState } from "react"
import {Login} from "./Login" 

export default function App() {
	const [utils, setUtils] = useState({})
	const Stack = createStackNavigator()
	return (
		<NavigationContainer>
			<UtilsContext.Provider value={{ utils, setUtils }}>
				<Stack.Navigator>
					<Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
				</Stack.Navigator>
			</UtilsContext.Provider>
		</NavigationContainer>
	);
}
