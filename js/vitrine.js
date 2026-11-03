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
   - lado: 'direita' | 'esquerda', de que lado do produto fica a legenda
     (alternar); se não couber, ela passa para o outro lado
   - largura: % da largura da tela que a foto ocupa no computador (100 =
     largura toda; menos que isso, a foto fica do lado oposto ao texto)
   - foco: object-position da foto no computador; focoCelular, no celular
   - ponto: [x, y] onde está o produto na foto, de 0 a 1 (fim da linha)
   - marca (opcional): { grande, pequeno, x, y } frase institucional em letra
     grande numa área livre da foto; x e y em fração da seção (computador)
   - distancia (opcional): espaço em px entre o ponto e a legenda (padrão 150);
     maior para produtos largos
   ========================================================================== */
var VITRINE = [
  {
    categoria: 'Lareiras',
    nome: 'Lareira Balaio',
    // Descrição do site (página da Lareira Balaio)
    descricao: 'Desenhada pelo arquiteto Quintino Facci, a Lareira Escultural Balaio proporciona um ambiente aconchegante e sofisticado.',
    info: ['A lenha, a álcool ou a gás', 'Preta, marrom ou branca'],
    produto: 'produto.html?c=lareiras&l=esculturais&m=balaio',
    colecao: 'colecao.html?c=lareiras',
    imagem: 'img/vitrine/lareira-balaio-sala.webp',
    textoAlternativo: 'Lareira Balaio preta acesa no canto de uma sala revestida de madeira clara, com o cilindro suspenso sobre o prato redondo, ao lado de um sofá curvo laranja e de uma parede de placas brancas em relevo.',
    lado: 'esquerda', largura: 100, foco: '50% 55%', focoCelular: '40% 50%',
    marca: { grande: '+40 anos', pequeno: 'de mercado', x: 0.6, y: 0.13 },
    ponto: [0.4, 0.6]
  },
  {
    categoria: 'Churrasqueiras',
    nome: 'Churrasqueira Soft com tampa',
    // Site (página da Soft com tampa) e lista da linha Soft
    descricao: 'Design e tecnologia juntos, com o mais alto padrão de eficiência, para cozinhas e áreas gourmet.',
    info: ['A gás, a carvão ou infravermelho', 'Aço inox 304', 'Tamanhos de 60 a 110'],
    produto: 'produto.html?c=churrasqueiras&l=soft&m=com-tampa',
    colecao: 'colecao.html?c=churrasqueiras',
    imagem: 'img/vitrine/churrasqueira-soft-tampa-cozinha.webp',
    textoAlternativo: 'Cozinha de armários rosados com bancada branca, vaso de planta, cuba de inox e adega; à direita, a Churrasqueira Soft com tampa a gás, com três botões, sob uma coifa de inox.',
    lado: 'esquerda', largura: 100, foco: '50% 50%', focoCelular: '78% 50%',
    ponto: [0.8, 0.49], distancia: 260
  },
  {
    categoria: 'Coifas',
    nome: 'Coifa cilíndrica',
    // Descrição da linha Cozinha e artigo "Cálculo de exaustão" do blog
    descricao: 'Formas e cores que transformam a coifa em peça de design, integrada à arquitetura da cozinha.',
    info: ['Projeto com cálculo de exaustão', 'Visita técnica para definir a tubulação'],
    produto: 'colecao.html?c=coifas#linha-cozinha',
    colecao: 'colecao.html?c=coifas',
    imagem: 'img/vitrine/coifa-cilindrica-cozinha.webp',
    textoAlternativo: 'Coifa cilíndrica laranja suspensa sobre uma ilha de cozinha arredondada com torneira dourada, numa cozinha em tons de terracota com prateleira de vasos e luminárias pendentes.',
    lado: 'direita', largura: 100, foco: '50% 40%', focoCelular: '24% 50%',
    ponto: [0.24, 0.3]
  },
  {
    categoria: 'Parrillas',
    nome: 'Parrilla profissional',
    // Descrição da linha e artigos do blog sobre parrillas e aço inox 304
    descricao: 'Estrutura robusta e braseiro central para o ritmo de restaurantes e churrascarias.',
    info: ['Firebox lateral para carvão ou lenha', 'Aço inox 304'],
    produto: 'colecao.html?c=parrillas#linha-profissional',
    colecao: 'colecao.html?c=parrillas',
    imagem: 'img/vitrine/parrillas-churrascada.webp',
    textoAlternativo: 'Fileira de parrillas profissionais de inox com rodas de regulagem e braseiros Churrascada, sobre um balcão de madeira escura com lenha empilhada embaixo, sob uma luminária de filamento.',
    lado: 'esquerda', largura: 100, foco: '50% 45%', focoCelular: '42% 50%',
    marca: { grande: 'Showroom', pequeno: 'em São Paulo', x: 0.6, y: 0.6 },
    ponto: [0.425, 0.45]
  },
  {
    categoria: 'Fornos de pizza',
    nome: 'Forno a lenha',
    // Descrição da linha e artigo "Cura do forno de pizza" do blog
    descricao: 'O forno em cúpula, com porta e chaminé, para pizzas de sabor tradicional e para fazer do preparo um encontro.',
    info: ['Cúpula com porta e chaminé', 'Cura com fogo baixo antes do primeiro uso'],
    produto: 'colecao.html?c=fornos-de-pizza#linha-a-lenha',
    colecao: 'colecao.html?c=fornos-de-pizza',
    imagem: 'img/vitrine/forno-a-lenha-cozinha.webp',
    textoAlternativo: 'Forno a lenha branco em formato de cúpula, com porta preta e chaminé, numa área gourmet com parede de tijolinhos, pás de pizza penduradas, luminária de palha e cooktop com panela de cobre.',
    lado: 'direita', largura: 100, foco: '50% 65%', focoCelular: '68% 60%',
    marca: { grande: 'Entrega', pequeno: 'em todo o Brasil', x: 0.04, y: 0.5 },
    ponto: [0.68, 0.7]
  }
];
