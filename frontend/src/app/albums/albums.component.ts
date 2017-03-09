import { Component, Input } from '@angular/core';
import {AlbumsService} from '../albums.service';
import { FormsModule } from '@angular/forms';

@Component({
    templateUrl: './app/albums/albums.html',
    styles:['cursor: pointer'],
})
export class AlbumsComponent  {


    album: Album;
    albums: Album;
    selectedAlbum: Album;
    newTitle: any;
    newYear: any;

    constructor(private albumsService: AlbumsService ){}

    onGetAlbums(){
        this.albumsService.getAlbums().subscribe(albums => {this.albums = albums;});
    }
    onSelect(album: Album): void {
        this.selectedAlbum = album;
    }
    onUpdate(){

        //      console.log(this.selectedAlbum.id);
        //      console.log(this.newTitle)
        this.albumsService.updateAlbum(this.selectedAlbum.id, this.newTitle, this.newYear )
            .subscribe((album:Album) => {this.album = album});

    }

    onDelete(){
        this.albumsService.deleteAlbum(this.selectedAlbum.id).subscribe(() => console.log('Album deleted!!!'));
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
