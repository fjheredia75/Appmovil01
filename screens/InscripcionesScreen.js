// InscripcionesScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const InscripcionesScreen = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [sexo, setSexo] = useState('');
  const [atletismo, setAtletismo] = useState('');

  const handleInscribir = () => {
    if (!nombre || !edad || !sexo || !atletismo) {
      Alert.alert('Completa todos los campos');
      return;
    }

    // Aquí podrías realizar la lógica para almacenar los datos, por ejemplo, enviar a una API o almacenar localmente.

    // Limpia los campos después de la inscripción exitosa
    setNombre('');
    setEdad('');
    setSexo('');
    setAtletismo('');

    Alert.alert('Inscripción exitosa');
  };

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="Edad"
        value={edad}
        onChangeText={setEdad}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="Sexo"
        value={sexo}
        onChangeText={setSexo}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="Atletismo"
        value={atletismo}
        onChangeText={setAtletismo}
      />
      <Button title="Inscribir" onPress={handleInscribir} />
    </View>
  );
};

export default InscripcionesScreen;
