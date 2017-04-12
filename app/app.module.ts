import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { PencilComponent }   from './pencil.component';
import { BookComponent }   from './book.component';
import { StockComponent } from './stock.component';
import { routing } from './app.routes';
import {UrlSerializer} from '@angular/router';
import {CustomUrlSerializer} from './customurl';
@NgModule({
	providers: [
	              { provide: UrlSerializer, useClass: CustomUrlSerializer }
	          ],
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent , PencilComponent, BookComponent, StockComponent],
  bootstrap:    [ AppComponent ],

})
export class AppModule { }
