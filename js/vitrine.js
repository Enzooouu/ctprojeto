/* ==========================================================================
   Construflama | Vitrine da home: os produtos em grandes fotos
   Carregado antes de main.js. Cada item vira uma seção fotográfica, na
   ordem do array, com o texto direto sobre a foto e uma linha fina que liga
   o nome ao produto, como uma anotação de projeto.

   Campos:
   - categoria: nome da coleção (linha pequena acima do nome)
   - nome, descricao: textos do site e do blog (nada inventado)
   - info: [textos] informações curtas e reais do produto
   - produto / colecao: links reais (página do produto e da coleção)
   - imagem / textoAlternativo: foto do ambiente
   - lado: 'direita' | 'esquerda', onde fica o texto (alternar)
   - largura: % da largura da tela que a foto ocupa no computador (100 =
     largura toda; menos que isso, a foto fica do lado oposto ao texto e se
     dissolve no fundo escuro embaixo do texto)
   - foco: object-position da foto no computador; focoCelular, no celular
   - ponto: [x, y] onde está o produto na foto, de 0 a 1 (fim da linha)
   - topo: altura do texto na seção, no computador (% da altura)
   ========================================================================== */
var VITRINE = [
  {
    categoria: 'Lareiras',
    nome: 'Lareira Cone',
    // Descrição do site (página da Lareira Cone)
    descricao: 'Uma de nossas lareiras mais queridas quando o assunto é arquitetura. Seu design diferenciado já brilhou em várias mostras pelo Brasil, como Belo Horizonte e São Paulo.',
    info: ['A lenha, a álcool ou a gás', 'Preta, marrom ou branca'],
    produto: 'produto.html?c=lareiras&l=esculturais&m=cone',
    colecao: 'colecao.html?c=lareiras',
    imagem: 'img/blog/casa-cosentino-cone.webp',
    textoAlternativo: 'Lareira Cone marrom suspensa no centro de um living de pé-direito alto, com painel colorido, sofá mostarda, poltrona laranja e janela em arco, na Casa Cosentino.',
    lado: 'direita', largura: 100, foco: '40% 45%', focoCelular: '60% 50%',
    ponto: [0.585, 0.6], topo: 20
  },
  {
    categoria: 'Churrasqueiras',
    nome: 'Churrasqueira Premium Híbrida',
    // Site (página da Premium Híbrida) e artigo do blog sobre ela
    descricao: 'Escolha entre o sabor clássico do carvão e a praticidade do gás em um único equipamento, com duas caixas-braseiro independentes.',
    info: ['Gás e carvão, até ao mesmo tempo', 'Aço inox 304', 'Tamanho personalizável'],
    produto: 'produto.html?c=churrasqueiras&l=premium&m=hibrida',
    colecao: 'colecao.html?c=churrasqueiras',
    imagem: 'img/modelos/churrasqueira-premium-hibrida-nicho.webp',
    textoAlternativo: 'Churrasqueira Premium Híbrida num nicho de vidro e pedra clara com veios, com cavalete, manivelas, grelhas e espetos, sobre um móvel de frisos.',
    lado: 'esquerda', largura: 74, foco: '60% 50%', focoCelular: '62% 50%',
    ponto: [0.6, 0.6], topo: 22
  },
  {
    categoria: 'Coifas',
    nome: 'Coifa para churrasqueira',
    // Descrição da linha e artigo "Cálculo de exaustão" do blog
    descricao: 'Acompanha a churrasqueira e mantém a área gourmet livre da fumaça, sem perder o protagonismo no ambiente.',
    info: ['Projeto com cálculo de exaustão', 'Visita técnica para definir a tubulação'],
    produto: 'colecao.html?c=coifas#linha-churrasqueira',
    colecao: 'colecao.html?c=coifas',
    imagem: 'img/linhas/coifas-churrasqueira.webp',
    textoAlternativo: 'Coifa metálica em formato de pirâmide sobre a churrasqueira, numa área gourmet com parede de tijolos, forno de pizza, mesa redonda e cadeiras de madeira.',
    lado: 'direita', largura: 100, foco: '45% 40%', focoCelular: '48% 40%',
    ponto: [0.49, 0.27], topo: 20
  },
  {
    categoria: 'Parrillas',
    nome: 'Parrilla profissional',
    // Descrição da linha e artigos do blog sobre parrillas e aço inox 304
    descricao: 'Estrutura robusta e braseiro central para o ritmo de restaurantes e churrascarias.',
    info: ['Firebox lateral para carvão ou lenha', 'Aço inox 304'],
    produto: 'colecao.html?c=parrillas#linha-profissional',
    colecao: 'colecao.html?c=parrillas',
    imagem: 'img/linhas/parrillas-profissional.webp',
    textoAlternativo: 'Duas parrillas metálicas com rodas de regulagem e um braseiro ao centro com brasas acesas e faíscas, diante de uma parede de blocos.',
    lado: 'esquerda', largura: 72, foco: '50% 50%', focoCelular: '50% 50%',
    ponto: [0.5, 0.46], topo: 26
  },
  {
    categoria: 'Fornos de pizza',
    nome: 'Forno de pizza portátil',
    // Descrição da linha e artigo "Forno de pizza portátil" do blog
    descricao: 'Compacto e com pedra para pizza, leva o forno para a bancada da área gourmet sem precisar de obra.',
    info: ['100% aço inox 304', 'Termômetro embutido', 'Encaixa sobre a grelha da churrasqueira'],
    produto: 'colecao.html?c=fornos-de-pizza#linha-portatil',
    colecao: 'colecao.html?c=fornos-de-pizza',
    imagem: 'img/linhas/fornos-portatil.webp',
    textoAlternativo: 'Forno portátil metálico com a marca Construflama, aberto na frente e com pedra redonda para pizza, sobre bancada de pedra clara.',
    lado: 'direita', largura: 70, foco: '50% 55%', focoCelular: '50% 60%',
    ponto: [0.58, 0.62], topo: 26
  }
];
