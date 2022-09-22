
export class Banco {
    saldo: number;
    contaCorrente: number;
    contaPoupanca: number;
    contaInvestimento: number;

    constructor(saldo: number, contaCorrente: number,
    contaPoupanca: number, contaInvestimento: number){
        this.saldo = saldo;
        this.contaCorrente = contaCorrente;
        this.contaPoupanca = contaPoupanca;
        this.contaInvestimento = contaInvestimento;


    }
    mostrarSaldo(){ // saldo = contaCorrente + contaPoupanca
        this.saldo = 800
        console.log(`O seu saldo é de: ${this.contaCorrente + this.contaPoupanca}R$`)
    }
//Como nos já atribuimos no construtor os valores dos atributos, não utilizaremos o "this" para determiná-los

//Para fins da importaçãoo e exportação de variáveis, vale a pena usar o "this"  para uma atribuição de valores afetiva. Se declararmos sempre no constructor, não será simples a importação ou exportação.

        mostrarCorrente(){
            console.log(`O saldo da sua conta corrente é: ${this.contaCorrente}R$`)
        }

        mostrarPoupanca(){
            console.log(`O saldo da sua poupança é: ${this.contaPoupanca}R$`)

}
        mostrarInvestimento(){
            console.log(`O saldo investido foi: ${(this.contaCorrente + this.contaPoupanca)*0.1}`)
        }
}

    export var cliente = new Banco(10000, 500, 1000, 0);
    /*cliente.mostrarSaldo()
    cliente.mostrarCorrente()
    cliente.mostrarPoupanca()
    cliente.mostrarInvestimento()
    */