import {Patinete} from "./patinete"
import {patinete} from "./patinete" 

class Carac {
    mostrar(){
        console.log(`
        Informações do Patinete:
        Modelo: ${patinete.marca}
        Cor: ${patinete.cor}
        Número de rodas: ${patinete.qtdRodas}
        Velocidade máxima: ${patinete.velocidade}km
        `)
    }
}
var pati = new Carac;
pati.mostrar();