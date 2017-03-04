import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AlbumsService} from '../albums.service';



@Component({
    // selector: '',
    templateUrl: './app/addalbum/addalbum.html',

})

export class addalbumComponent  {



    albums: Album[];


    constructor(private albumsService: AlbumsService ){}

      onSubmit(title: string, year: number){
          this.albumsService.addAlbum({title: title, year: year}).subscribe(data => console.log(data));

        }



    onGetAlbums(){
        this.albumsService.getAlbums().subscribe(albums => {this.albums = albums;});
    }


}


interface Album {
    id: number;
    title: string;
    year: number;
}