import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;

  loginData = {
    username: '',
    password: ''
  };
  
  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private formBuilder: FormBuilder, 
  ) { 
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {}

  login() {
    if (this.loginForm.valid) {    
      this.authService.login(this.loginForm.value).subscribe(
        response => {
          this.navCtrl.navigateForward('/rol');
        },
        error => {
          console.error('Error en el login:', error);
        }
      );
    } else {
      console.log('Formulario inválido');
    }
  }
  goToRegister() {
    this.navCtrl.navigateForward('/register');
  }

}
