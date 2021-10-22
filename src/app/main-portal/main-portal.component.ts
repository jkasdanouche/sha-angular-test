import { Component, OnInit } from '@angular/core';

import * as shajs from 'sha.js';


@Component({
  selector: 'app-main-portal',
  templateUrl: './main-portal.component.html',
  styleUrls: ['./main-portal.component.css']
})
export class MainPortalComponent implements OnInit {

  public text: string;
  public res: string;

  constructor() {
    this.text = '';
    this.res = '';
   }

  ngOnInit() {
  }

  convert() {
    this.res = shajs('sha256').update(this.text).digest('hex');
  }

}
