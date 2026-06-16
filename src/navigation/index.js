import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TelaLogin from '../screens/TelaLogin.js';
import TelaLista from '../screens/TelaLista';
import TelaDetalhe from '../screens/TelaDetalhe';
import TelaFormulario from '../screens/TelaFormulario';
import TelaPerfil from '../screens/TelaPerfil';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MenuLateral() {
  return (
    <Drawer.Navigator screenOptions={{ headerStyle: { backgroundColor: '#1DB954' }, headerTintColor: '#fff' }}>
      <Drawer.Screen name="Início" component={TelaLista} />
      <Drawer.Screen name="Meu Perfil / Favoritos" component={TelaPerfil} />
    </Drawer.Navigator>
  );
}

export default function Rotas() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={TelaLogin} />
      <Stack.Screen name="MenuPrincipal" component={MenuLateral} />
      <Stack.Screen name="Detalhes" component={TelaDetalhe} options={{ headerShown: true, title: 'DNA da Canção' }} />
      <Stack.Screen name="Formulario" component={TelaFormulario} options={{ headerShown: true, title: 'Parâmetros' }} />
    </Stack.Navigator>
  );
}
