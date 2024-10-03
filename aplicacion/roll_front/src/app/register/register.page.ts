import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  registerForm!: FormGroup;

  registerData = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validator: this.matchingPasswords('password', 'confirmPassword')
    });
  }


  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup) => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        return confirmPassword.setErrors({ notEquivalent: true});
      } else {
        return confirmPassword.setErrors(null);
      }
    };
  }

  onRegister() {
    console.log('Boton de registro presionado');
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(
        response => {
          console.log('Registro exitoso:', response);
          this.navCtrl.navigateForward('/login');
        },
        error => {
          console.error('Error en el registro:', error);
        }
      );
    } else {
      console.log('Formulario no válido');
    }
  }

  goToLogin() {
    this.navCtrl.navigateBack('/login');
  }
}
