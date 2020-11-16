import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.scss'],
})
export class UserInfoPage implements OnInit {

  m_user : { gender: string, birthday: string } = 
    { gender: 'male', birthday: new Date().toISOString()};
  m_addr : string = 'addr1';
  days = [];
  monthes = [];
  years = [];

  constructor() {
    
  }

  ngOnInit() {
    this.m_user.gender = 'male';
  }

  onChangeGender(e) {
    console.log(e.detail.value);
    this.m_user.gender = e.detail.value;
  }

  onChangeAddr(e) {
    this.m_addr = e.detail.value;
  }

}
