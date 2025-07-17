import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import CriarContaScreen from './screens/CriarContaScreen';
import RecuperaSenhaScreen from './screens/RecuperaSenhaScreen';
import AlteraSenhaScreen from './screens/AlteraSenhaScreen';
import MinhasReservasScreen from './screens/MinhasReservasScreen';
import ProfileScreen from './screens/ProfileScreen';
import LocaisScreen from './screens/LocaisScreen';
import HistoricoScreen from './screens/HistoricoScreen';
import styles from './styles/styles';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Locais"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          if (route.name === 'Locais') {
            iconName = 'search';
          } else if (route.name === 'Historico') {
            iconName = 'history';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          } else if (route.name === 'MinhasReservas') {
            iconName = 'event';
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#ADFF45',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: '#000', height: 60, paddingBottom: 10, paddingTop: 10 },
        tabBarLabelStyle: { fontSize: 12 },
        tabBarIconStyle: { size: 24 },
      })}
    >
      <Tab.Screen
        name="Locais"
        component={LocaisScreen}
        options={{ headerShown: false, tabBarLabel: 'Locais' }}
      />
      <Tab.Screen
        name="Historico"
        component={HistoricoScreen}
        options={{ headerShown: false, tabBarLabel: 'Histórico' }}
      />
      <Tab.Screen
        name="MinhasReservas"
        component={MinhasReservasScreen}
        options={{ headerShown: false, tabBarLabel: 'Reservas' }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false, tabBarLabel: 'Perfil' }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CriarConta" component={CriarContaScreen} />
        <Stack.Screen name="RecuperaSenha" component={RecuperaSenhaScreen} />
        <Stack.Screen name="AlteraSenha" component={AlteraSenhaScreen} />
        <Stack.Screen name="Main" component={MainTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
