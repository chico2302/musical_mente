import React, { useState } from 'react';
import { Text, Button, StyleSheet, ScrollView, TextInput, Switch, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function TelaFormulario({ navigation }) {
  const [input1, setInput1] = useState('');
  const [picker1, setPicker1] = useState('pop');
  const [slider1, setSlider1] = useState(120);
  const [switch1, setSwitch1] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.tituloSecaoForm}>Registro de Áudio (Parte 3)</Text>
      <TextInput style={styles.input} placeholder="Nome da Faixa" value={input1} onChangeText={setInput1} />
      
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Gênero Musical:</Text>
        <Picker selectedValue={picker1} onValueChange={setPicker1}>
          <Picker.Item label="Pop" value="pop" />
          <Picker.Item label="Indie" value="indie" />
        </Picker>
      </View>

      <Text style={styles.label}>BPM: {Math.floor(slider1)}</Text>
      <Slider minimumValue={60} maximumValue={200} value={slider1} onValueChange={setSlider1} minimumTrackTintColor="#1DB954" />
      
      <View style={styles.linhaSwitch}>
        <Text style={styles.labelSwitch}>Conteúdo Explícito</Text>
        <Switch value={switch1} onValueChange={setSwitch1} trackColor={{ true: '#1DB954' }} />
      </View>

      <View style={styles.botoesAcao}>
        <Button title="Salvar Configuração" color="#1DB954" onPress={() => navigation.goBack()} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12, backgroundColor: '#f0f2f5', paddingTop: 20 },
  tituloSecaoForm: { fontSize: 22, fontWeight: 'bold', color: '#191414', marginVertical: 15, textAlign: 'center' },
  label: { fontWeight: '600', color: '#191414', marginTop: 10 },
  labelSwitch: { fontWeight: '600', color: '#191414' },
  input: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#ddd', padding: 12, borderRadius: 8, marginBottom: 12, fontSize: 16 },
  pickerContainer: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#ddd', borderRadius: 8, marginBottom: 12 },
  linhaSwitch: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#ddd' },
  botoesAcao: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, marginBottom: 50 }
});