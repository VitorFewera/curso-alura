import { Component, Output, EventEmitter } from "@angular/core"; // se EventEmitter puxar para steam, esta errado, nesse pack


@Component({
    selector:'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls:['./nova-transferencia.component.scss'],
})

export class NovaTransferenciaComponent{

 /**
  * @Output serve para pegar os dados dentro do component e extrair para fora
 * @type {*}
 * @memberof NovaTransferenciaComponent
 */
  @Output() aoTransferir = new EventEmitter <any> (); // any e quase um tipo hibrido


  valor: any;
  destino: string = '';

transferir(){
    console.log('Transferencia realizada de R$'+ this.valor +' para ' +this.destino);
    const valorEmitir= {valor:this.valor, destino: this.destino};
    this.aoTransferir.emit(valorEmitir);
}}

