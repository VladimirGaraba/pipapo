import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bonus-point',
  templateUrl: './bonus-point.component.html',
  styleUrls: ['./bonus-point.component.scss'],
})
export class BonusPointComponent implements OnInit {

  m_bonusPoint = 54;
  m_url = 'assets/icon/icon_order.png';
  m_isImage = true;

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {

  }

  showDetail() {

  }

  onClickScan() {
    this.navCtrl.navigateForward('/menu/bonus-result');
  }

}
