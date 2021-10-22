import { Component, OnInit } from '@angular/core';

// install using:
// npm install --save sha.js
// or in case of error:
// npm i --save-dev @types/sha.js
import * as shajs from 'sha.js';


@Component({
  selector: 'app-main-portal',
  templateUrl: './main-portal.component.html',
  styleUrls: ['./main-portal.component.css']
})
export class MainPortalComponent implements OnInit {

  public text: string;
  public opt: string;
  public res: string;

  constructor() {
    this.text = '';
    this.opt = 'sha1';
    this.res = '';
   }

  ngOnInit() {
  }

  convert() {
    this.res = shajs(this.opt).update(this.text).digest('hex');
  }

}
