import { Component } from '@angular/core';
import { Share } from '@capacitor/share';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/principal', icon: 'home' },
    
    { title: 'Alumnos', url: '/alumnos', icon: 'person-circle' },
    { title: 'QR', url: '/qr', icon: 'qr-code' },  
    { title: 'Calendario', url: '/calendario', icon: 'calendar-number' },  
    { title: 'Mapa', url: '/mapita', icon: 'map' },        
  ];
  constructor(public router: Router,private menu: MenuController) {}
  
  compartirApp() {
    Share.share({
      title:'Compartir myApp',
      url:'https://usuario15.talleresmelipilla.cl/',
      dialogTitle:'Es perfecta!',
    })
  }
  cerrarSesion(){
    localStorage.removeItem('autenticado');
    this.router.navigate(["/login"]);
    this.menu.close();
  }
}
