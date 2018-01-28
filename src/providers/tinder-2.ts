import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx'
 
@Injectable()
export class Database {
 
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

  getUser(userName){
 
    return new Promise(resolve => {
    var url = 'http://localhost:8080/api/getUser/:' + userName;
        this.http.get(url)
            .subscribe(data => {
              resolve(data);
            });
        });
  }
 
}
