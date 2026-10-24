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
   - capaInteira: true mostra a capa inteira, sem recortar (artes com texto)
   - imagem / textoAlternativo: capa do artigo. Vazio = bloco de gradiente da
     categoria com ilustração (TODO: trocar pelas fotos reais)
   - exemplo: true mostra a etiqueta "Exemplo" (use false nos artigos reais)
   - conteudo: lista de blocos, na ordem do texto:
       { tipo: 'subtitulo', texto }   vira um item do índice "Neste artigo"
       { tipo: 'paragrafo', texto, rotulo?, link?, depois? }
         rotulo: começo em negrito; link: { texto, href } no fim do texto
         (abre em nova aba); depois: texto que vem após o link
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
    slug: 'calculo-de-exaustao',
    titulo: 'O que é cálculo de exaustão e como isso te proporciona mais conforto no churrasco ou na cozinha?',
    categoria: 'coifas',
    resumo: 'Da visita técnica à proposta: como a engenharia da Construflama estuda cada caso para a coifa funcionar sem incômodo de fumaça ou ruído.',
    data: '2026-09-23', exemplo: false,
    imagem: 'img/blog/calculo-de-exaustao.webp', capaInteira: true,
    textoAlternativo: 'Desenho em traço de três coifas com tubulações diferentes: reta, com duas curvas e inclinada. Arte com o texto: Você sabe o que é cálculo de exaustão? Descubra como garantimos o conforto ao cozinhar com nossas coifas.',
    conteudo: [
      { tipo: 'subtitulo', texto: 'Como podemos garantir a eficiência da sua coifa?' },
      { tipo: 'paragrafo', texto: 'Na Construflama não buscamos apenas qualidade e sim a excelência, tanto na questão visual do acabamento e do design, quanto na questão funcional da performance e confiabilidade. Por isso, nossa equipe de engenharia se dedica durante a jornada de compra do cliente a analisar caso a caso quais são os elementos necessários para proporcionar uma experiência sem incômodo pela fumaça ou ruído em excesso.' },
      { tipo: 'paragrafo', texto: 'Como isso é feito? Acompanhe o passo a passo simplificado:' },
      { tipo: 'subtitulo', texto: '1. Análise técnica de medidas' },
      { tipo: 'paragrafo', texto: 'Sempre que viável, nosso time de medição realiza uma visita técnica que determina não só o caminho das tubulações, que pode conter angulações a serem estudadas, mas também a presença de outros fatores que possam dificultar o fluxo de fumaça dentro e fora da área do processo, além de averiguar a distância da coifa em relação à bancada e a largura necessária para cada equipamento a ser contemplado pela exaustão.' },
      { tipo: 'subtitulo', texto: '2. Estudo da equipe de Engenharia' },
      { tipo: 'paragrafo', texto: 'Com dados advindos da medição, nosso Departamento de Engenharia faz os estudos do fluxo do ar considerando também a termodinâmica e normas que estabelecem regulamentações para a decisão entre exaustão natural ou exaustão motorizada.' },
      { tipo: 'subtitulo', texto: '3. Decisão com base nos dados' },
      { tipo: 'paragrafo', texto: 'Após todo esse processo fica definido o tipo de motor adequado, a metragem de tubos necessários, a temperatura da fumaça que será produzida na combustão e por consequência o modelo de filtro ou grade que cobrirá a entrada de ar da coifa.' },
      { tipo: 'subtitulo', texto: '4. Alinhamento da proposta' },
      { tipo: 'paragrafo', texto: 'As informações são repassadas ao consultor ou consultora comercial, que te acompanhará durante todo esse processo buscando agilidade e assertividade. Nosso time comercial ajustará a proposta que contempla tudo que você precisa para exaustão confiável em sua residência ou para o projeto a ser entregue aos seus clientes.' },
      { tipo: 'subtitulo', texto: 'Por que esse serviço é importante para chegar ao padrão ideal de atendimento?' },
      { tipo: 'paragrafo', texto: 'Temos plena confiança na capacidade dos nossos produtos em superar as expectativas dos nossos clientes quando as condições necessárias são proporcionadas, e para manter essa segurança da nossa entrega de valor a Construflama é meticulosa nos processos da Engenharia e orienta os profissionais nos projetos que possam causar intercorrências no dia a dia do cliente ou na própria obra. Buscamos o funcionamento perfeito e a usabilidade fluida para quem quer aproveitar momentos ao redor do fogo.' },
      { tipo: 'paragrafo', texto: 'Ou seja, valorizando o investimento feito no nosso produto, participamos junto aos profissionais que operacionalizam obras, reformas e para calcular durante todo o trajeto a exaustão será buscando eficiência e conforto, assim acompanhando cada detalhe da cozinha, área gourmet ou adjacências para desenvolver uma solução sob medida para cada lar.' },
      { tipo: 'paragrafo', texto: 'Quer ter essa segurança de performance aliada ao design Construflama no seu projeto? Fale com nossos consultores',
        link: { texto: 'clicando aqui!', href: 'https://whts.co/Construflama_com' }, depois: 'Tenha mais conforto ao saborear momentos inesquecíveis!' }
    ]
  },
  {
    slug: 'modelos-da-linha-escultural',
    titulo: 'Descubra os modelos da linha Escultural Construflama!',
    categoria: 'lareiras',
    resumo: 'Francesa, Cone, Tarus, Gota, Pipe e Pilão: conheça o design de cada lareira escultural e como arquitetos as levaram para seus projetos.',
    data: '2026-10-15', exemplo: false,
    imagem: 'img/blog/linha-escultural.webp', capaInteira: true, // desenho com textos: mostra a imagem inteira, sem recorte
    textoAlternativo: 'Desenho em traço das seis lareiras da linha Escultural Construflama, lado a lado: Tarus, Pipe, Gota, Cone, Francesa e Pilão.',
    conteudo: [
      { tipo: 'paragrafo', texto: 'O que você espera de uma lareira?' },
      { tipo: 'paragrafo', texto: 'Essa pergunta é um dos principais meios de garantir uma experiência de alto padrão para superar as expectativas dos nossos clientes além de participar de forma fluida dos projetos dos profissionais especificadores, contribuindo para os conceitos criativos e para a qualidade de vida desenhada milimetricamente por arquiteturas, estúdios de design e engenharias.' },
      { tipo: 'paragrafo', texto: 'Qual o modelo ideal para o seu projeto?' },
      { tipo: 'paragrafo', texto: 'Descubra como os nossos clientes aproveitam o design de cada modelo para levar a arte e o prazer do fogo para ambientes de todo o Brasil!' },
      { tipo: 'subtitulo', texto: 'Lareira Francesa' },
      { tipo: 'paragrafo', texto: 'A primeira Lareira Escultural criada por Roberto Cassab, Diretor Fundador da Construflama, traz referências do design clássico europeu com um ar campestre, que aquece o continente há séculos e influenciou em peso a arquitetura de todo o mundo. Usualmente inserida próxima das paredes de espaços que tem uma identidade mais atemporal, com elementos vintage inspirados naquilo que nunca sai de moda: a Elegância.' },
      { tipo: 'citacao', texto: 'A gente quis trazer essa lareira para dentro do espaço para criar dentro do conceito da “Casa Carioca” não só perto de praia, mas em qualquer região do Rio de Janeiro ou até outro lugar.', autor: 'Cadé Marino, sobre o Espaço Deca da CASACOR Rio 2026, a “Casa Abraço”' },
      { tipo: 'subtitulo', texto: 'Lareira Cone' },
      { tipo: 'paragrafo', texto: 'Uma peça selecionada muitas vezes para ambientes amplos e com pé direito alto. A personalidade dessa lareira vem na sua imponência, tanto na versão com diâmetro de 1 metro quanto na versão de 80cm. A cone pode ser utilizada próxima aos cantos ou paredes do espaço, mas normalmente é uma peça que divide ambientes sem separá-los de forma abrupta e funcionando como um elemento central que reúne pessoas ao redor do fogo aquecendo em 360° em volta da beleza do fogo.' },
      { tipo: 'citacao', texto: 'Tudo acontece em torno da lareira, o jantar, a cozinha, a sala de estar… buscando uma maneira de criar uma integração da casa em torno dos momentos e de tudo aquilo que o espaço pode oferecer.', autor: 'Gabriel Fernandes, na CASACOR São Paulo 2026, sobre a Lareira Cone na Casa Simonetto' },
      { tipo: 'subtitulo', texto: 'Lareira Tarus' },
      { tipo: 'paragrafo', texto: 'A Tarus é um dos designs mais icônicos e memoráveis da Construflama que funciona através das linhas curvas combinadas com a vertical do tubo sendo um diferencial em ambientes com propostas contemporâneas se integrando de forma perfeita, mas também podendo ser utilizada em espaços que contrastam a história do visual antigo com elementos atuais ou futuristas sem perder a elegância e nem a personalidade clássica.' },
      { tipo: 'citacao', texto: 'Tentamos trazer uma neutralidade nos tons com bastante volume e texturas, que tocasse as pessoas. Dentro dessa atmosfera a gente achou a Lareira Tarus da Construflama, ela trouxe o design que a gente buscava.', autor: 'Expedito Bezerra, sobre o Loft da CASACOR São Paulo 2025, que teve a Lareira Tarus como ponto central do espaço' },
      { tipo: 'subtitulo', texto: 'Lareira Gota' },
      { tipo: 'paragrafo', texto: 'Essa Lareira tem nas formas inspiradas na natureza a sua maior força: a versatilidade. As linhas que distribuem o peso visual da peça tem o minimalismo como uma referência, e a suavidade como forma de criar elegância.' },
      { tipo: 'citacao', texto: 'A gente queria que fosse uma lareira que conversasse com nosso espaço contemporâneo. O principal motivo da escolha da lareira é que ela fosse sofisticada e clean.', autor: 'Renan Altera, sobre seu espaço na CASACOR São Paulo 2024' },
      { tipo: 'subtitulo', texto: 'Lareira Pipe' },
      { tipo: 'paragrafo', texto: 'Essa peça se tornou um marco do destaque que o Minimalismo teve nos últimos anos. O formato cilíndrico traz um tom retilíneo a quem olha e a portinhola com vidro garante que a beleza da chama seja vista através de um elemento de modernidade que é uma releitura da tradicional tela utilizada para cobrir o braseiro de outros modelos. Na composição de L.ara arquitetura essas características da Pipe que beiram o futurismo contrastaram com o que é orgânico conforme feito no espaço desse escritório na CASACOR Minas 2026.' },
      { tipo: 'citacao', texto: 'A gente tem aqui um diálogo de peças metálicas, peças orgânicas que no contraste se conversam.', autor: 'Bernardo Barcellos, que trabalhou na Eco Casa da L.ara em 2026' },
      { tipo: 'subtitulo', texto: 'Lareira Pilão' },
      { tipo: 'paragrafo', texto: 'O mais recente lançamento da Construflama dentro dessa linha é uma peça robusta que faz a referência rústica se apresentar de forma elegante. A Pilão foi desenvolvida em conjunto com o escritório Brasiliense “MAAI Arquitetura”, que trouxe referências ancestrais do Centro-Oeste para a CASACOR São Paulo.' },
      { tipo: 'citacao', texto: 'Esse formato mais rústico com essa tendência mais feita a mão.', autor: 'Mônica, sobre o Living “Ritmo Vital”, que traz o conceito de lareira como uma forma de manter a “Roda de Conversa” ao redor do fogo, um costume milenar visível nos costumes indígenas que inspiraram muitos elementos do espaço' },
      { tipo: 'subtitulo', texto: 'Qual o modelo que mais te encanta?' },
      { tipo: 'paragrafo', texto: 'O design dessas lareiras não só tem sua personalidade no conceito por si só, mas também a personalidade que assume em cada espaço, associada a cada projeto, cada proposta criativa e cada estilo de vida para os quais esses cenários são criados.' },
      { tipo: 'paragrafo', texto: 'Fale com nossos consultores e tenha a peça ideal para criar momentos ao redor do fogo com a sua proposta de espaço dos sonhos!' }
    ]
  },
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
