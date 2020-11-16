import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {

  dataList: any[];
  m_submenu = '1';
  m_cat = {
    id: 1,
    title: 'suppenkuche',
    icon: 'icon_cat_01',
    menu: [
      { title: 'Cocktails', id: 1 }, { title: 'Schnäpse', id: 2 }, { title: 'Most', id: 3 }, { title: 'Wein', id: 4 }
    ]
  };

  // m_dummylist = [
  //   {
  //     img: 'assets/images/products/product_01.png',
  //     title: 'Aperol Spritz',
  //     detail: 'Lorem Ipsum is simply dummy text of the printing an typesettig industry. Lorem Ipsum has been.'
  //   }, {
  //     img: 'assets/images/products/product_02.png',
  //     title: 'B52',
  //     detail: 'Lorem Ipsum is simply dummy text of the printing an typesettig industry. Lorem Ipsum has been.'
  //   }, {
  //     img: 'assets/images/products/product_03.png',
  //     title: 'Bellini',
  //     detail: 'Lorem Ipsum is simply dummy text of the printing an typesettig industry. Lorem Ipsum has been.'
  //   }, {
  //     img: 'assets/images/products/product_04.png',
  //     title: 'Black Russian',
  //     detail: 'Lorem Ipsum is simply dummy text of the printing an typesettig industry. Lorem Ipsum has been.'
  //   }, {
  //     img: 'assets/images/products/product_05.png',
  //     title: 'Other1',
  //     detail: 'Lorem Ipsum is simply dummy text of the printing an typesettig industry. Lorem Ipsum has been.'
  //   }, {
  //     img: 'assets/images/products/product_06.png',
  //     title: 'Other2',
  //     detail: 'Lorem Ipsum is simply dummy text of the printing an typesettig industry. Lorem Ipsum has been.'
  //   }, {
  //     img: 'assets/images/products/product_07.png',
  //     title: 'Other3',
  //     detail: 'Lorem Ipsum is simply dummy text of the printing an typesettig industry. Lorem Ipsum has been.'
  //   }, {
  //     img: 'assets/images/products/product_03.png',
  //     title: 'Other4',
  //     detail: 'Lorem Ipsum is simply dummy text of the printing an typesettig industry. Lorem Ipsum has been.'
  //   }
  // ];

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {
    // route.queryParams.subscribe(param => {
    //   this.m_cat = param;
    //   console.log(this.m_cat);
    // });
  }

  ngOnInit() {
    this.productsService.getAllProducts().subscribe(res => {
      console.log(res);
      const response = JSON.parse(res['_body']);
      this.dataList = response.data;

      // console.log('Here is gallery imageList data: ', this.imageList);
      console.log('Here is products dataList data: ', this.dataList);
    });

  }

  changeSubMenu(e) {
    console.log(e);
    this.m_submenu = e.detail.value;
  }

  swipeEvent($e) {
    console.log($e.deltaX + ', ' + $e.deltaY);
    if ($e.deltaX > 0) {
      console.log('Swipe from Left to Right');
      this.m_submenu = 'segment1';
    } else {
      console.log('Swipe from Right to Left');
      this.m_submenu = 'segment2';
    }
  }

  onShare(kind: number) {
    if (kind === 1) { // fb

    } else if (kind === 2) { // instagram

    } else { // other

    }
  }

}
