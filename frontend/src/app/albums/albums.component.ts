import { Component, Input } from '@angular/core';
import {AlbumsService} from '../albums.service';


@Component({
    templateUrl: './app/albums/albums.html',
    styles:['cursor: pointer'],
})
export class AlbumsComponent  {

    albums: Album;
    selectedAlbum: Album;


    constructor(private albumsService: AlbumsService ){}
    onGetAlbums(){
        this.albumsService.getAlbums().subscribe(albums => {this.albums = albums;});
    }
    onSelect(album: Album): void {
        this.selectedAlbum = album;
    }
}

interface Album {
    id: number;
    title: string;
    year: number;
    track:{
        musician: string;
        title_track: string;
        duration: number
    };
}
