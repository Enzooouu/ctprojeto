/* ==========================================================================
   Construflama | Páginas "Ver sobre" (produto.html?c=colecao&l=linha)
   Carregado antes de main.js. Cada item é a página de uma linha que é um
   produto só (acao: 'sobre' em CATEGORIAS, ou acaoLinha: 'sobre' na coleção).
   O botão "Ver sobre" da página da coleção passa a levar até aqui assim que
   a linha tiver um item nesta lista.

   Cada projeto é único: a página não tem preço, versões nem ficha técnica.
   A foto principal e a frase de destaque são as da linha em CATEGORIAS
   (main.js), para não repetir.

   Campos:
   - categoria / linha: slugs de CATEGORIAS
   - nome: nome do produto (título da página)
   - texto: [parágrafos] apresentação do produto
   - fotos: [{ imagem, textoAlternativo, foco? }] fotos depois da principal
   - medidas (opcional): { titulo, colunas, linhas: [{ rotulo, valores }], nota }
     tabela de referência, já aberta (fecha e abre ao clicar)
   - palavrasBlog: termos para achar artigos do blog sobre o produto
   O botão "Baixar catálogo" usa o PDF da coleção em CATALOGOS (main.js).
   ========================================================================== */
var PAGINAS_SOBRE = [
  {
    categoria: 'lareiras',
    linha: 'tradicionais',
    nome: 'Lareira tradicional',
    texto: [
      'Bons momentos podem se tornar mais aconchegantes com uma lareira a lenha. Por isso, desenvolvemos uma linha que aproveita melhor o calor e faz uma perfeita exaustão da fumaça.',
      'A Lareira Tradicional Construflama acompanha a empresa desde as primeiras ideias do fundador. Com diversas evoluções ao longo dos 40 anos de história, essa peça imponente agrega aos ambientes a elegância que o clássico sempre mantém.',
      'Com beleza e segurança, a lareira a lenha Construflama oferece muito mais conforto.',
      'São diversos modelos, com opção de embutir e opção com coifa aparente. Nos modelos de embutir, as chapas são feitas em aço carbono de alta qualidade e têm pintura resistente ao calor, isolamento térmico para preservar a integridade dos acabamentos, gabarito com vão de dilatação e câmara de queima revestida por placas refratárias.',
      'Os modelos com coifa aparente podem ser em aço carbono pintado de preto ou branco, ou em aço corten.'
    ],
    fotos: [
      { imagem: 'img/produtos/lareira-tradicional-coifa-aparente.webp',
        textoAlternativo: 'Lareira a lenha com coifa aparente cor de ferrugem, em formato de bloco retangular com duas chaminés cilíndricas até o teto de madeira, sobre uma base rebaixada de pedra, no centro de um grande living.' },
      // Do catálogo de lareiras 2026 (página da Lareira tradicional)
      { imagem: 'img/produtos/lareira-tradicional-embutir-quarto.webp',
        textoAlternativo: 'Lareira a lenha acesa, embutida em uma parede branca com câmara de tijolos refratários, em um quarto com luminária de arco, poltrona clara e cama com manta azul.' },
      { imagem: 'img/produtos/lareira-tradicional-central.webp',
        textoAlternativo: 'Lareira tradicional central: estrutura preta aberta nos quatro lados, com coifa em pirâmide, base de tijolos refratários e, ao lado, três tubos pretos da chaminé.' }
    ],
    // Catálogo de lareiras 2026. O L6 não é mais fabricado (confirmado com a Construflama).
    medidas: {
      titulo: 'Medidas de referência do modelo central',
      colunas: ['L1', 'L2', 'L3', 'L4', 'L5'],
      linhas: [
        { rotulo: 'Capacidade de aquecimento (m³)', valores: ['100', '170', '240', '330', '450'] },
        { rotulo: 'Altura da câmara de fogo (mm)', valores: ['750', '810', '850', '950', '1.050'] },
        { rotulo: 'Largura da câmara de fogo (mm)', valores: ['765', '865', '1.000', '1.140', '1.310'] },
        { rotulo: 'Profundidade mínima da câmara de fogo (mm)', valores: ['420', '420', '420', '490', '490'] },
        { rotulo: 'Diâmetro da tubulação (mm)', valores: ['200', '200', '250', '250', '300'] }
      ],
      nota: 'Cada lareira é dimensionada para o seu projeto. Use estas medidas como referência.'
    },
    palavrasBlog: ['lenha']
  }
];
