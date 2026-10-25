/* ==========================================================================
   Construflama | Páginas "Ver sobre" (produto.html?c=colecao&l=linha)
   Carregado antes de main.js. Cada item é a página de uma linha que é um
   produto só (acao: 'sobre' em CATEGORIAS, ou acaoLinha: 'sobre' na coleção).
   O botão "Ver sobre" da página da coleção passa a levar até aqui assim que
   a linha tiver um item nesta lista.

   Nome, frase curta e foto principal vêm da linha em CATEGORIAS (main.js),
   para não digitar o mesmo texto em dois lugares.

   TODO: conteúdo real. Campo vazio aparece marcado como "Exemplo" na página
   (nada de dados inventados).

   Campos:
   - categoria / linha: slugs de CATEGORIAS
   - fotos: [{ imagem, textoAlternativo }] fotos extras da galeria (a
     primeira foto é sempre a da linha)
   - apresentacao: [parágrafos] texto "Sobre"
   - destaques: [textos curtos] pontos fortes, ao lado das fotos
   - versoes: [{ nome, descricao }] modelos ou tamanhos
   - acabamentos: [{ nome, cor }] cor: amostra em CSS (ex.: '#1E1B19')
   - ficha: [{ rotulo, valor }] ficha técnica (valor vazio = a preencher)
   - projeto: [textos] o que o projeto precisa prever
   - pdf: caminho do PDF da ficha técnica ou do catálogo
   - palavrasBlog: termos para achar artigos do blog sobre esta linha
   ========================================================================== */
var PAGINAS_SOBRE = [
  {
    categoria: 'lareiras',
    linha: 'tradicionais',
    fotos: [],
    apresentacao: [],
    destaques: [],
    versoes: [],
    acabamentos: [],
    // Só os rótulos: os valores chegam com a ficha técnica real
    ficha: [
      { rotulo: 'Largura', valor: '' },
      { rotulo: 'Altura', valor: '' },
      { rotulo: 'Profundidade', valor: '' },
      { rotulo: 'Peso', valor: '' },
      { rotulo: 'Combustível', valor: '' },
      { rotulo: 'Área aquecida', valor: '' }
    ],
    projeto: [],
    pdf: '',
    palavrasBlog: ['lenha']
  }
];
