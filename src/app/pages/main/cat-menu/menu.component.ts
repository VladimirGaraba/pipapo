import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class CatMenuComponent implements OnInit {

  m_segments = [
    { id: 1, title: 'PIZZABÄCKEREI' },
    { id: 2, title: 'SUPPENKÜCHE' },
    { id: 3, title: 'Antipasti' },
    { id: 4, title: 'GEMÜSEGARTEN' }
  ];
  cur_seg = 1;
  m_items = [1, 2, 3, 4, 5, 6, 7];
  constructor() {

  }

  ngOnInit() {
    // const item = this.navParams.get('cat');
    // console.log('Here is cat-menu: ', item);
  }

  segChange(e) {
    this.cur_seg = e.detail.value;
    console.log(this.cur_seg);
  }

}
