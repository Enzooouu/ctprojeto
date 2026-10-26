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
   - combustiveis: 'lenha' | 'alcool' | 'gas' (o que o catálogo lista)
   - gasSobConsulta: true quando o catálogo diz "opção a gás sob consulta"
   - imagem / textoAlternativo: foto do produto (fundo branco)
   - ambiente (opcional): { imagem, textoAlternativo } foto num projeto real,
     que aparece ao passar o mouse ou focar o cartão
   - cores: amostras do catálogo
   - medidas: { altura, largura, peso } para a tabela de comparação
     (largura pode ser diâmetro: "Ø 47,5 cm")
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
    combustiveis: ['lenha', 'alcool'], gasSobConsulta: true,
    imagem: 'img/modelos/lareira-tarus.webp',
    textoAlternativo: 'Lareira Tarus preta, suspensa por um tubo, em formato de meia-lua com a chama à mostra.',
    ambiente: { imagem: 'img/blog/lareira-tarus-giovanna-leal.webp',
      textoAlternativo: 'Lareira Tarus marrom sobre um banco curvo de pedra clara, em sala revestida de madeira.' },
    cores: CORES_ESCULTURAIS,
    medidas: { altura: '50 cm', largura: '100 cm', peso: '45 kg' }
  },
  {
    categoria: 'lareiras', linha: 'esculturais',
    nome: 'Lareira Gota', slug: 'gota',
    descricao: 'Trazendo elegância para os ambientes em que está presente, a Lareira Gota chama atenção em qualquer espaço em que estiver, proporcionando o ambiente ideal.',
    combustiveis: ['lenha', 'alcool'], gasSobConsulta: true,
    imagem: 'img/modelos/lareira-gota.webp',
    textoAlternativo: 'Lareira Gota preta, suspensa por um tubo, em formato de cone baixo com a chama à mostra.',
    ambiente: { imagem: 'img/blog/lareira-gota-entre-linhas-office.webp',
      textoAlternativo: 'Lareira Gota preta acesa ao lado de um pufe caramelo e de pilhas de livros, diante de cortinas claras.' },
    cores: CORES_ESCULTURAIS,
    medidas: { altura: '67,5 a 70 cm', largura: '100 cm', peso: '75 kg' }
  },
  {
    categoria: 'lareiras', linha: 'esculturais',
    nome: 'Lareira Cone', slug: 'cone',
    descricao: 'A Lareira Cone é uma de nossas lareiras mais queridas quando o assunto é arquitetura. Seu design diferenciado já brilhou em várias mostras ao redor do Brasil, como Belo Horizonte e São Paulo.',
    combustiveis: ['lenha', 'alcool'], gasSobConsulta: true,
    imagem: 'img/modelos/lareira-cone.webp',
    textoAlternativo: 'Lareira Cone preta: um cone suspenso sobre um prato baixo com a chama acesa.',
    ambiente: { imagem: 'img/blog/casa-cosentino-cone.webp',
      textoAlternativo: 'Lareira Cone marrom no centro de um living de pé-direito alto, com sofá mostarda e painel colorido.' },
    cores: CORES_ESCULTURAIS,
    medidas: { altura: '150 cm (cone)', largura: 'Ø 80 a 100 cm', peso: '112,5 a 144 kg' }
  },
  {
    categoria: 'lareiras', linha: 'esculturais',
    nome: 'Lareira Pipe', slug: 'pipe',
    descricao: 'A Lareira Pipe se destaca pela modernidade, sendo perfeita para ambientes menores, onde traz conforto e elegância ocupando pouco espaço.',
    combustiveis: ['lenha', 'alcool'], gasSobConsulta: true,
    imagem: 'img/modelos/lareira-pipe.webp',
    textoAlternativo: 'Lareira Pipe preta, cilíndrica e vertical, com a portinhola de vidro aberta e a chama acesa.',
    ambiente: { imagem: 'img/blog/sala-clareira-pipe-fendi.webp',
      textoAlternativo: 'Lareira Pipe na cor Fendi presa à parede de madeira escura, ao lado de um sofá curvo.' },
    cores: CORES_ESCULTURAIS,
    medidas: { altura: '200 cm', largura: 'Ø 47,5 cm', peso: '110 kg' }
  },
  {
    categoria: 'lareiras', linha: 'esculturais',
    nome: 'Lareira Francesa', slug: 'francesa',
    descricao: 'A imponente e icônica Lareira Francesa traz a mistura perfeita entre o clássico e o moderno, trazendo conforto e sofisticação a todos os ambientes em que está presente.',
    combustiveis: ['lenha', 'alcool'], gasSobConsulta: true,
    imagem: 'img/modelos/lareira-francesa.webp',
    textoAlternativo: 'Lareira Francesa preta apoiada no chão, em formato de cone inclinado com abertura oval e lenha acesa.',
    cores: CORES_ESCULTURAIS,
    medidas: { altura: '105 cm', largura: '100 cm', peso: '90 kg' }
  },
  {
    categoria: 'lareiras', linha: 'esculturais',
    nome: 'Lareira Balaio', slug: 'balaio',
    descricao: 'Desenhada pelo renomado arquiteto Quintino Facci, a Lareira Escultural Balaio proporciona um ambiente aconchegante e sofisticado.',
    // O texto do catálogo cita lenha e álcool, mas as especificações só trazem álcool
    combustiveis: ['alcool'],
    imagem: 'img/modelos/lareira-balaio.webp',
    textoAlternativo: 'Lareira Balaio preta: um cilindro suspenso por quatro hastes sobre um grande prato redondo com o queimador no centro.',
    cores: CORES_ESCULTURAIS,
    medidas: { altura: '215 cm', largura: 'Ø 100 cm', peso: '58 kg' }
  }
];
