import { Component, OnInit, Input } from '@angular/core';
import {Post} from '../Post';

@Component({
  selector: 'app-tarjeta-usuario',
  templateUrl: './tarjeta-usuario.component.html',
  styleUrls: ['./tarjeta-usuario.component.css']
})
export class TarjetaUsuarioComponent implements OnInit {
  @Input() post: any;

  constructor() { }

  ngOnInit(): void {
  }
  edit(user:Post ){
    console.log("editar");
  }
}
