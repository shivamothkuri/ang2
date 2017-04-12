import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book.component';
import { PencilComponent } from './pencil.component';
import { AppComponent } from './app.component';
import { StockComponent } from './stock.component';
// Route Configuration
export const routes: Routes = [
    { path: '', redirectTo: '/books', pathMatch: 'full'  },
  { path: 'books', component: BookComponent },
  { path: 'pencils', component: PencilComponent },
  { path: 'stock', component: StockComponent , outlet: 'sidebar'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);