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




}
