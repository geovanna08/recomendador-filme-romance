//o primeiro amor, livre romance
// para todos os garotos que ja amei, 12 romance
//por lugares incriveis, 14 ou mais romance



let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("10");
  campoFantasia = createCheckbox("Gosta de romance?");
  campoAventura = createCheckbox("Gosta de final feliz?");
}

function draw() {
  background("");
  let idade = campoIdade.value();
  let gostaDeromance = campoFantasia.checked();
  let gostaDefinaleliz = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeromance, 'gostaDefinalfeliz');

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeRomance, gostaDeFinalfeliz) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "para todos os garotos que já amei";
    } else {
      if (idade >= 14) {
        if(gostaeromance || gostaDefinalfeliz) {
          return "para todos os garotos que já amei";          
        } else{
         return "para todos os garotos que já amei";
        }
      } else {
        if (gostaDeRomance) {
          return "por lugares incriveis";
        } else {
          return "por lugares incriveis";
        }
      }
    }
  } else {
    if ('gostaDefinalfeliz') {
      return "o primeiro amor";
    } else {
      return "o primeiro amor";
    }
  }
}
