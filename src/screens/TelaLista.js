import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useMusicasApi } from '../hooks/useMusicasApi'; 

const infoPlaylist = {
  titulo: 'Geração Pop & Indie',
  descricao: 'Mergulhe no banco de dados musical. Estes resultados são gerados em tempo real diretamente da API da Apple Music / iTunes.',
  imagem: 'https://i0.wp.com/highschool.latimes.com/wp-content/uploads/2019/02/musical-notes-clipart-musical-performance-692507-3948022.jpg?fit=1600%2C603&ssl=1',
  criador: 'Chico2302 (API Fetch)',
  faixas: 15
};

export default function TelaLista({ navigation }) {
  const { musicas, carregando, erro } = useMusicasApi('indie pop'); 

  return (
    <ScrollView style={styles.container}>
      <View style={styles.mainCard}>
        <Image source={{ uri: infoPlaylist.imagem }} style={styles.mainImage} />
        <View style={styles.mainTextContainer}>
          <Text style={styles.mainTitle}>{infoPlaylist.titulo}</Text>
          <Text style={styles.mainDescription}>{infoPlaylist.descricao}</Text>
        </View>
      </View>

      <View style={styles.metaBox}>
        <Text style={styles.metaText}>Status: {carregando ? 'Buscando satélites...' : 'Online (iTunes API)'}</Text>
        <Text style={styles.metaText}>Resultados: {musicas.length}</Text>
      </View>

      <Text style={styles.sectionTitleList}>Músicas Populares (Ao Vivo)</Text>

      {carregando && (
        <View style={{ padding: 40, alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#1DB954" />
          <Text style={{ marginTop: 10, color: '#666' }}>Baixando dados da Apple...</Text>
        </View>
      )}

      {erro && <Text style={{ color: 'red', textAlign: 'center', margin: 20 }}>{erro}</Text>}

      {!carregando && !erro && musicas.map((item) => (
        <TouchableOpacity 
          key={item.id} 
          style={styles.listItem}
          onPress={() => navigation.navigate('Detalhes', { itemSelecionado: item })}
        >
          <Image source={{ uri: item.imagem }} style={styles.listItemImage} />
          <View style={styles.listItemInfo}>
            <Text style={styles.listItemTitle} numberOfLines={1}>{item.nome}</Text>
            <Text style={styles.listItemSub} numberOfLines={1}>{item.resumo}</Text>
          </View>
          <Text style={styles.chevron}>{'>'}</Text>
        </TouchableOpacity>
      ))}

      <View style={styles.botoesRodape}>
        <Button title="Painel de Registro Manual" onPress={() => navigation.navigate('Formulario')} color="#191414" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12, backgroundColor: '#f0f2f5', paddingTop: 20 },
  mainCard: { backgroundColor: '#fff', borderRadius: 12, overflow: 'hidden', marginBottom: 15, borderWidth: 1, borderColor: '#e0e0e0' },
  mainImage: { width: '100%', height: 180 },
  mainTextContainer: { padding: 15 },
  mainTitle: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 8 },
  mainDescription: { fontSize: 13, color: '#444', lineHeight: 20 },
  metaBox: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 20 },
  metaText: { fontSize: 13, color: '#333', marginBottom: 4 },
  sectionTitleList: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 10, marginLeft: 5 },
  listItem: { flexDirection: 'row', backgroundColor: '#fff', borderRadius: 8, padding: 10, marginBottom: 10, alignItems: 'center', borderWidth: 1, borderColor: '#ccc' },
  listItemImage: { width: 50, height: 50, borderRadius: 25, marginRight: 15 },
  listItemInfo: { flex: 1, justifyContent: 'center' },
  listItemTitle: { fontSize: 15, color: '#333', fontWeight: 'bold' },
  listItemSub: { fontSize: 12, color: '#666', marginTop: 2 },
  chevron: { fontSize: 18, color: '#888', fontWeight: 'bold', paddingRight: 10 },
  botoesRodape: { marginTop: 10, marginBottom: 40 }
});