import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AlbumsService {
    constructor(private http: Http) {
        console.log('it works');
    }


    addAlbum(album: any){
        const body = JSON.stringify(album);
        const headers = new Headers({'Content-Type': 'application/json'})
        return this.http.post('http://localhost/sites/albums/api/album', body, {headers: headers})
            .map((data:Response) => data.json());
    }

    getAlbums(){
        return this.http.get('http://localhost/sites/albums/api/albums')
            .map((response: Response) => {return response.json().albums;});

    }

    updateAlbum(id: number, newTitle: string, newYear: number) {
        const body = JSON.stringify({title: newTitle, year: newYear});
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.put('http://localhost/sites/albums/api/album/' + id, body, {headers: headers})
            .map((response: Response) => response.json()
            );
   }

    deleteAlbum(id: number){
        return this.http.delete('http://localhost/sites/albums/api/album/' + id);
    }
}
