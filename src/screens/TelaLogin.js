import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


export default function TelaLogin({ navigation }) {
  return (
    <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
      <Text style={styles.mainTitle}>SongDNA</Text>
      <Text style={styles.mainDescription}>Descubra a anatomia das músicas</Text>
      <View style={{ marginTop: 20 }}>
        <Button 
          title="Entrar no App" 
          color="#1DB954" 
          onPress={() => navigation.replace('MenuPrincipal')} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 12, 
    backgroundColor: '#f0f2f5', 
    paddingTop: 20 
  },
  mainTitle: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#333', 
    marginBottom: 8 
  },
  mainDescription: { 
    fontSize: 13, 
    color: '#444', 
    lineHeight: 20 
  }
});