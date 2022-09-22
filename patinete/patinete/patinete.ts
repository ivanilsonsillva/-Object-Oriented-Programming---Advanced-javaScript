//Crie uma classe conta bancária e apresente os atributos e métodos referentes a esta classe,
//em seguida crie um objeto conta bancária, defina as instâncias deste objeto e apresente as
//informações deste objeto no console.

export {patinete}
export class Patinete{
    marca: string;
    qtdRodas: number;
    cor: string;
    velocidade: number;
}
var patinete = new Patinete();
patinete.marca = "kabum";
patinete.qtdRodas = 3;
patinete.cor = "Vermelho";
patinete.velocidade = 80;