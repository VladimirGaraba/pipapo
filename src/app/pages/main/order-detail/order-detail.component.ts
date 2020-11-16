import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit {

  m_items = [
    { name: 'Knoblauch', price: 0.50 },
    { name: 'Zwiebel', price: 0.50 },
    { name: 'Gorgonzola', price: 0.50 },
    { name: 'Speck', price: 0.50 },
    { name: 'Mais', price: 0.50 },
    { name: 'Frische Tomaten', price: 0.50 },
    { name: 'Thunfisch', price: 0.50 },
    { name: 'Oliven', price: 0.50 },
    { name: 'Spinat', price: 0.50 },
    
    { name: 'Knoblauch', price: 0.50 },
    { name: 'Zwiebel', price: 0.50 },
    { name: 'Gorgonzola', price: 0.50 },
    { name: 'Speck', price: 0.50 },
    { name: 'Mais', price: 0.50 },
    { name: 'Frische Tomaten', price: 0.50 },
    { name: 'Thunfisch', price: 0.50 },
    { name: 'Oliven', price: 0.50 },
    { name: 'Spinat', price: 0.50 }
    
  ]

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {}

  onPayment() {
    this.navCtrl.navigateForward('/menu/payment');
  }
}
