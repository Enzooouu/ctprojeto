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
   - capaInteira: true mostra a capa inteira, sem recortar (artes com texto),
     com fundo branco; 'escuro' faz o mesmo com fundo carvão (fotos)
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
    slug: 'espaco-do-especificador',
    titulo: 'Espaço do Especificador Construflama: mais facilidade para transformar projetos em realidade',
    categoria: 'projetos',
    resumo: 'Blocos CAD e modelos 3D prontos para inserir os produtos no projeto: veja como a Sala Clareira usou a lareira Pipe desde o primeiro desenho.',
    data: '2026-09-09', exemplo: false,
    // Foto com créditos e nome do produto escritos na imagem: mostra inteira
    imagem: 'img/blog/sala-clareira-pipe.webp', capaInteira: 'escuro',
    textoAlternativo: 'Projeto da Sala Clareira, da SALA02 Arquitetura: sala com paredes e teto de madeira escura, sofá curvo verde e a lareira Pipe, cilíndrica e clara, com a chama acesa.',
    conteudo: [
      { tipo: 'paragrafo', texto: 'Projetar é transformar ideias em experiências. Para arquitetos e designers de interiores, contar com ferramentas que aproximam a concepção do projeto da realidade faz toda a diferença no desenvolvimento de cada ambiente.' },
      { tipo: 'paragrafo', texto: 'Pensando em facilitar esse processo, a Construflama criou o Espaço do Especificador, uma área exclusiva dentro do site da marca que reúne recursos desenvolvidos especialmente para profissionais que desejam inserir os produtos Construflama em seus projetos de forma prática, precisa e visualmente integrada.' },
      { tipo: 'subtitulo', texto: 'Uma ferramenta para facilitar o processo de especificação' },
      { tipo: 'paragrafo', texto: 'O Espaço do Especificador funciona como um facilitador para arquitetos, designers de interiores e demais profissionais que trabalham com projetos.' },
      { tipo: 'paragrafo', texto: 'Nele, é possível encontrar blocos em CAD dos produtos Construflama, além de arquivos 3D prontos para serem aplicados aos projetos. Dessa forma, o profissional consegue visualizar com maior precisão como cada produto se comportará no ambiente, considerando proporções, posicionamento e composição com os demais elementos.' },
      { tipo: 'paragrafo', texto: 'Mais do que disponibilizar arquivos, a proposta é tornar a jornada de especificação mais simples: o profissional pode escolher o produto, inseri-lo diretamente em seu projeto e avançar no desenvolvimento do ambiente com mais agilidade e segurança.' },
      { tipo: 'subtitulo', texto: 'Da ideia à visualização do ambiente' },
      { tipo: 'paragrafo', texto: 'Quando um produto é pensado desde as primeiras etapas do projeto, ele deixa de ser apenas um elemento funcional e passa a fazer parte da experiência proposta para o espaço.' },
      { tipo: 'paragrafo', texto: 'Foi o que aconteceu na Sala Clareira, projeto assinado por Vanessa Martins, da Sala 2 Arquitetura. O ambiente foi concebido para desacelerar gradualmente a percepção de quem adentra o espaço, criando uma atmosfera de paz e acolhimento — uma sensação que remete ao refúgio e à tranquilidade proporcionados por uma floresta.' },
      { tipo: 'paragrafo', texto: 'Nesse cenário, a lareira escultural Pipe, da Construflama, foi escolhida para compor o ambiente e assumir um papel de destaque na composição.' },
      { tipo: 'subtitulo', texto: 'A lareira Pipe como elemento de destaque' },
      { tipo: 'paragrafo', texto: 'Especialmente selecionada na cor Fendi para o projeto, a lareira Pipe cria um contraste elegante com os revestimentos mais escuros presentes no ambiente.' },
      { tipo: 'paragrafo', texto: 'Sua forma versátil e escultural contribui para a identidade visual da sala e, ao mesmo tempo, reforça a proposta de criar uma experiência acolhedora e contemplativa para quem utiliza o espaço.' },
      { tipo: 'paragrafo', texto: 'A escolha da lareira demonstra como um produto pode ser incorporado ao conceito arquitetônico de maneira natural, tornando-se parte da narrativa do ambiente e não apenas um complemento.' },
      { tipo: 'subtitulo', texto: 'Mais realidade para o projeto' },
      { tipo: 'paragrafo', texto: 'Durante o desenvolvimento da Sala Clareira, foram utilizados os blocos disponibilizados pela Construflama no Espaço do Especificador. A presença do produto em sua representação digital ajudou a aproximar a visualização do projeto daquilo que seria encontrado no ambiente final.' },
      { tipo: 'paragrafo', texto: 'Ter acesso aos modelos e blocos prontos também facilita o trabalho do profissional, reduzindo etapas de desenvolvimento e permitindo que a atenção esteja voltada para aquilo que realmente importa: criar soluções que traduzam o conceito e a personalidade de cada projeto.' },
      { tipo: 'paragrafo', texto: 'No caso da Sala Clareira, a inserção da Pipe desde o projeto contribuiu para visualizar sua presença junto aos revestimentos, materiais e demais elementos escolhidos para o espaço.' },
      { tipo: 'subtitulo', texto: 'Construflama ao lado de quem especifica' },
      { tipo: 'paragrafo', texto: 'O Espaço do Especificador nasce com um propósito claro: facilitar o trabalho dos profissionais e aproximar os produtos Construflama dos projetos desde a fase de criação.' },
      { tipo: 'paragrafo', texto: 'Com blocos CAD e modelos 3D prontos para utilização, arquitetos e designers podem incorporar os produtos aos seus projetos com mais praticidade, precisão e liberdade criativa.' },
      { tipo: 'paragrafo', texto: 'Assim como na Sala Clareira, em que a lareira Pipe ajudou a construir uma atmosfera de contraste, acolhimento e contemplação, a Construflama busca estar presente desde o desenho inicial até a realização de cada ambiente.' },
      { tipo: 'paragrafo', texto: '', link: { texto: 'Acesse o Espaço do Especificador', href: 'index.html#especificadores' }, depois: 'e encontre os arquivos necessários para levar os produtos da marca para os seus próximos projetos.' }
    ]
  },
  {
    slug: 'lareira-pilao-living-ritmo-vital',
    titulo: 'Acolhendo ideias que acolhem pessoas: a Lareira Pilão do Living Ritmo Vital',
    categoria: 'lareiras',
    resumo: 'Como a Lareira Pilão nasceu em parceria com a MAAI Arquitetura para a CASACOR São Paulo 2026: o rústico de forma elegante, ao redor do fogo.',
    data: '2026-09-02', exemplo: false,
    // Foto com créditos e nome do produto escritos na imagem: mostra inteira
    imagem: 'img/blog/living-ritmo-vital-pilao.webp', capaInteira: 'escuro',
    textoAlternativo: 'Living Ritmo Vital, da MAAI Arquitetura, na CASACOR São Paulo 2026: a Lareira Pilão, de metal escuro, sobre uma base com lenha, diante de paredes de palha trançada e uma porta de madeira. Foto: Bianca Versolato.',
    conteudo: [
      { tipo: 'paragrafo', texto: 'Atender demandas criativas nem sempre é um processo padronizado: muitas vezes a oportunidade se apresenta e a análise da viabilidade vem concomitantemente ao desenvolvimento. A flexibilidade se faz cada dia mais um diferencial, considerando uma sociedade com público clusterizado.' },
      { tipo: 'paragrafo', texto: 'Durante a CASACOR SP 2026, muitas inovações foram propostas tanto por clientes de longa data quanto por novos profissionais parceiros que vieram a conhecer a marca por meio da mostra, com o primeiro contato trazendo conceitos diferenciados desenvolvidos em conjunto com esses novos parceiros, como por exemplo o projeto desenvolvido junto da equipe da MAAI Arquitetura.' },
      { tipo: 'paragrafo', texto: 'A Lareira Pilão nos foi apresentada no primeiro contato com um conceito inicial focado totalmente na proposta do espaço e na representação de uma série de conceitos que inspiram o Living “Ritmo Vital”, culminando no formato que dá o nome “Pilão” ao produto, pela forma similar aos artefatos utilizados há gerações para moagem de alimentos, pigmentos e diversos outros preparos.' },
      { tipo: 'paragrafo', texto: 'A proposta desse espaço é composta por referências de ancestralidade dos povos originários, por contrastes de itens rústicos com designs sofisticados, além das cores em tons terrosos. Observando essas inspirações, a lareira teve como foco trazer o rústico de uma forma elegante, manter a fluidez do design mesmo com linhas mais fortes, além de viabilizar a produção dentro do prazo dinâmico necessário para a participação da mostra.' },
      { tipo: 'paragrafo', texto: 'O resultado foi a imponência como representação do que vem bruto da natureza, a precisão como detalhe que representa o alto padrão, além da funcionalidade que pode ser levada aos lares de nossos clientes, mimetizando a atmosfera de união entre pessoas para socializar que o Living “Ritmo Vital” tem como uma força motriz em sua proposta, que carrega toda a história do costume indígena de se reunir ao redor do fogo para compartilhar histórias.' },
      // TODO: link do reels (no original vinha só o texto "Ritmo Vital")
      { tipo: 'paragrafo', texto: 'Conheça o espaço em detalhe no reels gravado com a sócia e Diretora de Relacionamento do escritório, Mônica Pinto.' }
    ]
  },
  {
    slug: 'trio-ecolare-casacor-2026',
    titulo: 'Trio Ecolare na CASACOR 2026: inovação comprovada com liberdade criativa',
    categoria: 'projetos',
    resumo: 'Lançado como protótipo na CASACOR São Paulo 2026, o Trio Ecolare conquistou paisagistas e o público em jardins e ambientes externos.',
    data: '2026-08-26', exemplo: false,
    // Foto com créditos e nome do produto escritos na imagem: mostra inteira
    imagem: 'img/blog/trio-ecolare.webp', capaInteira: 'escuro',
    textoAlternativo: 'Três lanternas Trio Ecolare, de vidro com moldura escura e chama acesa, sobre um deck de madeira entre plantas, ao lado de um sofá com almofadas verdes. Ambiente de Alexandre Galhego, foto de Bianca Versolato.',
    conteudo: [
      { tipo: 'paragrafo', texto: 'Os projetos de alto padrão têm necessidade de inovação constante, com clientes exigentes que buscam diferenciação e profissionais que buscam perfeição em cada escolha de seus projetos, levando em conta quem habita, suas rotinas e, acima de tudo, suas personalidades e identidades.' },
      { tipo: 'paragrafo', texto: 'Atendendo essa demanda, foi lançado na CASACOR São Paulo 2026 um conceito que foi testado através da liberdade criativa dos participantes da mostra. A estética do Trio Ecolare, com vidros temperados e visual que lembra uma lanterna de arandela, foi adotada sobretudo por profissionais que projetaram ambientes externos, como os ambientes assinados por Bia Abreu, Alexandre Galhego e pelas profissionais do Aria Studio, além da versão customizada que atendeu a amplitude do jardim das paisagistas Ana Lui e Karen Marini.' },
      { tipo: 'paragrafo', texto: 'A estratégia de lançamento não foi feita através da imposição da situação de uso do produto, e sim disponibilizando casualmente o design ainda em fase de protótipo para aqueles que buscavam expor itens sem necessidade de instalação em seus projetos da mostra, e estudando desde as reações em reunião com esses profissionais até as reações do público observando cada uma das posições escolhidas para o Trio Ecolare.' },
      { tipo: 'paragrafo', texto: 'A Construflama observou, no momento do desenvolvimento, a necessidade do mercado por peças versáteis que possam ser utilizadas tanto como uma composição em trio focada na harmonia das medidas quanto de forma individual, através da escolha de uma das peças que possua o tamanho ideal para atender cada espaço.' },
      { tipo: 'paragrafo', texto: 'A predileção dos paisagistas por esse modelo e a reação do público a esse produto são a prova de que o fogo atrai olhares pela estética e reúne pelo conforto, o que atende em benefícios estéticos e funcionais as propostas dos projetos com tom de refúgio, criados para descompressão através do encantamento.' },
      { tipo: 'subtitulo', texto: 'Conheça os conceitos criativos que receberam o Trio Ecolare' },
      { tipo: 'lista', itens: [
        { rotulo: 'Jardim Onde a Mente Pousa:', texto: '', link: { texto: 'assistir no Instagram', href: 'https://www.instagram.com/reel/DbY_J0Ft07v/' } },
        { rotulo: 'Jardim Respiro:', texto: '', link: { texto: 'assistir no Instagram', href: 'https://www.instagram.com/reel/Da3ihiABuTZ/' } },
        { rotulo: 'Clareira na Mata:', texto: '', link: { texto: 'assistir no Instagram', href: 'https://www.instagram.com/reel/DcRrcB6BhAm/' } },
        { rotulo: 'Ruído Bar:', texto: '', link: { texto: 'assistir no Instagram', href: 'https://www.instagram.com/reel/DayX49GtSk6/' } }
      ] },
      { tipo: 'paragrafo', texto: 'Siga a Construflama e acompanhe o mercado na visão da arte e do prazer do fogo!' }
    ]
  },
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
      { tipo: 'citacao', texto: 'Esse formato mais rústico com essa tendência mais feita a mão.', autor: 'Mônica Pinto, sócia e Diretora de Relacionamento da MAAI Arquitetura, sobre o Living “Ritmo Vital”, que traz o conceito de lareira como uma forma de manter a “Roda de Conversa” ao redor do fogo, um costume milenar visível nos costumes indígenas que inspiraram muitos elementos do espaço' },
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
