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
   - medidas (opcional): { titulo, rotuloLinhas?, colunas, linhas: [{ rotulo, valores }], nota }
     tabela de referência, já aberta (fecha e abre ao clicar); rotuloLinhas é o
     título da primeira coluna (padrão: 'Medida')
   - downloads (opcional): [{ texto, arquivo, tamanho }] PDFs do produto, como o
     manual técnico (aparecem ao lado do orçamento, antes do catálogo)
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
  },
  {
    categoria: 'lareiras',
    linha: 'a-gas-linear',
    nome: 'Lareira a gás linear LRG',
    texto: [
      'Poder descansar depois de um longo dia, ou reunir amigos e família ao redor de um fogo aconchegante, é sempre um prazer. Com a eficiência e o charme de uma lareira a gás Construflama, fica ainda mais especial.',
      // Do manual de instalação e operação (LRG 060/200, revisão 13)
      'A Lareira a gás linear LRG tem estrutura em aço inox AISI 304 e é fabricada em 15 comprimentos, do LRG-060 ao LRG-200, para se encaixar no nicho do seu projeto.',
      'A chama é acionada pelo controle remoto que acompanha a lareira, por interruptor ou pela automação da casa.',
      'Ela funciona com gás natural ou com GLP. O tipo de gás é definido antes da compra, para que a lareira seja fabricada conforme o gás disponível na obra.'
    ],
    fotos: [
      { imagem: 'img/produtos/lareira-gas-linear-banco-pedra.webp',
        textoAlternativo: 'Lareira a gás linear acesa sobre pedras vulcânicas, embutida em um banco de pedra cinza sob um volume liso da cor da parede, com poltrona clara, vasos de cobre e um quadro colorido.' },
      { imagem: 'img/produtos/lareira-gas-linear-suite.webp',
        textoAlternativo: 'Suíte com parede de cimento queimado e televisão; abaixo dela, uma lareira linear acesa sobre bancada de mármore claro, vista do pé da cama. Ambiente de Patrícia Hagobian, foto de Caio Falcão.' },
      { imagem: 'img/produtos/lareira-gas-linear-pedra-cinza.webp',
        textoAlternativo: 'Lareira a gás linear acesa, vazada entre dois ambientes, em uma coluna revestida de pedra cinza, com sofá claro, mesa de centro de pedra e bancos altos ao fundo.' },
      { imagem: 'img/produtos/lareira-gas-linear-lrg.webp',
        textoAlternativo: 'Queimador da Lareira a gás linear LRG em aço inox, com a bandeja retangular, o queimador central e o suporte lateral, sobre fundo branco.' },
      { imagem: 'img/produtos/lareira-gas-linear-lrg-caixa-comando.webp',
        textoAlternativo: 'Desenho técnico da Lareira a gás linear LRG vista de cima, com o queimador, a estrutura em inox e a caixa de comando presa por baixo.' }
    ],
    // Manual LRG 060/200, item 20 (especificações técnicas)
    medidas: {
      titulo: 'Medidas e potência por modelo',
      rotuloLinhas: 'Modelo',
      colunas: ['Comprimento total (mm)', 'Peso aproximado (kg)', 'Potência com GLP (BTU/h)'],
      linhas: [
        { rotulo: 'LRG-060', valores: ['690', '9,0', '17.920'] },
        { rotulo: 'LRG-070', valores: ['790', '9,2', '17.920'] },
        { rotulo: 'LRG-080', valores: ['890', '9,6', '17.920'] },
        { rotulo: 'LRG-090', valores: ['990', '10,6', '20.160'] },
        { rotulo: 'LRG-100', valores: ['1.090', '11,2', '20.160'] },
        { rotulo: 'LRG-110', valores: ['1.190', '11,4', '20.160'] },
        { rotulo: 'LRG-120', valores: ['1.290', '12,5', '26.860'] },
        { rotulo: 'LRG-130', valores: ['1.390', '12,9', '26.860'] },
        { rotulo: 'LRG-140', valores: ['1.490', '13,4', '26.860'] },
        { rotulo: 'LRG-150', valores: ['1.590', '16,0', '29.100'] },
        { rotulo: 'LRG-160', valores: ['1.690', '16,6', '29.100'] },
        { rotulo: 'LRG-170', valores: ['1.790', '17,0', '29.100'] },
        { rotulo: 'LRG-180', valores: ['1.890', '18,0', '35.800'] },
        { rotulo: 'LRG-190', valores: ['1.990', '18,5', '35.800'] },
        { rotulo: 'LRG-200', valores: ['2.090', '18,9', '35.800'] }
      ],
      nota: 'Todos os modelos têm 287 mm de largura e 194 mm de altura. As medidas do nicho, da coifa de respiro e o consumo de gás estão no manual técnico.'
    },
    downloads: [
      { texto: 'Baixar manual técnico', arquivo: 'catalogos/manual-lareira-gas-linear-lrg.pdf', tamanho: '2,4 MB' }
    ],
    palavrasBlog: ['lareira a gas', 'lareiras a gas', 'gas linear']
  }
];
