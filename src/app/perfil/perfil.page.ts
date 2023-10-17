import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  perfilId: any;
  alumno: any;

  constructor(private activatedRoute: ActivatedRoute, private httpCliente: HttpClient) { }

  ngOnInit() {
    this.perfilId = this.activatedRoute.snapshot.params['id'];
    console.log('Perfil ID:', this.perfilId);
  
    this.httpCliente.get<any>('https://randomuser.me/api/?results=1&seed=' + this.perfilId)  
      .subscribe(
        res => {
          console.log('Respuesta de perfil:', res);
          this.alumno = res.results[0];
        },
        error => console.error('Error al cargar perfil:', error)
      );
  }
}
