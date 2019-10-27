import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Product } from '../model';
import { Observable,BehaviorSubject, Subscription, interval } from 'rxjs';

@Injectable()
export class GetdataService implements OnInit {
  path = "http://localhost/api/";
  
  private data= new BehaviorSubject<Product[]>(null);
  public dataProduct: Product[];
  cast = this.data.asObservable();
  constructor(private http: HttpClient) { }
  ngOnInit() {}

  getDatas():Observable<Product[]>{
    return this.http
    .get<Product[]>(this.path);
  };

  sendAddData(data:Array<any>){
    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    let body = new HttpParams();
    body = body.set('data', JSON.stringify(data));
    this.http
    .post<String>(this.path,body,{headers:myheader}).subscribe(val=>{
      //if(val !=="ok"){return "hata";}
      return val;
    });
  }

}
