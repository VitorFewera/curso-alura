import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})

export class ExtratoComponent implements OnInit {

  @Input() transferencias: any[] = []; //com isso trago a transferencia para esse component e posso usa-la no html


  constructor() { }

  ngOnInit(): void {

  }

}
