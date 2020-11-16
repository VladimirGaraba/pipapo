import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['../auth/login/login.page.scss','./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  m_type = 'data-protect';

  constructor() { }

  ngOnInit() {
  }

  chageType(e) {
    this.m_type = e.detail.value;
  }

  onSave(type) {
    if (type == 'contact') {

    } else {
      
    }
  }
}
