//Criei os bruxos
const bruxos = [
  {
    id: 1,
    nome: "Harry Potter",
    ano: "7",
    varinha: "Azevinho e pena de fenix",
    mascote: "Coruja",
    patrono: "Cervo",
    especialidade: "Sobreviver",
    vivo: false,
  },
];

const casas = [
  {
    id: 1,
    nome: "Grifinória",
    fundador: "Godric Gryffidor",
    cores: "Vermelho e dourado",
    animal: "Leão",
  },
  {
    id: 2,
    nome: "Sonserina",
    fundador: "Salazar Slytherin",
    cores: "Verde e Prata",
    animal: "Serpente",
  },
  {
    id: 3,
    nome: "Corvinal",
    fundadora: "Rowena Raavenclaw",
    cores: "Azul e bronze",
    animal: "Águia",
  },
  {
    id: 4,
    nome: "Lufa-Lufa",
    fundadora: "Hela Hufflepuff",
    cores: "Amarelo e Preto",
    animal: "Texugo",
  },
];

const varinhas = [
  {
    id:1,
    material: "Azevinho",
    nucleo: "Pena de Fênix",
    comprimento: "28cm",
  },
  {
    i:2,
    material: "Videira",
    nucleo: "Fibra de coração de dragão",
    comprimento: "27cm",
  },
  {
    id:3,
    material: "Salgueiro",
    nucleo: "pelo de Unicónio",
    comprimento: "35cm",
  },
  {
    id:4,
    material: "Madeira",
    nucleo: "Pelo de Thetral",
    comprimento: "31cm",
  },
  {
    id:5,
    material: "Carvalho Ingles",
    nucleo: "Pelo de Testrálio",
    comprimento: "32cm",
  },
];

const animais = [
  {
    id: 1,
    nome: "Coruja",
    tipo: "Correio/companhia",
  },
  {
    id:2,
    nome: "Gato",
    tipo: "Companhia",
  },
  {
    id:3,
    nome: "Sapo",
    tipo: "Companhia",
  },
  {
    id:4, 
    nome: "Rato",
    tipo: "Companhia",
  },
];

const pocoes = [
  {
    id:1,
    nome: "Polissuco",
    efeito: "Transforma na aparência de outra pessoa",
  },
  {
    id:2,
    nome: "Felix Felicis",
    efeito: "Sorte temporária",
  },
  {
    id:3,
    nome: "Amortentia",
    efeito: "Poção do amor",
  },
  {
    id:4,
    nome: "Veriraserum",
    efeito: "Força a dizer a verdade",
  },
];

//exportar bruxos
export default { bruxos, casas, varinhas, animais, pocoes };
