import { Injectable, Injector } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx'
 
@Injectable()
export class Shows {
 
  constructor(private http: Http) {
  }
 
  getShows(){
 
    return new Promise(resolve => {
    var url = 'http://localhost:8080/api/initReccomendation';
        this.http.get(url)
            .subscribe(data => {
              resolve(data);
            });
        });
 
  }
 
}
