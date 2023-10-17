import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  @ViewChild("titulo", { read: ElementRef, static: true }) titulo!: ElementRef;
  nombreUsuario = localStorage.getItem('nombreUsuario');
  constructor() { }

  ngOnInit() {
  }

}
