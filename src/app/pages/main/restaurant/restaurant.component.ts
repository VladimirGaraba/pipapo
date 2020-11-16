import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../../services/gallery.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent implements OnInit {

  imageList: any[];
  // m_gallery = [
  //   { id: 1, img: 'assets/images/products/product_01.png' },
  //   { id: 2, img: 'assets/images/products/product_02.png' },
  //   { id: 3, img: 'assets/images/products/product_03.png' },
  //   { id: 4, img: 'assets/images/products/product_04.png' },
  //   { id: 5, img: 'assets/images/products/product_05.png' },
  //   { id: 6, img: 'assets/images/products/product_06.png' },
  //   { id: 7, img: 'assets/images/products/product_01.png' },
  //   { id: 8, img: 'assets/images/products/product_02.png' },
  //   { id: 9, img: 'assets/images/products/product_03.png' },
  //   { id: 10, img: 'assets/images/products/product_04.png' },
  //   { id: 11, img: 'assets/images/products/product_05.png' },
  //   { id: 12, img: 'assets/images/products/product_06.png' }
  // ];

  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
    this.galleryService.getAllGallery().subscribe(res => {
      console.log(res);
      const response = JSON.parse(res['_body']);
      this.imageList = response.data;

      // console.log('Here is gallery imageList data: ', this.imageList);
      console.log('Here is gallery imageList data: ', response);
    });
  }

  ratingChange(e) {

  }

}
