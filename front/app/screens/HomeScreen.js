import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styles';


const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleCriarConta = () => {
    navigation.navigate('CriarConta');
  };

  return (
    <View style={styles.container}>
      {/* Texto "matchday" */}
      <View style={styles.matchdayContainer}>
        <Text style={styles.matchdayText}>Matchday</Text>
        <View style={styles.line} />
      </View>

      {/* Seções Padel e Futebol */}
      <View style={styles.sectionsContainer}>
        {/* Seção Padel */}
        <View style={[styles.section, styles.sectionPadel]}>
          <Image source={require('../assets/padel.png')} style={styles.sectionImage} />
          <View style={styles.sectionText}>
            <Text style={styles.sectionTitle}>Padel</Text>
            <Text style={styles.sectionInfo}>
              Reservas de Quadra de Padel
              {'\n+80 Opções\n+160 Municípios'}
            </Text>
          </View>
        </View>

        {/* Seção Futebol */}
        <View style={[styles.section, styles.sectionFutebol]}>
          <View style={styles.sectionText}>
            <Text style={styles.sectionTitle}>Futebol</Text>
            <Text style={styles.sectionInfo}>
              Reservas de Quadras de Society
              {'\n+110 Opções de quadras\n+180 Municípios\nCampos de 5 e 7'}
            </Text>
          </View>
          <Image source={require('../assets/futebol.png')} style={styles.sectionImage} />
        </View>
      </View>

      {/* Botões na parte inferior */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleCriarConta}>
          <Text style={styles.buttonText}>Criar Conta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
