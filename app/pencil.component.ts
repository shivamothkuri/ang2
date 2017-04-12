import { Component } from '@angular/core';
@Component({
  template: `<h1>{{text}}</h1>
<img src='{{imgUrl}}' />
  `
})
export class PencilComponent {
  text = 'Rendering Pencil Component '+new Date();
  imgUrl = "http://lorempixel.com/400/200/";
 }
