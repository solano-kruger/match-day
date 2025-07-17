import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import styles from '../styles/styles'; // Utilize seu arquivo de estilos existente

const historico = [
  { id: '1', date: '02/05/2024', location: 'Golden Ball', court: 7, time: '20:00' },
  { id: '2', date: '26/04/2024', location: 'Rola Bola', court: 7, time: '21:30' },
  { id: '3', date: '12/03/2024', location: 'KiChute', court: 5, time: '16:30' },
  { id: '4', date: '07/01/2024', location: 'Golden Ball', court: 5, time: '22:00' },
];

const HistoricoScreen = () => {
  const renderItem = ({ item }) => (
    <View style={historicoStyles.card}>
      <Text style={historicoStyles.cardText}>{item.date} - {item.location}</Text>
      <Text style={historicoStyles.cardText}>Quadra: {item.court}</Text>
      <Text style={historicoStyles.cardText}>Horário: {item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={historicoStyles.header}>
        <Text style={historicoStyles.headerText}>Histórico</Text>
      </View>
      <FlatList
        data={historico}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={historicoStyles.listContainer}
      />
    </View>
  );
};

const historicoStyles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginVertical: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ADFF45',
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#333',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  cardText: {
    fontSize: 16,
    color: '#FFF',
    marginBottom: 8,
  },
});

export default HistoricoScreen;
