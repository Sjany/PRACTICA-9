import React, { useState } from 'react';
import { Text, View, TextInput, Alert, TouchableOpacity } from 'react-native';
import { styles } from './styles'; 

export default function App() {

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [fechanac, setFechanac] = useState('');
  const [Direccion, setDireccion] = useState('');

  const handleRegistro = () => {

    if (!nombre.trim() || !correo.trim() || !password.trim() || !fechanac.trim() || !Direccion.trim()) {
      Alert.alert('Error', 'Todos los campos son obligatorios.');
      return; 
    }

    Alert.alert('¡Éxito!', 'Registro exitoso.');
 
    setNombre('');
    setCorreo('');
    setPassword('');
    setFechanac('');
    setDireccion('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulario de Registro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        value={correo}
        onChangeText={setCorreo} 
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true} 
      />

      <TextInput
        style={styles.input}
        placeholder="Fecha de nacimiento"
        value={fechanac}
        onChangeText={setFechanac} 
      />

      <TextInput
        style={styles.input}
        placeholder="Direccion"
        value={nombre}
        onChangeText={setDireccion}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegistro}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
}