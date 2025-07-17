import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import styles from '../styles/styles';
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

const locais = [
  { id: '1', name: 'Rola Bola', numCourts: 2, sizes: '5 - 7', rating: 4.5 },
  { id: '2', name: 'Golden Ball', numCourts: 3, sizes: '5 - 7', rating: 4.8 },
  { id: '3', name: 'KiChute', numCourts: 2, sizes: '5', rating: 4.2 },
  { id: '4', name: 'CamiGol', numCourts: 2, sizes: '5', rating: 3.8 },
  { id: '5', name: 'Arena Herval', numCourts: 1, sizes: '5', rating: 4.0 },
];

const LocaisScreen = () => { 
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState(null);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());

  const handleSelectLocation = (location) => {
    if (location.id === selectedLocation) {
      setSelectedLocation(null);
      setSelectedDuration(null);
      setSelectedTime(new Date());
    } else {
      setSelectedLocation(location.id);
    }
  };

  const handleDurationSelect = (duration) => {
    setSelectedDuration(duration);
  };

  const handleTimeChange = (event, selectedDate) => {
    const currentDate = selectedDate || selectedTime;
    setShowTimePicker(Platform.OS === 'ios');
    setSelectedTime(currentDate);
  };

  const showTimepicker = () => {
    setShowTimePicker(true);
  };

  const renderItem = ({ item }) => (
    <View style={locaisStyles.card}>
      <TouchableOpacity onPress={() => handleSelectLocation(item)}>
        <View style={locaisStyles.cardHeader}>
          <Text style={locaisStyles.cardTitle}>{item.name}</Text>
        </View>
        <Text style={locaisStyles.cardText}>Nº Quadras: {item.numCourts}</Text>
        <View style={locaisStyles.ratingContainer}>
          {Array.from({ length: 5 }, (_, index) => (
            <MaterialIcons
              key={index}
              name="star"
              size={24}
              color={index < Math.round(item.rating) ? '#FFD700' : '#CCCCCC'}
            />
          ))}
        </View>
        <Text style={locaisStyles.cardText}>Tamanhos: {item.sizes}</Text>
      </TouchableOpacity>
      {selectedLocation === item.id && (
        <View style={locaisStyles.bookingOptions}>
          <Text style={locaisStyles.optionTitle}>Selecione o Tempo:</Text>
          <View style={locaisStyles.optionsContainer}>
            <TouchableOpacity
              style={[
                locaisStyles.optionButton,
                selectedDuration === '30min' && locaisStyles.selectedOptionButton,
              ]}
              onPress={() => handleDurationSelect('30min')}
            >
              <Text
                style={[
                  locaisStyles.optionText,
                  selectedDuration === '30min' && locaisStyles.selectedOptionText,
                ]}
              >
                30min
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                locaisStyles.optionButton,
                selectedDuration === '1hr' && locaisStyles.selectedOptionButton,
              ]}
              onPress={() => handleDurationSelect('1hr')}
            >
              <Text
                style={[
                  locaisStyles.optionText,
                  selectedDuration === '1hr' && locaisStyles.selectedOptionText,
                ]}
              >
                1hr
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                locaisStyles.optionButton,
                selectedDuration === '2h' && locaisStyles.selectedOptionButton,
              ]}
              onPress={() => handleDurationSelect('2h')}
            >
              <Text
                style={[
                  locaisStyles.optionText,
                  selectedDuration === '2h' && locaisStyles.selectedOptionText,
                ]}
              >
                2h
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={locaisStyles.optionTitle}>Selecione o Horário:</Text>
          <TouchableOpacity onPress={showTimepicker} style={locaisStyles.optionButton}>
            <Text style={locaisStyles.optionText}>
              {selectedTime ? selectedTime.toLocaleTimeString() : 'Selecione o horário'}
            </Text>
          </TouchableOpacity>
          {showTimePicker && (
            <DateTimePicker
              value={selectedTime}
              mode="time"
              display="default"
              onChange={handleTimeChange}
            />
          )}
          <TouchableOpacity style={locaisStyles.reserveButton}>
            <Text style={locaisStyles.reserveButtonText}>Reservar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={locaisStyles.header}>
        <Text style={locaisStyles.headerText}>Locais</Text>
        <TouchableOpacity>
          <Text style={locaisStyles.filterText}>Filtros</Text>
          <MaterialIcons name="filter-list" size={24} color="#ADFF45" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={locais}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={locaisStyles.listContainer}
      />
    </View>
  );
};

const locaisStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginVertical: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ADFF45',
  },
  filterText: {
    fontSize: 18,
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
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 16,
    color: '#FFF',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  bookingOptions: {
    marginTop: 16,
    backgroundColor: '#444',
    padding: 16,
    borderRadius: 8,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ADFF45',
    marginBottom: 8,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  optionButton: {
    backgroundColor: '#555',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  selectedOptionButton: {
    backgroundColor: '#ADFF45',
  },
  optionText: {
    color: '#FFF',
    fontSize: 16,
  },
  selectedOptionText: {
    color: '#000',
  },
  reserveButton: {
    backgroundColor: '#ADFF45',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  reserveButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LocaisScreen;
