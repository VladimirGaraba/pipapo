import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, FormGroup, FormControl, Validators, } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  isLogin = false;
  constructor(
    private authService: AuthService,
    private router: Router,
    private navCtrl: NavController,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  onLogin() {

    console.log('Here is loginform: ', this.loginForm.value);
    this.isLogin = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.loginForm.value).subscribe(res => {

      if (res.status === 200) {
        const response = JSON.parse(res._body);
        console.log(res);
        localStorage.setItem('ACCESS_TOKEN', response.data.access_token);
        console.log(localStorage.getItem('ACCESS_TOKEN'));
        // setTimeout(() => {
        this.navCtrl.navigateRoot('menu', { animated: false });
        // }, 100);
      } else {
        return;
      }
    });
    // this.navCtrl.navigateForward('menu');
  }

  goForgot() {
    this.navCtrl.navigateForward('/forgot');
  }
}
