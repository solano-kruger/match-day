import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from '../styles/styles';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Adicione a lógica de autenticação aqui
    // Se a autenticação for bem-sucedida:
    navigation.navigate('Main');
  };

  const handleForgotPassword = () => {
    navigation.navigate('RecuperaSenha');
  };

  return (
    <View style={styles.container}>
      <View style={styles.matchdayContainer}>
        <Text style={styles.matchdayText}>Matchday</Text>
        <View style={styles.line} />
      </View>
      <Text style={styles.fieldTitle}>Digite seu e-mail</Text>
      <TextInput
        placeholder="E-mail"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <Text style={styles.fieldTitle}>Digite sua senha</Text>
      <View style={styles.passwordInputContainer}>
        <TextInput
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.passwordInput}
        />
        <TouchableOpacity>
          <MaterialIcons name="visibility" size={24} color="#A8FF33" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
        <Text style={styles.buttonText}>Esqueci minha senha</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
