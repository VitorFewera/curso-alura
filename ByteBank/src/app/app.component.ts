import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ByteBank';

  destino: number = 0;
  valor: number= 0;
  transferencias :any[] = [];

  transferir($event: Date){ // deu certo atribuindo algo ao $event
    console.log($event);
    const transferencia = {...$event, data: new Date()};
    this.transferencias.push(transferencia); //push - adiciona eventos na transferencias
  }
}
