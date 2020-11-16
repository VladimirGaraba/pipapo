import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-paymethods',
  templateUrl: './paymethods.component.html',
  styleUrls: ['./paymethods.component.scss'],
})
export class PaymethodsComponent implements OnInit {
  m_card : any = {
    number: 1234567890,
    expire: { month: 1, year: 2021},
    security: 11111
  };
  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {}

  onDone() {
    this.navCtrl.navigateForward('/menu/done');
  }

}
