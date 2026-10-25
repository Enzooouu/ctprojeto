/* ==========================================================================
   Construflama | Páginas "Ver sobre" (produto.html?c=colecao&l=linha)
   Carregado antes de main.js. Cada item é a página de uma linha que é um
   produto só (acao: 'sobre' em CATEGORIAS, ou acaoLinha: 'sobre' na coleção).
   O botão "Ver sobre" da página da coleção passa a levar até aqui assim que
   a linha tiver um item nesta lista.

   Cada projeto é único: a página não tem preço, versões nem ficha técnica.
   A foto principal é a da linha em CATEGORIAS (main.js), para não repetir.

   Campos:
   - categoria / linha: slugs de CATEGORIAS
   - nome: nome do produto (título da página)
   - texto: [parágrafos] apresentação do produto
   - fotos: [{ imagem, textoAlternativo, foco? }] fotos depois da principal
   - palavrasBlog: termos para achar artigos do blog sobre o produto
   ========================================================================== */
var PAGINAS_SOBRE = [
  {
    categoria: 'lareiras',
    linha: 'tradicionais',
    nome: 'Lareira tradicional',
    texto: [
      'Bons momentos podem se tornar mais aconchegantes com uma lareira a lenha. Por isso, desenvolvemos uma linha que aproveita melhor o calor e faz uma perfeita exaustão da fumaça.',
      'Com beleza e segurança, a lareira a lenha Construflama oferece muito mais conforto.',
      'São diversos modelos, com opção de embutir e opção com coifa aparente. Nos modelos de embutir, as chapas são feitas em aço carbono de alta qualidade e têm pintura resistente ao calor, isolamento térmico para preservar a integridade dos acabamentos, gabarito com vão de dilatação e câmara de queima revestida por placas refratárias.',
      'Os modelos com coifa aparente podem ser em aço carbono pintado de preto ou branco, ou em aço corten.'
    ],
    fotos: [
      { imagem: 'img/produtos/lareira-tradicional-coifa-aparente.webp',
        textoAlternativo: 'Lareira a lenha com coifa aparente cor de ferrugem, em formato de bloco retangular com duas chaminés cilíndricas até o teto de madeira, sobre uma base rebaixada de pedra, no centro de um grande living.' }
    ],
    palavrasBlog: ['lenha']
  }
];
