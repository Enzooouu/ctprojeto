/* ==========================================================================
   Construflama | Dados das lojas (seção "Lojas e showroom")
   Carregado antes de main.js. A ordem do array é a ordem da lista; a loja
   com destaque: true aparece selecionada primeiro, com um leve destaque.

   Campos:
   - nome, endereco (linha da rua), complemento (bairro/cidade)
   - consulta: texto que o Google Maps usa para achar o lugar (mapa embutido
     ao lado da lista e botão "Como chegar")
   - horario: lista de linhas ('Dias: horário'), uma por linha na tela
   - imagem / textoAlternativo: foto da loja (vazio = gradiente provisório);
     foco: parte da foto que fica visível na faixa do alto (object-position)
   - fundo: letra do gradiente provisório (a, b ou c)
   ========================================================================== */
var LOJAS = [
  {
    id: 'showroom',
    nome: 'Showroom',
    etiqueta: 'Showroom principal',
    destaque: true,
    endereco: 'R. Vitorino de Morais, 331',
    complemento: 'Chácara Santo Antônio, São Paulo, SP · CEP 04714-030',
    consulta: 'Construflama Showroom, R. Vitorino de Morais, 331, São Paulo, SP',
    horario: ['Segunda a quinta: 9h às 18h', 'Sexta: 9h às 17h', 'Sábado: 10h às 15h'],
    imagem: 'img/lojas/showroom.webp', foco: '50% 25%', textoAlternativo: 'Fachada do showroom Construflama: porta pivotante de metal enferrujado entre plantas, com dois tachos acesos no jardim e passarela de madeira.', fundo: 'a'
  },
  {
    id: 'dd',
    nome: 'Shopping D&D',
    etiqueta: '',
    destaque: false,
    endereco: 'Av. das Nações Unidas, 12.555, Piso 0',
    complemento: 'Cidade Monções, São Paulo, SP · CEP 04578-903',
    consulta: 'Shopping D&D, Av. das Nações Unidas, 12555, São Paulo, SP',
    horario: ['Segunda a sexta: 10h às 21h', 'Sábado: 10h às 20h', 'Domingos e feriados: 14h às 19h'],
    imagem: 'img/lojas/dd.webp', foco: '40% 20%', textoAlternativo: 'Letreiro iluminado do Shopping D&D, Decoração & Design Center, diante do prédio de vidro ao entardecer.', fundo: 'b'
  },
  {
    id: 'cidade-jardim',
    nome: 'Shopping Cidade Jardim',
    etiqueta: '',
    destaque: false,
    endereco: 'Av. Magalhães de Castro, 12.000, Mezanino 2',
    complemento: 'São Paulo, SP · CEP 05502-001',
    consulta: 'Shopping Cidade Jardim, Av. Magalhães de Castro, 12000, São Paulo, SP',
    horario: ['Segunda a sexta: 10h às 22h', 'Sábado: 10h às 22h', 'Domingos e feriados: 14h às 19h'],
    imagem: 'img/lojas/cidade-jardim.webp', foco: '30% 35%', textoAlternativo: 'Placa do Shopping Cidade Jardim entre árvores, diante da fachada do prédio.', fundo: 'c'
  }
];

/* Telefone e WhatsApp de atendimento (iguais para todas as lojas) */
var LOJAS_TELEFONE = '(11) 5171-6070';
var LOJAS_TELEFONE_LINK = 'tel:+551151716070';
var LOJAS_WHATSAPP = 'https://whts.co/Construflama_com';
