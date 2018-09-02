import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page1Page }from '../page1/page1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  button(){
    console.log('home1')
  }
  button1(){
    console.log()
    this.navCtrl.push(Page1Page);
  }

}
