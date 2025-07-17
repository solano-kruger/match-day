import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

const RecuperaSenhaScreen = () => {
  const [email, setEmail] = useState('');

  const handleSendResetEmail = () => {
    // Lógica para enviar e-mail de redefinição de senha
  };

  return (
    <View style={styles.container}>
      {/* Texto "matchday" */}
      <View style={styles.matchdayContainer}>
        <Text style={styles.matchdayText}>Matchday</Text>
        <View style={styles.line} />
      </View>
      <Text style={styles.title}>Recuperar Senha</Text>
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldTitle}>Digite seu e-mail</Text>
        <TextInput
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSendResetEmail}>
        <Text style={styles.buttonText}>Enviar E-mail de Recuperação</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RecuperaSenhaScreen;
