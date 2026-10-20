/* ==========================================================================
   Construflama | Protótipo da home
   1) Dados (no topo, para editar sem mexer no layout)
   2) Montagem das partes geradas a partir dos dados
   3) Interações: cabeçalho, menu mobile, submenus, carrosséis,
      animações de entrada e avisos de links ainda não criados.
   ========================================================================== */

/* --------------------------------------------------------------------------
   CATEGORIAS: fonte única de coleções e subcategorias.
   Daqui saem o menu do cabeçalho (desktop e mobile), a grade de coleções,
   a lista do rodapé, os catálogos e as categorias dos produtos.
   Qualquer filtro ou aba futura deve ler daqui também.

   - slug: identificador (vira a âncora #colecao-<slug>)
   - visual: classe de cor do card e ilustração (ver styles.css e o sprite)
   - prefixo: começo da frase do card, antes da lista de subcategorias
   - imagem (opcional): foto do card da grade de coleções. Vazio = degradê
     + ilustração em traço. foco: ponto da foto que fica sempre visível
     quando ela é recortada (CSS object-position, ex.: '45% 60%')
   - pagina: true quando a coleção já tem página própria (colecao.html?c=slug).
     Sem isso, os links da coleção mostram o aviso de "próxima etapa".
   - Em cada subcategoria (usados na página da coleção):
     descricao: frase curta da linha (TODO enquanto vazia: aparece marcada
     como exemplo); imagem / textoAlternativo / foco: foto da linha.
   - subcategorias: { nome, slug, marca? } (marca: true mantém a inicial
     maiúscula no meio da frase, como em "Ecoflamas")
   Com uma única subcategoria, o item do menu vira link direto (sem submenu).
   -------------------------------------------------------------------------- */
var CATEGORIAS = [
  {
    nome: 'Lareiras', slug: 'lareiras', visual: 'lareiras', ilustracao: 'p-lareira', prefixo: '',
    imagem: 'img/colecoes/lareiras.webp', foco: '50% 65%',
    pagina: true,
    // TODO: foto e frase de cada linha (o usuário vai enviar)
    subcategorias: [
      { nome: 'Tradicionais', slug: 'tradicionais', descricao: '', imagem: '', textoAlternativo: '' },
      { nome: 'A gás linear', slug: 'a-gas-linear', descricao: '', imagem: '', textoAlternativo: '' },
      { nome: 'Esculturais', slug: 'esculturais', descricao: '', imagem: '', textoAlternativo: '' },
      { nome: 'Ecoflamas', slug: 'ecoflamas', marca: true, descricao: '', imagem: '', textoAlternativo: '' },
      { nome: 'Tachos', slug: 'tachos', descricao: '', imagem: '', textoAlternativo: '' }
    ]
  },
  {
    nome: 'Churrasqueiras', slug: 'churrasqueiras', visual: 'churrasqueiras', ilustracao: 'p-churrasqueira', prefixo: '',
    imagem: 'img/colecoes/churrasqueiras.webp', foco: '45% 55%',
    subcategorias: [
      { nome: 'A carvão', slug: 'a-carvao' },
      { nome: 'A gás', slug: 'a-gas' },
      { nome: 'Híbrida', slug: 'hibrida' },
      { nome: 'Acessórios', slug: 'acessorios' }
    ]
  },
  {
    nome: 'Coifas', slug: 'coifas', visual: 'coifas', ilustracao: 'p-coifa', prefixo: 'Para ',
    imagem: 'img/colecoes/coifas.webp', foco: '58% 30%',
    subcategorias: [
      { nome: 'Churrasqueira', slug: 'churrasqueira' },
      { nome: 'Cozinha', slug: 'cozinha' },
      { nome: 'Parrilla', slug: 'parrilla' }
    ]
  },
  {
    nome: 'Parrillas', slug: 'parrillas', visual: 'parrillas', ilustracao: 'p-parrilla', prefixo: 'Linhas ',
    imagem: 'img/colecoes/parrillas.webp', foco: '40% 45%',
    subcategorias: [
      { nome: 'Profissional', slug: 'profissional' },
      { nome: 'Residencial', slug: 'residencial' }
    ]
  },
  {
    nome: 'Fornos de Pizza', slug: 'fornos-de-pizza', visual: 'fornos', ilustracao: 'p-forno', prefixo: '',
    imagem: 'img/colecoes/fornos-de-pizza.webp', foco: '55% 55%',
    subcategorias: [
      { nome: 'A lenha', slug: 'a-lenha' },
      { nome: 'Portátil', slug: 'portatil' }
    ]
  },
  {
    nome: 'Tocheiros', slug: 'tocheiros', visual: 'tocheiros', ilustracao: 'p-tocheiro', prefixo: 'Modelos ',
    imagem: 'img/colecoes/tocheiros.webp', foco: '50% 40%',
    subcategorias: [
      { nome: 'A gás', slug: 'a-gas' },
      { nome: 'A álcool', slug: 'a-alcool' }
    ]
  },
  {
    nome: 'Chapeiras', slug: 'chapeiras', visual: 'chapeiras', ilustracao: 'p-chapeira', prefixo: '',
    // Foto de estúdio: fundo branco trocado por fundo carvão, produto no alto
    imagem: 'img/colecoes/chapeiras.webp', foco: '50% 35%',
    subcategorias: [
      { nome: 'A gás', slug: 'a-gas' },
      { nome: 'Elétrica', slug: 'eletrica' }
    ]
  }
];

/* PRODUTOS fica em js/produtos.js (carregado antes deste arquivo). */

/* --------------------------------------------------------------------------
   CATALOGOS para download (seção do especificador). Cada catálogo junta
   uma ou mais categorias; a descrição é montada com as subcategorias.
   TODO: preencher "arquivo" com o caminho do PDF real de cada catálogo.
   -------------------------------------------------------------------------- */
var CATALOGOS = [
  { titulo: 'Lareiras', categorias: ['lareiras'], arquivo: '' },
  { titulo: 'Churrasqueiras e parrillas', categorias: ['churrasqueiras', 'parrillas'], arquivo: '' },
  { titulo: 'Coifas', categorias: ['coifas'], arquivo: '' },
  { titulo: 'Fornos de pizza, tocheiros e chapeiras', categorias: ['fornos-de-pizza', 'tocheiros', 'chapeiras'], arquivo: '' }
];

/* --------------------------------------------------------------------------
   AVALIAÇÕES NO GOOGLE
   Nota e quantidade reais (atualize aqui quando mudarem).
   -------------------------------------------------------------------------- */
var NOTA_GOOGLE = 4.5;
var TOTAL_AVALIACOES = 149;

/* DEPOIMENTOS reais, copiados do perfil da Construflama no Google
   (texto e nome exatamente como aparecem lá; não editar o conteúdo).
   - texto: use \n para separar parágrafos
   - detalhe: linha abaixo do nome (perfil do avaliador no Google)
   - exemplo: true mostra a etiqueta "Exemplo" (use só em conteúdo provisório) */
var DEPOIMENTOS = [
  {
    texto: 'Parrillas de extrema qualidade, muito bonitas que dá até dó de usar, agora falando de qualidade do produto e inquestionável tudo muito bem feito.',
    autor: 'Icaro Macier',
    detalhe: 'Local Guide · 45 avaliações no Google',
    exemplo: false
  },
  {
    texto: 'Recebi o modelo Trio Chess e fiquei encantada com a praticidade: veio tudo prontinho, com o álcool, super fácil de acender e o melhor… até com o vento que estava batendo forte, o fogo se manteve firme!\nAlém da experiência sensorial, o visual é incrível — deixou o ambiente super aconchegante, moderno e lindo! Foi a cereja do bolo na produção da Casa 🏠',
    autor: 'Daniela Colnaghi',
    detalhe: 'Local Guide · 52 avaliações no Google',
    exemplo: false
  },
  {
    texto: 'Tive uma excelente experiência com a empresa durante a CASACOR São Paulo. Uma equipe comprometida, organizada e muito atenta aos detalhes, conseguiram entregar tudo com qualidade e dentro de um prazo curto. Além do cuidado com o produto, destacam-se pela postura colaborativa durante o evento e no pós. Recomendo como parceira de confiança!',
    autor: 'Clarice Alves',
    detalhe: '5 avaliações no Google',
    exemplo: false
  }
];

(function () {
  'use strict';

  var desktopQuery = window.matchMedia('(min-width: 1180px)');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ------------------------------------------------------------------------
     A. Utilitários de montagem (textContent em tudo: dados nunca viram HTML)
     ------------------------------------------------------------------------ */
  var SVG_NS = 'http://www.w3.org/2000/svg';

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function icone(id, className) {
    var svg = document.createElementNS(SVG_NS, 'svg');
    var use = document.createElementNS(SVG_NS, 'use');
    svg.setAttribute('aria-hidden', 'true');
    if (className) svg.setAttribute('class', className);
    use.setAttribute('href', '#' + id);
    svg.appendChild(use);
    return svg;
  }

  function srOnly(text) { return el('span', 'sr-only', text); }

  // Texto do menu que, no desktop, aparece esticado na vertical (ver .alto no CSS)
  function textoAlto(text) { return el('span', 'alto', text); }

  // Página de coleção (colecao.html?c=slug) ou, nas outras páginas, a home
  var NA_PAGINA_COLECAO = document.body.hasAttribute('data-pagina-colecao');
  var SLUG_ATUAL = NA_PAGINA_COLECAO ? new URLSearchParams(location.search).get('c') : null;

  // Coleção com página própria leva até ela; as outras, ao card da home
  function ancoraColecao(cat) {
    if (cat.pagina) return 'colecao.html?c=' + cat.slug;
    return (NA_PAGINA_COLECAO ? 'index.html' : '') + '#colecao-' + cat.slug;
  }

  // Linha dentro da página da coleção (âncora #linha-slug)
  function ancoraLinha(cat, s) { return 'colecao.html?c=' + cat.slug + '#linha-' + s.slug; }

  function buscarCategoria(slug) {
    return CATEGORIAS.filter(function (c) { return c.slug === slug; })[0];
  }

  // "a, b e c", com a inicial minúscula (exceto nomes de linha, como Ecoflamas)
  function listarSubcategorias(cat) {
    var nomes = cat.subcategorias.map(function (s) {
      return s.marca ? s.nome : s.nome.charAt(0).toLowerCase() + s.nome.slice(1);
    });
    return nomes.length > 1 ? nomes.slice(0, -1).join(', ') + ' e ' + nomes[nomes.length - 1] : nomes[0];
  }

  // Frase curta do card: só cita subcategorias que existem nos dados
  function descricaoCategoria(cat) {
    var frase = cat.prefixo + listarSubcategorias(cat);
    return frase.charAt(0).toUpperCase() + frase.slice(1) + '.';
  }

  function linkProvisorio(texto, mensagem, href) {
    var a = el('a', null, texto);
    a.href = href || '#';
    a.setAttribute('data-proto', mensagem);
    return a;
  }

  /* ------------------------------------------------------------------------
     B. Menu de coleções (cabeçalho; o mesmo <ul> vira o painel mobile)
     ------------------------------------------------------------------------ */
  (function montarMenu() {
    var lista = document.querySelector('[data-menu-colecoes]');
    if (!lista) return;
    var ordem = 0;
    var comSub = CATEGORIAS.filter(function (c) { return c.subcategorias.length > 1; });
    var ultimaComSub = comSub[comSub.length - 1];

    CATEGORIAS.forEach(function (cat) {
      var li = el('li', 'nav-item');
      li.style.setProperty('--i', ordem++); // cascata ao abrir o menu mobile

      // Uma subcategoria só: link direto para a coleção, sem submenu
      if (cat.subcategorias.length <= 1) {
        var link = el('a', 'nav-link');
        link.appendChild(textoAlto(cat.nome));
        link.href = ancoraColecao(cat);
        li.appendChild(link);
        lista.appendChild(li);
        return;
      }

      var id = 'sub-' + cat.slug;
      li.classList.add('has-sub');

      var botao = el('button', 'nav-link');
      botao.appendChild(textoAlto(cat.nome));
      botao.type = 'button';
      botao.setAttribute('aria-expanded', 'false');
      botao.setAttribute('aria-controls', id);
      botao.appendChild(icone('i-seta-baixo', 'icon nav-link__chevron'));

      // O submenu da última coluna abre para a esquerda (não cobre o botão de orçamento)
      var sub = el('ul', 'submenu' + (cat === ultimaComSub ? ' submenu--end' : ''));
      sub.id = id;
      cat.subcategorias.forEach(function (s) {
        var item = el('li');
        var link;
        if (cat.pagina) {
          link = el('a');
          link.href = ancoraLinha(cat, s);
        } else {
          link = linkProvisorio('',
            'A página "' + cat.nome + ': ' + s.nome + '" será criada na próxima etapa.',
            ancoraColecao(cat));
        }
        link.appendChild(textoAlto(s.nome));
        item.appendChild(link);
        sub.appendChild(item);
      });
      var todos = el('li', 'submenu__all');
      var linkTodos = el('a');
      linkTodos.appendChild(textoAlto('Ver toda a coleção'));
      linkTodos.href = ancoraColecao(cat);
      linkTodos.appendChild(srOnly(' de ' + cat.nome));
      if (cat.slug === SLUG_ATUAL) linkTodos.setAttribute('aria-current', 'page');
      todos.appendChild(linkTodos);
      sub.appendChild(todos);

      Array.prototype.forEach.call(sub.children, function (item, n) { item.style.setProperty('--i', n); });
      li.appendChild(botao);
      li.appendChild(sub);
      lista.appendChild(li);
    });
  })();

  /* ------------------------------------------------------------------------
     C. Grade de coleções
     Com foto (campo imagem), o card mostra a foto; sem foto, o degradê da
     coleção e a ilustração em traço. O véu escuro mantém o texto legível.
     ------------------------------------------------------------------------ */
  (function montarGrade() {
    var grade = document.querySelector('[data-grade-colecoes]');
    if (!grade) return;

    CATEGORIAS.forEach(function (cat) {
      if (cat.slug === SLUG_ATUAL) return; // na página da coleção, só as outras
      var li = el('li', 'tile tile--' + cat.visual + (cat.imagem ? ' tile--foto' : ''));
      li.id = 'colecao-' + cat.slug;

      if (cat.imagem) {
        // Decorativa: o nome da coleção já está no texto do link
        var foto = el('img', 'tile__foto');
        foto.src = cat.imagem;
        foto.alt = '';
        foto.loading = 'lazy';
        foto.decoding = 'async';
        if (cat.foco) foto.style.objectPosition = cat.foco;
        li.appendChild(foto);
      }

      var link = cat.pagina
        ? el('a')
        : linkProvisorio('', 'A página da coleção ' + cat.nome + ' será criada na próxima etapa.');
      link.href = cat.pagina ? ancoraColecao(cat) : '#colecao-' + cat.slug;
      link.className = 'tile__link';
      if (!cat.imagem) link.appendChild(icone(cat.ilustracao, 'tile__art'));

      var texto = el('span', 'tile__text');
      texto.appendChild(el('span', 'tile__name', cat.nome));
      texto.appendChild(el('span', 'tile__desc', descricaoCategoria(cat)));
      link.appendChild(texto);

      li.appendChild(link);
      grade.appendChild(li);
    });
  })();

  /* ------------------------------------------------------------------------
     D. Coleções no rodapé
     ------------------------------------------------------------------------ */
  (function montarRodape() {
    var lista = document.querySelector('[data-rodape-colecoes]');
    if (!lista) return;
    CATEGORIAS.forEach(function (cat) {
      var li = el('li');
      var a = el('a', null, cat.nome);
      a.href = ancoraColecao(cat);
      if (cat.slug === SLUG_ATUAL) a.setAttribute('aria-current', 'page');
      li.appendChild(a);
      lista.appendChild(li);
    });
  })();

  /* ------------------------------------------------------------------------
     D2. Página de coleção (colecao.html?c=slug)
         Tudo sai de CATEGORIAS e PRODUTOS: topo com a foto da coleção,
         atalhos para cada linha, um bloco por linha (foto, frase, produtos
         e orçamento), catálogo e as outras coleções.
     ------------------------------------------------------------------------ */
  (function montarPaginaColecao() {
    if (!NA_PAGINA_COLECAO) return;
    var WHATSAPP = 'https://whts.co/Construflama_com';
    var cat = SLUG_ATUAL ? buscarCategoria(SLUG_ATUAL) : null;
    var titulo = document.querySelector('[data-colecao-nome]');
    var lead = document.querySelector('[data-colecao-desc]');

    // Endereço sem coleção válida: avisa e oferece o caminho de volta
    if (!cat || !cat.pagina) {
      document.title = 'Coleção não encontrada | Construflama';
      titulo.textContent = 'Coleção não encontrada';
      lead.textContent = 'Este endereço não corresponde a uma coleção. Veja todas as coleções na página inicial.';
      document.querySelectorAll('[data-so-colecao]').forEach(function (n) { n.hidden = true; });
      return;
    }

    document.title = cat.nome + ' | Construflama';
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', cat.nome + ' Construflama: ' + listarSubcategorias(cat) + '. Showroom em São Paulo e entrega em todo o Brasil.');

    titulo.textContent = cat.nome;
    lead.textContent = descricaoCategoria(cat);
    var migalha = document.querySelector('[data-colecao-migalha]');
    if (migalha) migalha.textContent = cat.nome;

    var foto = document.querySelector('[data-colecao-foto]');
    if (foto && cat.imagem) {
      foto.src = cat.imagem;
      if (cat.foco) foto.style.objectPosition = cat.foco;
    } else if (foto) {
      foto.remove();
    }

    // Atalhos (um por linha) logo abaixo do topo
    var atalhos = document.querySelector('[data-colecao-atalhos]');
    var linhas = document.querySelector('[data-colecao-linhas]');
    var produtos = typeof PRODUTOS === 'undefined' ? [] : PRODUTOS;

    cat.subcategorias.forEach(function (s, n) {
      var idLinha = 'linha-' + s.slug;

      var item = el('li');
      var atalho = el('a', 'col-atalho', s.nome);
      atalho.href = '#' + idLinha;
      item.appendChild(atalho);
      atalhos.appendChild(item);

      var bloco = el('article', 'col-linha');
      bloco.id = idLinha;
      bloco.setAttribute('aria-labelledby', idLinha + '-titulo');
      bloco.setAttribute('data-reveal', 'stagger');

      // Foto da linha (TODO enquanto vazia: material da coleção + ilustração)
      var midia = el('div', 'col-linha__midia material--' + cat.visual);
      if (s.imagem) {
        var img = el('img', 'col-linha__foto');
        img.src = s.imagem;
        img.alt = s.textoAlternativo || '';
        img.loading = 'lazy';
        img.decoding = 'async';
        if (s.foco) img.style.objectPosition = s.foco;
        midia.appendChild(img);
      } else {
        midia.classList.add('col-linha__midia--vazia');
        midia.appendChild(icone(cat.ilustracao, 'col-linha__arte'));
        midia.appendChild(el('span', 'tag-exemplo', 'Foto em breve'));
      }
      bloco.appendChild(midia);

      var texto = el('div', 'col-linha__texto');
      var num = el('p', 'col-linha__num', String(n + 1).padStart(2, '0') + ' / ' + String(cat.subcategorias.length).padStart(2, '0'));
      num.setAttribute('aria-hidden', 'true');
      texto.appendChild(num);
      var h = el('h3', 'col-linha__nome', s.nome);
      h.id = idLinha + '-titulo';
      texto.appendChild(h);

      var desc = el('p', 'col-linha__desc');
      if (s.descricao) {
        desc.textContent = s.descricao;
      } else {
        desc.textContent = '[Frase curta sobre a linha] '; // TODO: texto real da linha
        desc.appendChild(el('span', 'tag-exemplo col-linha__tag', 'Exemplo'));
      }
      texto.appendChild(desc);

      // Produtos reais desta linha (os de exemplo ficam de fora)
      var daLinha = produtos.filter(function (p) {
        return p.categoria === cat.slug && p.subcategoria === s.slug && !p.exemplo;
      });
      if (daLinha.length) {
        var lista = el('ul', 'col-produtos');
        lista.setAttribute('aria-label', 'Modelos da linha ' + s.nome);
        daLinha.forEach(function (p) {
          var li = el('li', 'col-produto');
          if (p.imagem) {
            var mini = el('img', 'col-produto__foto');
            mini.src = p.imagem;
            mini.alt = p.textoAlternativo || '';
            mini.loading = 'lazy';
            mini.decoding = 'async';
            li.appendChild(mini);
          }
          li.appendChild(el('p', 'col-produto__nome', p.nome));
          lista.appendChild(li);
        });
        texto.appendChild(lista);
      }

      var cta = el('a', 'btn btn--primary col-linha__cta', 'Pedir orçamento');
      cta.href = WHATSAPP;
      cta.target = '_blank';
      cta.rel = 'noopener';
      cta.appendChild(srOnly(': ' + cat.nome + ', linha ' + s.nome));
      texto.appendChild(cta);

      bloco.appendChild(texto);
      linhas.appendChild(bloco);
    });
  })();

  /* ------------------------------------------------------------------------
     E. Produtos em destaque: carrossel grande com loop infinito
        - Slides vêm de PRODUTOS (js/produtos.js), só os com destaque: true.
        - Cada slide recebe uma posição relativa ao atual: ativo, anterior,
          próximo (pontas visíveis nas bordas) ou escondido. Como os
          escondidos trocam de lado já invisíveis, o loop continua sempre na
          mesma direção, sem "rebobinar" e sem salto.
        - Geometria simétrica, medida em pixels na largura real do palco:
          as pontas esquerda e direita têm sempre a mesma largura e o
          conjunto imagem + legenda fica centralizado.
        - Troca sozinho a cada 15 s; pausa com mouse em cima, foco do teclado,
          aba em segundo plano, arrasto ou carrossel fora da tela.
          (O mouse em cima NÃO pausa.)
     ------------------------------------------------------------------------ */
  (function carrosselDestaque() {
    var raiz = document.querySelector('[data-destaque]');
    if (!raiz) return;
    var secao = raiz.closest('section');
    var numero = raiz.querySelector('[data-destaque-numero]');
    var total = raiz.querySelector('[data-destaque-total]');
    var lista = raiz.querySelector('[data-destaque-slides]');
    var palco = raiz.querySelector('.destaque__palco');
    var caixaLegendas = raiz.querySelector('[data-destaque-legendas]');
    var caixaIndicadores = raiz.querySelector('[data-destaque-indicadores]');
    var barra = raiz.querySelector('[data-destaque-barra]');
    var btnAnterior = document.querySelector('[data-destaque-anterior]');
    var btnProximo = document.querySelector('[data-destaque-proximo]');
    var DURACAO = 15000; // ms por slide
    var LINK_ORCAMENTO = 'https://whts.co/Construflama_com';

    // Produtos em destaque com categoria/subcategoria válidas
    var itens = PRODUTOS.filter(function (p) {
      if (!p.destaque) return false;
      var cat = buscarCategoria(p.categoria);
      var ok = cat && cat.subcategorias.some(function (s) { return s.slug === p.subcategoria; });
      if (!ok) console.warn('Produto ignorado (categoria/subcategoria inexistente):', p.nome);
      return ok;
    });
    if (!itens.length) { raiz.closest('section').hidden = true; return; }

    var m = itens.length;
    // O loop sem salto precisa de 5 slides (anterior, atual, próximo e 2 escondidos).
    // Com menos produtos, a lista de slides é repetida; legendas e traços usam só os reais.
    var n = m * Math.ceil(5 / m);
    var atual = 0;       // índice "virtual": cresce ou diminui sem limite
    var timerTroca = null;
    var anunciar = false;

    // --- Montagem -----------------------------------------------------------
    var slides = [];
    for (var k = 0; k < n; k++) {
      var p = itens[k % m];
      var cat = buscarCategoria(p.categoria);
      var li = el('li', 'destaque__slide');
      li.setAttribute('aria-roledescription', 'slide');
      li.setAttribute('aria-label', ((k % m) + 1) + ' de ' + m + ': ' + p.nome);

      var midia = el('div', 'destaque__midia destaque__midia--' + (p.fundo || 'a'));
      var imagem = el('div', 'destaque__imagem');
      if (p.imagem) {
        // Foto real: recortada na proporção fixa do slide (16:10)
        var img = el('img');
        img.src = p.imagem;
        img.alt = p.textoAlternativo || p.nome;
        img.width = 1600; img.height = 1000;
        img.decoding = 'async';
        if (k > 1) img.loading = 'lazy';
        imagem.appendChild(img);
      } else {
        // TODO: trocar pelo campo "imagem" quando houver foto do produto
        imagem.appendChild(icone(cat.ilustracao, 'destaque__ilustracao'));
      }
      midia.appendChild(imagem);
      if (p.exemplo) midia.appendChild(el('span', 'tag-exemplo', 'Exemplo'));
      li.appendChild(midia);
      lista.appendChild(li);
      slides.push(li);
    }

    var legendas = itens.map(function (p) {
      var cat = buscarCategoria(p.categoria);
      var div = el('div', 'destaque__legenda');
      div.appendChild(el('p', 'destaque__cat', cat.nome));
      div.appendChild(el('h3', 'destaque__nome', p.nome));
      if (p.descricao) div.appendChild(el('p', 'destaque__desc', p.descricao));
      var acoes = el('div', 'destaque__acoes');
      var cta = el('a', 'btn btn--primary destaque__cta', 'Pedir orçamento');
      cta.href = LINK_ORCAMENTO;
      cta.target = '_blank';
      cta.rel = 'noopener';
      cta.appendChild(srOnly(': ' + p.nome));
      acoes.appendChild(cta);
      var verColecao = el('a', 'text-link destaque__colecao', 'Ver a coleção');
      verColecao.href = ancoraColecao(cat);
      verColecao.appendChild(srOnly(' de ' + cat.nome));
      acoes.appendChild(verColecao);
      div.appendChild(acoes);
      // Índice de cascata: categoria, nome, descrição e botões entram em sequência
      Array.prototype.forEach.call(div.children, function (filho, i) { filho.style.setProperty('--i', i); });
      caixaLegendas.appendChild(div);
      return div;
    });

    var tracos = itens.map(function (p, j) {
      var b = el('button', 'destaque__traco');
      b.type = 'button';
      b.setAttribute('aria-label', 'Mostrar ' + p.nome);
      b.appendChild(el('span'));
      b.addEventListener('click', function () { irPara(j); });
      caixaIndicadores.appendChild(b);
      return b;
    });

    if (total) total.textContent = String(m);

    // --- Geometria ----------------------------------------------------------
    // Mede o palco e calcula: largura do conteúdo (imagem + legenda), margem
    // lateral e largura da imagem. A ponta visível de cada lado = margem - gap.
    var g = { sw: 0, gap: 24, margem: 0, conteudo: 0, w: 0, peek: 0 };

    function medir() {
      var sw = lista.clientWidth;                       // largura real (sem a barra de rolagem)
      var celular = sw < 1100;                      // igual ao CSS (max-width: 1099px)
      var gutter = Math.min(40, Math.max(16, 8 + sw * 0.03)); // mesmo --gutter do CSS
      var gap = celular ? 10 : Math.round(Math.min(28, Math.max(16, sw * 0.016)));
      var conteudo;
      if (celular) {
        var pontaMin = Math.min(30, Math.max(14, sw * 0.045));
        // Em tablets a imagem empilhada não passa de 760px (senão toma a tela toda)
        conteudo = Math.min(sw - 2 * (pontaMin + gap), 760);
      } else {
        // Alinha à grade do site (contêiner) e, em telas muito largas, cresce até 1400px
        var conteiner = Math.min(sw, 1216) - 2 * gutter;
        conteudo = Math.max(conteiner, Math.min(sw - 2 * (220 + gap), 1400));
        conteudo = Math.min(conteudo, sw - 2 * (64 + gap)); // ponta mínima de 64px de cada lado
      }
      var margem = (sw - conteudo) / 2;
      g = { sw: sw, gap: gap, margem: margem, conteudo: conteudo,
            w: Math.round(celular ? conteudo : conteudo * 0.6), peek: margem - gap };
      // As mesmas medidas valem para o título da seção e para a grade (imagem + legenda)
      secao.style.setProperty('--d-margem', margem + 'px');
      secao.style.setProperty('--d-conteudo', conteudo + 'px');
      secao.style.setProperty('--d-w', g.w + 'px');
      secao.style.setProperty('--d-gap', gap + 'px');
      secao.style.setProperty('--d-ponta', g.peek + 'px');
    }

    function xDaPosicao(o) {
      if (o === 0) return g.margem;                                  // ativo
      if (o === -1) return g.margem - g.gap - g.w;                   // ponta esquerda (mostra g.peek)
      if (o === 1) return g.sw - g.peek;                             // ponta direita (mostra g.peek)
      return o < 0 ? g.margem - g.gap - g.w * 1.45 : g.sw + g.w * 0.15; // escondidos, fora da tela
    }

    // --- Posicionamento ------------------------------------------------------
    function mod(a, b) { return ((a % b) + b) % b; }

    function posicionar() {
      slides.forEach(function (s, i) {
        var o = mod(i - atual, n);
        if (o > n / 2) o -= n;                       // menor distância até o atual
        s.style.setProperty('--x', xDaPosicao(o) + 'px');
        s.dataset.pos = o === 0 ? 'atual' : o === -1 ? 'anterior' : o === 1 ? 'proximo' : 'oculto';
        s.setAttribute('aria-hidden', o === 0 ? 'false' : 'true');
      });
      if (numero) numero.textContent = String(mod(atual, m) + 1);
      var real = mod(atual, m);
      legendas.forEach(function (l, j) {
        var ativa = j === real;
        l.classList.toggle('is-ativa', ativa);
        l.inert = !ativa;                              // sem foco/leitura nas legendas ocultas
        l.setAttribute('aria-hidden', String(!ativa));
      });
      tracos.forEach(function (b, j) {
        if (j === real) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current');
      });
      // Só anuncia a troca para leitores de tela quando foi a pessoa que mudou
      caixaLegendas.setAttribute('aria-live', anunciar ? 'polite' : 'off');
    }

    function ir(novo, origem) {
      // Marca a troca em andamento (o brilho apaga enquanto as imagens deslizam)
      raiz.classList.add('is-trocando');
      clearTimeout(timerTroca);
      timerTroca = setTimeout(function () { raiz.classList.remove('is-trocando'); }, 850);
      // Direção da troca: a legenda nova entra pelo lado de onde vem o slide
      raiz.dataset.direcao = novo >= atual ? 'proximo' : 'anterior';
      atual = novo;
      anunciar = origem !== 'auto';
      decorrido = 0;
      posicionar();
    }
    function proximo(origem) { ir(atual + 1, origem || 'usuario'); }
    function anterior() { ir(atual - 1, 'usuario'); }
    // Traço clicado: vai pelo caminho mais curto (do último para o primeiro, segue em frente)
    function irPara(j) {
      var d = mod(j - mod(atual, m), m);
      if (d > m / 2) d -= m;
      if (d !== 0) ir(atual + d, 'usuario');
    }

    btnAnterior.addEventListener('click', anterior);
    btnProximo.addEventListener('click', function () { proximo(); });

    // Clique nas pontas visíveis leva ao slide anterior/seguinte
    lista.addEventListener('click', function (e) {
      if (arrastou) return;
      var s = e.target.closest('.destaque__slide');
      if (!s) return;
      if (s.dataset.pos === 'anterior') anterior();
      else if (s.dataset.pos === 'proximo') proximo();
    });

    // Teclado: setas esquerda/direita com o foco em qualquer parte do carrossel
    raiz.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); proximo(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); anterior(); }
    });

    // --- Pausas ----------------------------------------------------------------
    var pausas = { foco: false, aba: document.hidden, arrasto: false, foraDaTela: false };
    function focoDeTeclado(alvo) {
      try { return alvo.matches(':focus-visible'); } catch (err) { return true; }
    }
    function pausado() {
      return pausas.foco || pausas.aba || pausas.arrasto || pausas.foraDaTela;
    }
    var regiaoControles = [raiz, btnAnterior.parentNode];
    regiaoControles.forEach(function (r) {
      // Só o foco de TECLADO pausa (:focus-visible); clicar numa seta não congela o avanço
      r.addEventListener('focusin', function (e) { pausas.foco = focoDeTeclado(e.target); });
      r.addEventListener('focusout', function (e) {
        var destino = e.relatedTarget;
        pausas.foco = !!destino && regiaoControles.some(function (x) { return x.contains(destino); }) && focoDeTeclado(destino);
      });
    });
    document.addEventListener('visibilitychange', function () { pausas.aba = document.hidden; });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) {
        es.forEach(function (e) { pausas.foraDaTela = !e.isIntersecting; });
      }, { threshold: 0.25 }).observe(palco);
    }

    // --- Avanço automático + barra de progresso -------------------------------
    var decorrido = 0;
    var anteriorT = null;
    var automatico = !reduceMotion.matches;
    raiz.classList.toggle('sem-automatico', !automatico);

    function quadro(t) {
      var dt = anteriorT === null ? 0 : Math.min(t - anteriorT, 100); // limita saltos (ex.: aba voltando)
      anteriorT = t;
      var parado = pausado();
      if (!parado) {
        decorrido += dt;
        if (decorrido >= DURACAO) proximo('auto');
      }
      barra.style.transform = 'scaleX(' + Math.min(1, decorrido / DURACAO).toFixed(4) + ')';
      raiz.classList.toggle('is-pausado', parado);
      window.requestAnimationFrame(quadro);
    }

    // --- Arrastar (dedo no celular; mouse também funciona) -----------------------
    var inicioX = 0, inicioY = 0, dx = 0, arrastando = false, arrastou = false, ponteiro = null;

    palco.addEventListener('pointerdown', function (e) {
      if (e.button !== 0 || e.target.closest('a, button, .destaque__legendas')) return;
      ponteiro = e.pointerId;
      inicioX = e.clientX; inicioY = e.clientY; dx = 0;
      arrastando = false; arrastou = false;
    });
    palco.addEventListener('pointermove', function (e) {
      if (e.pointerId !== ponteiro) return;
      dx = e.clientX - inicioX;
      var dy = e.clientY - inicioY;
      if (!arrastando) {
        if (Math.abs(dx) < 8 || Math.abs(dx) < Math.abs(dy)) return; // gesto vertical = rolar a página
        arrastando = true;
        pausas.arrasto = true;
        lista.classList.add('is-arrastando');
        try { palco.setPointerCapture(e.pointerId); } catch (err) { /* ok */ }
      }
      lista.style.setProperty('--arrasto', dx + 'px');
    });
    function soltar() {
      if (ponteiro === null) return;
      ponteiro = null;
      if (!arrastando) return;
      arrastando = false;
      arrastou = true;                       // ignora o "click" que vem logo depois
      setTimeout(function () { arrastou = false; }, 0);
      pausas.arrasto = false;
      lista.classList.remove('is-arrastando');
      lista.style.setProperty('--arrasto', '0px');
      var limite = Math.min(80, palco.clientWidth * 0.12);
      if (dx <= -limite) proximo();
      else if (dx >= limite) anterior();
    }
    palco.addEventListener('pointerup', soltar);
    palco.addEventListener('pointercancel', soltar);
    palco.addEventListener('dragstart', function (e) { e.preventDefault(); });

    // Primeira medição sem animação (os slides já nascem no lugar)
    lista.classList.add('is-arrastando');
    medir();
    posicionar();
    lista.getBoundingClientRect();
    lista.classList.remove('is-arrastando');

    // Ao redimensionar, remede e reposiciona sem animar
    var timerMedida = null;
    window.addEventListener('resize', function () {
      lista.classList.add('is-arrastando');
      medir();
      posicionar();
      clearTimeout(timerMedida);
      timerMedida = setTimeout(function () { lista.classList.remove('is-arrastando'); }, 120);
    });

    if (automatico) window.requestAnimationFrame(quadro);
  })();

  /* ------------------------------------------------------------------------
     E2. Lojas e showroom: lista em abas + foto com detalhes + mapa do Google
         - Dados em LOJAS (js/lojas.js). Escolher uma loja na lista troca a
           foto, os detalhes e o mapa do Google.
         - O mapa do Google só carrega quando a seção se aproxima da tela.
     ------------------------------------------------------------------------ */
  (function montarLojas() {
    var raiz = document.querySelector('[data-lojas]');
    if (!raiz || typeof LOJAS === 'undefined' || !LOJAS.length) return;
    var lista = raiz.querySelector('[data-lojas-lista]');
    var fotos = raiz.querySelector('[data-lojas-fotos]');
    var detalhes = raiz.querySelector('[data-lojas-detalhes]');
    var iframe = raiz.querySelector('[data-lojas-iframe]');
    var atendimento = raiz.querySelector('[data-lojas-atendimento]');
    var gmaps = raiz.querySelector('.lojas__gmaps');
    var mapaLiberado = false;      // vira true quando a seção chega perto da tela
    var atual = -1;

    function urlMapa(l) { return 'https://maps.google.com/maps?q=' + encodeURIComponent(l.consulta) + '&z=16&output=embed'; }
    function urlRota(l) { return 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(l.consulta); }

    // Abas da lista
    var abas = LOJAS.map(function (l, i) {
      var b = el('button', 'lojas__aba' + (l.destaque ? ' lojas__aba--destaque' : ''));
      b.type = 'button';
      b.id = 'loja-aba-' + l.id;
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-controls', 'lojas-painel');
      var topo = el('span', 'lojas__aba-topo');
      topo.appendChild(el('span', 'lojas__aba-nome', l.nome));
      if (l.etiqueta) topo.appendChild(el('span', 'lojas__etiqueta', l.etiqueta));
      b.appendChild(topo);
      b.appendChild(el('span', 'lojas__aba-endereco', l.endereco));
      b.addEventListener('click', function () { selecionar(i); });
      lista.appendChild(b);
      return b;
    });

    // Teclado nas abas: setas, Home e End (padrão de abas acessíveis)
    lista.addEventListener('keydown', function (e) {
      var i = abas.indexOf(document.activeElement);
      if (i < 0) return;
      var novo = { ArrowDown: i + 1, ArrowRight: i + 1, ArrowUp: i - 1, ArrowLeft: i - 1, Home: 0, End: abas.length - 1 }[e.key];
      if (novo === undefined) return;
      e.preventDefault();
      novo = (novo + abas.length) % abas.length;
      selecionar(novo);
      abas[novo].focus();
    });

    // Camadas de foto (uma por loja; a ativa aparece por cima com transição)
    var camadas = LOJAS.map(function (l) {
      var c = el('div', 'lojas__camada lojas__camada--' + (l.fundo || 'a'));
      if (l.imagem) {
        var img = el('img');
        img.src = l.imagem; img.alt = l.textoAlternativo || ''; img.loading = 'lazy'; img.decoding = 'async';
        c.appendChild(img);
      } // sem foto: fica o degradê quente da loja (TODO: foto real em js/lojas.js)
      fotos.insertBefore(c, detalhes);
      return c;
    });

    atendimento.textContent = 'Atendimento em todas as lojas: ';
    var tel = el('a', 'text-link', LOJAS_TELEFONE); tel.href = LOJAS_TELEFONE_LINK;
    atendimento.appendChild(tel);

    function montarDetalhes(l) {
      detalhes.textContent = '';
      var topo = el('div', 'lojas__detalhes-topo');
      topo.appendChild(el('h3', 'lojas__nome', l.nome));
      detalhes.appendChild(topo);

      var info = el('ul', 'lojas__info');
      var linha = function (iconeId, texto, extra) {
        var li = el('li');
        li.appendChild(icone(iconeId, 'icon'));
        var t = el('span', null, texto);
        if (extra) { t.appendChild(document.createElement('br')); t.appendChild(el('span', 'lojas__info-sub', extra)); }
        li.appendChild(t);
        return li;
      };
      info.appendChild(linha('i-pin', l.endereco, l.complemento));
      var h = linha('i-relogio', l.horario);
      if (l.horarioExemplo) h.appendChild(el('span', 'tag-exemplo lojas__tag', 'Exemplo')); // TODO: horário real
      info.appendChild(h);
      detalhes.appendChild(info);

      var acoes = el('div', 'lojas__acoes');
      var rota = el('a', 'btn btn--primary', 'Como chegar');
      rota.href = urlRota(l); rota.target = '_blank'; rota.rel = 'noopener';
      rota.appendChild(srOnly(': ' + l.nome));
      var visita = el('a', 'btn btn--ghost', 'Agendar visita');
      visita.href = LOJAS_WHATSAPP; visita.target = '_blank'; visita.rel = 'noopener';
      visita.appendChild(srOnly(' no ' + l.nome));
      acoes.appendChild(rota); acoes.appendChild(visita);
      detalhes.appendChild(acoes);
    }

    function carregarMapa() {
      if (!mapaLiberado || atual < 0) return;
      var l = LOJAS[atual];
      var url = urlMapa(l);
      if (iframe.getAttribute('src') === url) return;
      gmaps.classList.remove('is-carregado');
      iframe.title = 'Mapa do Google: ' + l.nome;
      iframe.setAttribute('src', url);
    }
    iframe.addEventListener('load', function () { if (iframe.getAttribute('src')) gmaps.classList.add('is-carregado'); });

    function selecionar(i) {
      if (i === atual) return;
      atual = i;
      abas.forEach(function (b, j) {
        var ativa = j === i;
        b.setAttribute('aria-selected', String(ativa));
        b.tabIndex = ativa ? 0 : -1;               // só a aba ativa entra no Tab
      });
      raiz.querySelector('[data-lojas-painel]').setAttribute('aria-labelledby', abas[i].id);
      camadas.forEach(function (c, j) { c.classList.toggle('is-ativa', j === i); });
      // Detalhes: saem, trocam de conteúdo e entram de novo (troca gradual)
      detalhes.classList.add('is-trocando');
      clearTimeout(detalhes._t);
      detalhes._t = setTimeout(function () {
        montarDetalhes(LOJAS[i]);
        detalhes.classList.remove('is-trocando');
      }, detalhes.childElementCount && !reduceMotion.matches ? 220 : 0);
      carregarMapa();
    }

    // Começa pela loja com destaque (o showroom)
    var inicial = Math.max(0, LOJAS.findIndex(function (l) { return l.destaque; }));
    selecionar(inicial);

    // Libera o mapa do Google quando a seção chega perto (não pesa no início da página)
    if ('IntersectionObserver' in window) {
      var obs = new IntersectionObserver(function (es) {
        if (es.some(function (e) { return e.isIntersecting; })) { mapaLiberado = true; carregarMapa(); obs.disconnect(); }
      }, { rootMargin: '400px 0px' });
      obs.observe(raiz);
    } else { mapaLiberado = true; carregarMapa(); }
  })();

  /* ------------------------------------------------------------------------
     F. Catálogos (seção do especificador)
     ------------------------------------------------------------------------ */
  (function montarCatalogos() {
    var lista = document.querySelector('[data-catalogos]');
    if (!lista) return;

    CATALOGOS.forEach(function (catalogo) {
      if (SLUG_ATUAL && catalogo.categorias.indexOf(SLUG_ATUAL) < 0) return;
      var cats = catalogo.categorias.map(buscarCategoria).filter(Boolean);
      var li = el('li', 'catalog');

      var info = el('div');
      info.appendChild(el('h3', 'catalog__name', catalogo.titulo));
      // Uma categoria: mesma frase do card da grade. Várias: "Nome: subcategorias."
      info.appendChild(el('p', 'catalog__desc', cats.length === 1
        ? descricaoCategoria(cats[0])
        : cats.map(function (c) { return c.nome + ': ' + listarSubcategorias(c) + '.'; }).join(' ')));
      li.appendChild(info);

      var botao = catalogo.arquivo
        ? el('a', 'btn btn--light btn--sm')
        : linkProvisorio('', 'Na versão final, este botão baixa o catálogo de ' + catalogo.titulo + ' em PDF.');
      botao.className = 'btn btn--light btn--sm';
      if (catalogo.arquivo) { botao.href = catalogo.arquivo; botao.setAttribute('download', ''); }
      botao.appendChild(icone('i-download', 'icon'));
      botao.appendChild(document.createTextNode(' Baixar PDF'));
      botao.appendChild(srOnly(' do catálogo de ' + catalogo.titulo));
      li.appendChild(botao);

      lista.appendChild(li);
    });
  })();

  /* ------------------------------------------------------------------------
     G. Avaliações: resumo (estrelas com meia estrela) e cards
     ------------------------------------------------------------------------ */
  function formatarNota(nota) {
    return nota.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  }

  // Cinco estrelas preenchidas em passos de meia estrela (4,5 = 4 cheias + 1 meia)
  function montarEstrelas(container, nota) {
    container.textContent = '';
    var arredondada = Math.round(nota * 2) / 2;
    for (var i = 0; i < 5; i++) {
      var fracao = Math.max(0, Math.min(1, arredondada - i));
      var estrela = el('span', 'star');
      estrela.appendChild(icone('i-estrela', 'star__outline'));
      var cheio = el('span', 'star__fill');
      cheio.style.setProperty('--fill', (fracao * 100) + '%');
      cheio.style.setProperty('--i', i);
      cheio.appendChild(icone('i-estrela', 'star__solid'));
      estrela.appendChild(cheio);
      container.appendChild(estrela);
    }
    // A nota já é lida no número grande ao lado; as estrelas são só visuais
    container.setAttribute('aria-hidden', 'true');
  }

  (function montarAvaliacoes() {
    var track = document.getElementById('carrossel-avaliacoes');
    if (!track) return;

    montarEstrelas(document.querySelector('[data-reviews-stars]'), NOTA_GOOGLE);
    var placar = document.querySelector('[data-reviews-score]');
    placar.textContent = formatarNota(NOTA_GOOGLE);

    // Contagem 0,0 → nota (só com movimento permitido; o valor final já está no HTML)
    var cabecaAvaliacoes = document.querySelector('.reviews__head');
    if (cabecaAvaliacoes && !reduceMotion.matches && 'IntersectionObserver' in window) {
      placar.textContent = formatarNota(0);
      cabecaAvaliacoes.addEventListener('revelado', function () {
        var inicio = null;
        var duracao = 1200;
        function passo(t) {
          if (inicio === null) inicio = t;
          var k = Math.min(1, (t - inicio) / duracao);
          var suave = 1 - Math.pow(1 - k, 3); // desacelera no fim
          placar.textContent = formatarNota(Math.round(NOTA_GOOGLE * suave * 10) / 10);
          if (k < 1) window.requestAnimationFrame(passo);
        }
        window.requestAnimationFrame(passo);
      }, { once: true });
    }
    document.querySelector('[data-reviews-count]').textContent =
      TOTAL_AVALIACOES.toLocaleString('pt-BR') + ' avaliações no Google';

    DEPOIMENTOS.forEach(function (dep, i) {
      var li = el('li', 'review');
      li.setAttribute('aria-label', (i + 1) + ' de ' + DEPOIMENTOS.length);
      if (dep.exemplo) li.appendChild(el('span', 'tag-exemplo', 'Exemplo'));
      li.appendChild(icone('i-aspas', 'review__quote'));
      // Um <p> por parágrafo (\n no texto)
      var citacao = el('blockquote', 'review__text');
      String(dep.texto).split('\n').forEach(function (par) { citacao.appendChild(el('p', null, par)); });
      li.appendChild(citacao);

      var autor = el('p', 'review__author');
      autor.appendChild(el('span', 'review__name', dep.autor));
      if (dep.detalhe) autor.appendChild(el('span', 'review__project', dep.detalhe));
      li.appendChild(autor);

      track.appendChild(li);
    });
  })();

  // Se o link do Google (no HTML) voltar a ser "#", avisa em vez de abrir uma aba vazia
  var reviewsLink = document.querySelector('[data-reviews-link]');
  if (reviewsLink && reviewsLink.getAttribute('href') === '#') {
    reviewsLink.setAttribute('data-proto', 'Na versão final, este botão abre as avaliações da Construflama no Google.');
    reviewsLink.removeAttribute('target');
  }

  /* ------------------------------------------------------------------------
     1. Cabeçalho: muda de aspecto depois de rolar um pouco
     ------------------------------------------------------------------------ */
  var header = document.querySelector('.site-header');
  var heroContent = document.querySelector('.hero__content');
  var ticking = false;
  var lastY = window.scrollY;

  function updateHeader() {
    var y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 24);

    // Esconde ao descer e mostra ao subir, mas nunca com menu, submenu ou foco no cabeçalho
    var ocupado = document.body.classList.contains('nav-open') ||
      header.querySelector(':focus-visible') || // só foco de teclado (clique não prende)
      header.querySelector('.has-sub.is-open');
    if (ocupado || y < window.innerHeight * 0.6) {
      header.classList.remove('is-hidden');
    } else if (y > lastY + 6) {
      header.classList.add('is-hidden');
    } else if (y < lastY - 6) {
      header.classList.remove('is-hidden');
    }
    lastY = y;

    // Parallax leve: o texto do hero sobe mais devagar e esmaece ao rolar
    if (heroContent && !reduceMotion.matches && y < window.innerHeight) {
      var p = y / window.innerHeight;
      heroContent.style.transform = 'translate3d(0,' + (y * 0.18).toFixed(1) + 'px,0)';
      heroContent.style.opacity = String(Math.max(0, 1 - p * 1.3).toFixed(3));
    }
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }, { passive: true });
  updateHeader();

  /* ------------------------------------------------------------------------
     2. Menu mobile (hambúrguer)
     ------------------------------------------------------------------------ */
  var nav = document.getElementById('site-nav');
  var toggle = document.querySelector('.nav-toggle');
  var toggleLabel = toggle.querySelector('.sr-only');

  function setMenu(open, returnFocus) {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggleLabel.textContent = open ? 'Fechar menu' : 'Abrir menu';
    document.body.classList.toggle('nav-open', open);
    // Ao abrir, o cabeçalho fica sólido para o painel não "flutuar" sobre o hero
    if (open) header.classList.add('is-scrolled'); else updateHeader();

    if (open) {
      var first = nav.querySelector('button, a');
      if (first) first.focus();
    } else if (returnFocus) {
      toggle.focus();
    }
  }

  toggle.addEventListener('click', function () {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });

  // Fecha o menu ao escolher um link (âncoras na mesma página)
  nav.addEventListener('click', function (event) {
    if (event.target.closest('a') && !desktopQuery.matches) setMenu(false);
  });

  // Mantém o foco do teclado dentro do painel aberto
  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Tab' || !nav.classList.contains('is-open')) return;
    var focusables = [toggle].concat(Array.prototype.filter.call(
      nav.querySelectorAll('a, button'),
      function (el) { return el.offsetParent !== null; }
    ));
    var first = focusables[0];
    var last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault(); last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault(); first.focus();
    }
  });

  // Atalhos: um único bloco no HTML, colocado na faixa superior (desktop)
  // ou dentro do painel do menu (celular). Assim nenhum link fica duplicado.
  var atalhos = document.querySelector('[data-atalhos]');
  var atalhosDesktop = document.querySelector('[data-atalhos-desktop]');
  var atalhosMobile = document.querySelector('[data-atalhos-mobile]');

  function posicionarAtalhos() {
    if (!atalhos || !atalhosDesktop || !atalhosMobile) return;
    var destino = desktopQuery.matches ? atalhosDesktop : atalhosMobile;
    if (atalhos.parentNode !== destino) destino.appendChild(atalhos);
  }
  posicionarAtalhos();

  // Ao passar para o desktop, garante que o painel mobile seja fechado
  desktopQuery.addEventListener('change', function (e) {
    if (e.matches && nav.classList.contains('is-open')) setMenu(false);
    closeAllSubmenus();
    posicionarAtalhos();
  });

  /* ------------------------------------------------------------------------
     3. Submenus: hover no desktop, clique no mobile (e teclado em ambos)
     ------------------------------------------------------------------------ */
  var subItems = Array.prototype.slice.call(document.querySelectorAll('.has-sub'));
  var closeTimer = null;

  function setSubmenu(item, open) {
    item.classList.toggle('is-open', open);
    item.querySelector('.nav-link').setAttribute('aria-expanded', String(open));
  }

  function closeAllSubmenus(except) {
    subItems.forEach(function (item) {
      if (item !== except) setSubmenu(item, false);
    });
  }

  subItems.forEach(function (item) {
    var button = item.querySelector('.nav-link');

    button.addEventListener('click', function () {
      var willOpen = !item.classList.contains('is-open');
      // No desktop só um submenu aberto por vez; no mobile funciona como acordeão
      if (desktopQuery.matches) closeAllSubmenus(item);
      setSubmenu(item, willOpen);
    });

    item.addEventListener('mouseenter', function () {
      if (!desktopQuery.matches) return;
      clearTimeout(closeTimer);
      closeAllSubmenus(item);
      setSubmenu(item, true);
    });

    item.addEventListener('mouseleave', function () {
      if (!desktopQuery.matches) return;
      // Pequeno atraso para perdoar movimentos diagonais do mouse
      closeTimer = setTimeout(function () { setSubmenu(item, false); }, 160);
    });

    // Fecha quando o foco do teclado sai do item (desktop)
    item.addEventListener('focusout', function (event) {
      if (desktopQuery.matches && !item.contains(event.relatedTarget)) setSubmenu(item, false);
    });
  });

  // Clique fora fecha os submenus do desktop
  document.addEventListener('click', function (event) {
    if (desktopQuery.matches && !event.target.closest('.has-sub')) closeAllSubmenus();
  });

  // Esc fecha o submenu aberto (devolvendo o foco ao botão) ou o menu mobile
  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape') return;
    var openItem = subItems.filter(function (item) { return item.classList.contains('is-open'); })[0];
    if (openItem && desktopQuery.matches) {
      setSubmenu(openItem, false);
      openItem.querySelector('.nav-link').focus();
    } else if (nav.classList.contains('is-open')) {
      setMenu(false, true);
    }
  });

  /* ------------------------------------------------------------------------
     4. Carrosséis (produtos e avaliações): setas, arrasto com mouse e barra
        de progresso. No celular o arrasto é o rolar nativo (com scroll-snap).
        Cada carrossel é um [data-carousel] com [data-carousel-track],
        [data-carousel-prev], [data-carousel-next] e, opcionalmente,
        [data-carousel-bar] e [data-carousel-controls].
     ------------------------------------------------------------------------ */
  function initCarousel(root) {
    var track = root.querySelector('[data-carousel-track]');
    var prev = root.querySelector('[data-carousel-prev]');
    var next = root.querySelector('[data-carousel-next]');
    var bar = root.querySelector('[data-carousel-bar]');
    var controls = root.querySelector('[data-carousel-controls]');
    if (!track || !prev || !next) return;

    function step() {
      var card = track.firstElementChild;
      var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      return card ? card.getBoundingClientRect().width + gap : track.clientWidth * 0.8;
    }

    function scrollByCards(direction) {
      track.scrollBy({ left: direction * step(), behavior: reduceMotion.matches ? 'auto' : 'smooth' });
    }

    function update() {
      var max = track.scrollWidth - track.clientWidth;
      // Sem nada para rolar (ex.: avaliações em grade no desktop), some com as setas
      if (controls) controls.hidden = max <= 2;
      prev.disabled = track.scrollLeft <= 2;
      next.disabled = track.scrollLeft >= max - 2;
      if (bar) {
        var ratio = max > 0 ? track.scrollLeft / max : 0;
        var visible = track.scrollWidth > 0 ? track.clientWidth / track.scrollWidth : 1;
        bar.style.setProperty('--progresso', (visible * 100) + '%');
        bar.style.setProperty('--inicio', (ratio * (1 - visible) * 100) + '%');
      }
    }

    prev.addEventListener('click', function () { scrollByCards(-1); });
    next.addEventListener('click', function () { scrollByCards(1); });
    track.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();

    // Setas do teclado quando o carrossel está focado
    track.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowRight') { event.preventDefault(); scrollByCards(1); }
      if (event.key === 'ArrowLeft') { event.preventDefault(); scrollByCards(-1); }
    });

    // Arrasto com mouse (toque e caneta já rolam nativamente)
    var dragging = false;
    var moved = false;
    var startX = 0;
    var startScroll = 0;

    track.addEventListener('pointerdown', function (event) {
      if (event.pointerType !== 'mouse' || event.button !== 0) return;
      if (track.scrollWidth <= track.clientWidth) return;
      dragging = true;
      moved = false;
      startX = event.clientX;
      startScroll = track.scrollLeft;
    });

    window.addEventListener('pointermove', function (event) {
      if (!dragging) return;
      var dx = event.clientX - startX;
      if (!moved && Math.abs(dx) > 4) {
        moved = true;
        track.classList.add('is-dragging');
      }
      if (moved) track.scrollLeft = startScroll - dx;
    });

    window.addEventListener('pointerup', function () {
      if (!dragging) return;
      dragging = false;
      if (moved) {
        track.classList.remove('is-dragging');
        // Reencaixa no card mais próximo depois de soltar
        var s = step();
        track.scrollTo({ left: Math.round(track.scrollLeft / s) * s, behavior: reduceMotion.matches ? 'auto' : 'smooth' });
      }
    });

    // Evita que um arrasto vire clique em link
    track.addEventListener('click', function (event) {
      if (moved) { event.preventDefault(); moved = false; }
    }, true);

    // Impede o "arrastar imagem/link" nativo do navegador
    track.addEventListener('dragstart', function (event) { event.preventDefault(); });
  }

  Array.prototype.forEach.call(document.querySelectorAll('[data-carousel]'), initCarousel);

  /* ------------------------------------------------------------------------
     5. Animações de entrada ao rolar (respeita prefers-reduced-motion via CSS)
     ------------------------------------------------------------------------ */
  var revealEls = document.querySelectorAll('[data-reveal]');

  // Em data-reveal="stagger", cada filho ganha um índice (--i) que vira atraso
  // no CSS. Limitado a 8 para a fila não ficar lenta em listas longas.
  Array.prototype.forEach.call(document.querySelectorAll('[data-reveal="stagger"]'), function (grupo) {
    Array.prototype.forEach.call(grupo.children, function (filho, i) {
      filho.style.setProperty('--i', Math.min(i, 8));
    });
  });
  Array.prototype.forEach.call(document.querySelectorAll('.hearth__item'), function (item, i) {
    item.style.setProperty('--i', i);
  });

  function revelar(el) {
    el.classList.add('is-visible');
    el.dispatchEvent(new CustomEvent('revelado'));
  }

  if ('IntersectionObserver' in window && !reduceMotion.matches) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          revelar(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(revelar);
  }

  /* ------------------------------------------------------------------------
     6. Links ainda não criados neste protótipo: aviso discreto em vez de
        página quebrada. TODO: remover quando as páginas existirem.
     ------------------------------------------------------------------------ */
  var toast = document.querySelector('.toast');
  var toastTimer = null;

  document.addEventListener('click', function (event) {
    var link = event.target.closest('[data-proto]');
    if (!link) return;
    event.preventDefault();
    toast.textContent = link.getAttribute('data-proto') || 'Esta página será criada na próxima etapa do protótipo.';
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('is-visible'); }, 3200);
  });

  /* ------------------------------------------------------------------------
     6b. "Voltar ao topo": sobe até o início da página (suave, ou direto para
         quem pediu menos movimento) e leva o foco do teclado para o logo.
         Sem JS, o link #inicio já leva ao topo.
     ------------------------------------------------------------------------ */
  var voltarTopo = document.querySelector('[data-voltar-topo]');
  if (voltarTopo) {
    voltarTopo.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: reduceMotion.matches ? 'auto' : 'smooth' });
      var logo = document.querySelector('.site-header .brand');
      if (logo) logo.focus({ preventScroll: true });
      if (history.replaceState) history.replaceState(null, '', location.pathname + location.search);
    });
  }

  /* ------------------------------------------------------------------------
     7. Ano atual no rodapé
     ------------------------------------------------------------------------ */
  var year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());
})();
