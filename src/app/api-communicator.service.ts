import {Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable, Observer } from 'rxjs/Rx';
import {environment} from '../environments/environment'


@Injectable()
export class AppService {
    constructor(private _http:Http){}

    apiPost(uri, data) {
        let outputObserver: Observer<any>;
        let url= environment.baseUrl;
        let serverAddress= url+uri;
        let output = new Observable(observer => outputObserver = observer).share();
        data = JSON.stringify(data);
        var headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
            this._http.post(serverAddress, data, { headers: headers }).subscribe(res => {
                let outputResponse = res.json();
                  outputObserver.next(outputResponse);
            }, (error) => {
          
                 outputObserver.error(error.status)
            });
            
        return output;
        
    }

}