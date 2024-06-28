import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import styles from '../styles/styles';


const CriarContaScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const handleCreateAccount = () => {
    // Lógica para criar uma conta
  };

  return (
    <View style={styles.container}>
      <View style={styles.matchdayContainer}>
        <Text style={styles.matchdayText}>Matchday</Text>
        <View style={styles.line} />
      </View>
      <Text style={styles.title}>Cadastro</Text>
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldTitle}>Nome</Text>
        <TextInput
          placeholder="Nome"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldTitle}>Email</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldTitle}>Confirme o Email</Text>
        <TextInput
          placeholder="Confirme o Email"
          value={confirmEmail}
          onChangeText={setConfirmEmail}
          style={styles.input}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldTitle}>Senha</Text>
        <View style={styles.passwordInputContainer}>
          <TextInput
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            style={styles.passwordInput}
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <MaterialIcons
              name={isPasswordVisible ? 'visibility-off' : 'visibility'}
              size={24}
              color="#A8FF33"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldTitle}>Confirme a Senha</Text>
        <View style={styles.passwordInputContainer}>
          <TextInput
            placeholder="Confirme a Senha"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            style={styles.passwordInput}
            secureTextEntry={!isConfirmPasswordVisible}
          />
          <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
            <MaterialIcons
              name={isConfirmPasswordVisible ? 'visibility-off' : 'visibility'}
              size={24}
              color="#A8FF33"
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
        <Text style={styles.buttonText}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CriarContaScreen;
