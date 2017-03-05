import { Component } from '@angular/core';
import {AlbumsService} from '../albums.service';


@Component({
    templateUrl: './app/albums/albums.html',
})
export class AlbumsComponent  {

    albums: Album[];
    constructor(private albumsService: AlbumsService ){}

    onGetAlbums(){
        this.albumsService.getAlbums().subscribe(albums => {this.albums = albums;});
    }
}


interface Album {
    id: number;
    title: string;
    year: number;
    track:{};
}
