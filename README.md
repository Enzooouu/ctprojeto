# Construflama: protótipo do novo site

Proposta de redesign do site da Construflama, feita por Enzo Morais para
apresentar à empresa. **Não é o site oficial:** é um protótipo navegável,
com o conteúdo real que a Construflama já publica (site, blog, catálogos e
manuais), reorganizado e revisado.

O que ainda falta confirmar com a Construflama aparece marcado no próprio
site como "Exemplo", "a confirmar" ou "em breve". Nenhum dado foi inventado.

## O que tem no protótipo

- **Página inicial:** destaques, coleções, depoimentos, lojas com mapa,
  espaço do especificador e catálogos.
- **Coleções:** lareiras, churrasqueiras, coifas, parrillas, fornos de pizza,
  tocheiros e chapeiras.
- **Lareiras completas:**
  - páginas "Ver sobre" das tradicionais, da lareira a gás linear e dos
    tachos;
  - 15 modelos com página própria: as 7 esculturais (Tarus, Gota, Cone,
    Pipe, Francesa, Balaio e Pilão) e as 8 Ecoflamas (Retangular, Canoa,
    Redonda, Marroquina, Rainha, Torre, Peão e Pot);
  - cada modelo com galeria e tela cheia, vídeo, cores, combustíveis,
    tabela de medidas, manual técnico em PDF e comparação entre modelos.
- **Blog:** 53 artigos, com filtros por categoria, índice, tempo de leitura e
  artigos relacionados.

## Como abrir

Não precisa instalar nada: é HTML, CSS e JavaScript puros, sem build.

1. Baixe o projeto (botão **Code → Download ZIP**) e descompacte.
2. Abra o arquivo `index.html` no navegador.

Aberto direto do computador, o YouTube não deixa o vídeo tocar dentro da
página. Nesse caso, o site mostra o botão "Assistir no YouTube". Publicado
(por exemplo, no GitHub Pages), o vídeo toca na própria página.

## Como o site foi feito

- **Mobile first:** pensado primeiro para o celular e testado de 320 px até
  telas grandes.
- **Acessível:** textos alternativos em todas as fotos, navegação por teclado,
  contraste conferido e respeito à opção de reduzir animações do sistema.
- **Paleta da marca:** laranja, marrom, carvão e bege.
- **Sem links repetidos** na mesma área da página.

## Onde editar cada coisa

Todo o conteúdo fica em listas (arrays) nos arquivos da pasta `js/`. Para
mudar um texto, uma foto ou uma medida, não é preciso mexer no HTML.

| Arquivo | O que tem |
| --- | --- |
| `js/main.js` | Coleções e linhas (`CATEGORIAS`), catálogos em PDF (`CATALOGOS`), depoimentos e o código das páginas |
| `js/modelos.js` | Os modelos de lareira (`MODELOS`): textos, fotos, vídeos, cores, medidas e manuais |
| `js/sobre.js` | Páginas "Ver sobre" (`PAGINAS_SOBRE`): tradicionais, gás linear e tachos |
| `js/posts.js` | Artigos do blog (`POSTS`) e categorias do blog |
| `js/lojas.js` | Lojas e showroom (`LOJAS`) |
| `js/produtos.js` | Produtos do carrossel de destaques (`PRODUTOS`) |
| `css/styles.css` | Todo o visual do site |

Cada arquivo começa com um comentário que explica todos os campos.

## Pastas

```
index.html      página inicial
colecao.html    página de uma coleção (colecao.html?c=lareiras)
modelos.html    modelos de uma linha (modelos.html?c=lareiras&l=esculturais)
produto.html    "Ver sobre" e página de cada modelo
blog.html       lista de artigos
post.html       um artigo (post.html?slug=...)
js/             dados e código
css/            estilos
img/            fotos (em WebP)
catalogos/      catálogo de lareiras 2026 e manuais técnicos em PDF
```
