import { Component } from '@angular/core';
import {AlbumsService} from '../albums.service';


@Component({
    templateUrl: './app/albums/albums.html',
})
export class AlbumsComponent  {

    albums: Album[];
    tracks: Track[];


    constructor(private albumsService: AlbumsService ){}

    onGetAlbums(){
        this.albumsService.getAlbums().subscribe(albums => {this.albums = albums;});
    }
    onGetTracks(){
        this.albumsService.getTracks().subscribe(tracks => {this.tracks = tracks;});
    }

}


interface Album {
    id: number;
    title: string;
    year: number;
    track:[];
}

interface Track{
    track_id:number;
    title: string;
    musician: string;
    title_track: string;
    duration: number;
}