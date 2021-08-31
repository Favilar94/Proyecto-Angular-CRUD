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
  tel:any;
  ngOnInit(): void {
    this.tel = this.post.phone.substring(0,3) + ' ' + this.post.phone.substring(3,6)+ ' ' + this.post.phone.substring(6,10);
  }
  edit(user:Post ){
    console.log("editar");
  }
}
