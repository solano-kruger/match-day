import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styles'; // Utilize seu arquivo de estilos existente

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate('Home'); // Navega para a tela Home
  };

  return (
    <View style={styles.container}>
      <View style={profileStyles.matchdayContainer}>
        <Text style={profileStyles.matchdayText}>MatchDay</Text>
        <View style={profileStyles.line} />
      </View>
      <View style={profileStyles.profileContainer}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={profileStyles.profileImage}
        />
        <Text style={profileStyles.userName}>Nome do Usuário</Text>
        <Text style={profileStyles.userEmail}>email@usuario.com</Text>
      </View>
      <View style={profileStyles.section}>
        <Text style={profileStyles.sectionTitle}>Informações Pessoais</Text>
        <View style={profileStyles.sectionLine} />
        <Text style={profileStyles.sectionText}>Nome Completo: Nome de Usuário</Text>
        <Text style={profileStyles.sectionText}>Email: email@usuario.com</Text>
        <Text style={profileStyles.sectionText}>Telefone: (55) 99983-1414</Text>
      </View>
      <View style={profileStyles.section}>
        <Text style={profileStyles.sectionTitle}>Preferências</Text>
        <View style={profileStyles.sectionLine} />
        <Text style={profileStyles.sectionText}>Esporte Favorito: Futebol</Text>
        <Text style={profileStyles.sectionText}>Localização: Ijuí - RS</Text>
      </View>
      <View style={profileStyles.buttonContainer}>
        <TouchableOpacity style={[styles.button, profileStyles.editButton]}>
          <Text style={styles.buttonText}>EDITAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, profileStyles.logoutButton]} onPress={handleLogout}>
          <Text style={styles.buttonText}>SAIR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const profileStyles = StyleSheet.create({
  matchdayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
    justifyContent: 'center',
  },
  matchdayText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ADFF45',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ADFF45',
    marginLeft: 10,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  userEmail: {
    fontSize: 16,
    color: '#fff',
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ADFF45',
    marginBottom: 5,
  },
  sectionText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  sectionLine: {
    height: 2,
    backgroundColor: '#ADFF45',
    marginVertical: 10,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  editButton: {
    backgroundColor: '#ADFF45',
  },
  logoutButton: {
    backgroundColor: 'red',
  },
});

export default ProfileScreen;
