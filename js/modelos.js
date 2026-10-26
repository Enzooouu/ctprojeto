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
   - prototipo: true quando ainda faltam dados reais. Imagem, combustíveis,
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
      'Essa peça se tornou um marco do minimalismo dos últimos anos. O formato cilíndrico traz um tom retilíneo, e a portinhola com vidro deixa a beleza da chama à vista, numa releitura moderna da tela que cobre o braseiro de outros modelos.'
    ],
    citacao: { texto: 'A gente tem aqui um diálogo de peças metálicas, peças orgânicas que no contraste se conversam.',
      autor: 'Bernardo Barcellos, sobre a Eco Casa da L.ara Arquitetura, CASACOR Minas 2026' },
    fotos: [
      { imagem: 'img/blog/sala-clareira-pipe-fendi.webp', textoAlternativo: 'Lareira Pipe na cor Fendi presa à parede de madeira escura, ao lado de um sofá curvo, na Sala Clareira da Sala 2 Arquitetura.' },
      { imagem: 'img/blog/tendencias-2026-pipe.webp', textoAlternativo: 'Lareira Pipe branca suspensa diante de paredes de madeira escura iluminadas por uma sanca, com sofá e mesa de centro.' }
    ],
    versoes: {
      colunas: ['Lenha', 'Álcool'],
      linhas: [
        { rotulo: 'Altura', valores: ['200 cm', '200 cm'] },
        { rotulo: 'Diâmetro', valores: ['47,5 cm', '47,5 cm'] },
        { rotulo: 'Peso', valores: ['110 kg', '110 kg'] }
      ]
    },
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
      'A primeira lareira escultural criada por Roberto Cassab, diretor fundador da Construflama, traz referências do design clássico europeu com um ar campestre. Costuma ficar perto das paredes, em espaços de identidade mais atemporal, com elementos vintage inspirados naquilo que nunca sai de moda: a elegância.'
    ],
    citacao: { texto: 'A gente quis trazer essa lareira para dentro do espaço para criar dentro do conceito da “Casa Carioca” não só perto de praia, mas em qualquer região do Rio de Janeiro ou até outro lugar.',
      autor: 'Cadé Marino, sobre o Espaço Deca, a “Casa Abraço”, da CASACOR Rio 2026' },
    fotos: [],
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
    texto: [],
    fotos: [],
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
    // TODO: foto do produto, combustíveis, cores e medidas (o Enzo vai conseguir).
    prototipo: true,
    categoria: 'lareiras', linha: 'esculturais',
    nome: 'Lareira Pilão', slug: 'pilao',
    // Do artigo do blog "Descubra os modelos da linha Escultural"
    descricao: 'O mais recente lançamento da linha: uma peça robusta que faz a referência rústica se apresentar de forma elegante, desenvolvida com o escritório brasiliense MAAI Arquitetura para a CASACOR São Paulo.',
    combustiveis: [],
    imagem: '',
    textoAlternativo: '',
    ambiente: { imagem: 'img/blog/living-ritmo-vital-pilao.webp',
      textoAlternativo: 'Lareira Pilão, de metal escuro, sobre uma base com lenha, diante de paredes de palha trançada, no Living Ritmo Vital da MAAI Arquitetura, CASACOR São Paulo 2026.' },
    cores: [],
    texto: [
      'A Pilão foi desenvolvida em conjunto com o escritório brasiliense MAAI Arquitetura, que trouxe referências ancestrais do Centro-Oeste para a CASACOR São Paulo.'
    ],
    citacao: { texto: 'Esse formato mais rústico com essa tendência mais feita a mão.',
      autor: 'Mônica Pinto, sócia e diretora de relacionamento da MAAI Arquitetura, sobre o Living Ritmo Vital' },
    fotos: [],
    medidas: { altura: '', largura: '', peso: '' }
  }
];
