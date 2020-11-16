import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-ppp-header',
  templateUrl: './ppp-header.component.html',
  styleUrls: ['./ppp-header.component.scss'],
})
export class PppHeaderComponent implements OnInit {
  _title = '';
  _action_type = 'setting';
  _is_double_line = false;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private routSvc: RouteService
  ) { }

  @Input() set title(val: string) {
    this._title = (val !== undefined && val !== null) ? val : '';
  }

  @Input() set action_type(val: string) {
    this._action_type = (val !== undefined && val !== null) ? val : 'setting';
  }

  @Input() set double_line(val: boolean) {
    this._is_double_line = (val !== undefined && val !== null) ? val : false;
  }

  ngOnInit() {}

  onClickSetting() {
    this.navCtrl.navigateForward('settings');
  }

  onClickCart() {
    this.navCtrl.navigateForward('cart');
  } 

  canBack() {
    return this.router.url != '/home';//this.routSvc.getPreviousUrl() === '/home';
  }

  onClickBack() {
    this.navCtrl.pop();
  }

  goHomeMenu() {
    this.navCtrl.navigateBack('/menu');
  }
}
