import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-order-food',
  templateUrl: './order-food.component.html',
  styleUrls: ['../home-menu/home-menu.component.scss', './order-food.component.scss'],
})
export class OrderFoodComponent implements OnInit {
  dataList: any[];
  // m_category = [
  //   {
  //     id: 1,
  //     title: 'SUPPENKÜCHE',
  //     icon: 'icon_cat_01',
  //     menu: [
  //       { title: 'Cocktails', id: 1 }, { title: 'Schnapse', id: 2 }, { title: 'Most', id: 3 }, { title: 'Wein', id: 4 }
  //     ]
  //   },
  //   {
  //     id: 2,
  //     title: 'antipasti',
  //     icon: 'icon_cat_02',
  //     menu: [
  //       { title: 'Cocktails', id: 1 }, { title: 'Schnapse', id: 2 }, { title: 'Most', id: 3 }, { title: 'Wein', id: 4 }
  //     ]
  //   },
  //   {
  //     id: 3,
  //     title: 'GEMÜSEGARTEN',
  //     icon: 'icon_cat_03',
  //     menu: [
  //       { title: 'Cocktails', id: 1 }, { title: 'Schnapse', id: 2 }, { title: 'Most', id: 3 }, { title: 'Wein', id: 4 }
  //     ]
  //   },
  //   {
  //     id: 4,
  //     title: 'PIZZABÄCKEREI',
  //     icon: 'icon_cat_04',
  //     menu: [
  //       { title: 'Cocktails', id: 1 }, { title: 'Schnapse', id: 2 }, { title: 'Most', id: 3 }, { title: 'Wein', id: 4 }
  //     ]
  //   },
  //   {
  //     id: 5,
  //     title: 'vom grill',
  //     icon: 'icon_cat_05',
  //     menu: [
  //       { title: 'Cocktails', id: 1 }, { title: 'Schnapse', id: 2 }, { title: 'Most', id: 3 }, { title: 'Wein', id: 4 }
  //     ]
  //   },
  //   {
  //     id: 6,
  //     title: 'pasta',
  //     icon: 'icon_cat_06',
  //     menu: [
  //       { title: 'Cocktails', id: 1 }, { title: 'Schnapse', id: 2 }, { title: 'Most', id: 3 }, { title: 'Wein', id: 4 }
  //     ]
  //   },
  //   {
  //     id: 7,
  //     title: 'alkoholfreies',
  //     icon: 'icon_cat_07',
  //     menu: [
  //       { title: 'Cocktails', id: 1 }, { title: 'Schnapse', id: 2 }, { title: 'Most', id: 3 }, { title: 'Wein', id: 4 }
  //     ]
  //   },
  //   {
  //     id: 8,
  //     title: 'dolce',
  //     icon: 'icon_cat_08',
  //     menu: [
  //       { title: 'Cocktails', id: 1 }, { title: 'Schnapse', id: 2 }, { title: 'Most', id: 3 }, { title: 'Wein', id: 4 }
  //     ]
  //   },
  //   {
  //     id: 9,
  //     title: 'caffe & tee',
  //     icon: 'icon_cat_09',
  //     menu: [
  //       { title: 'Cocktails', id: 1 }, { title: 'Schnapse', id: 2 }, { title: 'Most', id: 3 }, { title: 'Wein', id: 4 }
  //     ]
  //   },
  //   {
  //     id: 10,
  //     title: 'alkoholisches',
  //     icon: 'icon_cat_10',
  //     menu: [
  //       { title: 'Cocktails', id: 1 }, { title: 'Schnapse', id: 2 }, { title: 'Most', id: 3 }, { title: 'Wein', id: 4 }
  //     ]
  //   },
  //   {
  //     id: 11,
  //     title: 'vino',
  //     icon: 'icon_cat_11',
  //     menu: [
  //       { title: 'Cocktails', id: 1 }, { title: 'Schnapse', id: 2 }, { title: 'Most', id: 3 }, { title: 'Wein', id: 4 }
  //     ]
  //   }
  // ]

  constructor(
    private navCtrl: NavController,
    private categoriesservice: CategoriesService
  ) { }

  ngOnInit() {
    this.categoriesservice.getAllCategories().subscribe(res => {
      const response = JSON.parse(res['_body']);
      this.dataList = response.data;
      // // console.log('Here is gallery imageList data: ', this.imageList);
      console.log('Here is categories dataList: ', this.dataList);
    });
  }

  showDetail(cat) {
    console.log('Here is showDetail item: ', cat);
    this.navCtrl.navigateForward('/menu/cat-menu');
  }

}
