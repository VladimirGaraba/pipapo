import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-success-dlg',
  templateUrl: './success-dlg.component.html',
  styleUrls: ['./success-dlg.component.scss'],
})
export class SuccessDlgComponent implements OnInit {

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  goLogin() {
    this.modalCtrl.dismiss().then(() => {
      setTimeout(()=>{
        this.navCtrl.navigateBack('/login');
      },100);
    });
  }

}
