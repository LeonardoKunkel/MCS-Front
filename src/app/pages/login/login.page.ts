import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUser = {
    email: '',
    password: ''
  };

  constructor( private authService: AuthService, private navCrtl: NavController, private alertCtrl: AlertController ) { }

  ngOnInit() {
    localStorage.clear();
  }

  async goInside(form) {
    if (form.invalid) {
      console.log('Está mal');
      return;
    }
    const valido = await this.authService.login(this.loginUser.email, this.loginUser.password);
    console.log(valido, '1');
    if (valido) {
      this.navCrtl.navigateRoot('/inicio', {animated: true});
    } else {
      //this.presentarAlarma();
      console.log('Inválido');
    }
  }
}
