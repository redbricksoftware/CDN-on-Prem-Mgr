import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { CDNFile } from './cdn-file';

@Injectable()
export class CDNService{

    private cdnFilesUrl = 'http://localhost:8080/api/cdnfiles';  // URL to web api

    constructor(private http: Http) { }

    getCDNFiles(): Promise<CDNFile[]> {
        return this.http.get(this.cdnFilesUrl)
            .toPromise()
            //data = the property name of the api array return by the server.js api.
            .then(response => response.json().data as CDNFile[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
