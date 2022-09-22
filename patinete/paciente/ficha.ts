import {Paciente} from "./paciente"
import {paciente} from "./paciente" 

class Ficha{
    mostrar(){
        console.log(`
        \t Ficha de atendimento
        Nome: ${paciente.nome}
        Idade: ${paciente.idade}
        Peso: ${paciente.peso}
        Consulta marcada: ${paciente.servico}
        `)
    }
}
var paci = new Ficha();
paci.mostrar();