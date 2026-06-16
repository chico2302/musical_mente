# SongDNA 🎵 - Análise Avançada de Faixas Musicais

Aplicativo desenvolvido em React Native com Expo que consome a API do iTunes (Apple) e implementa persistência remota no banco de dados em nuvem Google Firebase. O conceito visual e funcional baseia-se na engenharia reversa de metadados musicais ("SongDNA").

**Link do Repositório:** [https://github.com/chico2302/musical_mente]

---

## 🛠️ Arquitetura e Estrutura de Pastas

O projeto adota uma arquitetura modular focada em componentização e separação de responsabilidades:

- 📁 **/src**
  - 📁 **/components** - Componentes visuais reutilizáveis.
  - 📁 **/screens** - Telas principais da aplicação (Login, Lista, Detalhes, etc).
  - 📁 **/navigation** - Configuração de fluxo com Stack e Drawer Navigation.
  - 📁 **/services** - Conexões com serviços externos (firebaseConfig.js).
  - 📁 **/hooks** - Custom Hooks encapsulando lógica de negócio isolada.
- 📄 **App.js** - Ponto de entrada e container global de navegação.

---

## 🚀 Requisitos Implementados

### 1. Hooks (React Hooks)
- **Componentes Funcionais:** Toda a lógica estruturada sem o uso de classes.
- **useState & useEffect:** Utilizados para gerenciamento de estados internos, controle de renderização e efeitos de ciclo de vida (chamadas de API).
- **Custom Hooks:** - `useMusicasApi`: Encapsula a lógica de busca com o método `fetch`.
  - `useFavoritos`: Gerencia em tempo real as operações de leitura e gravação no Cloud Firestore.

### 2. Navegação Dinâmica
- **Aninhamento Complexo:** Integração fluida entre **Stack Navigation** (fluxo de Login e sobreposição de telas) e **Drawer Navigation** (Menu Lateral).
- Mapeamento completo de 5 telas fundamentais.

### 3. Estado de Carregamento (Loading)
- Feedback visual controlado via estado e exibido por meio do componente `<ActivityIndicator />` enquanto os dados remotos estão sendo processados.

### 4. Consumo de API Pública
- Integração em tempo real com a **API Search do iTunes**.
- Uso do método nativo `fetch` para exibir dinamicamente 15 faixas com imagens de alta resolução e informações do álbum.

### 5. Integração com Firebase
- **Authentication:** Mapeamento conceitual para fluxo de usuários (Tela de Login).
- **Cloud Firestore:** Salvamento, checagem e exclusão de dados em tempo real via persistência na nuvem (Recurso de Favoritos).

### 6. Controles Visuais (Parte 3)
- Implementação rigorosa do formulário técnico contendo: 4 Inputs de texto, 2 Pickers, 2 Sliders, 2 Switches e botões interativos.

---

## 📦 Como Executar o Projeto Localmente

1. Clone este repositório:
   `git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git`

2. Entre na pasta do projeto:
   `cd SEU_REPOSITORIO`

3. Instale as dependências ignorando conflitos de versão:
   `npm install --legacy-peer-deps`

4. Execute o comando de correção de pacotes do Expo:
   `npx expo install --fix`

5. Inicie o servidor (Modo Tunnel recomendado para testes em dispositivos físicos):
   `npx expo start --tunnel`

6. Abra o aplicativo **Expo Go** no seu celular e escaneie o QR Code exibido no terminal.
