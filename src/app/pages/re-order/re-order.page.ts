import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-re-order',
  templateUrl: './re-order.page.html',
  styleUrls: ['./re-order.page.scss'],
})
export class ReOrderPage implements OnInit {

  m_items = [1,2,3,4,5,6,7];

  m_count = {
    '1': 1,
    '2': 1
  }

  constructor(
    private navCtrl: NavController
  ) { 
    for (let i = 1; i < 8; i++) {
      this.m_count[`${i}`] = 1;
    }
  }

  ngOnInit() {
  }

  onIncrease(idx) {
    this.m_count[`${idx}`]++;
  }

  onDecrease(idx) {
    if (this.m_count[`${idx}`] == 1) return;
    this.m_count[`${idx}`]--;
  }

  onClickConfirm() {
    this.navCtrl.navigateForward('cart');
  }

  getRandPrice() {
    return Math.floor(Math.random() * 7);
  }
}
