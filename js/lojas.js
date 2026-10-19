/* ==========================================================================
   Construflama | Dados das lojas (seção "Lojas e showroom")
   Carregado antes de main.js. A ordem do array é a ordem da lista; a loja
   com destaque: true aparece selecionada primeiro, com um leve destaque.

   Campos:
   - nome, endereco (linha da rua), complemento (bairro/cidade)
   - consulta: texto que o Google Maps usa para achar o lugar (mapa embutido
     e botão "Como chegar")
   - horario: TODO preencher com o horário real. Enquanto horarioExemplo for
     true, aparece marcado como "Exemplo".
   - mapa: posição do ponto no mapa ilustrado (x, y no desenho de 400 × 300).
     Posições aproximadas, a partir das coordenadas reais; o mapa é fora de escala.
   - imagem / textoAlternativo: foto da loja (vazio = gradiente provisório)
   - fundo: letra do gradiente provisório (a, b ou c)
   ========================================================================== */
var LOJAS = [
  {
    id: 'showroom',
    nome: 'Showroom',
    etiqueta: 'Showroom principal',
    destaque: true,
    endereco: 'R. Vitorino de Morais, 331',
    complemento: 'Chácara Santo Antônio, São Paulo, SP',
    consulta: 'Construflama Showroom, R. Vitorino de Morais, 331, São Paulo, SP',
    horario: '[Horário de funcionamento]', horarioExemplo: true,
    mapa: { x: 201, y: 252 },
    imagem: '', textoAlternativo: '', fundo: 'a'
  },
  {
    id: 'dd',
    nome: 'Shopping D&D',
    etiqueta: '',
    destaque: false,
    endereco: 'Av. das Nações Unidas, 12.555, Piso 0',
    complemento: 'São Paulo, SP',
    consulta: 'Shopping D&D, Av. das Nações Unidas, 12555, São Paulo, SP',
    horario: '[Horário de funcionamento]', horarioExemplo: true,
    mapa: { x: 214, y: 96 },
    imagem: '', textoAlternativo: '', fundo: 'b'
  },
  {
    id: 'cidade-jardim',
    nome: 'Shopping Cidade Jardim',
    etiqueta: '',
    destaque: false,
    endereco: 'Av. Magalhães de Castro, 12.000',
    complemento: 'São Paulo, SP',
    consulta: 'Shopping Cidade Jardim, Av. Magalhães de Castro, 12000, São Paulo, SP',
    horario: '[Horário de funcionamento]', horarioExemplo: true,
    mapa: { x: 168, y: 40 },
    imagem: '', textoAlternativo: '', fundo: 'c'
  }
];

/* Telefone e WhatsApp de atendimento (iguais para todas as lojas) */
var LOJAS_TELEFONE = '(11) 5171-6070';
var LOJAS_TELEFONE_LINK = 'tel:+551151716070';
var LOJAS_WHATSAPP = 'https://whts.co/Construflama_com';
