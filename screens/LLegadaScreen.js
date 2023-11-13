// LlegadaScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal, TextInput, Button } from 'react-native';

const LlegadaScreen = () => {
  const [participantes, setParticipantes] = useState([
    { id: '1', nombre: 'Juan', edad: '25', cedula: '0120873335', sexo: 'Masculino', tiempo: '' },
    { id: '2', nombre: 'Ana', edad: '30', cedula: '2677819887', sexo: 'Femenino', tiempo: '' },
    // Agrega más participantes según sea necesario
  ]);

  const [selectedParticipante, setSelectedParticipante] = useState(null);
  const [tiempoLlegada, setTiempoLlegada] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleParticipantePress = (participante) => {
    setSelectedParticipante(participante);
    setModalVisible(true);
  };

  const handleGuardarTiempo = () => {
    if (selectedParticipante) {
      const updatedParticipantes = participantes.map((p) =>
        p.id === selectedParticipante.id ? { ...p, tiempo: tiempoLlegada } : p
      );
      setParticipantes(updatedParticipantes);
      setModalVisible(false);
      setSelectedParticipante(null);
      setTiempoLlegada('');
    }
  };

  const renderParticipanteItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleParticipantePress(item)} style={{ padding: 10 }}>
      <Text>{`${item.nombre} - ${item.edad} - ${item.cedula} - ${item.sexo}`}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Lista de Participantes</Text>
      <FlatList
        data={participantes}
        renderItem={renderParticipanteItem}
        keyExtractor={(item) => item.id}
      />

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%' }}>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>
              Detalles de {selectedParticipante?.nombre}
            </Text>
            <Text>{`Nombre: ${selectedParticipante?.nombre}`}</Text>
            <Text>{`Edad: ${selectedParticipante?.edad}`}</Text>
            <Text>{`Cedula: ${selectedParticipante?.cedula}`}</Text>
            <Text>{`Sexo: ${selectedParticipante?.sexo}`}</Text>

            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
              placeholder="Tiempo de llegada"
              value={tiempoLlegada}
              onChangeText={setTiempoLlegada}
            />

            <Button title="Guardar" onPress={handleGuardarTiempo} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default LlegadaScreen;
