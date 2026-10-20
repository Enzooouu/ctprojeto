/* ==========================================================================
   Construflama | Dados dos produtos
   Carregado antes de main.js. A home usa os produtos com destaque: true no
   carrossel "Produtos em destaque" (ordem do array = ordem dos slides).

   TODO: estes são EXEMPLOS PROVISÓRIOS, só para mostrar o layout. Serão
   trocados pelos produtos reais (nome, descrição, foto e link).

   Campos:
   - nome: nome do produto (título do slide)
   - categoria / subcategoria: slugs de CATEGORIAS (main.js). Combinações que
     não existirem lá são ignoradas e avisadas no console.
   - descricao: frase curta da legenda. Sem especificações técnicas.
   - destaque: true para aparecer no carrossel da home
   - imagem: caminho da foto do produto (ex.: 'img/produtos/linear-180.jpg').
     Vazio = usa o gradiente provisório + ilustração da categoria. A foto é
     recortada na proporção fixa do slide (16:10), então o layout não pula.
   - textoAlternativo: descrição da foto para leitores de tela (quando houver)
   - fundo: letra do gradiente provisório (a a g), usado enquanto não há foto
   - exemplo: true mostra a etiqueta "Exemplo" (use false nos produtos reais)
   ========================================================================== */
var PRODUTOS = [
  {
    nome: 'Lareira a gás linear', categoria: 'lareiras', subcategoria: 'a-gas-linear',
    descricao: 'Da linha A gás linear, para projetos que tratam o fogo como parte da parede.',
    destaque: true, imagem: '', textoAlternativo: '', fundo: 'a', exemplo: true
  },
  {
    nome: 'Lareira escultural', categoria: 'lareiras', subcategoria: 'esculturais',
    descricao: 'Da linha Esculturais, para quando a lareira é a peça central do ambiente.',
    destaque: true, imagem: '', textoAlternativo: '', fundo: 'b', exemplo: true
  },
  {
    nome: 'Churrasqueira premium híbrida', categoria: 'churrasqueiras', subcategoria: 'hibrida',
    descricao: 'Com a Churrasqueira Híbrida Construflama, você tem o poder de escolher entre o sabor clássico do carvão e a praticidade do sistema a gás, tudo em um único equipamento de alto desempenho. Em uma estrutura inovadora, a tradição e a tecnologia se encontram, oferecendo o melhor de dois mundos para o seu churrasco.',
    destaque: true, imagem: 'img/produtos/churrasqueira-premium-hibrida.webp',
    textoAlternativo: 'Churrasqueira com laterais de vidro, grelhas e espetos metálicos, embutida numa parede revestida de pedra clara com veios, sob uma coifa do mesmo revestimento.',
    fundo: 'c', exemplo: false
  },
  {
    nome: 'Coifa para cozinha', categoria: 'coifas', subcategoria: 'cozinha',
    descricao: 'Da linha Cozinha, desenhada para acompanhar a arquitetura do ambiente.',
    destaque: true, imagem: '', textoAlternativo: '', fundo: 'd', exemplo: true
  },
  {
    nome: 'Forno de pizza', categoria: 'fornos-de-pizza', subcategoria: 'a-lenha',
    descricao: 'Quem já curtiu com a família e os amigos produzir uma das paixões nacionais sabe como é incrível a experiência do preparo. Presença constante em espaços gourmet, o forno a lenha reúne todo o charme e tradição também de outras influências da cozinha brasileira.',
    destaque: true, imagem: 'img/produtos/forno-de-pizza-a-lenha.webp',
    textoAlternativo: 'Forno a lenha branco, em formato de cúpula, com porta preta, sobre a bancada de uma área gourmet com parede de tijolinhos e luminária de corda.',
    fundo: 'e', exemplo: false
  },
  {
    nome: 'Parrilla residencial', categoria: 'parrillas', subcategoria: 'residencial',
    descricao: 'Da linha Residencial, para levar a parrilla à área gourmet de casa.',
    destaque: true, imagem: '', textoAlternativo: '', fundo: 'f', exemplo: true
  },
  {
    nome: 'Tocheiro a gás', categoria: 'tocheiros', subcategoria: 'a-gas',
    descricao: 'Da linha A gás, para varandas e áreas externas.',
    destaque: false, imagem: '', textoAlternativo: '', fundo: 'g', exemplo: true
  },
  {
    nome: 'Chapeira elétrica', categoria: 'chapeiras', subcategoria: 'eletrica',
    descricao: 'Da linha Elétrica, para a cozinha gourmet.',
    destaque: false, imagem: '', textoAlternativo: '', fundo: 'b', exemplo: true
  }
];
