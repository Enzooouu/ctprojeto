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
    destaque: false, imagem: '', textoAlternativo: '', fundo: 'a', exemplo: true
  },
  {
    nome: 'Lareira cone', categoria: 'lareiras', subcategoria: 'esculturais',
    descricao: 'A elegância é um estilo de vida, que se manifesta em atitudes, comportamentos e valores. Está mais próxima da simplicidade e do aconchego que ajuda a criar bons momentos. A lareira escultural Construflama traz um toque de elegância ao ambiente.',
    destaque: true, imagem: 'img/produtos/lareira-cone.webp',
    textoAlternativo: 'Lareira suspensa preta em formato de cone sobre uma base clara com lenha, no centro de uma sala com estantes de madeira, tapete e sofá claro.',
    fundo: 'b', exemplo: false
  },
  {
    nome: 'Churrasqueira premium híbrida', categoria: 'churrasqueiras', subcategoria: 'hibrida',
    descricao: 'Com a Churrasqueira Híbrida Construflama, você tem o poder de escolher entre o sabor clássico do carvão e a praticidade do sistema a gás, tudo em um único equipamento de alto desempenho. Em uma estrutura inovadora, a tradição e a tecnologia se encontram, oferecendo o melhor de dois mundos para o seu churrasco.',
    destaque: true, imagem: 'img/produtos/churrasqueira-premium-hibrida.webp',
    textoAlternativo: 'Churrasqueira com laterais de vidro, grelhas e espetos metálicos, embutida numa parede revestida de pedra clara com veios, sob uma coifa do mesmo revestimento.',
    fundo: 'c', exemplo: false
  },
  {
    nome: 'Coifa piramidal cozinha', categoria: 'coifas', subcategoria: 'cozinha',
    descricao: 'A Construflama produz coifas com um design moderno e funcionalidade perfeita. Com um excelente poder de exaustão, além de fácil limpeza e materiais de primeira linha. Uma combinação de elegância e qualidade para projetos especiais.',
    destaque: true, imagem: 'img/produtos/coifa-piramidal-cozinha.webp',
    textoAlternativo: 'Coifa preta em formato de pirâmide sobre uma ilha com cooktop, numa cozinha integrada à sala com estantes de livros, cortinas claras e luminária de palha.',
    fundo: 'd', exemplo: false
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
    descricao: 'Quando o sabor é o centro das atenções, nada melhor do que um churrasco preparado numa tradicional parrilla. Imagine poder levar essa tradição para dentro de sua casa com toque profissional e toda a praticidade que você precisa.',
    destaque: true, imagem: 'img/produtos/parrilla-residencial.webp',
    textoAlternativo: 'Parrilla metálica com grelha, manivela de roda e cesto de lenha acesa com o logotipo Construflama, numa área externa com parede de tijolos e plantas.',
    fundo: 'f', exemplo: false
  },
  {
    nome: 'Tocheiro a álcool com mesa redonda', categoria: 'tocheiros', subcategoria: 'a-alcool',
    // TODO: legenda provisória escrita para o protótipo; revisar com a Construflama
    descricao: 'Fogo de verdade no centro da roda de conversa. Com chama a álcool e tampo de mesa, o tocheiro reúne calor, luz e apoio em uma peça só, para jardins, varandas e áreas externas.',
    destaque: true, imagem: 'img/produtos/tocheiro-a-alcool-mesa-redonda.webp',
    textoAlternativo: 'Mesa redonda marrom com queimador circular metálico no centro, entre poltronas de corda com almofadas laranja, numa área externa com plantas e paredes laranja.',
    fundo: 'g', exemplo: false
  },
  {
    nome: 'Chapeira elétrica', categoria: 'chapeiras', subcategoria: 'eletrica',
    descricao: 'Da linha Elétrica, para a cozinha gourmet.',
    destaque: false, imagem: '', textoAlternativo: '', fundo: 'b', exemplo: true
  }
];
