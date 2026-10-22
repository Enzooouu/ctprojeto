/* ==========================================================================
   Construflama | Artigos do blog
   Carregado antes de main.js (sem fetch: funciona abrindo o arquivo direto).
   blog.html lista os artigos; post.html?slug=... mostra um artigo.

   BLOG_CATEGORIAS: ordem dos filtros da lista (depois de "Todos").
   - slug igual ao de CATEGORIAS (main.js) usa o nome e a ilustração de lá;
   - categorias só do blog (Projetos, Dicas) trazem o próprio nome.

   POSTS (ordem do array = ordem da lista, do mais novo para o mais antigo):
   - slug: endereço do artigo (post.html?slug=<slug>)
   - titulo, resumo: textos do card e do topo do artigo
   - categoria: slug de BLOG_CATEGORIAS
   - data: 'AAAA-MM-DD' (data de publicação)
   - imagem / textoAlternativo: capa do artigo. Vazio = bloco de gradiente da
     categoria com ilustração (TODO: trocar pelas fotos reais)
   - destaque: true para o artigo grande no topo da lista (só um)
   - exemplo: true mostra a etiqueta "Exemplo" (use false nos artigos reais)
   - conteudo: lista de blocos, na ordem do texto:
       { tipo: 'subtitulo', texto }   vira um item do índice "Neste artigo"
       { tipo: 'paragrafo', texto }
       { tipo: 'lista', itens: [...] }
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
    slug: 'lareira-a-gas-ou-ecoflama',
    titulo: 'Lareira a gás ou ecoflama: como escolher',
    categoria: 'lareiras',
    resumo: 'Um roteiro para comparar as duas opções e pensar em qual combina com o seu ambiente.',
    data: '2026-10-14', destaque: true, exemplo: true,
    imagem: '', textoAlternativo: '',
    conteudo: conteudoExemplo(['O que observar no ambiente', 'Como cada opção funciona', 'Perguntas para levar ao projeto', 'Como decidir'])
  },
  {
    slug: 'churrasqueira-carvao-gas-ou-hibrida',
    titulo: 'Churrasqueira a carvão, a gás ou híbrida: qual combina com o seu espaço',
    categoria: 'churrasqueiras',
    resumo: 'Os pontos para conversar com o arquiteto antes de escolher o tipo de churrasqueira.',
    data: '2026-10-07', destaque: false, exemplo: true,
    imagem: '', textoAlternativo: '',
    conteudo: conteudoExemplo(['Como você usa a área gourmet', 'O que muda entre os tipos', 'Como decidir'])
  },
  {
    slug: 'coifa-para-churrasqueira',
    titulo: 'Coifa para churrasqueira: o que considerar antes de comprar',
    categoria: 'coifas',
    resumo: 'O que vale avaliar no projeto para a coifa acompanhar a churrasqueira e o ambiente.',
    data: '2026-09-30', destaque: false, exemplo: true,
    imagem: '', textoAlternativo: '',
    conteudo: conteudoExemplo(['O ambiente e a churrasqueira', 'Desenho e acabamento', 'Instalação e manutenção'])
  },
  {
    slug: 'parrilla-residencial-ou-profissional',
    titulo: 'Parrilla residencial ou profissional: diferenças',
    categoria: 'parrillas',
    resumo: 'Como pensar a escolha entre as duas linhas a partir do uso e do espaço disponível.',
    data: '2026-09-23', destaque: false, exemplo: true,
    imagem: '', textoAlternativo: '',
    conteudo: conteudoExemplo(['Para quem é cada linha', 'O espaço e o uso', 'Como decidir'])
  },
  {
    slug: 'forno-de-pizza-a-lenha-ou-portatil',
    titulo: 'Forno de pizza a lenha ou portátil',
    categoria: 'fornos-de-pizza',
    resumo: 'Tradição ou praticidade: um guia para escolher o forno certo para a sua casa.',
    data: '2026-09-16', destaque: false, exemplo: true,
    imagem: '', textoAlternativo: '',
    conteudo: conteudoExemplo(['O ritual do forno a lenha', 'A praticidade do portátil', 'Como decidir'])
  },
  {
    slug: 'area-gourmet-com-arquiteto',
    titulo: 'Como planejar uma área gourmet com arquiteto',
    categoria: 'projetos',
    resumo: 'Do primeiro desenho à primeira chama: como organizar o projeto da área gourmet.',
    data: '2026-09-09', destaque: false, exemplo: true,
    imagem: '', textoAlternativo: '',
    conteudo: conteudoExemplo(['Antes do primeiro desenho', 'Escolhendo os equipamentos', 'Do projeto à obra', 'Depois da entrega'])
  }
];
