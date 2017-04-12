import { Component } from '@angular/core';
import {Observable} from 'rxjs/Rx';
@Component({
  template: `<h1>Today's stock value is : {{stockValue}}</h1>
  <img src='{{imgUrl}}' />`
})
export class StockComponent { 

    stockValue=null;
    public imgUrl = "http://lorempixel.com/400/800/";


  ngOnInit(){
    let timer = Observable.timer(2000,1000);
    timer.subscribe(t=>this.stockValue = t);
  }
                    
}
