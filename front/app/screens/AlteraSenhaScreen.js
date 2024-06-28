import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

const AlteraSenhaScreen = () => {
  const [senha, setSenha] = useState('');

  const handleSendResetSenha = () => {
    // Lógica para enviar e-mail de redefinição de senha
  };

  return (
    <View style={styles.container}>
      {/* Texto "matchday" */}
      <View style={styles.matchdayContainer}>
        <Text style={styles.matchdayText}>Matchday</Text>
        <View style={styles.line} />
      </View>
      <Text style={styles.title}>Alterar a senha</Text>
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldTitle}>Digite seu e-mail</Text>
        <TextInput
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          style={styles.input}
        />
        <TextInput
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          style={styles.input}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSendResetSenha}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AlteraSenhaScreen;
