import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { useFavoritos } from '../hooks/useFavoritos';

export default function TelaPerfil({ navigation }) {
  const { favoritos, carregandoFav } = useFavoritos();

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Meu DNA Musical</Text>
      <Text style={styles.mainDescription}>Músicas salvas remotamente no Firestore:</Text>
      
      {carregandoFav ? (
        <ActivityIndicator size="large" color="#1DB954" style={{ marginTop: 30 }} />
      ) : favoritos.length === 0 ? (
        <Text style={[styles.metaText, { textAlign: 'center', marginTop: 40 }]}>Ainda não tens músicas favoritas salvas.</Text>
      ) : (
        <ScrollView style={{ marginTop: 15, width: '100%' }}>
          {favoritos.map((item) => (
            <View key={item.id} style={styles.listItem}>
              <Image source={{ uri: item.imagem }} style={styles.listItemImage} />
              <View style={styles.listItemInfo}>
                <Text style={styles.listItemTitle} numberOfLines={1}>{item.nome}</Text>
                <Text style={styles.listItemSub} numberOfLines={1}>{item.resumo}</Text>
              </View>
              <Text style={{ fontSize: 10, color: '#888' }}>Salvo! ☁️</Text>
            </View>
          ))}
        </ScrollView>
      )}

      <View style={{ marginTop: 20, marginBottom: 30 }}>
        <Button title="Desconectar (Sair)" color="#ff4444" onPress={() => navigation.replace('Login')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12, backgroundColor: '#f0f2f5', paddingTop: 20 },
  mainTitle: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 8 },
  mainDescription: { fontSize: 13, color: '#444', lineHeight: 20 },
  metaText: { fontSize: 13, color: '#333', marginBottom: 4 },
  listItem: { flexDirection: 'row', backgroundColor: '#fff', borderRadius: 8, padding: 10, marginBottom: 10, alignItems: 'center', borderWidth: 1, borderColor: '#ccc' },
  listItemImage: { width: 50, height: 50, borderRadius: 25, marginRight: 15 },
  listItemInfo: { flex: 1, justifyContent: 'center' },
  listItemTitle: { fontSize: 15, color: '#333', fontWeight: 'bold' },
  listItemSub: { fontSize: 12, color: '#666', marginTop: 2 }
});