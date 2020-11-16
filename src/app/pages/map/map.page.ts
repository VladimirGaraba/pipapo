import { Component, OnInit } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Geofence } from '@ionic-native/geofence/ngx';
import { v4 } from 'uuid';
import { Platform } from '@ionic/angular';
declare const google;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  constructor(
    private loader: MapsAPILoader,
    private http: HttpClient,
    private geolocation: Geolocation,
    private geofence: Geofence
    // private platform: Platform
  ) {

  }

  center = {
    lat: 6.4393477,
    lng: 3.5244628999999996,
  };
  zoom = 15;
  address = '';
  state = '';

  pingLocation(location) {
    this.http
      .post('http://localhost:4000/ping', location)
      .subscribe((res) => {});
  }
  notify(location) {
    this.http
      .post('http://localhost:4000/notify', location)
      .subscribe((res) => {});
  }

  reverseGeocode(latLng) {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: latLng }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          const address = results[0].formatted_address;
          const addressList = address.split(',');
          this.address = addressList[0];
          this.state = addressList.slice(2).join(', ');
        }
      }
    });
  }

  private createGeofence() {
    let fence = {
      id: v4(), // any unique ID
      latitude: this.center.lat, // center of geofence radius
      longitude: this.center.lng,
      radius: 1000, // radius to edge of geofence in meters
      transitionType: 2,
    };
    this.geofence
      .addOrUpdate(fence)
      .then(
        () => console.log('Geofence added'),
        (err) => console.log('Geofence failed to add', err)
      );
    this.geofence.onTransitionReceived().subscribe((res) => {
      this.notify(this.center);
    });
  }

  ngOnInit() {
    this.loader.load().then(() => {
      this.reverseGeocode(this.center);
      this.pingLocation(this.center);
    });
    this.createGeofence();
    // const watch = this.geolocation.watchPosition();
    //         watch.subscribe((position) => {
    //           const positionEmpty = Object.keys(position).length < 1;
    //           if (!positionEmpty) {
    //             this.center = {
    //               lat: position.coords.latitude,
    //               lng: position.coords.longitude,
    //             };
    //             this.reverseGeocode(this.center);
    //             this.pingLocation(this.center);
    //           }
    //           })
  }
}
