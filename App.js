import * as React from "react";
import Login from "./src/Screen/Login";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "./src/Screen/Signup";
import Home from "./src/Screen/Home";
import Details from "./src/Screen/Details";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "./src/Screen/Profile";
export default function App() {
  
  const AuthStack = createNativeStackNavigator();
  const [user, setUser] = React.useState(false);
  const AppTab = createBottomTabNavigator();
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {user ? (
          <AppTab.Navigator>
            <AppTab.Screen
              name="HomeStack"
              component={HomeStackNavigator}
            />
            <AppTab.Screen name="Profile" component={Profile}/>
          </AppTab.Navigator>
        ) : (
          <AuthStack.Navigator>
            <AuthStack.Screen name="Login" component={Login} initialParams={{setUser}} />
            <AuthStack.Screen name="Signup" component={Signup} />
          </AuthStack.Navigator>
        )}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}


 function HomeStackNavigator() {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName="Home">
                  <HomeStack.Screen name="Home" component={Home} />
                  <HomeStack.Screen name="Details" component={Details} />
                </HomeStack.Navigator>
  )
}
