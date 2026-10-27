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
   - downloads (opcional): [{ texto, arquivo, tamanho }] manuais do modelo;
     externo: 'texto' para link de outro site, que abre em nova aba (ex.: 3D)
   - versoes.titulo (opcional): título da tabela (padrão: "Medidas da <nome>")
   - palavrasBlog (opcional): termos para achar artigos do blog (padrão: o nome)
   - cores: null para peças em inox, sem opção de cor (a linha "Cores" some)
   - combustíveis das churrasqueiras: 'carvao' | 'gas'
   - prototipo: true quando ainda faltam dados reais; etiqueta: texto do selo. Imagem, combustíveis,
     cores ou medidas vazios aparecem marcados como "em breve" / "a confirmar".
   ========================================================================== */
var CORES_ESCULTURAIS = [
  { nome: 'preto', cor: '#1E1B19' },
  { nome: 'marrom', cor: '#7A3E12' },
  { nome: 'branco', cor: '#F5F2EC' }
];

// Texto comum da linha Soft: artigo "Descubra qual é a sua churrasqueira dos
// sonhos!" (blog) e site da Construflama (tamanhos da lista da linha)
var SOFT = [
  'Para quem busca qualidade, durabilidade e design, a Linha Soft é uma excelente opção. Produzida em aço inox 304, ela oferece a resistência do melhor aço do mercado, com espetos mais leves para dar agilidade ao manusear o alimento.',
  'Com versões e medidas padrão, que facilitam a instalação e atendem a diferentes tamanhos de projeto, é ideal para quem deseja um produto de alta qualidade com um investimento mais otimizado. A estrutura em chapa dobrada de 2 mm deixa a churrasqueira mais leve, prática e versátil.',
  'A grelha sobe e desce por manivela, com trava para ajustes precisos.',
  // TODO: confirmar a unidade (provavelmente centímetros de largura)
  'Disponível nos tamanhos 60, 70, 80, 90, 100 e 110.'
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
      { imagem: 'img/blog/lareira-cone-casacor.webp', textoAlternativo: 'Outro ângulo da sala com papel de parede de floresta: a Lareira Cone preta suspensa sobre a mesa de centro branca de formas orgânicas, com sofá claro e porta de madeira.' },
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
    texto: [
      // Do site da Construflama (página da Ecoflama Retangular)
      'Super práticas, as lareiras ecológicas Construflama não precisam de coifa de respiro e estão prontas para o uso, com combustão à base de álcool de cereais.',
      'São produzidas em aço inox 304 escovado de 5 mm de espessura e têm tanque duplo, hermeticamente soldado.',
      // Do manual técnico (LRA 035/100, revisão 4)
      'É fabricada em sete comprimentos, de 35 cm a 1 m, para ser embutida num nicho. Pedras vulcânicas e tampa para áreas externas são vendidas à parte.'
    ],
    combustiveis: ['alcool'],
    imagem: 'img/modelos/ecoflama-retangular.webp',
    textoAlternativo: 'Ecoflama Retangular em aço inox, com o queimador comprido e a haste para acender ao lado.',
    ambiente: { imagem: 'img/modelos/ecoflama-retangular-pedra.webp',
      textoAlternativo: 'Ecoflama Retangular acesa, embutida num longo banco de pedra clara diante de uma parede de pedra.' },
    cores: null, fotos: [
      // Do site da Construflama (página da Ecoflama Retangular)
      { imagem: 'img/modelos/ecoflama-retangular-pedra.webp', textoAlternativo: 'Ecoflama Retangular acesa, embutida num longo banco de pedra clara diante de uma parede de pedra, com poltronas de couro e mesa baixa.' },
      { imagem: 'img/modelos/ecoflama-retangular-plantas.webp', textoAlternativo: 'Ecoflama Retangular acesa, embutida num banco de mármore rosado, ao lado de vasos de plantas sobre piso de taco.' },
      // Do blog (mesmo projeto da foto anterior)
      { imagem: 'img/blog/loft-alvora-ecoflama.webp', textoAlternativo: 'Vista ampla do Loft Alvorá, de Paula Neder, na CASACOR São Paulo 2025: a Ecoflama Retangular embutida num nicho de pedra rosada sob uma bancada de madeira clara, com poltrona Bowl preta, vasos de plantas e tapete listrado colorido. Foto de Max Fahrer.' },
      { imagem: 'img/blog/ecoflama-framo-casacor-mg.webp', textoAlternativo: 'Ecoflama Retangular acesa num nicho de quartzito avermelhado, diante de uma poltrona e de um pufe de couro preto, em sala de paredes de madeira escura, no ambiente Encontro e Alento, de Francisco Morais (Framo Arquitetura), CASACOR Minas 2025.' },
      { imagem: 'img/blog/lareira-apartamento.webp', textoAlternativo: 'Ecoflama Retangular acesa num nicho de mármore claro, na ponta de um móvel de madeira com portas perfuradas, diante de um sofá branco. Ambiente de Nathalia Candelária, foto de Rafael Renzo.' },
      { imagem: 'img/blog/ecoflama-linear.webp', textoAlternativo: 'Ecoflama Retangular acesa, embutida numa bancada curva cinza com um canteiro de musgo e uma árvore seca, ao lado de uma poltrona de bouclê e de um sofá claro. Na imagem, a peça aparece com o nome Ecoflama Linear.' },
      { video: 'CmpUd5KWtEY', textoAlternativo: 'Como acender e usar a Ecoflama Construflama' }
    ],
    versoes: {
      rotuloLinhas: 'Modelo',
      colunas: ['Comprimento', 'Peso', 'Reservatório de álcool', 'Duração da queima'],
      linhas: [
        { rotulo: 'LRA-035-RT', valores: ['35 cm', '4,5 kg', '1,5 L', '1h30'] },
        { rotulo: 'LRA-050-RT', valores: ['50 cm', '6,5 kg', '2,4 L', '2h20'] },
        { rotulo: 'LRA-060-RT', valores: ['60 cm', '7 kg', '2,4 L', '2h20'] },
        { rotulo: 'LRA-070-RT', valores: ['70 cm', '7,5 kg', '2,4 L', '2h20'] },
        { rotulo: 'LRA-080-RT', valores: ['80 cm', '8,5 kg', '4,2 L', '4h10'] },
        { rotulo: 'LRA-090-RT', valores: ['90 cm', '9 kg', '4,2 L', '4h10'] },
        { rotulo: 'LRA-100-RT', valores: ['1 m', '9,5 kg', '4,2 L', '4h10'] }
      ],
      nota: 'Do manual técnico das Ecoflamas (revisão 4, abril de 2022). Todos os modelos têm 19,5 cm de largura e 7 cm de altura.'
    },
    downloads: [
      { texto: 'Baixar manual técnico', arquivo: 'catalogos/manual-ecoflamas-lra.pdf', tamanho: '5,4 MB' }
    ],
    medidas: { altura: '7 cm', largura: '35 cm a 1 m', peso: '4,5 a 9,5 kg' }
  },
  {
    categoria: 'lareiras', linha: 'ecoflamas',
    nome: 'Ecoflama Canoa', slug: 'canoa',
    descricao: 'A icônica Lareira Ecológica Canoa brilha por sua portabilidade e design. Podendo até mesmo ficar em cima de mesas, essa Ecoflama tem acendimento a álcool de cereais, o que facilita o seu uso.',
    texto: [
      'Disponível também na versão de 70 cm. Não precisa de nicho nem de instalação: é só apoiar e acender.',
      // Do site da Construflama (texto comum às Ecoflamas)
      'Super práticas, as lareiras ecológicas Construflama não precisam de coifa de respiro e estão prontas para o uso, com combustão à base de álcool de cereais.',
      'São produzidas em aço inox 304 escovado de 5 mm de espessura e têm tanque duplo, hermeticamente soldado.'
    ],
    combustiveis: ['alcool'],
    imagem: 'img/modelos/ecoflama-canoa.webp',
    textoAlternativo: 'Ecoflama Canoa: queimador de inox sobre uma base curva branca em forma de canoa, com pés finos, e a haste para acender.',
    ambiente: { imagem: 'img/modelos/ecoflama-canoa-mesa.webp',
      textoAlternativo: 'Ecoflama Canoa acesa sobre uma mesa redonda de fibra trançada, diante de estantes de madeira.' },
    cores: null, fotos: [
      { imagem: 'img/modelos/ecoflama-canoa-mesa.webp', textoAlternativo: 'Ecoflama Canoa de inox escuro acesa, com chamas altas, sobre uma mesa redonda de fibra trançada, diante de estantes de madeira e de um quadro colorido.' },
      { video: 'CmpUd5KWtEY', textoAlternativo: 'Como acender e usar a Ecoflama Construflama' }
    ],
    versoes: {
      rotuloLinhas: 'Modelo',
      colunas: ['Comprimento', 'Peso', 'Reservatório de álcool', 'Duração da queima'],
      linhas: [
        { rotulo: 'LRA-050-CN', valores: ['50 cm', '7 kg', '3 L', '3h'] },
        { rotulo: 'LRA-070-CN', valores: ['70 cm', '8 kg', '3 L', '3h'] }
      ],
      nota: 'Do manual técnico das Ecoflamas (revisão 4, abril de 2022). Os dois modelos têm 19,5 cm de largura e 12 cm de altura.'
    },
    downloads: [
      { texto: 'Baixar manual técnico', arquivo: 'catalogos/manual-ecoflamas-lra.pdf', tamanho: '5,4 MB' }
    ],
    medidas: { altura: '12 cm', largura: '50 ou 70 cm', peso: '7 ou 8 kg' }
  },
  {
    categoria: 'lareiras', linha: 'ecoflamas',
    nome: 'Ecoflama Redonda', slug: 'redonda',
    descricao: 'Nossas Ecoflamas Redondas podem ser embutidas em mesas e móveis desenhados por nós da Construflama, ou até mesmo ser encaixadas em nichos já disponíveis em sua casa.',
    texto: [
      'Disponível também nos diâmetros de 40 a 70 cm.',
      'Pedras vulcânicas e tampa para áreas externas são vendidas à parte.',
      // Do site da Construflama (texto comum às Ecoflamas)
      'Super práticas, as lareiras ecológicas Construflama não precisam de coifa de respiro e estão prontas para o uso, com combustão à base de álcool de cereais.',
      'São produzidas em aço inox 304 escovado de 5 mm de espessura e têm tanque duplo, hermeticamente soldado.'
    ],
    combustiveis: ['alcool'],
    imagem: 'img/modelos/ecoflama-redonda.webp',
    textoAlternativo: 'Ecoflama Redonda em aço inox, com o queimador no centro do disco e a haste para acender.',
    ambiente: { imagem: 'img/modelos/ecoflama-redonda-mesa.webp',
      textoAlternativo: 'Ecoflama Redonda acesa, embutida no centro de uma mesa redonda bege, ao lado de uma cadeira de madeira.' },
    cores: null, fotos: [
      { imagem: 'img/modelos/ecoflama-redonda-mesa.webp', textoAlternativo: 'Ecoflama Redonda acesa, embutida no centro de uma mesa redonda bege sobre um tapete cinza, ao lado de uma cadeira de madeira com almofada clara e pedriscos ao fundo.' },
      { video: 'CmpUd5KWtEY', textoAlternativo: 'Como acender e usar a Ecoflama Construflama' }
    ],
    versoes: {
      rotuloLinhas: 'Modelo',
      colunas: ['Diâmetro', 'Peso', 'Reservatório de álcool', 'Duração da queima'],
      linhas: [
        { rotulo: 'LRA-040-RD', valores: ['40 cm', '6,5 kg', '1,5 L', '1h30'] },
        { rotulo: 'LRA-050-RD', valores: ['50 cm', '7 kg', '2,4 L', '2h20'] },
        { rotulo: 'LRA-060-RD', valores: ['60 cm', '7,5 kg', '2,4 L', '2h20'] },
        { rotulo: 'LRA-070-RD', valores: ['70 cm', '8 kg', '2,4 L', '2h20'] }
      ],
      nota: 'Do manual técnico das Ecoflamas (revisão 4, abril de 2022). Todos os modelos têm 7 cm de altura.'
    },
    downloads: [
      { texto: 'Baixar manual técnico', arquivo: 'catalogos/manual-ecoflamas-lra.pdf', tamanho: '5,4 MB' }
    ],
    medidas: { altura: '7 cm', largura: 'Ø 40 a 70 cm', peso: '6,5 a 8 kg' }
  },
  {
    categoria: 'lareiras', linha: 'ecoflamas',
    nome: 'Ecoflama Marroquina', slug: 'marroquina',
    descricao: 'Uma icônica peça de design by Construflama, a Ecoflama Marroquina tem um aspecto único que sua casa merece e precisa ter.',
    texto: [
      'Não precisa de nicho nem de instalação: é só apoiar e acender.',
      // Do site da Construflama (texto comum às Ecoflamas)
      'Super práticas, as lareiras ecológicas Construflama não precisam de coifa de respiro e estão prontas para o uso, com combustão à base de álcool de cereais.',
      'São produzidas em aço inox 304 escovado de 5 mm de espessura e têm tanque duplo, hermeticamente soldado.'
    ],
    combustiveis: ['alcool'],
    imagem: 'img/modelos/lareira-marroquina.webp',
    textoAlternativo: 'Ecoflama Marroquina: caixa quadrada de aço cor de ferrugem com as laterais vazadas em desenho geométrico.',
    ambiente: { imagem: 'img/modelos/lareira-marroquina-acesa.webp',
      textoAlternativo: 'Ecoflama Marroquina acesa, com a luz da chama passando pelo desenho vazado.' },
    cores: CORES_ESCULTURAIS, fotos: [
      // Do site da Construflama (página da Ecoflama Marroquina)
      { imagem: 'img/modelos/lareira-marroquina-acesa.webp', textoAlternativo: 'Ecoflama Marroquina acesa, com a luz da chama passando pelo desenho vazado, ao lado de um vaso de lavanda e de uma espreguiçadeira.' },
      { imagem: 'img/modelos/lareira-marroquina-varanda.webp', textoAlternativo: 'Ecoflama Marroquina acesa numa varanda, entre um grande vaso de lavanda, uma espreguiçadeira e um sofá curvo ao fundo.' },
      { video: 'CmpUd5KWtEY', textoAlternativo: 'Como acender e usar a Ecoflama Construflama' }
    ],
    versoes: {
      rotuloLinhas: 'Medida',
      colunas: ['Álcool'],
      linhas: [
        { rotulo: 'Altura', valores: ['40 cm'] },
        { rotulo: 'Largura e profundidade', valores: ['30 cm'] },
        { rotulo: 'Peso', valores: ['10 kg'] },
        { rotulo: 'Reservatório de álcool', valores: ['0,5 L'] },
        { rotulo: 'Duração da queima', valores: ['30 min'] }
      ],
      nota: 'Do manual técnico das Ecoflamas (revisão 4, abril de 2022).'
    },
    downloads: [
      { texto: 'Baixar manual técnico', arquivo: 'catalogos/manual-ecoflamas-lra.pdf', tamanho: '5,4 MB' }
    ],
    medidas: { altura: '40 cm', largura: '30 cm', peso: '10 kg' }
  },
  {
    categoria: 'lareiras', linha: 'ecoflamas',
    nome: 'Trio Chess Rainha', slug: 'rainha',
    descricao: 'A Lareira Rainha é o destaque do Trio Chess pela sofisticação do seu design. Uma peça que se encaixa em ambientes internos reduzidos ou amplos e externos.',
    texto: [
      // Do site da Construflama (texto comum às Ecoflamas)
      'Super práticas, as lareiras ecológicas Construflama não precisam de coifa de respiro e estão prontas para o uso, com combustão à base de álcool de cereais.',
      'São produzidas em aço inox 304 escovado de 5 mm de espessura e têm tanque duplo, hermeticamente soldado.'
    ],
    combustiveis: ['alcool'],
    imagem: 'img/modelos/lareira-rainha.webp',
    textoAlternativo: 'Lareira Rainha, do Trio Chess: peça preta formada por dois cones unidos pela ponta, com o queimador no topo.',
    ambiente: { imagem: 'img/modelos/lareira-rainha-poltrona.webp',
      textoAlternativo: 'Lareira Rainha preta sobre pedriscos, ao lado de uma poltrona de corda azul.' },
    cores: CORES_ESCULTURAIS, fotos: [
      { imagem: 'img/modelos/lareira-rainha-jardim.webp', textoAlternativo: 'Lareira Rainha preta num jardim tropical de pedriscos, ao lado de uma poltrona de corda azul, com vasos azuis, pufes verdes e um guarda-sol de franjas.' },
      { imagem: 'img/modelos/lareira-rainha-poltrona.webp', textoAlternativo: 'Close da Lareira Rainha preta sobre pedriscos, ao lado de uma poltrona de corda azul.' },
      { imagem: 'img/modelos/lareira-rainha-jardim-vertical.webp', textoAlternativo: 'Vista vertical do jardim tropical com a Lareira Rainha em primeiro plano, poltronas de corda azul, mesa de tronco e, ao fundo, a Lareira Peão.' },
      // Do blog: o Trio Chess completo
      { imagem: 'img/blog/tipos-de-lareiras-ecologicas.webp', textoAlternativo: 'As três peças do Trio Chess, Rainha, Torre e Peão, pretas e acesas sobre um tapete cinza, diante de um sofá e de uma mesa de centro baixa.' },
      { imagem: 'img/blog/trio-chess-casacor-mg.webp', textoAlternativo: 'As três peças do Trio Chess acesas sobre um deck de madeira à noite, diante de palmeiras, no Niê Giardino de Izabella Stambassi, CASACOR Minas Gerais 2025. Foto de Gustavo Xavier.' },
      { video: 'CmpUd5KWtEY', textoAlternativo: 'Como acender e usar a Ecoflama Construflama' }
    ], palavrasBlog: ['Trio Chess'],
    versoes: { colunas: ['Álcool'], linhas: [
      { rotulo: 'Altura', valores: ['40 cm'] }, { rotulo: 'Diâmetro', valores: ['40 cm'] }, { rotulo: 'Peso', valores: ['12,5 kg'] } ] },
    medidas: { altura: '40 cm', largura: 'Ø 40 cm', peso: '12,5 kg' }
  },
  {
    categoria: 'lareiras', linha: 'ecoflamas',
    nome: 'Trio Chess Torre', slug: 'torre',
    descricao: 'Nada como uma peça de design que traz sofisticação e conforto para o seu lar. Com seu fácil acendimento a álcool de cereais, a Lareira Ecológica Torre traz comodidade e estilo, podendo ser instalada em pequenos espaços.',
    texto: [
      // Do site da Construflama (texto comum às Ecoflamas)
      'Super práticas, as lareiras ecológicas Construflama não precisam de coifa de respiro e estão prontas para o uso, com combustão à base de álcool de cereais.',
      'São produzidas em aço inox 304 escovado de 5 mm de espessura e têm tanque duplo, hermeticamente soldado.'
    ],
    combustiveis: ['alcool'],
    imagem: 'img/modelos/lareira-torre.webp',
    textoAlternativo: 'Lareira Torre, do Trio Chess: cilindro preto sobre uma base em cone, com o queimador no topo.',
    ambiente: { imagem: 'img/modelos/lareira-torre-jardim-3.webp',
      textoAlternativo: 'Lareira Torre preta num jardim de pedriscos, ao lado de uma poltrona de corda verde.' },
    cores: CORES_ESCULTURAIS, fotos: [
      { imagem: 'img/modelos/lareira-torre-jardim-1.webp', textoAlternativo: 'Lareira Torre preta sobre pedriscos num jardim, ao lado de uma poltrona de corda verde e um pufe, diante de um painel de vidro.' },
      { imagem: 'img/modelos/lareira-torre-jardim-2.webp', textoAlternativo: 'Outro ângulo da Lareira Torre no jardim, com poltrona de corda verde, pufe claro e folhagens.' },
      { imagem: 'img/modelos/lareira-torre-jardim-3.webp', textoAlternativo: 'Lareira Torre preta no jardim de pedriscos, entre a poltrona de corda verde e palmeiras, com o reflexo no vidro ao fundo.' },
      { imagem: 'img/modelos/lareira-torre-jardim-4.webp', textoAlternativo: 'Close da Lareira Torre preta ao lado de um pufe verde-claro e de uma poltrona de corda, sob a luz do sol.' },
      { imagem: 'img/modelos/lareira-torre-detalhe.webp', textoAlternativo: 'Detalhe do topo da Lareira Torre, com a plaqueta Construflama e o queimador de inox.' },
      // Do blog: o Trio Chess completo
      { imagem: 'img/blog/tipos-de-lareiras-ecologicas.webp', textoAlternativo: 'As três peças do Trio Chess, Rainha, Torre e Peão, pretas e acesas sobre um tapete cinza, diante de um sofá e de uma mesa de centro baixa.' },
      { imagem: 'img/blog/trio-chess-casacor-mg.webp', textoAlternativo: 'As três peças do Trio Chess acesas sobre um deck de madeira à noite, diante de palmeiras, no Niê Giardino de Izabella Stambassi, CASACOR Minas Gerais 2025. Foto de Gustavo Xavier.' },
      { video: 'CmpUd5KWtEY', textoAlternativo: 'Como acender e usar a Ecoflama Construflama' }
    ], palavrasBlog: ['Trio Chess'],
    versoes: { colunas: ['Álcool'], linhas: [
      { rotulo: 'Altura', valores: ['36 cm'] }, { rotulo: 'Diâmetro', valores: ['30 cm'] }, { rotulo: 'Peso', valores: ['10,24 kg'] } ] },
    medidas: { altura: '36 cm', largura: 'Ø 30 cm', peso: '10,24 kg' }
  },
  {
    categoria: 'lareiras', linha: 'ecoflamas',
    nome: 'Trio Chess Peão', slug: 'peao',
    descricao: 'Nossa compacta Lareira Ecológica Peão, mesmo ocupando pouco espaço, traz o conforto necessário para os ambientes, sem precisar de exaustão, por conta da sua combustão a álcool de cereais.',
    texto: [
      // Do site da Construflama (texto comum às Ecoflamas)
      'Super práticas, as lareiras ecológicas Construflama não precisam de coifa de respiro e estão prontas para o uso, com combustão à base de álcool de cereais.',
      'São produzidas em aço inox 304 escovado de 5 mm de espessura e têm tanque duplo, hermeticamente soldado.'
    ],
    combustiveis: ['alcool'],
    imagem: 'img/modelos/lareira-peao.webp',
    textoAlternativo: 'Lareira Peão, do Trio Chess: peça preta baixa, mais larga no meio, com o queimador no topo.',
    ambiente: { imagem: 'img/blog/tipos-de-lareiras-ecologicas.webp',
      textoAlternativo: 'As três peças do Trio Chess acesas sobre um tapete cinza, diante de um sofá.' },
    cores: CORES_ESCULTURAIS, fotos: [
      { imagem: 'img/modelos/lareira-peao-rainha-acesas.webp', textoAlternativo: 'Lareiras Peão e Rainha pretas e acesas, com chamas altas, sobre um tapete cinza ao lado de um sofá e de uma mesa de centro baixa.' },
      // Do blog: o Trio Chess completo
      { imagem: 'img/blog/tipos-de-lareiras-ecologicas.webp', textoAlternativo: 'As três peças do Trio Chess, Rainha, Torre e Peão, pretas e acesas sobre um tapete cinza, diante de um sofá e de uma mesa de centro baixa.' },
      { imagem: 'img/blog/trio-chess-casacor-mg.webp', textoAlternativo: 'As três peças do Trio Chess acesas sobre um deck de madeira à noite, diante de palmeiras, no Niê Giardino de Izabella Stambassi, CASACOR Minas Gerais 2025. Foto de Gustavo Xavier.' },
      { video: 'CmpUd5KWtEY', textoAlternativo: 'Como acender e usar a Ecoflama Construflama' }
    ], palavrasBlog: ['Trio Chess'],
    versoes: { colunas: ['Álcool'], linhas: [
      { rotulo: 'Altura', valores: ['40 cm'] }, { rotulo: 'Diâmetro', valores: ['40 cm'] }, { rotulo: 'Peso', valores: ['10,4 kg'] } ] },
    medidas: { altura: '40 cm', largura: 'Ø 40 cm', peso: '10,4 kg' }
  },
  {
    // PROTÓTIPO: está no site atual (sem texto), mas não no catálogo 2026. TODO: descrição e medidas.
    prototipo: true, etiqueta: 'Descrição e medidas em breve',
    categoria: 'lareiras', linha: 'ecoflamas',
    nome: 'Ecoflama Pot', slug: 'pot',
    descricao: '',
    texto: [
      // Do site da Construflama (texto comum às Ecoflamas)
      'Super práticas, as lareiras ecológicas Construflama não precisam de coifa de respiro e estão prontas para o uso, com combustão à base de álcool de cereais.',
      'São produzidas em aço inox 304 escovado de 5 mm de espessura e têm tanque duplo, hermeticamente soldado.'
    ],
    combustiveis: ['alcool'],
    imagem: 'img/modelos/ecoflama-pot.webp',
    textoAlternativo: 'Ecoflama Pot: peça redonda e baixa, preta, com tampo de inox e o queimador no centro.',
    cores: [], fotos: [
      { video: 'CmpUd5KWtEY', textoAlternativo: 'Como acender e usar a Ecoflama Construflama' }
    ],
    medidas: { altura: '', largura: '', peso: '' }
  },

  /* ---------------- Churrasqueiras Soft ----------------
     Fonte: site da Construflama (lista da linha Soft) e o artigo "Descubra
     qual é a sua churrasqueira dos sonhos!" (blog). Faltam a página de cada
     modelo, as fotos em tamanho original e as medidas. */
  {
    categoria: 'churrasqueiras', linha: 'soft',
    nome: 'Churrasqueira Soft a carvão', slug: 'a-carvao',
    // Do site da Construflama (página da Churrasqueira Soft a carvão)
    descricao: 'O bom churrasco é aquele que os amigos e a família elogiam, e cada um tem seu segredo. O nosso é atender os churrasqueiros mais exigentes, unindo tradição, tecnologia e personalização.',
    texto: [
      'As churrasqueiras a carvão Construflama são produzidas em aço inox 304 escovado e revestidas com placas refratárias. Todas podem ter porta-espetos, inclusive na opção com espetos em balanço, e a altura da grelha é regulável.',
      'Nossas churrasqueiras são testadas e aprovadas por grandes mestres.'
    ].concat(SOFT.slice(0, 2)),
    combustiveis: ['carvao'],
    imagem: 'img/modelos/churrasqueira-soft-carvao.webp',
    textoAlternativo: 'Churrasqueira Soft a carvão em aço inox escovado: caixa retangular com duas grelhas, quatro espetos em balanço e cavalete com manivela lateral no alto.',
    ambiente: { imagem: 'img/modelos/churrasqueira-soft-carvao-cozinha.webp',
      textoAlternativo: 'Churrasqueira Soft a carvão embutida numa bancada de mármore claro, ao lado de um cooktop e de um vaso com planta.' },
    fotos: [
      { imagem: 'img/modelos/churrasqueira-soft-carvao-cozinha.webp', textoAlternativo: 'Churrasqueira Soft a carvão embutida numa bancada de mármore claro, com a manivela lateral, grelhas suspensas por cabos, quatro espetos e a caixa revestida de placas refratárias, ao lado de um cooktop e de um vaso com planta.' }
    ],
    // Tipos do site, montados como tabela (espetos × cavalete e manivela)
    versoes: {
      titulo: 'Versões da Churrasqueira Soft a carvão',
      rotuloLinhas: 'Espetos',
      colunas: ['Manivela lateral', 'Manivela frontal', 'Sem cavalete'],
      linhas: [
        { rotulo: 'Em balanço', valores: ['Disponível', 'Disponível', 'Disponível'] },
        { rotulo: 'Porta-espetos', valores: ['Não', 'Disponível', 'Disponível'] }
      ],
      // TODO: confirmar a unidade dos tamanhos (provavelmente centímetros de largura)
      nota: 'Todas as versões nos tamanhos 60, 70, 80, 90, 100 e 110. A equipe confirma as medidas do seu projeto.'
    },
    downloads: [
      // Modelo 3D da versão com porta-espeto e manivela frontal
      { texto: 'Baixar 3D', externo: 'SketchUp', arquivo: 'https://3dwarehouse.sketchup.com/model/9a515822-6af3-4eb8-acbd-7c3f666cc06b/CHURRASQUEIRA-SOFT-CARV%C3%83O-PORTA-ESPETO-FRONTAL' }
    ],
    cores: null, palavrasBlog: ['Linha Soft'],
    medidas: { altura: '', largura: '60 a 110', peso: '' }
  },
  {
    categoria: 'churrasqueiras', linha: 'soft',
    nome: 'Churrasqueira Soft com tampa', slug: 'com-tampa',
    // Do site da Construflama (página da Churrasqueira Soft com tampa)
    descricao: 'Design e tecnologia juntos, com o mais alto padrão de eficiência.',
    texto: [
      'A Churrasqueira Soft com tampa é produzida em aço inox 304 e está disponível a gás, a carvão ou com queimador infravermelho (infrared), em diversos tamanhos.'
    ].concat(SOFT.slice(1, 2)),   // sem o parágrafo dos espetos, que ela não tem
    combustiveis: ['carvao', 'gas'],
    imagem: 'img/modelos/churrasqueira-soft-tampa.webp',
    textoAlternativo: 'Churrasqueira Soft com tampa em aço inox escovado: caixa retangular fechada por uma tampa inclinada, com termômetro redondo e puxador comprido.',
    ambiente: { imagem: 'img/modelos/churrasqueira-soft-tampa-cozinha-luz.webp',
      textoAlternativo: 'Churrasqueira Soft com tampa embutida numa bancada branca, sob uma coifa de inox, ao lado da pia, numa cozinha de armários rosados.' },
    fotos: [
      { imagem: 'img/modelos/churrasqueira-soft-tampa-cozinha.webp', textoAlternativo: 'Cozinha de armários rosados com bancada branca, vaso de planta, cuba de inox e adega; à direita, a Churrasqueira Soft com tampa a gás, com três botões, sob uma coifa de inox.' },
      { imagem: 'img/modelos/churrasqueira-soft-tampa-cozinha-luz.webp', textoAlternativo: 'A mesma cozinha vista de lado, com a prateleira iluminada: a Churrasqueira Soft com tampa a gás embutida na bancada branca, sob a coifa de inox.' }
    ],
    versoes: {
      titulo: 'Versões da Churrasqueira Soft com tampa',
      rotuloLinhas: 'Tipo',
      colunas: ['Tamanhos'],
      linhas: [
        { rotulo: 'A gás', valores: ['60, 70, 80, 90, 100 e 110'] },
        { rotulo: 'A carvão', valores: ['60, 70, 80, 90, 100 e 110'] },
        { rotulo: 'Infravermelho (infrared)', valores: ['60, 70, 80, 90, 100 e 110'] }
      ],
      // TODO: confirmar a unidade dos tamanhos (provavelmente centímetros de largura)
      nota: 'Tamanhos do site da Construflama. A equipe confirma as medidas do seu projeto.'
    },
    downloads: [
      // Modelo 3D da versão a carvão de 80 (CH 80)
      { texto: 'Baixar 3D', externo: 'SketchUp', arquivo: 'https://3dwarehouse.sketchup.com/model/b5e3f3c5-1834-4fcf-b0ea-386e075f3759/CHURRASQUEIRA-SOFT-CARV%C3%83O-CH-80-TAMPA' }
    ],
    cores: null, palavrasBlog: ['Linha Soft'],
    medidas: { altura: '', largura: '60 a 110', peso: '' }
  },
  {
    categoria: 'churrasqueiras', linha: 'soft',
    nome: 'Churrasqueira Soft Clean', slug: 'clean',
    // O site não tem texto nesta página: texto da linha Soft (blog)
    texto: [
      'A Churrasqueira Soft Clean não tem cavalete: os espetos ficam apoiados na borda, sobre as grelhas. Está disponível a gás ou a carvão.'
    ].concat(SOFT.slice(0, 2)),
    combustiveis: ['carvao', 'gas'],
    imagem: 'img/modelos/churrasqueira-soft-clean.webp',
    textoAlternativo: 'Churrasqueira Soft Clean em aço inox escovado: caixa retangular baixa, sem cavalete, com duas grelhas e quatro espetos apoiados na borda.',
    versoes: {
      titulo: 'Versões da Churrasqueira Soft Clean',
      rotuloLinhas: 'Tipo',
      colunas: ['Tamanhos'],
      linhas: [
        { rotulo: 'A gás', valores: ['60, 70, 80, 90, 100 e 110'] },
        { rotulo: 'A carvão', valores: ['60, 70, 80, 90, 100 e 110'] }
      ],
      // TODO: confirmar a unidade dos tamanhos (provavelmente centímetros de largura)
      nota: 'Tamanhos do site da Construflama. A equipe confirma as medidas do seu projeto.'
    },
    downloads: [
      // Modelo 3D da versão a carvão de 80 (CH 80)
      { texto: 'Baixar 3D', externo: 'SketchUp', arquivo: 'https://3dwarehouse.sketchup.com/model/c707068d-3767-4948-a926-d3195e150ebf/CHURRASQUEIRA-SOFT-CARV%C3%83O-CLEAN-CH-80' }
    ],
    cores: null, palavrasBlog: ['Linha Soft'],
    medidas: { altura: '', largura: '60 a 110', peso: '' }
  },
  {
    categoria: 'churrasqueiras', linha: 'soft',
    nome: 'Churrasqueira Soft a gás', slug: 'a-gas',
    texto: SOFT,
    combustiveis: ['gas'],
    // Sem foto do produto em fundo branco. A foto da cozinha que o site usa
    // no cartão da Soft a gás é da Soft a carvão (na lista de problemas)
    imagem: '',
    ambiente: { imagem: 'img/blog/churrasqueira-soft.webp',
      textoAlternativo: 'Churrasqueira Soft a gás em aço inox, com manivela, espetos, duas grelhas e três botões de controle, embutida em bancada clara.' },
    fotos: [
      // Do blog ("Descubra qual é a sua churrasqueira dos sonhos!")
      { imagem: 'img/blog/churrasqueira-soft.webp', textoAlternativo: 'Churrasqueira Soft a gás em aço inox, com estrutura em chapa dobrada, manivela à direita, quatro espetos, duas grelhas e três botões de controle, embutida em bancada clara.' }
    ],
    cores: null, palavrasBlog: ['Linha Soft'],
    prototipo: true, etiqueta: 'Descrição e medidas em breve',
    medidas: { altura: '', largura: '', peso: '' }
  }
];
