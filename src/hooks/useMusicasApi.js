import { useState, useEffect } from 'react';

export function useMusicasApi(termoDeBusca = 'indie pop') {
  // Estados para guardar a lista, controlar o loading e tratar erros
  const [musicas, setMusicas] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    // Função assíncrona que faz o Fetch
    const buscarMusicas = async () => {
      try {
        setCarregando(true);
        // Formata a URL (buscando 15 músicas do termo escolhido)
        const url = `https://itunes.apple.com/search?term=${encodeURIComponent(termoDeBusca)}&entity=song&limit=15`;
        
        const resposta = await fetch(url);
        const dados = await resposta.json();

        // Mapeando esses dados para os nomes de variáveis que o App usa
        const musicasFormatadas = dados.results.map((faixa) => ({
          id: faixa.trackId.toString(),
          nome: faixa.trackName,
          resumo: faixa.artistName,
          // Pegando a versão 300x300 ao invés da padrão 100x100
          imagem: faixa.artworkUrl100 ? faixa.artworkUrl100.replace('100x100', '300x300') : 'https://via.placeholder.com/300',
          // A API do Itunes não envia descrição então uma genérica para todas músicas são geradas
          descricao: `Esta é a faixa "${faixa.trackName}" interpretada por ${faixa.artistName}. Lançada oficialmente como parte do projeto "${faixa.collectionName}", ela representa uma forte influência do gênero ${faixa.primaryGenreName} na indústria musical moderna.`,
          album: faixa.collectionName || 'Single',
          genero: faixa.primaryGenreName || 'Desconhecido',
          data: faixa.releaseDate ? faixa.releaseDate.substring(0, 10) : 'Data não informada'
        }));

        setMusicas(musicasFormatadas);
        setCarregando(false);
      } catch (err) {
        console.error("Erro ao buscar API:", err);
        setErro("Não foi possível carregar as músicas da internet.");
        setCarregando(false);
      }
    };

    buscarMusicas();
  }, [termoDeBusca]); 

  return { musicas, carregando, erro };
}
