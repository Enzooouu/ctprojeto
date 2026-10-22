/* ==========================================================================
   Construflama | Artigos do blog
   Carregado antes de main.js (sem fetch: funciona abrindo o arquivo direto).
   blog.html lista os artigos; post.html?slug=... mostra um artigo.

   BLOG_CATEGORIAS: ordem dos filtros da lista (depois de "Todos").
   - slug igual ao de CATEGORIAS (main.js) usa o nome e a ilustração de lá;
   - categorias só do blog (Projetos, Dicas) trazem o próprio nome.

   POSTS (a ordem no arquivo não importa: o site ordena pela data, do mais
   novo para o mais antigo, e o MAIS RECENTE vira o artigo grande do topo):
   - slug: endereço do artigo (post.html?slug=<slug>)
   - titulo, resumo: textos do card e do topo do artigo
   - categoria: slug de BLOG_CATEGORIAS
   - data: 'AAAA-MM-DD' (data de publicação)
   - imagem / textoAlternativo: capa do artigo. Vazio = bloco de gradiente da
     categoria com ilustração (TODO: trocar pelas fotos reais)
   - exemplo: true mostra a etiqueta "Exemplo" (use false nos artigos reais)
   - conteudo: lista de blocos, na ordem do texto:
       { tipo: 'subtitulo', texto }   vira um item do índice "Neste artigo"
       { tipo: 'paragrafo', texto, rotulo? }   rotulo: começo em negrito
       { tipo: 'lista', itens: [...] }   item: texto ou { rotulo, texto }
       { tipo: 'citacao', texto, autor? }
       { tipo: 'imagem', imagem, textoAlternativo, legenda }
   O tempo de leitura é calculado pelo número de palavras do texto.
   ========================================================================== */
var BLOG_CATEGORIAS = [
  { slug: 'lareiras' },
  { slug: 'churrasqueiras' },
  { slug: 'coifas' },
  { slug: 'parrillas' },
  { slug: 'fornos-de-pizza' },
  { slug: 'projetos', nome: 'Projetos' },
  { slug: 'dicas', nome: 'Dicas' }
];

/* TODO: os 6 artigos abaixo são EXEMPLOS PROVISÓRIOS, só para mostrar o
   layout. Títulos provisórios; resumo e corpo sem nenhuma informação técnica.
   Substituir pelos artigos reais da Construflama (texto, datas e fotos). */
var TEXTO_EXEMPLO = '[Texto de exemplo. Substituir pelo artigo real da Construflama.]';

// Corpo provisório: os subtítulos viram o índice; o resto é marcação de exemplo
function conteudoExemplo(subtitulos) {
  var blocos = [{ tipo: 'paragrafo', texto: TEXTO_EXEMPLO }];
  subtitulos.forEach(function (s, i) {
    blocos.push({ tipo: 'subtitulo', texto: s });
    blocos.push({ tipo: 'paragrafo', texto: TEXTO_EXEMPLO });
    if (i === 0) blocos.push({ tipo: 'lista', itens: ['[Item de exemplo]', '[Item de exemplo]', '[Item de exemplo]'] });
    if (i === 1) blocos.push({ tipo: 'imagem', imagem: '', textoAlternativo: '', legenda: '[Legenda de exemplo da imagem.]' });
    if (i === 2) blocos.push({ tipo: 'citacao', texto: '[Citação de exemplo.]' });
  });
  return blocos;
}

var POSTS = [
  {
    slug: 'como-escolher-a-grelha-ideal',
    titulo: 'O Detalhe que Transforma o Churrasco: Como Escolher a Grelha Ideal para o Seu Estilo',
    categoria: 'churrasqueiras',
    resumo: 'Argentina, uruguaia, barra chata ou plancha: conheça cada grelha e descubra qual combina com o seu jeito de fazer churrasco.',
    data: '2026-10-21', exemplo: false,
    // A capa é a mesma arte da grelha argentina (o usuário enviou as duas iguais)
    imagem: 'img/blog/grelha-argentina.webp', foco: '50% 40%',
    textoAlternativo: 'Grelha argentina Construflama, de canaletas metálicas, sobre piso de madeira. Arte com o texto: Grelha argentina: menos labaredas, mais sabor!',
    conteudo: [
      { tipo: 'paragrafo', texto: 'No universo do churrasco, ir além do convencional é o que define uma experiência inesquecível. Quem domina a arte da gastronomia na brasa sabe que cada churrasqueiro possui rituais, hábitos e preferências únicas: para alguns, a perfeição está no aroma defumado da brasa; para outros, na precisão do ponto ou naquela crosta dourada e irresistível. Tudo para receber bem não só em casa, mas também na mesa.' },
      { tipo: 'paragrafo', texto: 'Mais do que apenas uma superfície para assar, a escolha da grelha é o elemento crucial que é fundamental para chegar à perfeição no sabor, na textura e na apresentação dos seus cortes. Compreender qual equipamento melhor se alinha ao seu estilo é o primeiro passo para elevar o nível do seu churrasco.' },
      { tipo: 'paragrafo', texto: 'Abaixo, apresentamos as principais opções e como cada uma delas atua no preparo da carne:' },

      { tipo: 'subtitulo', texto: '1. Grelha Argentina: Sabor, Controle e Praticidade' },
      { tipo: 'imagem', imagem: 'img/blog/grelha-argentina.webp', textoAlternativo: 'Grelha argentina Construflama, de canaletas metálicas inclinadas, sobre piso de madeira. Texto na arte: "Grelha argentina: menos labaredas, mais sabor! Ideal para carnes gordurosas, como costela e picanha, preservando a suculência e o sabor natural da carne."', legenda: 'Grelha Argentina Construflama' },
      { tipo: 'paragrafo', texto: 'Projetada com canaletas inclinadas, a grelha argentina conduz o excesso de gordura diretamente para um reservatório, evitando fumaça excessiva e labaredas no carvão.' },
      { tipo: 'paragrafo', rotulo: 'Para qual momento escolher?', texto: 'É a opção ideal para assados lentos e cortes nobres mais suculentos e gordurosos, como picanha e ancho, garantindo maciez e cozimento uniforme sem riscos de queimar a carne.' },

      { tipo: 'subtitulo', texto: '2. Grelha Uruguaia: O Toque Defumado Marcante' },
      { tipo: 'imagem', imagem: 'img/blog/grelha-uruguaia.webp', textoAlternativo: 'Grelha uruguaia Construflama, de barras redondas, sobre piso de madeira. Texto na arte: "Grelha uruguaia: suculência com um toque defumado! As barras mais espaçadas permitem maior contacto da gordura com o fogo, realçando o sabor tradicional do churrasco uruguaio."', legenda: 'Grelha Uruguaia Construflama' },
      { tipo: 'paragrafo', texto: 'Com suas hastes arredondadas, essa grelha proporciona o contato exato da gordura com a brasa incandescente, gerando aquele aroma e sabor defumado inconfundível, clássico da cultura sul-americana.' },
      { tipo: 'paragrafo', rotulo: 'Para qual momento escolher?', texto: 'Extremamente versátil e prática, é perfeita para quem busca intensidade de sabor nos mais variados cortes e preparos.' },

      { tipo: 'subtitulo', texto: '3. Grelha de Barra Chata: O Tostado Preciso e Crocante' },
      { tipo: 'imagem', imagem: 'img/blog/grelha-barra-chata.webp', textoAlternativo: 'Grelha de barra chata Construflama, de barras planas, sobre piso de madeira. Texto na arte: "Grelha de barra chata: crosta dourada e sabor irresistível! Perfeita para realçar a reação de Maillard, garantindo carnes bem seladas, suculentas e com aquele toque especial de churrasco na brasa."', legenda: 'Grelha de Barra Chata Construflama' },
      { tipo: 'paragrafo', texto: 'Sua superfície plana amplia a área de contato direto com a carne, potencializando a famosa Reação de Maillard. O resultado é uma selagem impecável, que cria uma leve e sutil crosta externa sem perder a suculência interna.' },
      { tipo: 'paragrafo', rotulo: 'Para qual momento escolher?', texto: 'Ideal para amantes do churrasco tradicional que priorizam um tostado perfeito e o clássico visual marcado no corte.' },

      { tipo: 'subtitulo', texto: '4. Grelha Plancha / Chapa Inox: Versatilidade Gastronômica' },
      { tipo: 'imagem', imagem: 'img/blog/grelha-plancha.webp', textoAlternativo: 'Grelha plancha Construflama, uma chapa lisa de aço inox com moldura, sobre piso de madeira. Texto na arte: "Grelha plancha (chapa de aço inox): versatilidade para todos os sabores! A distribuição uniforme do calor torna-a ideal para preparar hambúrgueres, legumes, frutos do mar e muito mais."', legenda: 'Grelha Plancha Chapa Inox Construflama' },
      { tipo: 'paragrafo', texto: 'Por ser uma superfície contínua e sem aberturas, a chapa de inox retém e distribui o calor com alta uniformidade.' },
      { tipo: 'paragrafo', rotulo: 'Para qual momento escolher?', texto: 'Transforma sua churrasqueira em uma estação completa de culinária, sendo a escolha perfeita para o preparo de hambúrgueres artesanais, frutos do mar, legumes selados e acompanhamentos picados.' },

      { tipo: 'subtitulo', texto: 'Qual é a Grelha Ideal para Você?' },
      { tipo: 'lista', itens: [
        { rotulo: 'Cortes gordurosos e suculentos:', texto: 'Grelha Argentina' },
        { rotulo: 'Sabor defumado tradicional:', texto: 'Grelha Uruguaia' },
        { rotulo: 'Selagem perfeita e crosta dourada:', texto: 'Barra Chata' },
        { rotulo: 'Versatilidade e preparos especiais:', texto: 'Plancha / Chapa Inox' }
      ] },

      { tipo: 'subtitulo', texto: 'Uma Experiência Sob Medida' },
      { tipo: 'paragrafo', texto: 'Seja em nossas churrasqueiras ou em nossas parrillas, oferecemos a possibilidade de ter a grelha ideal com modelos customizados e grelhas adicionais além das grelhas padrão, tudo para chegar ao churrasco perfeito. Uma refeição que reflete a sua personalidade a cada garfada e marca pelo sabor nos momentos ao redor do fogo que se tornarão memórias eternas.' },
      { tipo: 'paragrafo', texto: 'Fale com nossos consultores e descubra como transformar cada reunião em uma verdadeira experiência gastronômica.' }
    ]
  },
  {
    slug: 'lareira-a-gas-ou-ecoflama',
    titulo: 'Lareira a gás ou ecoflama: como escolher',
    categoria: 'lareiras',
    resumo: 'Um roteiro para comparar as duas opções e pensar em qual combina com o seu ambiente.',
    data: '2026-10-14', exemplo: true,
    imagem: '', textoAlternativo: '',
    conteudo: conteudoExemplo(['O que observar no ambiente', 'Como cada opção funciona', 'Perguntas para levar ao projeto', 'Como decidir'])
  },
  {
    slug: 'churrasqueira-carvao-gas-ou-hibrida',
    titulo: 'Churrasqueira a carvão, a gás ou híbrida: qual combina com o seu espaço',
    categoria: 'churrasqueiras',
    resumo: 'Os pontos para conversar com o arquiteto antes de escolher o tipo de churrasqueira.',
    data: '2026-10-07', exemplo: true,
    imagem: '', textoAlternativo: '',
    conteudo: conteudoExemplo(['Como você usa a área gourmet', 'O que muda entre os tipos', 'Como decidir'])
  },
  {
    slug: 'coifa-para-churrasqueira',
    titulo: 'Coifa para churrasqueira: o que considerar antes de comprar',
    categoria: 'coifas',
    resumo: 'O que vale avaliar no projeto para a coifa acompanhar a churrasqueira e o ambiente.',
    data: '2026-09-30', exemplo: true,
    imagem: '', textoAlternativo: '',
    conteudo: conteudoExemplo(['O ambiente e a churrasqueira', 'Desenho e acabamento', 'Instalação e manutenção'])
  },
  {
    slug: 'parrilla-residencial-ou-profissional',
    titulo: 'Parrilla residencial ou profissional: diferenças',
    categoria: 'parrillas',
    resumo: 'Como pensar a escolha entre as duas linhas a partir do uso e do espaço disponível.',
    data: '2026-09-23', exemplo: true,
    imagem: '', textoAlternativo: '',
    conteudo: conteudoExemplo(['Para quem é cada linha', 'O espaço e o uso', 'Como decidir'])
  },
  {
    slug: 'forno-de-pizza-a-lenha-ou-portatil',
    titulo: 'Forno de pizza a lenha ou portátil',
    categoria: 'fornos-de-pizza',
    resumo: 'Tradição ou praticidade: um guia para escolher o forno certo para a sua casa.',
    data: '2026-09-16', exemplo: true,
    imagem: '', textoAlternativo: '',
    conteudo: conteudoExemplo(['O ritual do forno a lenha', 'A praticidade do portátil', 'Como decidir'])
  },
  {
    slug: 'area-gourmet-com-arquiteto',
    titulo: 'Como planejar uma área gourmet com arquiteto',
    categoria: 'projetos',
    resumo: 'Do primeiro desenho à primeira chama: como organizar o projeto da área gourmet.',
    data: '2026-09-09', exemplo: true,
    imagem: '', textoAlternativo: '',
    conteudo: conteudoExemplo(['Antes do primeiro desenho', 'Escolhendo os equipamentos', 'Do projeto à obra', 'Depois da entrega'])
  }
];
