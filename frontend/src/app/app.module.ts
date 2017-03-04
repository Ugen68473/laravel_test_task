import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule}  from '@angular/router';
import { HttpModule} from '@angular/http';
import {AlbumsService} from './albums.service';
import { FormsModule } from '@angular/forms';


import { AppComponent }  from './app.component';
import { headerComponent } from './header/app.headerComponent';
import { navComponent } from './nav/app.navComponent';
import { AlbumsComponent } from './albums/albums.component';
import {footerComponent } from './footer/app.footerComponent';
import { addalbumComponent } from './addalbum/addalbum.Component';


@NgModule({
  imports:      [ BrowserModule,HttpModule, FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AlbumsComponent
      },
      {
        path: 'addalbum',
        component: addalbumComponent
      }
    ])
  ],
  declarations: [ AppComponent, headerComponent, navComponent, AlbumsComponent, footerComponent, addalbumComponent],
  providers: [AlbumsService],
  bootstrap: [AppComponent]
})
export class AppModule { }