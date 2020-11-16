import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { PreOrderComponent } from 'src/app/components/pre-order/pre-order.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  isCheck: boolean = false;
  m_count = {
    '1': 1,
    '2': 1
  }

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  onPayment() {
    this.navCtrl.navigateForward('/menu/payment');
  }

  onCheck(e) {
    if (e.detail.checked) {
      this.showPreOrder();
    }
  }

  onIncrease(idx) {
    this.m_count[`${idx}`]++;
  }

  onDecrease(idx) {
    if (this.m_count[`${idx}`] == 1) return;
    this.m_count[`${idx}`]--;
  }

  async showPreOrder() {
    const modal = await this.modalCtrl.create({
      component: PreOrderComponent,
      componentProps: {},
      cssClass: 'confirm_modal',
      backdropDismiss: false
    })
    return await modal.present();
  }

}
