import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';


const url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token = null;
  usuario = {};

  constructor( private http: HttpClient, private navCtrl: NavController, private alertCtrl: AlertController ) { }

  login(email: string, password: string) {
    const data = {email, password};
    return new Promise(resolve => {
      this.http.post(`http://localhost:3000/user/login`, data).subscribe(res => {
        console.log(res);
        if (res) {
          this.guardarToken(res['token']);
          resolve(true);
        } else {
          this.token = null;
          localStorage.clear();
          this.presentarAlarma();
          resolve(false);
        }
      });
    });
  }

  async guardarToken(token: string) {
    this.token = token;
    await localStorage.setItem('token', token);
  }

  async cargarToken() {
    this.token = await localStorage.getItem('token') || null;
  }

  async validarToken(): Promise<boolean>{
    await this.cargarToken();
    if (!this.token) {
      this.navCtrl.navigateRoot('/login');
      return Promise.resolve(false);
    }
    return new Promise<boolean>(resolve => {
      const headers = new HttpHeaders({
        'Authorization': this.token
      });
      this.http.get(`${url}/user/auth`, {headers}).subscribe(res => {
        if (res['ok']) {
          resolve(true);
        } else {
          this.navCtrl.navigateRoot('/login');
          localStorage.clear();
          resolve(false);
        }
      });
    });
  }
  async presentarAlarma() {
    const alarma = await this.alertCtrl.create({
      header: 'Alerta!',
      message: 'Usuario o Contraseña: INCORRECTO!',
      buttons: ['Ok']
    });
    await alarma.present();
  }
}
