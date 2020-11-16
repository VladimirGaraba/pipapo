import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { GalleryService } from '../../services/gallery.service';

@Component({
  selector: 'app-photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.scss'],
})
export class PhotoViewerComponent implements OnInit {
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

  m_slideOpts = {
    initialSlide: 1,
    speed: 100
  };

  constructor(
    private galleryService: GalleryService,
    private modalCtrl: ModalController,
    private navPram: NavParams
  ) { }

  ngOnInit() {
    this.galleryService.getAllGallery().subscribe(res => {
      console.log(res);
      const response = JSON.parse(res['_body']);
      this.imageList = response.data;
    });
    this.m_slideOpts.initialSlide = this.navPram.get('id') - 1;
    console.log('Here is navpram id: ', this.navPram.get('id'));
  }

  onClose() {
    this.modalCtrl.dismiss();
  }
}
