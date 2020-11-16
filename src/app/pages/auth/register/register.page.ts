import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { SuccessDlgComponent } from 'src/app/components/success-dlg/success-dlg.component';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, FormGroup, FormControl, Validators, } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['../login/login.page.scss', './register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private authService: AuthService,
    private formBuilder: FormBuilder

  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      c_password: ['', Validators.required],
      // telephonenumber: ['', Validators.required]
    });
    this.registerForm = new FormGroup({
      first_name: new FormControl(),
      surname: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      c_password: new FormControl()
      // telephonenumber: new FormControl()
    });
  }

  onRegister() {
    console.log('Here is Register Action: ');
    console.log('Here is loginform: ', this.registerForm.value);
    // this.isLogin = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.authService.register(this.registerForm.value).subscribe(res => {
      const response = JSON.parse(res._body);
      if (response.success === true) {

        console.log(res);
        localStorage.setItem('ACCESS_TOKEN', response.data.access_token);
        console.log(localStorage.getItem('ACCESS_TOKEN'));
        // setTimeout(() => {
        this.onSuccess();
        // this.navCtrl.navigateRoot('menu', { animated: false });
        // }, 100);
      } else {
        return;
      }
    });
    // this.onSuccess();
  }

  onBackToLogin() {
    this.navCtrl.navigateBack('/login');
  }

  async onSuccess() {
    const sModal = await this.modalCtrl.create({
      component: SuccessDlgComponent,
      componentProps: {
        state: 0,
        data: {}
      },
      cssClass: 'confirm_modal',
      backdropDismiss: false
    });
    return await sModal.present();
  }

}
