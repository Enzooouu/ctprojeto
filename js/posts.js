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
    slug: 'churrasqueira-hibrida-construflama',
    titulo: 'Churrasqueira Híbrida Construflama: tecnologia e tradição lado a lado',
    categoria: 'churrasqueiras',
    resumo: 'Gás ou carvão, quando você quiser: como funciona a Churrasqueira Híbrida Premium e o que a diferencia.',
    data: '2026-05-11', exemplo: false,
    imagem: 'img/blog/churrasqueira-hibrida-daniela-dantas.webp', capaInteira: 'escuro',
    textoAlternativo: 'Churrasqueira híbrida embutida em um nicho revestido de pedra clara com veios, com grelhas, espetos e manivelas, acima de um móvel do mesmo revestimento, ao lado de uma mesa redonda. Ambiente de Daniela Dantas Arquitetura, fotos de Giovanni Bellini.',
    conteudo: [
      { tipo: 'paragrafo', texto: 'A Construflama lança sua Churrasqueira Híbrida Premium, unindo inovação e tradição para transformar o preparo do churrasco. Pensada para atender às necessidades do estilo de vida dos nossos clientes, essa churrasqueira permite assar com gás ou carvão, garantindo liberdade total na hora de preparar suas receitas favoritas.' },
      { tipo: 'subtitulo', texto: 'Como funciona a Churrasqueira Híbrida Construflama?' },
      { tipo: 'paragrafo', texto: 'O diferencial da Churrasqueira Híbrida da linha Premium está em sua versatilidade. Com duas caixas-braseiro independentes, cada grelha bipartida pode funcionar separadamente a gás ou carvão, oferecendo controle total sobre o ponto de cada preparo.' },
      { tipo: 'paragrafo', texto: 'Além disso, mantém a praticidade do sistema de encaixe estilo cooktop, característica marcante das churrasqueiras Construflama. Isso significa que você pode alternar entre gás e carvão sem comprometer a experiência clássica do churrasco.' },
      { tipo: 'subtitulo', texto: 'Diferenciais da Churrasqueira Híbrida' },
      { tipo: 'paragrafo', rotulo: 'Liberdade de escolha a todo momento.', texto: 'Com a Churrasqueira Híbrida, você decide como quer preparar seu churrasco: seja dedicando horas ao ritual completo ou transformando um momento do dia a dia em uma experiência gastronômica especial. Não é necessário escolher entre gás ou carvão no momento da compra: a escolha é sua, a qualquer hora.' },
      { tipo: 'paragrafo', rotulo: 'Praticidade do gás com excelência.', texto: 'Acender a churrasqueira a gás Construflama é simples e rápido. Os bicos injetores cobertos com pedras vulcânicas distribuem o calor de forma uniforme, garantindo que cada pedaço seja assado com perfeição, sem alterar o sabor clássico do churrasco.' },
      { tipo: 'paragrafo', rotulo: 'Segurança garantida.', texto: 'A Churrasqueira Híbrida possui manta térmica e paredes de inox com camada dupla, permitindo o uso simultâneo de gás e carvão com total segurança, seguindo sempre as recomendações da Construflama.' },
      { tipo: 'paragrafo', rotulo: 'Customização total.', texto: 'O modelo híbrido oferece tamanhos personalizáveis, permitindo escolher tanto a área de queima quanto a extensão total da churrasqueira que melhor se adapta ao seu espaço. As grelhas bipartidas com sistema de encaixe em gaveta são intercambiáveis e podem ser adquiridas como adicionais. Além disso, é possível incluir um volante customizável no lugar da manivela tradicional para elevar a grelha com ainda mais conforto.' },
      { tipo: 'subtitulo', texto: 'Veja a Churrasqueira Híbrida em ação' },
      // TODO: link do vídeo do Instagram de 29/04 (no original: "[linkar vídeo do Instagram postado no dia 29/04]")
      { tipo: 'paragrafo', texto: 'Confira todos os detalhes da Churrasqueira Híbrida Premium Construflama em nossos vídeos:' },
      { tipo: 'lista', itens: [
        { rotulo: 'Instagram:', texto: '', link: { texto: '@construflama', href: 'https://www.instagram.com/construflama' } },
        { rotulo: 'YouTube:', texto: '', link: { texto: '@construflamaoficial', href: 'https://www.youtube.com/@construflamaoficial' } }
      ] },
      { tipo: 'paragrafo', texto: '', link: { texto: 'Entre em contato com nossos consultores', href: 'https://whts.co/Construflama_com' }, depois: 'e descubra a liberdade de escolher como assar e saborear cada momento do seu churrasco!' }
    ]
  },
  {
    slug: 'marinada-para-cortes-suinos',
    titulo: 'Marinada para cortes suínos: dicas para um churrasco de alto nível',
    categoria: 'dicas',
    resumo: 'Laranja, limão, cerveja ou vinho: as combinações do chef Giovanni Silvestre para equilibrar a gordura e dar mais sabor aos cortes suínos.',
    data: '2026-02-18', exemplo: false,
    imagem: 'img/blog/marinada-suinos.webp', capaInteira: 'escuro',
    textoAlternativo: 'Peça de carne suína enrolada e amarrada, com a pele dourada e tostada, sobre a grelha em meio à fumaça; mãos de luvas pretas ao fundo. Foto de Milena Camillo.',
    conteudo: [
      { tipo: 'paragrafo', texto: 'Quando se fala em churrasco, logo vem à mente o sabor inconfundível de carnes suculentas e bem temperadas, acompanhadas de bons amigos e uma boa conversa. E para transformar sua churrasqueira de alto nível em um verdadeiro centro gastronômico, nada melhor do que preparar as carnes com marinadas que trazem novos sabores e experiências ao seu paladar.' },
      { tipo: 'subtitulo', texto: 'Transforme seu churrasco com marinadas especiais' },
      { tipo: 'paragrafo', texto: 'No Brasil, o churrasco é mais do que uma refeição: é um evento, uma celebração que acontece em torno da churrasqueira. Seja para uma reunião entre amigos, um almoço de domingo ou uma data especial, o cuidado com o preparo das carnes é essencial para deixar o momento ainda mais inesquecível.' },
      { tipo: 'paragrafo', texto: 'Para ajudar você a elevar o sabor de seus cortes suínos, convidamos o chef e produtor gastronômico Giovanni Silvestre, formado pelo Senac, com experiência no MasterChef Brasil e cofundador da', link: { texto: 'Tentáculos, produtora de gastronomia', href: 'https://www.instagram.com/tentaculosprodutora/' }, depois: 'para audiovisual e eventos que transformam ingredientes em momentos memoráveis.' },
      { tipo: 'subtitulo', texto: 'Como marinar cortes suínos' },
      { tipo: 'paragrafo', texto: 'A marinada é uma das etapas mais importantes para dar aquele toque especial à carne. Ela não só ajuda a temperar, mas também a amaciar, proporcionando mais suculência e sabor.' },
      { tipo: 'paragrafo', texto: 'Para os cortes suínos, a escolha dos ingredientes certos para a marinada é ainda mais crucial, pois a carne suína possui uma quantidade significativa de gordura. Por isso, é fundamental equilibrar os temperos.' },
      { tipo: 'paragrafo', texto: 'O chef Giovanni Silvestre explica que a base da marinada podem ser sucos, bebidas alcoólicas ou algo que contraponha essa gordura, como frutas cítricas e outros ingredientes menos oleosos. Além disso, temperos como ervas aromáticas e especiarias são essenciais para criar aquele sabor único.' },
      { tipo: 'subtitulo', texto: 'Dicas do chef para marinadas de cortes suínos' },
      { tipo: 'paragrafo', texto: 'Para cortes suínos, a marinada precisa considerar o fator gordura, que é uma característica forte da carne. O segredo está em contrastar esse elemento com ingredientes que tragam frescor e equilíbrio. Aqui estão algumas sugestões do chef Giovanni:' },
      { tipo: 'lista', itens: [
        { rotulo: '1. Laranja, páprica e mel:', texto: 'a laranja tem uma acidez que contrasta maravilhosamente com a gordura da carne, enquanto a páprica traz um toque defumado e o mel, um leve dulçor.' },
        { rotulo: '2. Limão, mostarda e alho:', texto: 'o limão é saboroso e refrescante, ajudando a quebrar a gordura, enquanto a mostarda adiciona um toque picante e o alho garante sabor intenso.' },
        { rotulo: '3. Cerveja (clara ou escura) com alho e páprica:', texto: 'a cerveja, além de ajudar a amaciar, adiciona um sabor levemente amargo que equilibra a doçura natural da carne. A páprica, mais uma vez, traz aquele toque defumado delicioso.' },
        { rotulo: '4. Vinho (branco ou tinto) com cebola e louro:', texto: 'o vinho tem a acidez necessária para amaciar a carne, e a cebola e o louro trazem um aroma irresistível, complementando o sabor da carne de maneira elegante.' }
      ] },
      { tipo: 'subtitulo', texto: 'A marinada ideal para cada corte suíno' },
      { tipo: 'paragrafo', texto: 'A marinada ideal pode variar dependendo do tipo de corte que você escolheu. Mas a regra geral é equilibrar ingredientes alcoólicos ou cítricos com especiarias e temperos que ajudem a realçar o sabor da carne sem sobrecarregá-la. Aqui estão algumas sugestões de marinadas para os cortes mais populares:' },
      { tipo: 'lista', itens: [
        { rotulo: 'Costelinha de porco:', texto: 'marinada de laranja, mel e alho.' },
        { rotulo: 'Pernil suíno:', texto: 'marinada de cerveja escura com cebola e louro.' },
        { rotulo: 'Linguiça artesanal:', texto: 'marinada de limão, mostarda e ervas frescas.' }
      ] },
      { tipo: 'subtitulo', texto: 'O sabor dos seus sonhos!' },
      { tipo: 'paragrafo', texto: 'Independentemente do corte, o que torna um churrasco realmente inesquecível não é só a carne, mas o prazer de estar reunido com amigos e familiares ao redor da churrasqueira. Seja com a praticidade da nossa linha de churrasqueiras a gás ou na tradição do carvão, cada detalhe conta para criar uma experiência única e saborosa.' },
      { tipo: 'paragrafo', texto: 'Agora que você já sabe como marinar seus cortes suínos como um chef, que tal dar uma olhada em nossa linha de churrasqueiras Construflama? Com qualidade e inovação, nossas churrasqueiras são perfeitas para ajudar você a levar suas habilidades culinárias ao próximo nível!' },
      { tipo: 'subtitulo', texto: 'Dicas extras para o sucesso do seu churrasco' },
      { tipo: 'lista', itens: [
        'Deixe as carnes marinando por pelo menos 30 minutos (e até 12 horas para cortes mais espessos) para garantir que os temperos penetrem bem.',
        'Não se esqueça de usar uma grelha bem quente para selar os cortes e garantir aquele sabor defumado que todos amam.',
        'Capriche na escolha dos acompanhamentos, como farofas, molhos e saladas frescas, para completar a refeição.'
      ] },
      { tipo: 'paragrafo', texto: '', link: { texto: 'Aproveite as dicas e conheça nossa linha de churrasqueiras!', href: 'colecao.html?c=churrasqueiras' } }
    ]
  },
  {
    slug: 'marinada-para-cortes-bovinos',
    titulo: 'Marinada para cortes bovinos: dicas do chef Giovanni Silvestre',
    categoria: 'dicas',
    resumo: 'Quando salgar, o que usar nos cortes macios e como amaciar os mais firmes: as marinadas do chef Giovanni Silvestre para carne bovina.',
    data: '2026-02-12', exemplo: false,
    imagem: 'img/blog/marinada-bovinos.webp', capaInteira: 'escuro',
    textoAlternativo: 'Pedaço de costela bovina grelhada segurado por um pegador, sob a barra metálica com a marca Construflama, em meio à fumaça. Foto de Milena Camillo.',
    conteudo: [
      { tipo: 'paragrafo', texto: 'O churrasco é mais que uma refeição: é uma verdadeira paixão nacional! E quando falamos de churrasco, não podemos deixar de mencionar as churrasqueiras e parrillas Construflama, que tornam cada momento ao redor da grelha ainda mais especial. Entre os cortes mais amados pelos brasileiros, os bovinos são, sem dúvida, os favoritos. Mas quem disse que precisa ser sempre só sal grosso? Existem muitos temperos novos para você explorar e descobrir formas incríveis de saborear seu corte preferido.' },
      { tipo: 'subtitulo', texto: 'A arte de marinar carne bovina' },
      { tipo: 'paragrafo', texto: 'Inovar no sabor é a chave para criar experiências únicas e momentos memoráveis. Com centenas de opções de marinadas, é possível agradar todos os paladares, desde quem prepara até quem saboreia o churrasco. Para te ajudar nessa jornada gastronômica, reunimos algumas dicas do chef Giovanni Silvestre, que compartilha seus segredos para marinar cortes bovinos e levar seus churrascos a um novo nível de sabor.' },
      { tipo: 'paragrafo', texto: 'O chef e produtor gastronômico Giovanni Silvestre é formado pelo Senac, tem experiência no MasterChef Brasil e é cofundador da Tentáculos, produtora de gastronomia para audiovisual e eventos que transformam ingredientes em momentos memoráveis.' },
      { tipo: 'subtitulo', texto: 'Sal: o toque final!' },
      { tipo: 'paragrafo', texto: 'Escolher os temperos ideais é fundamental, mas um detalhe faz toda a diferença: o momento de salgar a carne. O chef Giovanni explica:' },
      { tipo: 'citacao', texto: 'Uma das regras mais importantes ao preparar carnes bovinas é não incluir sal na marinada. O sal deve ser colocado apenas na hora de colocar a carne na grelha, ou até mesmo depois de grelhada.', autor: 'Chef Giovanni Silvestre' },
      { tipo: 'paragrafo', texto: 'Esse pequeno detalhe pode transformar o sabor da carne, preservando a textura e realçando o tempero.' },
      { tipo: 'subtitulo', texto: 'Cortes bovinos macios' },
      { tipo: 'paragrafo', texto: 'Quando o assunto é carne bovina macia, como alcatra, fraldinha e maminha, a chave é uma marinada simples e aromática.' },
      { tipo: 'citacao', texto: 'Para cortes mais macios, não é necessário usar ingredientes ácidos, porque o objetivo aqui é apenas aromatizar, não amaciar a carne.', autor: 'Chef Giovanni Silvestre' },
      { tipo: 'paragrafo', texto: 'Para esses cortes (alcatra, fraldinha, maminha), opte por marinadas mais suaves, como:' },
      { tipo: 'lista', itens: [
        'Manteiga, alho e tomilho',
        'Azeite, gengibre e shoyu',
        'Azeite, manteiga, páprica e cebola'
      ] },
      { tipo: 'paragrafo', texto: 'Essas combinações vão realçar os sabores sem mascarar a maciez natural da carne.' },
      { tipo: 'subtitulo', texto: 'Cortes mais firmes' },
      { tipo: 'paragrafo', texto: 'Agora, se você vai preparar cortes mais firmes, como costela, cupim ou peito, a marinada precisa ser mais robusta, ajudando a amaciar as fibras da carne. O chef Giovanni dá a dica: esses cortes pedem uma base diferente para amaciar e, em geral, não é necessário usar óleos ou azeites, pois já têm gordura própria.' },
      { tipo: 'paragrafo', texto: 'Para amaciar esses cortes (costela, cupim, peito), aposte em marinadas mais intensas, como:' },
      { tipo: 'lista', itens: [
        'Cerveja (clara ou escura) com alho e páprica',
        'Vinho (branco ou tinto) com cebola e louro'
      ] },
      { tipo: 'paragrafo', texto: 'Essas opções ajudam a amaciar as fibras mais duras, conferindo à carne um sabor incrível.' },
      { tipo: 'subtitulo', texto: 'Experimente, crie e surpreenda!' },
      { tipo: 'paragrafo', texto: 'Com essas dicas do chef Giovanni Silvestre, você tem a liberdade para testar diferentes marinadas e encontrar a combinação perfeita para o seu paladar e de seus convidados. Lembre-se de escolher a base certa e os temperos mais harmônicos, aproveitando ao máximo a performance da sua churrasqueira Construflama!' },
      { tipo: 'subtitulo', texto: 'Transforme sua área gourmet' },
      { tipo: 'paragrafo', texto: 'Quer levar a experiência do churrasco para outro nível? Conheça nossa linha de churrasqueiras e parrillas, e prepare-se para receber seus amigos e família com o melhor do churrasco. Na Construflama, cada momento ao redor da grelha é uma celebração de sabor e convivência!' },
      { tipo: 'paragrafo', texto: '', link: { texto: 'Conheça as opções disponíveis', href: 'colecao.html?c=churrasqueiras' }, depois: 'para receber na sua área gourmet com o melhor do churrasco!' }
    ]
  },
  {
    slug: '6-motivos-para-investir-em-uma-lareira',
    titulo: 'Acolhimento é o diferencial do seu lar: 6 motivos para investir em uma lareira',
    categoria: 'lareiras',
    resumo: 'Conforto, design, convivência e valorização do imóvel: seis razões para ter uma lareira e os modelos para cada tipo de projeto.',
    data: '2026-07-23', exemplo: false,
    imagem: 'img/blog/motivos-lareira.webp', capaInteira: 'escuro',
    textoAlternativo: 'Suíte com parede de cimento queimado, televisão e, abaixo dela, uma lareira linear acesa sobre bancada de mármore claro, vista do pé da cama. Ambiente de Patrícia Hagobian, foto de Caio Falcão.',
    conteudo: [
      { tipo: 'paragrafo', texto: 'Quando as temperaturas caem, a casa se transforma no lugar onde buscamos conforto, tranquilidade e momentos especiais. E existe um elemento capaz de reunir tudo isso em um só ambiente: a lareira.' },
      { tipo: 'paragrafo', texto: 'Muito mais do que uma fonte de aquecimento, a lareira é um item que agrega design, sofisticação, bem-estar e valorização ao imóvel. Seja em uma residência ampla, apartamento ou projeto corporativo, ela cria experiências que vão além do visual.' },
      { tipo: 'paragrafo', texto: 'Se você está pensando em instalar uma lareira moderna, confira os principais motivos que fazem desse investimento uma das melhores escolhas para o seu lar.' },
      { tipo: 'subtitulo', texto: '1. Conforto térmico que transforma o ambiente' },
      { tipo: 'paragrafo', texto: 'Nada se compara ao calor agradável de uma lareira. Diferente dos aquecedores convencionais, que muitas vezes ressecam o ar ou geram ruídos, a lareira proporciona um aquecimento suave, constante e extremamente aconchegante.' },
      { tipo: 'paragrafo', texto: 'O resultado é um ambiente mais confortável para relaxar depois do trabalho, receber amigos ou aproveitar momentos especiais com a família durante os dias frios.' },
      { tipo: 'paragrafo', texto: 'Independentemente do modelo escolhido (lareira a lenha, lareira a gás ou lareira ecológica), o conforto é sempre protagonista.' },
      { tipo: 'subtitulo', texto: '2. Existe uma lareira perfeita para o seu estilo de vida' },
      { tipo: 'paragrafo', texto: 'Hoje, instalar uma lareira é muito mais simples do que muita gente imagina. A tecnologia ampliou as possibilidades e tornou esse elemento acessível para diferentes tipos de projetos.' },
      { tipo: 'paragrafo', rotulo: 'Lareira a lenha:', texto: 'Ideal para quem valoriza a experiência tradicional do fogo, com o som da madeira queimando e o charme do estilo rústico.' },
      { tipo: 'paragrafo', rotulo: 'Lareira a gás:', texto: 'Sinônimo de praticidade. Pode ser acionada por controle remoto, interruptor e, em alguns modelos, até por assistentes de voz como a Alexa. É uma excelente escolha para projetos contemporâneos e apartamentos.' },
      { tipo: 'paragrafo', rotulo: 'Lareira ecológica (etanol):', texto: 'Sem fumaça, sem chaminé e sem necessidade de grandes obras. É uma alternativa elegante para quem deseja integrar o fogo ao ambiente com praticidade e design.' },
      { tipo: 'subtitulo', texto: '3. Um modelo para cada projeto de arquitetura' },
      { tipo: 'paragrafo', texto: 'Cada ambiente possui necessidades diferentes, e por isso existem diversos modelos capazes de valorizar qualquer espaço.' },
      { tipo: 'paragrafo', rotulo: 'Lareiras embutidas em nicho:', texto: 'As lareiras embutidas se tornaram tendência na arquitetura contemporânea. Disponíveis nas versões a gás, álcool ou lenha, elas transformam o fogo no ponto focal do ambiente.' },
      { tipo: 'paragrafo', texto: 'As Ecoflamas Lineares da Construflama possuem encaixe simplificado, facilitando a instalação em nichos previamente planejados. Nos modelos a gás, o acionamento pode ser realizado por controle remoto, interruptor ou integração com Alexa.' },
      { tipo: 'paragrafo', rotulo: 'Lareiras portáteis:', texto: 'Quem procura praticidade encontra nas lareiras portáteis uma excelente solução. Modelos como a Lareira Canoa dispensam instalação e podem ser utilizados sobre superfícies resistentes ao calor, criando ambientes aconchegantes em salas, suítes, varandas e áreas externas. É a combinação perfeita entre mobilidade, design e funcionalidade.' },
      { tipo: 'paragrafo', rotulo: 'Lareiras esculturais:', texto: 'As lareiras suspensas são verdadeiras obras de arte. Presentes em projetos premiados e em mostras como a CASACOR, elas unem design autoral, elegância e sofisticação, tornando-se protagonistas da decoração. Você pode escolher entre modelos com versões a álcool, a lenha e a gás, ideais para quem deseja criar ambientes exclusivos e atemporais.' },
      { tipo: 'subtitulo', texto: '4. Mais sofisticação e personalidade para a decoração' },
      { tipo: 'paragrafo', texto: 'Poucos elementos conseguem transformar um ambiente como uma lareira.' },
      { tipo: 'paragrafo', texto: 'Ela cria um ponto focal naturalmente elegante, agrega valor ao projeto e transmite uma sensação imediata de acolhimento.' },
      { tipo: 'paragrafo', texto: 'Por isso, arquitetos e designers utilizam cada vez mais lareiras em salas de estar, suítes, recepções e áreas de convivência.' },
      { tipo: 'paragrafo', texto: 'Além da beleza, ela contribui para criar ambientes memoráveis e muito mais convidativos.' },
      { tipo: 'subtitulo', texto: '5. A lareira aproxima as pessoas' },
      { tipo: 'paragrafo', texto: 'Existe algo quase mágico em reunir pessoas ao redor do fogo.' },
      { tipo: 'paragrafo', texto: 'A lareira convida a desacelerar, deixar o celular de lado e aproveitar momentos que realmente importam. Ela cria o cenário perfeito para:' },
      { tipo: 'lista', itens: [
        'Conversas acompanhadas de um bom vinho;',
        'Noites de jogos com a família;',
        'Filmes e séries em dias frios;',
        'Leitura de um bom livro;',
        'Receber amigos com mais conforto;',
        'Simplesmente apreciar o silêncio e o calor do ambiente.'
      ] },
      { tipo: 'paragrafo', texto: 'Mais do que aquecer a casa, a lareira aquece relações.' },
      { tipo: 'subtitulo', texto: '6. Um investimento que valoriza o imóvel' },
      { tipo: 'paragrafo', texto: 'Além de todos os benefícios estéticos e funcionais, a lareira também representa uma excelente valorização patrimonial.' },
      { tipo: 'paragrafo', texto: 'Imóveis com esse diferencial costumam despertar maior interesse no mercado, agregando percepção de exclusividade e sofisticação.' },
      { tipo: 'paragrafo', texto: 'Assim como um projeto luminotécnico bem executado, móveis planejados ou acabamentos premium, uma lareira contribui para tornar o imóvel mais desejado e competitivo em vendas ou locações.' },
      { tipo: 'paragrafo', texto: 'É um investimento que gera conforto hoje e valor para o futuro.' },
      { tipo: 'subtitulo', texto: 'Pronto para transformar o seu projeto?' },
      { tipo: 'paragrafo', texto: 'Investir em uma lareira é investir em qualidade de vida. É criar ambientes mais acolhedores, sofisticados e preparados para reunir pessoas em torno de experiências inesquecíveis.' },
      { tipo: 'paragrafo', texto: 'Na Construflama você encontra modelos para todos os estilos de projeto: lareiras ecológicas, lareiras a gás, lareiras a lenha, modelos portáteis e lareiras esculturais que unem tecnologia, design e alto desempenho.' },
      { tipo: 'paragrafo', texto: '', link: { texto: 'Conheça todas as opções agora com um consultor comercial Construflama', href: 'https://whts.co/Construflama_com' }, depois: 'e descubra qual modelo combina perfeitamente com o seu ambiente. Seu próximo projeto merece o conforto e a elegância que apenas uma lareira Construflama pode proporcionar.' },
      { tipo: 'lista', itens: [
        { rotulo: 'Telefone:', texto: '', link: { texto: '(11) 5171-6070', href: 'tel:+551151716070' } },
        { rotulo: 'E-mail:', texto: '', link: { texto: 'construflama@construflama.com.br', href: 'mailto:construflama@construflama.com.br' } }
      ] }
    ]
  },
  {
    slug: 'dicas-fernando-rodrigues-churras-366',
    titulo: 'Dicas de Fernando Rodrigues, do Churras 366',
    categoria: 'dicas',
    resumo: 'Prepare-se e domine a churrasqueira como um profissional: planejamento, cortes, acompanhamentos e temperos, com as dicas do chef do Churras 366.',
    data: '2026-05-11', exemplo: false,
    imagem: 'img/blog/fernando-rodrigues-churras-366.webp', foco: '50% 22%',
    textoAlternativo: 'Chef Fernando Rodrigues, de dólmã preto com o logotipo do Churras 366, de braços cruzados e sorrindo diante de duas parrillas Construflama.',
    conteudo: [
      { tipo: 'paragrafo', texto: 'Quer transformar seu churrasco em uma experiência memorável? Fernando Rodrigues, do Churras 366, é referência no mundo do churrasco: responsável pelo maior churrasco do mundo, registrado no Guinness Book of Records, e conhecido por atender eventos de alto padrão, como a Porsche Cup Brasil e a final do Rally Mitsubishi. E ele revela: você pode levar técnicas de profissional direto para sua área gourmet usando Parrillas Construflama.' },
      { tipo: 'subtitulo', texto: 'Planejamento é a chave do sucesso' },
      { tipo: 'paragrafo', texto: 'Preparar um bom churrasco vai muito além de acender o fogo. Planejar cortes, acompanhamentos e temperos transforma o momento em uma experiência prazerosa para você e seus convidados. Segundo Fernando Rodrigues:' },
      { tipo: 'citacao', texto: 'Receber as pessoas com sabores marcantes é uma sensação recompensante. O churrasco é um momento de aproximação, seja entre família ou amigos.', autor: 'Fernando Rodrigues, Churras 366' },
      { tipo: 'paragrafo', texto: 'Organizar o que será servido antes de acender a churrasqueira ajuda a reduzir preocupações e garante que todos aproveitem o momento de lazer ao redor da churrasqueira.' },
      { tipo: 'subtitulo', texto: 'Cortes que sempre funcionam' },
      { tipo: 'paragrafo', texto: 'Alguns cortes de carne são versáteis, saborosos e agradam a todos os paladares:' },
      { tipo: 'lista', itens: [
        { rotulo: 'Bife Ancho:', texto: 'sabor marcante e textura suculenta, perfeito para impressionar.' },
        { rotulo: 'Picanha:', texto: 'o clássico brasileiro que nunca decepciona, um verdadeiro coringa da churrasqueira.' },
        { rotulo: 'Fraldinha ou Flat Iron:', texto: 'cortes mais magros, de preparo rápido, ideais para servir em maior quantidade.' }
      ] },
      { tipo: 'citacao', texto: 'Uma entradinha para abrir o apetite também faz toda a diferença.', autor: 'Fernando Rodrigues, Churras 366' },
      { tipo: 'subtitulo', texto: 'Acompanhamentos e entradas' },
      { tipo: 'paragrafo', texto: 'Para curtir o churrasco com tranquilidade, planeje os acompanhamentos com antecedência:' },
      { tipo: 'lista', itens: [
        'Organize os ingredientes antes do evento.',
        { rotulo: 'Pré-preparo:', texto: 'cortes já temperados ou parcialmente cozidos agilizam o serviço.' },
        'Isso permite que você passe mais tempo com os convidados e menos tempo correndo atrás de detalhes.'
      ] },
      { tipo: 'subtitulo', texto: 'Temperos do seu jeito' },
      { tipo: 'paragrafo', texto: 'Um tempero bem escolhido pode transformar até o prato mais simples em uma experiência memorável. Algumas dicas do Churras 366:' },
      { tipo: 'lista', itens: [
        'Escolha temperos versáteis, que funcionem tanto em carnes quanto em acompanhamentos.',
        'Use tempero seco ou molho como base e adicione seu toque especial.',
        'Experimente marinar diferentes cortes (bovinos, suínos, frango ou até peixes) para criar sabores únicos.'
      ] },
      { tipo: 'subtitulo', texto: 'Parrillas Construflama: escolha de profissionais' },
      { tipo: 'paragrafo', texto: 'Para Fernando Rodrigues e sua equipe, a qualidade e confiabilidade da churrasqueira são essenciais:' },
      { tipo: 'lista', itens: [
        { rotulo: 'Design e performance:', texto: 'equipamentos bem construídos que se destacam visualmente em eventos.' },
        { rotulo: 'Durabilidade:', texto: 'churrasqueiras resistentes para acompanhar agendas intensas de eventos.' },
        { rotulo: 'Versatilidade:', texto: 'dimensionadas para atender pequenos, médios e grandes encontros.' }
      ] },
      { tipo: 'citacao', texto: 'As Parrillas Construflama se tornam parte da cenografia dos eventos, oferecendo performance e segurança para qualquer situação.', autor: 'Fernando Rodrigues, Churras 366' },
      { tipo: 'subtitulo', texto: 'Hora da churrasqueira' },
      { tipo: 'paragrafo', texto: 'Com essas dicas, você pode transformar seu churrasco em um momento sublime, combinando técnica, sabor e descontração. Seja em eventos especiais ou encontros casuais, a Parrilla Construflama garante que cada momento ao redor da churrasqueira seja inesquecível.' },
      { tipo: 'paragrafo', texto: '', link: { texto: 'Fale com nossos consultores', href: 'https://whts.co/Construflama_com' }, depois: 'e escolha a sua Churrasqueira ou Parrilla para criar experiências memoráveis na sua área gourmet!' }
    ]
  },
  {
    slug: 'lareira-para-apartamento',
    titulo: 'Lareira para apartamento: é possível instalar?',
    categoria: 'lareiras',
    resumo: 'Ecoflama, lareira a gás ou a lenha: o que cada tipo precisa para ser instalado em um apartamento.',
    data: '2026-08-12', exemplo: false,
    imagem: 'img/blog/lareira-apartamento.webp', capaInteira: 'escuro',
    textoAlternativo: 'Sala com painel de madeira e armário de portas perfuradas; na ponta do móvel, uma lareira Ecoflama linear acesa em um nicho de mármore claro, diante de um sofá branco. Ambiente de Nathalia Candelária, foto de Rafael Renzo.',
    conteudo: [
      { tipo: 'subtitulo', texto: 'Por que as lareiras atraem cada dia mais interesse?' },
      { tipo: 'paragrafo', texto: 'As lareiras em suas diversas formas são símbolos do aconchego e do conforto nos ambientes residenciais, que têm sido cada vez mais destacados na estética. Essa tendência se reflete no design de interiores e na configuração da planta de espaços de alto padrão, solicitados por quem aprecia o lar como expressão funcional da personalidade, que dentro da rotina é um local de descanso ou “refúgio”, visando fazer desse conforto o maior diferencial de um imóvel e de um estilo de vida.' },
      { tipo: 'paragrafo', texto: '“Casa com cara de casa” é um termo que surge informalmente em círculos de entusiastas e de profissionais que buscam expressar de maneira rápida a necessidade de habitar um espaço acolhedor, e isso se reflete também nos apartamentos, principal tipo de moradia dos grandes centros urbanos.' },
      { tipo: 'paragrafo', texto: 'Nessa busca pelo elemento do “acolher”, muitos se perguntam se é possível ter uma lareira que remete às tradições de reunir ao redor do fogo mesmo morando em um apartamento. Conheça agora as suas opções para ter no seu apartamento esse autocuidado que simboliza não só status, mas pertencimento ao local.' },
      { tipo: 'subtitulo', texto: 'Escolha o modelo que abraça o seu lar!' },
      { tipo: 'paragrafo', texto: 'A linha escultural é ideal para espaços amplos com pé-direito alto, como livings integrados. São modelos que podem agregar à estética do seu ambiente nas versões a gás, lenha ou carvão.' },
      { tipo: 'paragrafo', texto: 'Modelos lineares, tanto nas Ecoflamas quanto nas lareiras a gás, podem ser encaixados em diversas propostas visuais com o minimalismo que dá toda a liberdade a quem projeta e decora.' },
      { tipo: 'paragrafo', texto: 'As Lareiras Portáteis e Mesas com Ecoflama encaixam perfeitamente no espaço e são tão fáceis de agregar ao layout quanto um móvel de pequeno porte.' },
      { tipo: 'subtitulo', texto: 'Quais modelos de lareira posso ter no meu apartamento?' },
      { tipo: 'paragrafo', rotulo: 'Ecoflamas:', texto: 'As lareiras a álcool Construflama trazem de maneira especial o benefício da praticidade. Você pode utilizar esse tipo de produto em ambientes fechados sem necessidade de exaustão e nem infraestrutura do condomínio, seja nas peças portáteis que não precisam de base em alvenaria e nem processos de instalação, ou nas peças que podem ser sobrepostas com encaixe em um nicho simples. A Ecoflama é uma forma simples de agregar elegância e conforto para diversos tipos de espaço.' },
      { tipo: 'paragrafo', rotulo: 'Lareira a gás:', texto: 'Para ter uma Lareira a Gás Construflama no seu apartamento é necessário apenas que o local tenha pontos de gás e eletricidade que possam ser conectados à lareira, além de incluir uma coifa de respiro que não demanda motor nem dentro do apartamento nem na estrutura comum do prédio, ou então ventilação cruzada, que é a existência de janelas ou portas extensas que possam arejar o ambiente durante o uso como forma de precaução, garantindo conforto térmico e visual elegante sem preocupações.' },
      { tipo: 'paragrafo', rotulo: 'Lareira a lenha:', texto: 'Os modelos a lenha necessitam de análise da estrutura do prédio e das questões estruturais do condomínio, mas o processo é 100% possível caso haja estruturas que viabilizem a liberação da fumaça, como shafts comuns aos apartamentos ou chaminés dedicadas. Nesse tipo de produto mais tradicional, é fundamental a análise caso a caso para que seja alcançável o sonho de um lar que acolha quem entra através da beleza e do calor da chama.' },
      { tipo: 'subtitulo', texto: 'O que mais é importante saber?' },
      { tipo: 'lista', itens: [
        'Atente-se às normas do condomínio para seguir todos os regulamentos relacionados a esse tipo de produto.',
        'Escolha com carinho a posição! Ao selecionar o lugar da lareira você pode decidir qual parte do seu imóvel será mais beneficiada do ponto de vista estético e térmico.',
        'Conheça no detalhe o seu próximo passo em direção a um lar mais confortável.'
      ] },
      { tipo: 'paragrafo', texto: 'Nossos consultores comerciais estão preparados para tirar suas dúvidas a fundo para encontrar a melhor opção considerando o seu imóvel, a sua rotina e a sua paixão estética!' },
      { tipo: 'paragrafo', texto: '', link: { texto: 'Clique e descubra', href: 'https://whts.co/Construflama_com' }, depois: 'como a arte e o prazer do fogo podem fazer parte da sua rotina!' },
      { tipo: 'lista', itens: [
        { rotulo: 'Telefone:', texto: '', link: { texto: '(11) 5171-6070', href: 'tel:+551151716070' } },
        { rotulo: 'E-mail:', texto: '', link: { texto: 'construflama@construflama.com.br', href: 'mailto:construflama@construflama.com.br' } }
      ] }
    ]
  },
  {
    slug: 'como-escolher-a-lareira-ideal',
    titulo: 'Como escolher a lareira ideal para sua casa',
    categoria: 'lareiras',
    resumo: 'Inovação com liberdade criativa: como o Trio Ecolare foi lançado na CASACOR São Paulo 2026 e conquistou paisagistas e o público.',
    data: '2026-08-21', exemplo: false,
    // ATENÇÃO: o site oficial publica neste título o mesmo texto do artigo
    // do Trio Ecolare (copiado igual, a pedido). TODO: trocar pelo texto
    // próprio quando a Construflama corrigir.
    imagem: 'img/blog/lareira-ideal-igor-zanon.webp', capaInteira: 'escuro',
    textoAlternativo: 'Quarto com paredes revestidas de madeira e a lareira suspensa branca, de tubo fino, entre a cama e uma poltrona clara, diante de uma janela com persiana. Ambiente de Igor Zanon, foto de Gustavo Xavier.',
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
