// App.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import InscripcionesScreen from './screens/InscripcionesScreen';
import LlegadaScreen from './screens/LLegadaScreen';


const AppNavigator = () => {
  const [selectedOption, setSelectedOption] = useState('Inscripciones');

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

  const renderScreen = () => {
    switch (selectedOption) {
      case 'Inscripciones':
        return <InscripcionesScreen/>;
      case 'Llegada':
        return <LlegadaScreen/>;
      case 'Resultados':
        return <Text>Contenido de Resultados</Text>;
      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View style={{ flex: 1, backgroundColor: '#333', paddingVertical: 20, alignItems: 'center' }}>
        <TouchableOpacity onPress={() => handleOptionPress('Inscripciones')}>
          <Text style={{ color: 'white', marginVertical: 10 }}>Inscripciones</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleOptionPress('Llegada')}>
          <Text style={{ color: 'white', marginVertical: 10 }}>Llegada</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleOptionPress('Resultados')}>
          <Text style={{ color: 'white', marginVertical: 10 }}>Resultados</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 3, padding: 16, justifyContent: 'center', alignItems: 'center' }}>
        {renderScreen()}
      </View>
    </View>
  );
};

export default AppNavigator;
