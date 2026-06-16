import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useFavoritos } from '../hooks/useFavoritos';

export default function TelaDetalhe({ route }) {
  const { itemSelecionado } = route.params;
  const { favoritos, alternarFavorito } = useFavoritos();
  const jaE_Favorito = favoritos.some(fav => fav.id === itemSelecionado.id);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.mainCard}>
        <Image source={{ uri: itemSelecionado.imagem }} style={styles.imageDetalheCover} />
        <View style={styles.mainTextContainer}>
          <Text style={styles.mainTitle}>{itemSelecionado.nome}</Text>
          <Text style={styles.mainDescription}>{itemSelecionado.descricao}</Text>
        </View>
      </View>

      <View style={{ marginBottom: 15 }}>
        <Button 
          title={jaE_Favorito ? "⭐ Remover dos Favoritos" : "☆ Adicionar aos Favoritos"} 
          color={jaE_Favorito ? "#ffaa00" : "#1DB954"} 
          onPress={() => alternarFavorito(itemSelecionado)} 
        />
      </View>

      <View style={styles.metaBox}>
        <Text style={styles.metaText}>Artista: {itemSelecionado.resumo}</Text>
        <Text style={styles.metaText}>Gênero: {itemSelecionado.genero}</Text>
      </View>

      <Text style={styles.sectionTitleListCentered}>Álbum Original</Text>
      <TouchableOpacity style={styles.listItem}>
          <Image source={{ uri: itemSelecionado.imagem }} style={styles.listItemImage} />
          <View style={styles.listItemInfo}>
            <Text style={styles.listItemTitle}>{itemSelecionado.album}</Text>
            <Text style={styles.listItemSub}>{itemSelecionado.data}</Text>
          </View>
          <Text style={styles.chevron}>{'>'}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12, backgroundColor: '#f0f2f5', paddingTop: 20 },
  mainCard: { backgroundColor: '#fff', borderRadius: 12, overflow: 'hidden', marginBottom: 15, borderWidth: 1, borderColor: '#e0e0e0' },
  imageDetalheCover: { width: '100%', height: 300, resizeMode: 'cover' },
  mainTextContainer: { padding: 15 },
  mainTitle: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 8 },
  mainDescription: { fontSize: 13, color: '#444', lineHeight: 20 },
  metaBox: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 20 },
  metaText: { fontSize: 13, color: '#333', marginBottom: 4 },
  sectionTitleListCentered: { fontSize: 14, fontWeight: 'bold', color: 'red', marginBottom: 10, textAlign: 'center', marginTop: 10 },
  listItem: { flexDirection: 'row', backgroundColor: '#fff', borderRadius: 8, padding: 10, marginBottom: 10, alignItems: 'center', borderWidth: 1, borderColor: '#ccc' },
  listItemImage: { width: 50, height: 50, borderRadius: 25, marginRight: 15 },
  listItemInfo: { flex: 1, justifyContent: 'center' },
  listItemTitle: { fontSize: 15, color: '#333', fontWeight: 'bold' },
  listItemSub: { fontSize: 12, color: '#666', marginTop: 2 },
  chevron: { fontSize: 18, color: '#888', fontWeight: 'bold', paddingRight: 10 }
});