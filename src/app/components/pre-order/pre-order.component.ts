import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pre-order',
  templateUrl: './pre-order.component.html',
  styleUrls: ['./pre-order.component.scss'],
})
export class PreOrderComponent implements OnInit {

  m_delivery_datetime = new Date().toISOString();

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  onClose() {
    this.modalCtrl.dismiss();
  }

}
