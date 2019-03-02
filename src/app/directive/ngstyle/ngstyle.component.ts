import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {

  color = 'green';
  bg = 'pink';
  mySize = '12px';
  myFont = 'garamond';
  constructor() { }
  changeSize(taille) {
    this.mySize = taille + 'px';
  }
  changeFont(font) {
    this.myFont = font;
  }
  ngOnInit() {
  }

}
