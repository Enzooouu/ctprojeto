/* ==========================================================================
   Construflama | Modelos de uma linha (modelos.html?c=colecao&l=linha)
   Carregado antes de main.js. O botão "Ver todos os modelos" da página da
   coleção passa a levar até a página da linha assim que ela tiver modelos
   nesta lista.

   Fonte: catálogo de lareiras 2026 (textos e medidas) e site da Construflama
   (fotos dos produtos). Fotos de ambiente: blog.

   Campos:
   - categoria / linha: slugs de CATEGORIAS
   - nome, slug: nome do modelo e endereço da futura página do modelo
   - descricao: texto do catálogo
   - combustiveis: 'lenha' | 'alcool' | 'gas'. Todas as esculturais, menos a
     Pilão, têm as três versões (confirmado com a Construflama; o catálogo diz
     "gás sob consulta" e lista a Balaio só a álcool)
   - gasSobConsulta: true quando o catálogo diz "opção a gás sob consulta"
   - imagem / textoAlternativo: foto do produto (fundo branco)
   - ambiente (opcional): { imagem, textoAlternativo } foto num projeto real,
     que aparece ao passar o mouse ou focar o cartão
   - cores: amostras do catálogo
   - medidas: { altura, largura, peso } para a tabela de comparação
     (largura pode ser diâmetro: "Ø 47,5 cm")
   Página de cada modelo (produto.html?c=...&l=...&m=slug):
   - texto: [parágrafos] depois da descrição (artigo da linha escultural no blog)
   - citacao: { texto, autor } frase de um arquiteto sobre o modelo (blog)
   - fotos: [{ imagem, textoAlternativo }] fotos de projetos, depois da do produto
   - versoes: { colunas: ['Lenha', 'Álcool'], linhas: [{ rotulo, valores }] }
     medidas de cada versão no catálogo
   - downloads (opcional): [{ texto, arquivo, tamanho }] manuais do modelo
   - palavrasBlog (opcional): termos para achar artigos do blog (padrão: o nome)
   - cores: null para peças em inox, sem opção de cor (a linha "Cores" some)
   - prototipo: true quando ainda faltam dados reais; etiqueta: texto do selo. Imagem, combustíveis,
     cores ou medidas vazios aparecem marcados como "em breve" / "a confirmar".
   ========================================================================== */
var CORES_ESCULTURAIS = [
  { nome: 'preto', cor: '#1E1B19' },
  { nome: 'marrom', cor: '#7A3E12' },
  { nome: 'branco', cor: '#F5F2EC' }
];

var MODELOS = [
  {
    categoria: 'lareiras', linha: 'esculturais',
    nome: 'Lareira Tarus', slug: 'tarus',
    descricao: 'Uma das estrelas da Construflama, a icônica Lareira Tarus sempre está presente em mostras como CASACOR e Artefacto. A sofisticação do seu design imponente traz o fogo com elegância ao seu lar.',
    combustiveis: ['lenha', 'alcool', 'gas'],
    imagem: 'img/modelos/lareira-tarus.webp',
    textoAlternativo: 'Lareira Tarus preta, suspensa por um tubo, em formato de meia-lua com a chama à mostra.',
    ambiente: { imagem: 'img/blog/lareira-tarus-giovanna-leal.webp',
      textoAlternativo: 'Lareira Tarus marrom sobre um banco curvo de pedra clara, em sala revestida de madeira.' },
    cores: CORES_ESCULTURAIS,
    texto: [
      'A Tarus é um dos designs mais icônicos e memoráveis da Construflama: suas linhas curvas, combinadas com a vertical do tubo, são um diferencial em ambientes contemporâneos, e ela também pode ser usada em espaços que contrastam o visual antigo com elementos atuais, sem perder a elegância nem a personalidade clássica.',
      // Do site da Construflama (página da Lareira Tarus)
      'A Tarus também tem uma versão 360°, em que o corpo gira livremente, e a versão Space, maior, com 1,30 m de largura.',
      'Quanto aos materiais, ela pode ser em aço carbono, pintado de preto ou branco, ou em aço corten.',
      // Do manual da Tarus a álcool (29/09/2020)
      'Também existe a versão de duas bocas, indicada para usar como ilha, no meio do ambiente. A recomendação é instalar a lareira suspensa a 40 cm do piso.',
      'A versão a álcool sai de fábrica com todas as peças para a fixação, a tela de proteção, a haste para acender e apagar e pedras vulcânicas para decorar o fundo.'
    ],
    citacao: { texto: 'Tentamos trazer uma neutralidade nos tons com bastante volume e texturas, que tocasse as pessoas. Dentro dessa atmosfera a gente achou a Lareira Tarus da Construflama, ela trouxe o design que a gente buscava.',
      autor: 'Expedito Bezerra, sobre o Loft da CASACOR São Paulo 2025' },
    fotos: [
      { imagem: 'img/blog/lareira-tarus-giovanna-leal.webp', textoAlternativo: 'Lareira Tarus marrom suspensa sobre um banco curvo de pedra clara com lenha embaixo, em sala revestida de madeira. Ambiente de Giovanna Leal, CASACOR Brasília 2025.' },
      { imagem: 'img/blog/ecos-brandos-tarus.webp', textoAlternativo: 'Lareira Tarus branca suspensa sobre um piso de pedriscos claros com lenha, ao lado de uma janela com cortinas de voal, no dormitório Ecos Brandos.' },
      // Do site da Construflama (página da Lareira Tarus)
      { imagem: 'img/modelos/lareira-tarus-cores.webp', textoAlternativo: 'Três lareiras Tarus lado a lado, nas cores branca, preta e cor de ferrugem, com lenha acesa, e a tela de proteção apoiada no chão.' },
      { imagem: 'img/modelos/lareira-tarus-parede-pontilhada.webp', textoAlternativo: 'Lareira Tarus preta suspensa e acesa diante de uma parede de chapa perfurada, com lenha empilhada, cadeira de madeira escura e piso preto brilhante.' },
      { imagem: 'img/blog/dd-garden-design-2025.webp', textoAlternativo: 'Lareira Tarus preta rodeada por vasos com folhagens e bambu, com a tela de proteção apoiada no chão, no D&D Garden Design.' },
      { imagem: 'img/modelos/lareira-tarus-painel-madeira.webp', textoAlternativo: 'Lareira Tarus preta suspensa por um tubo, com lenha empilhada no bojo, diante de painéis de madeira avermelhada com um quadro, livros e um sofá de veludo bordô.' }
    ],
    versoes: {
      colunas: ['Lenha', 'Álcool'],
      linhas: [
        { rotulo: 'Altura', valores: ['50 cm', '50 cm'] },
        { rotulo: 'Profundidade', valores: ['74 cm', '74 cm'] },
        { rotulo: 'Largura', valores: ['100 cm', '100 cm'] },
        { rotulo: 'Peso', valores: ['45 kg', '45 kg'] }
      ]
    },
    downloads: [
      { texto: 'Baixar manual da versão a álcool', arquivo: 'catalogos/manual-lareira-tarus-alcool.pdf', tamanho: '0,8 MB' }
    ],
    medidas: { altura: '50 cm', largura: '100 cm', peso: '45 kg' }
  },
  {
    categoria: 'lareiras', linha: 'esculturais',
    nome: 'Lareira Gota', slug: 'gota',
    descricao: 'Trazendo elegância para os ambientes em que está presente, a Lareira Gota chama atenção em qualquer espaço em que estiver, proporcionando o ambiente ideal.',
    combustiveis: ['lenha', 'alcool', 'gas'],
    imagem: 'img/modelos/lareira-gota.webp',
    textoAlternativo: 'Lareira Gota preta, suspensa por um tubo, em formato de cone baixo com a chama à mostra.',
    ambiente: { imagem: 'img/blog/lareira-gota-entre-linhas-office.webp',
      textoAlternativo: 'Lareira Gota preta acesa ao lado de um pufe caramelo e de pilhas de livros, diante de cortinas claras.' },
    cores: CORES_ESCULTURAIS,
    texto: [
      'Essa lareira tem nas formas inspiradas na natureza a sua maior força: a versatilidade. As linhas que distribuem o peso visual da peça têm o minimalismo como referência e a suavidade como forma de criar elegância.',
      // Do site da Construflama (página da Lareira Gota)
      'A Gota também tem uma versão 360°, em que o corpo gira livremente, e a versão Space, maior, com 1,30 m de largura.',
      'Quanto aos materiais, ela pode ser em aço carbono, pintado de preto ou branco, ou em aço corten.',
      // Do manual da Gota a lenha (21/09/2017)
      'A versão a lenha sai de fábrica com todo o material refratário instalado na câmara de fogo e com todas as peças do sistema de exaustão, incluindo o damper borboleta, que regula a saída da fumaça. A recomendação é instalar a lareira suspensa a 40 cm do piso.'
    ],
    citacao: { texto: 'A gente queria que fosse uma lareira que conversasse com nosso espaço contemporâneo. O principal motivo da escolha da lareira é que ela fosse sofisticada e clean.',
      autor: 'Renan Altera, sobre seu espaço na CASACOR São Paulo 2024' },
    fotos: [
      { imagem: 'img/blog/lareira-gota-entre-linhas-office.webp', textoAlternativo: 'Lareira Gota preta acesa, com lenha embaixo, ao lado de um pufe caramelo, luminária de piso e livros, no Entre Linhas Office de Lucas Machado.' },
      // Do site da Construflama (página da Lareira Gota)
      { imagem: 'img/modelos/lareira-gota-cores.webp', textoAlternativo: 'Três lareiras Gota lado a lado, nas cores branca, preta e cor de ferrugem, com a chama acesa, e a tela de proteção apoiada no chão.' },
      { imagem: 'img/modelos/lareira-gota-poltrona.webp', textoAlternativo: 'Lareira Gota preta com lenha empilhada no bojo, ao lado de uma poltrona branca com almofada de tricô, mesa lateral com livros e um painel de vidro marmorizado.' },
      { imagem: 'img/modelos/lareira-gota-sala-curva.webp', textoAlternativo: 'Lareira Gota preta suspensa e acesa numa sala de teto curvo, entre uma poltrona de couro e um sofá claro, diante de um quadro com uma criança numa poltrona e de estantes metálicas.' },
      { imagem: 'img/modelos/lareira-gota-jardim-vertical.webp', textoAlternativo: 'Lareira Gota preta com lenha empilhada, diante de um jardim vertical de samambaias e de uma adega com garrafas na parede iluminada, com poltronas em tons de caramelo e mostarda.' }
    ],
    versoes: {
      colunas: ['Lenha', 'Álcool'],
      linhas: [
        { rotulo: 'Altura', valores: ['67,5 cm', '70 cm'] },
        { rotulo: 'Profundidade', valores: ['74 cm', '74 cm'] },
        { rotulo: 'Largura', valores: ['100 cm', '100 cm'] },
        { rotulo: 'Peso', valores: ['75 kg', '75 kg'] }
      ]
    },
    downloads: [
      { texto: 'Baixar manual da versão a lenha', arquivo: 'catalogos/manual-lareira-gota-lenha.pdf', tamanho: '0,7 MB' }
    ],
    medidas: { altura: '67,5 a 70 cm', largura: '100 cm', peso: '75 kg' }
  },
  {
    categoria: 'lareiras', linha: 'esculturais',
    nome: 'Lareira Cone', slug: 'cone',
    descricao: 'A Lareira Cone é uma de nossas lareiras mais queridas quando o assunto é arquitetura. Seu design diferenciado já brilhou em várias mostras ao redor do Brasil, como Belo Horizonte e São Paulo.',
    combustiveis: ['lenha', 'alcool', 'gas'],
    imagem: 'img/modelos/lareira-cone.webp',
    textoAlternativo: 'Lareira Cone preta: um cone suspenso sobre um prato baixo com a chama acesa.',
    ambiente: { imagem: 'img/blog/casa-cosentino-cone.webp',
      textoAlternativo: 'Lareira Cone marrom no centro de um living de pé-direito alto, com sofá mostarda e painel colorido.' },
    cores: CORES_ESCULTURAIS,
    texto: [
      'Uma peça escolhida muitas vezes para ambientes amplos e com pé-direito alto. A personalidade dessa lareira vem da sua imponência, tanto na versão com 1 metro de diâmetro quanto na de 80 cm. Ela pode ficar perto de cantos ou paredes, mas normalmente divide ambientes sem separá-los, como um elemento central que reúne as pessoas e aquece em 360°.',
      // Do site da Construflama (página da Lareira Cone)
      'Quanto aos materiais, ela pode ser em aço carbono, pintado de preto ou branco, ou em aço corten.'
    ],
    citacao: { texto: 'Tudo acontece em torno da lareira, o jantar, a cozinha, a sala de estar… buscando uma maneira de criar uma integração da casa em torno dos momentos e de tudo aquilo que o espaço pode oferecer.',
      autor: 'Gabriel Fernandes, sobre a Lareira Cone na Casa Simonetto, CASACOR São Paulo 2026' },
    fotos: [
      { imagem: 'img/blog/casa-cosentino-cone.webp', textoAlternativo: 'Lareira Cone marrom no centro de um living de pé-direito alto, com sofá mostarda e painel colorido, na Casa Cosentino.' },
      { imagem: 'img/blog/lareiras-cone-cores.webp', textoAlternativo: 'Três lareiras Cone lado a lado, nas cores branca, preta e cor de ferrugem, cada uma sobre sua bacia com lenha acesa.' },
      // Do site da Construflama (página da Lareira Cone)
      { imagem: 'img/modelos/lareira-cone-cactos.webp', textoAlternativo: 'Lareira Cone preta suspensa sobre uma bacia com lenha, diante de uma estante de madeira, com poltrona e banqueta de madeira e um canteiro de cactos.' },
      { imagem: 'img/modelos/lareira-cone-papel-de-parede.webp', textoAlternativo: 'Lareira Cone preta suspensa sobre uma mesa de centro clara com a bacia de lenha embutida, em sala com papel de parede de folhagens, cristaleiras de madeira e sofá listrado.' },
      { imagem: 'img/modelos/lareira-cone-jardim.webp', textoAlternativo: 'Lareira Cone verde-escura suspensa sobre uma bacia redonda com grelha e lenha acesa, junto a uma janela para um bambuzal, com poltrona de couro caramelo e um baú antigo.' },
      { imagem: 'img/modelos/lareira-cone-quarto.webp', textoAlternativo: 'Quarto com cama de linho branco e janela redonda; ao fundo, a Lareira Cone verde-escura ao lado de uma poltrona e de uma parede de pedra.' },
      { imagem: 'img/modelos/lareira-cone-sala-rosa.webp', textoAlternativo: 'Lareira Cone cor de cobre suspensa sobre uma bacia com grelha e lenha, numa sala de paredes curvas cor-de-rosa, com poltrona concha, sofá branco curvo e plantas.' },
      { imagem: 'img/modelos/lareira-cone-sala-rosa-ampla.webp', textoAlternativo: 'Vista ampla da sala cor-de-rosa com teto curvo iluminado, sofá branco, mesa de centro com flores e, ao fundo, a Lareira Cone cor de cobre.' },
      { imagem: 'img/blog/lareira-cone-glaucia-britto.webp', textoAlternativo: 'Lareira Cone preta suspensa num piano bar com balcão iluminado e poltronas caramelo.' },
      { imagem: 'img/blog/tendencias-2026-cone.webp', textoAlternativo: 'Lareira Cone em metal escuro numa sala ampla de pé-direito alto, com poltrona laranja e uma árvore em vaso.' },
      { imagem: 'img/blog/lareira-valoriza-imovel.webp', textoAlternativo: 'Lareira Cone cor de ferrugem sobre uma bacia com pedras, no canto de uma sala com painel de madeira e poltrona estampada.' }
    ],
    versoes: {
      colunas: ['Lenha', 'Álcool'],
      linhas: [
        { rotulo: 'Altura do cone', valores: ['150 cm', '150 cm'] },
        { rotulo: 'Diâmetro do cone', valores: ['100 cm', '80 a 100 cm'] },
        { rotulo: 'Altura do prato', valores: ['18 cm', '18 cm'] },
        { rotulo: 'Diâmetro do prato', valores: ['100 cm', '80 a 100 cm'] },
        { rotulo: 'Peso', valores: ['144 kg', '112,5 kg'] }
      ]
    },
    medidas: { altura: '150 cm (cone)', largura: 'Ø 80 a 100 cm', peso: '112,5 a 144 kg' }
  },
  {
    categoria: 'lareiras', linha: 'esculturais',
    nome: 'Lareira Pipe', slug: 'pipe',
    descricao: 'A Lareira Pipe se destaca pela modernidade, sendo perfeita para ambientes menores, onde traz conforto e elegância ocupando pouco espaço.',
    combustiveis: ['lenha', 'alcool', 'gas'],
    imagem: 'img/modelos/lareira-pipe.webp',
    textoAlternativo: 'Lareira Pipe preta, cilíndrica e vertical, com a portinhola de vidro aberta e a chama acesa.',
    ambiente: { imagem: 'img/blog/sala-clareira-pipe-fendi.webp',
      textoAlternativo: 'Lareira Pipe na cor Fendi presa à parede de madeira escura, ao lado de um sofá curvo.' },
    cores: CORES_ESCULTURAIS,
    texto: [
      'Essa peça se tornou um marco do minimalismo dos últimos anos. O formato cilíndrico traz um tom retilíneo, e a portinhola com vidro deixa a beleza da chama à vista, numa releitura moderna da tela que cobre o braseiro de outros modelos.',
      // Do site da Construflama (página da Lareira Pipe)
      'Quanto aos materiais, ela pode ser em aço carbono, pintado de preto ou branco, ou em aço corten.',
      // Do manual da Pipe a lenha (2018)
      'A versão a lenha sai de fábrica com todo o material refratário e todas as peças do sistema de exaustão, e tem porta de aço com vidro duplo. A recomendação é instalar a lareira suspensa a 40 cm do piso.'
    ],
    citacao: { texto: 'A gente tem aqui um diálogo de peças metálicas, peças orgânicas que no contraste se conversam.',
      autor: 'Bernardo Barcellos, sobre a Eco Casa da L.ara Arquitetura, CASACOR Minas 2026' },
    fotos: [
      { imagem: 'img/blog/sala-clareira-pipe-fendi.webp', textoAlternativo: 'Lareira Pipe na cor Fendi presa à parede de madeira escura, ao lado de um sofá curvo, na Sala Clareira da Sala 2 Arquitetura.' },
      // Do site da Construflama (página da Lareira Pipe)
      { imagem: 'img/modelos/lareira-pipe-bancada-madeira.webp', textoAlternativo: 'Lareira Pipe grafite suspensa no canto de uma sala, ao lado de uma bancada de madeira clara com nicho iluminado e cuba, com um cesto de lenha no piso de taco.' },
      { imagem: 'img/modelos/lareira-pipe-tapete-terracota.webp', textoAlternativo: 'Lareira Pipe grafite suspensa num corredor com parede de madeira clara, poltrona de couro caramelo, tapete terracota e porta de vidro ao fundo.' },
      { imagem: 'img/modelos/lareira-pipe-branca-madeira.webp', textoAlternativo: 'Lareira Pipe branca suspensa diante de uma parede de madeira escura, ao lado de uma luminária de pedra e de um sofá curvo cor de oliva.' },
      { imagem: 'img/modelos/lareira-pipe-branca-pedra.webp', textoAlternativo: 'Lareira Pipe branca suspensa diante de uma parede de pedra cinza, com lenha empilhada ao longo do piso, tapeçaria de franjas, mesa de centro de madeira clara e poltronas.' },
      { imagem: 'img/modelos/lareira-pipe-branca-cozinha.webp', textoAlternativo: 'Lareira Pipe branca e acesa no canto de uma sala integrada à cozinha, entre cortinas claras, com sofá de bouclê, poltrona cor de mostarda e tapete em tons de laranja.' },
      { imagem: 'img/modelos/lareira-pipe-jardim-vidro.webp', textoAlternativo: 'Lareira Pipe grafite acesa numa sala de paredes de vidro aberta para um jardim tropical, com sofá caramelo, tapete azul e poltrona de couro.' }
    ],
    versoes: {
      colunas: ['Lenha', 'Álcool'],
      linhas: [
        { rotulo: 'Altura', valores: ['200 cm', '200 cm'] },
        { rotulo: 'Diâmetro', valores: ['47,5 cm', '47,5 cm'] },
        { rotulo: 'Peso', valores: ['110 kg', '110 kg'] }
      ]
    },
    downloads: [
      { texto: 'Baixar manual da versão a lenha', arquivo: 'catalogos/manual-lareira-pipe-lenha.pdf', tamanho: '8,1 MB' }
    ],
    medidas: { altura: '200 cm', largura: 'Ø 47,5 cm', peso: '110 kg' }
  },
  {
    categoria: 'lareiras', linha: 'esculturais',
    nome: 'Lareira Francesa', slug: 'francesa',
    descricao: 'A imponente e icônica Lareira Francesa traz a mistura perfeita entre o clássico e o moderno, trazendo conforto e sofisticação a todos os ambientes em que está presente.',
    combustiveis: ['lenha', 'alcool', 'gas'],
    imagem: 'img/modelos/lareira-francesa.webp',
    textoAlternativo: 'Lareira Francesa preta apoiada no chão, em formato de cone inclinado com abertura oval e lenha acesa.',
    cores: CORES_ESCULTURAIS,
    texto: [
      'A primeira lareira escultural criada por Roberto Cassab, diretor fundador da Construflama, traz referências do design clássico europeu com um ar campestre. Costuma ficar perto das paredes, em espaços de identidade mais atemporal, com elementos vintage inspirados naquilo que nunca sai de moda: a elegância.',
      // Do site da Construflama (página da Lareira Francesa)
      'É o modelo de solo da linha escultural. Quanto aos materiais, ela pode ser em aço carbono, pintado de preto ou branco, ou em aço corten.'
    ],
    citacao: { texto: 'A gente quis trazer essa lareira para dentro do espaço para criar dentro do conceito da “Casa Carioca” não só perto de praia, mas em qualquer região do Rio de Janeiro ou até outro lugar.',
      autor: 'Cadé Marino, sobre o Espaço Deca, a “Casa Abraço”, da CASACOR Rio 2026' },
    fotos: [
      // Do site da Construflama (página da Lareira Francesa)
      { imagem: 'img/modelos/lareira-francesa-cores.webp', textoAlternativo: 'Três lareiras Francesas lado a lado, nas cores branca, preta e cor de ferrugem, com a chama acesa, e a tela de proteção apoiada no chão.' },
      { imagem: 'img/modelos/lareira-francesa-janela.webp', textoAlternativo: 'Lareira Francesa preta e acesa no canto de uma sala envidraçada com cortinas de fios, ao lado de mesas pretas com vasos cor de terracota e uma escultura.' },
      { imagem: 'img/modelos/lareira-francesa-janela-ampla.webp', textoAlternativo: 'Vista ampla da sala envidraçada com cortinas de fios, poltrona de camurça, mesa lateral dourada e, no canto, a Lareira Francesa preta acesa.' }
    ],
    versoes: {
      colunas: ['Lenha', 'Álcool'],
      linhas: [
        { rotulo: 'Altura', valores: ['105 cm', '105 cm'] },
        { rotulo: 'Profundidade', valores: ['75 cm', '75 cm'] },
        { rotulo: 'Largura', valores: ['100 cm', '100 cm'] },
        { rotulo: 'Peso', valores: ['90 kg', '90 kg'] }
      ]
    },
    medidas: { altura: '105 cm', largura: '100 cm', peso: '90 kg' }
  },
  {
    categoria: 'lareiras', linha: 'esculturais',
    nome: 'Lareira Balaio', slug: 'balaio',
    descricao: 'Desenhada pelo renomado arquiteto Quintino Facci, a Lareira Escultural Balaio proporciona um ambiente aconchegante e sofisticado.',
    combustiveis: ['lenha', 'alcool', 'gas'],
    imagem: 'img/modelos/lareira-balaio.webp',
    textoAlternativo: 'Lareira Balaio preta: um cilindro suspenso por quatro hastes sobre um grande prato redondo com o queimador no centro.',
    cores: CORES_ESCULTURAIS,
    texto: [
      'Um cilindro suspenso por quatro hastes sobre um grande prato redondo: a Balaio deixa o fogo à vista de todos os lados, como peça central do ambiente.',
      'Quanto aos materiais, ela pode ser em aço carbono, pintado de preto ou branco, ou em aço corten.'
    ],
    fotos: [
      // Do site da Construflama (página da Lareira Balaio)
      { imagem: 'img/modelos/lareira-balaio-sofa-laranja.webp', textoAlternativo: 'Lareira Balaio preta acesa no canto de uma sala revestida de madeira clara, com o cilindro suspenso sobre o prato redondo, ao lado de um sofá curvo laranja e de uma parede de peças de cerâmica branca.' }
    ],
    versoes: {
      colunas: ['Álcool'],
      linhas: [
        { rotulo: 'Altura', valores: ['215 cm'] },
        { rotulo: 'Diâmetro', valores: ['100 cm'] },
        { rotulo: 'Peso', valores: ['58 kg'] }
      ]
    },
    medidas: { altura: '215 cm', largura: 'Ø 100 cm', peso: '58 kg' }
  },
  {
    // PROTÓTIPO: a Pilão não está no site atual nem no catálogo 2026.
    // Lenha e cores preto e marrom confirmados com a Construflama, que ainda
    // não tem foto do produto. TODO: foto do produto e medidas.
    prototipo: true,
    categoria: 'lareiras', linha: 'esculturais',
    nome: 'Lareira Pilão', slug: 'pilao',
    // Do artigo do blog "Descubra os modelos da linha Escultural"
    descricao: 'O mais recente lançamento da linha: uma peça robusta que faz a referência rústica se apresentar de forma elegante, desenvolvida com o escritório brasiliense MAAI Arquitetura para a CASACOR São Paulo.',
    combustiveis: ['lenha'],
    imagem: '',
    textoAlternativo: '',
    ambiente: { imagem: 'img/blog/living-ritmo-vital-pilao.webp',
      textoAlternativo: 'Lareira Pilão, de metal escuro, sobre uma base com lenha, diante de paredes de palha trançada, no Living Ritmo Vital da MAAI Arquitetura, CASACOR São Paulo 2026.' },
    cores: [
      { nome: 'preto', cor: '#1E1B19' },
      { nome: 'marrom', cor: '#7A3E12' }
    ],
    texto: [
      'A Pilão foi desenvolvida em conjunto com o escritório brasiliense MAAI Arquitetura, que trouxe referências ancestrais do Centro-Oeste para a CASACOR São Paulo.'
    ],
    citacao: { texto: 'Esse formato mais rústico com essa tendência mais feita a mão.',
      autor: 'Mônica Pinto, sócia e diretora de relacionamento da MAAI Arquitetura, sobre o Living Ritmo Vital' },
    fotos: [],
    medidas: { altura: '', largura: '', peso: '' }
  },
  /* ---------------- Ecoflamas (todas a álcool; catálogo de lareiras 2026) --------------- */
  {
    categoria: 'lareiras', linha: 'ecoflamas',
    nome: 'Ecoflama Retangular', slug: 'retangular',
    descricao: 'Nossas Ecoflamas Retangulares podem ser embutidas em mesas e móveis desenhados por nós da Construflama, ou até mesmo ser encaixadas em nichos já disponíveis em sua casa.',
    texto: ['Também há opções personalizadas de até 1 metro.'],
    combustiveis: ['alcool'],
    imagem: 'img/modelos/ecoflama-retangular.webp',
    textoAlternativo: 'Ecoflama Retangular em aço inox, com o queimador comprido e a haste para acender ao lado.',
    cores: null, fotos: [],
    versoes: { colunas: ['Álcool'], linhas: [
      { rotulo: 'Altura', valores: ['9 cm'] }, { rotulo: 'Profundidade', valores: ['20 cm'] },
      { rotulo: 'Largura', valores: ['35 cm (até 1 m sob medida)'] }, { rotulo: 'Peso', valores: ['4,6 kg'] } ] },
    medidas: { altura: '9 cm', largura: '35 cm a 1 m', peso: '4,6 kg' }
  },
  {
    categoria: 'lareiras', linha: 'ecoflamas',
    nome: 'Ecoflama Canoa', slug: 'canoa',
    descricao: 'A icônica Lareira Ecológica Canoa brilha por sua portabilidade e design. Podendo até mesmo ficar em cima de mesas, essa Ecoflama tem acendimento a álcool de cereais, o que facilita o seu uso.',
    texto: ['Disponível também na versão de 70 cm.'],
    combustiveis: ['alcool'],
    imagem: 'img/modelos/ecoflama-canoa.webp',
    textoAlternativo: 'Ecoflama Canoa: queimador de inox sobre uma base curva branca em forma de canoa, com pés finos, e a haste para acender.',
    cores: null, fotos: [],
    versoes: { colunas: ['Álcool'], linhas: [
      { rotulo: 'Altura', valores: ['12 cm'] }, { rotulo: 'Profundidade', valores: ['19,5 cm'] },
      { rotulo: 'Largura', valores: ['50 cm (ou 70 cm)'] }, { rotulo: 'Peso', valores: ['5,32 kg'] } ] },
    medidas: { altura: '12 cm', largura: '50 ou 70 cm', peso: '5,32 kg' }
  },
  {
    categoria: 'lareiras', linha: 'ecoflamas',
    nome: 'Ecoflama Redonda', slug: 'redonda',
    descricao: 'Nossas Ecoflamas Redondas podem ser embutidas em mesas e móveis desenhados por nós da Construflama, ou até mesmo ser encaixadas em nichos já disponíveis em sua casa.',
    texto: ['Disponível também nos diâmetros de 25 a 70 cm.'],
    combustiveis: ['alcool'],
    imagem: 'img/modelos/ecoflama-redonda.webp',
    textoAlternativo: 'Ecoflama Redonda em aço inox, com o queimador no centro do disco e a haste para acender.',
    cores: null, fotos: [],
    versoes: { colunas: ['Álcool'], linhas: [
      { rotulo: 'Altura', valores: ['9 cm'] }, { rotulo: 'Diâmetro', valores: ['50 cm (de 25 a 70 cm)'] },
      { rotulo: 'Peso', valores: ['10,4 kg'] } ] },
    medidas: { altura: '9 cm', largura: 'Ø 25 a 70 cm', peso: '10,4 kg' }
  },
  {
    categoria: 'lareiras', linha: 'ecoflamas',
    nome: 'Ecoflama Marroquina', slug: 'marroquina',
    descricao: 'Uma icônica peça de design by Construflama, a Ecoflama Marroquina tem um aspecto único que sua casa merece e precisa ter.',
    combustiveis: ['alcool'],
    imagem: 'img/modelos/lareira-marroquina.webp',
    textoAlternativo: 'Ecoflama Marroquina: caixa quadrada de aço cor de ferrugem com as laterais vazadas em desenho geométrico.',
    cores: CORES_ESCULTURAIS, fotos: [],
    versoes: { colunas: ['Álcool'], linhas: [
      { rotulo: 'Altura', valores: ['40 cm'] }, { rotulo: 'Profundidade', valores: ['30 cm'] },
      { rotulo: 'Largura', valores: ['30 cm'] }, { rotulo: 'Peso', valores: ['10 kg'] } ] },
    medidas: { altura: '40 cm', largura: '30 cm', peso: '10 kg' }
  },
  {
    categoria: 'lareiras', linha: 'ecoflamas',
    nome: 'Trio Chess Rainha', slug: 'rainha',
    descricao: 'A Lareira Rainha é o destaque do Trio Chess pela sofisticação do seu design. Uma peça que se encaixa em ambientes internos reduzidos ou amplos e externos.',
    combustiveis: ['alcool'],
    imagem: 'img/modelos/lareira-rainha.webp',
    textoAlternativo: 'Lareira Rainha, do Trio Chess: peça preta formada por dois cones unidos pela ponta, com o queimador no topo.',
    ambiente: { imagem: 'img/blog/trio-chess-casacor-mg.webp',
      textoAlternativo: 'As três lareiras do Trio Chess acesas sobre um deck de madeira à noite, diante de palmeiras.' },
    cores: CORES_ESCULTURAIS, fotos: [], palavrasBlog: ['Trio Chess'],
    versoes: { colunas: ['Álcool'], linhas: [
      { rotulo: 'Altura', valores: ['40 cm'] }, { rotulo: 'Diâmetro', valores: ['40 cm'] }, { rotulo: 'Peso', valores: ['12,5 kg'] } ] },
    medidas: { altura: '40 cm', largura: 'Ø 40 cm', peso: '12,5 kg' }
  },
  {
    categoria: 'lareiras', linha: 'ecoflamas',
    nome: 'Trio Chess Torre', slug: 'torre',
    descricao: 'Nada como uma peça de design que traz sofisticação e conforto para o seu lar. Com seu fácil acendimento a álcool de cereais, a Lareira Ecológica Torre traz comodidade e estilo, podendo ser instalada em pequenos espaços.',
    combustiveis: ['alcool'],
    imagem: 'img/modelos/lareira-torre.webp',
    textoAlternativo: 'Lareira Torre, do Trio Chess: cilindro preto sobre uma base em cone, com o queimador no topo.',
    ambiente: { imagem: 'img/blog/trio-chess-casacor-mg.webp',
      textoAlternativo: 'As três lareiras do Trio Chess acesas sobre um deck de madeira à noite, diante de palmeiras.' },
    cores: CORES_ESCULTURAIS, fotos: [], palavrasBlog: ['Trio Chess'],
    versoes: { colunas: ['Álcool'], linhas: [
      { rotulo: 'Altura', valores: ['36 cm'] }, { rotulo: 'Diâmetro', valores: ['30 cm'] }, { rotulo: 'Peso', valores: ['10,24 kg'] } ] },
    medidas: { altura: '36 cm', largura: 'Ø 30 cm', peso: '10,24 kg' }
  },
  {
    categoria: 'lareiras', linha: 'ecoflamas',
    nome: 'Trio Chess Peão', slug: 'peao',
    descricao: 'Nossa compacta Lareira Ecológica Peão, mesmo ocupando pouco espaço, traz o conforto necessário para os ambientes, sem precisar de exaustão, por conta da sua combustão a álcool de cereais.',
    combustiveis: ['alcool'],
    imagem: 'img/modelos/lareira-peao.webp',
    textoAlternativo: 'Lareira Peão, do Trio Chess: peça preta baixa, mais larga no meio, com o queimador no topo.',
    ambiente: { imagem: 'img/blog/trio-chess-casacor-mg.webp',
      textoAlternativo: 'As três lareiras do Trio Chess acesas sobre um deck de madeira à noite, diante de palmeiras.' },
    cores: CORES_ESCULTURAIS, fotos: [], palavrasBlog: ['Trio Chess'],
    versoes: { colunas: ['Álcool'], linhas: [
      { rotulo: 'Altura', valores: ['40 cm'] }, { rotulo: 'Diâmetro', valores: ['40 cm'] }, { rotulo: 'Peso', valores: ['10,4 kg'] } ] },
    medidas: { altura: '40 cm', largura: 'Ø 40 cm', peso: '10,4 kg' }
  },
  {
    // PROTÓTIPO: está no site atual, mas não no catálogo 2026. TODO: descrição e medidas.
    prototipo: true, etiqueta: 'Descrição e medidas em breve',
    categoria: 'lareiras', linha: 'ecoflamas',
    nome: 'Ecoflama Pot', slug: 'pot',
    descricao: '',
    combustiveis: ['alcool'],
    imagem: 'img/modelos/ecoflama-pot.webp',
    textoAlternativo: 'Ecoflama Pot: peça redonda e baixa, preta, com tampo de inox e o queimador no centro.',
    cores: [], fotos: [],
    medidas: { altura: '', largura: '', peso: '' }
  }
];
