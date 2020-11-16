import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bonus-result',
  templateUrl: './bonus-result.component.html',
  styleUrls: ['./bonus-result.component.scss'],
})
export class BonusResultComponent implements OnInit {

  m_dishes = [1,2,3,4,5,6,7,8,9,10];
  m_point = 2;
  
  constructor() { }

  ngOnInit() {}

}
