import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native'; // Certifique-se de que está importando de '@react-navigation/native'
import styles from '../styles/styles'; // Importar estilos do caminho correto

const reservations = [
  { id: '1', name: 'Quadra 1', time: '10:00 - 11:00', status: 'Pendente', latitude: -23.55052, longitude: -46.633308 },
  { id: '2', name: 'Quadra 2', time: '11:00 - 12:00', status: 'Confirmada', latitude: -23.55152, longitude: -46.634308 },
  { id: '3', name: 'Quadra 3', time: '12:00 - 13:00', status: 'Cancelada', latitude: -23.55252, longitude: -46.635308 },
  // Adicione mais reservas conforme necessário
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Pendente':
      return 'orange';
    case 'Confirmada':
      return 'green';
    case 'Cancelada':
      return 'red';
    default:
      return 'black';
  }
};

const ReservationCard = ({ name, time, status, latitude, longitude }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <TouchableOpacity onPress={() => setExpanded(!expanded)}>
      <View style={[styles.card, { borderColor: getStatusColor(status) }]}>
        <Text style={styles.cardTitle}>{name}</Text>
        <Text style={styles.courtCardText}>{time}</Text>
        <Text style={[styles.status, { color: getStatusColor(status) }]}>Status: {status}</Text>
        {expanded && (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude,
              longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker coordinate={{ latitude, longitude }} />
          </MapView>
        )}
      </View>
    </TouchableOpacity>
  );
};

const App = () => {
  const navigation = useNavigation();

  return (
       
    <View style={styles.container}>
      <View style={styles.matchdayContainer}>
        <Text style={styles.matchdayText}>Matchday</Text>
        <View style={styles.line} />
      </View>
      <Text style={styles.cardTitle}>Minhas Reservas</Text>
      <FlatList
        data={reservations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ReservationCard
            name={item.name}
            time={item.time}
            status={item.status}
            latitude={item.latitude}
            longitude={item.longitude}
          />
        )}       
      />
    </View>
  );
};


export default App;
