import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'app-nova-transferencia',
    templateUrl:'./nova-transferencia.component.html',
    styleUrls:['./nova-transferencia.component.scss']
})


export class NovaTransferenciaComponent{
  //por ser evento é legal usar o nome de uma ação
  //output serve para criar um evento para o componente que será ativido em algum momento e propagar uma informação
  //eventemitter para propagar os dados
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 12;
  destino:number = 222;
   transferir(){
    console.log('solicitado a transferencia');
    // const valorEmitir = {valor:this.valor, destino: this.destino};
    // this.aoTransferir.emit(valorEmitir);
    this.aoTransferir.emit({valor:this.valor, destino:this.destino});
    this.limparCampos();
   }

   limparCampos(){
    this.valor = 0;
    this.destino = 0;
   }
}
