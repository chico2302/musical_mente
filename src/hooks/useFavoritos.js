import { useState, useEffect } from 'react';
import { db, auth } from '../services/firebaseConfig';
import { collection, doc, setDoc, deleteDoc, onSnapshot } from 'firebase/firestore';

export function useFavoritos() {
  const [favoritos, setFavoritos] = useState([]);
  const [carregandoFav, setCarregandoFav] = useState(true);
  const usuarioAtual = auth.currentUser; // Pega o utilizador logado no momento

  // useEffect para escutar as mudanças no banco de dados em tempo real
  useEffect(() => {
    // Se não houver utilizador logado, simula um ID genérico para os testes locais funcionar
    const uid = usuarioAtual ? usuarioAtual.uid : "usuario_teste_chico";

    const caminhoColecao = collection(db, 'usuarios', uid, 'musicasFavoritas');

    // O onSnapshot fica "ouvindo" o Firestore. Se algo mudar lá, ele atualiza o app na hora!
    const unsubscribe = onSnapshot(caminhoColecao, (snapshot) => {
      const listaMúsicas = [];
      snapshot.forEach((doc) => {
        listaMúsicas.push({ idFirestore: doc.id, ...doc.data() });
      });
      setFavoritos(listaMúsicas);
      setCarregandoFav(false);
    }, (error) => {
      console.log("Erro ao escutar favoritos: ", error);
      setCarregandoFav(false);
    });

    // Função de limpeza (cleanup) do useEffect
    return () => unsubscribe();
  }, [usuarioAtual]);

  // Função para Adicionar ou Remover um favorito
  const alternarFavorito = async (musica) => {
    const uid = usuarioAtual ? usuarioAtual.uid : "usuario_teste_chico";
    
    // O ID do documento no banco será o próprio ID da música para evitar duplicados
    const docRef = doc(db, 'usuarios', uid, 'musicasFavoritas', musica.id);

    // Verifica se a música já está nos favoritos localmente
    const jaE_Favorito = favoritos.some(fav => fav.id === musica.id);

    try {
      if (jaE_Favorito) {
        // Se já for favorito, deleta do Firestore
        await deleteDoc(docRef);
        alert("Removida dos favoritos!");
      } else {
        // Se não for, salva no Firestore
        await setDoc(docRef, {
          id: musica.id,
          nome: musica.nome,
          resumo: musica.resumo,
          imagem: musica.imagem,
          descricao: musica.descricao,
          album: musica.album,
          genero: musica.genero,
          data: musica.data,
          favoritadoEm: new Date().toISOString()
        });
        alert("Adicionada aos favoritos com sucesso! ⭐");
      }
    } catch (error) {
      console.error("Erro ao gerir favoritos no Firestore: ", error);
      alert("Erro ao conectar ao Firestore. Verifique se ativou o Modo de Teste.");
    }
  };

  // Retorna os estados e funções que as telas do App.js vão precisar usar
  return { favoritos, carregandoFav, alternarFavorito };
}