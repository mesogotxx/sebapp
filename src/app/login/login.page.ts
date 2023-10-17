import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ElementRef, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AnimationController, IonCard, Animation } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formularioLogin: FormGroup;

  @ViewChild(IonCard, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;
  private animation: Animation | undefined;

  constructor(public menuCtrl: MenuController, private animationCtrl: AnimationController, private router:Router, private alertController:AlertController,public fb: FormBuilder) {
    this.formularioLogin = this.fb.group({
      'usuario': new FormControl("", Validators.required),
      'contrasena': new FormControl("", Validators.required)
    })
   }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(1500)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2');
  }

  play() {
    if (this.animation) {
      this.animation.play();
    }
  }

  pause() {
    if (this.animation) {
      this.animation.pause();
    }
  }

  stop() {
    if (this.animation) {
      this.animation.stop();
    }
  }

  async ingresar() {
    var f = this.formularioLogin.value;

    var nombreUsuario = localStorage.getItem('nombreUsuario');
    var contrasenaUsuario = localStorage.getItem('contrasenaUsuario');

    if (this.formularioLogin.invalid) {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'Debes ingresar todos los datos',
        buttons: ['OK']
      });

      await alert.present();
      return;
    } else if (nombreUsuario == f.usuario && contrasenaUsuario == f.contrasena) {
      localStorage.setItem('autenticado','true');
      this.router.navigate(["/principal"]);      
    } else {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'Datos incorrectos',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }
  }

}







