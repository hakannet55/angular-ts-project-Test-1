import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model';
import { Observable,BehaviorSubject } from 'rxjs';

@Injectable()
export class GetdataService {
  path = "http://localhost/api/";
  private data= new BehaviorSubject<Product[]>(null);
  cast = this.data.asObservable();
  constructor(private http: HttpClient) { }
  getDatas():Observable<Product[]>{
    return this.http
    .get<Product[]>(this.path);
  }
  destroy(){
    
  }
}
