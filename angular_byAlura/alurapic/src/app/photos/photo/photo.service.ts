import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo';

const API = 'https://jsonplaceholder.typicode.com';

@Injectable({ providedIn: 'root' })
export class PhotoService {

    constructor(private http: HttpClient) {
        this.http = http;
    }

    listFromAlbum(albumId: number) {
        return this.http
        .get<Photo[]>(API + '/photos');
    }
}

