import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Product } from '../model';
import { Observable,BehaviorSubject, Subscription, interval } from 'rxjs';

@Injectable()
export class GetdataService implements OnInit {
  path = "http://localhost/api/";
  public araText:String="";
  private data= new BehaviorSubject<Product[]>(null);
  public dataProduct: Product[];
  cast = this.data.asObservable();
  constructor(private http: HttpClient) { }
  ngOnInit() {}

  getDatas():Observable<Product[]>{
    return this.http
    .get<Product[]>(this.path+"?read=1");
  };

  sendAddData(data:Array<any>){
    const myheader = new HttpHeaders();
    let body = new HttpParams()
    .set('addSave', "1")
    .set('data',JSON.stringify(data));
    this.http
    .post<String>(this.path+"?addSave=1",body,{headers:myheader}).subscribe(val=>{
      //if(val !=="ok"){return "hata";}
      console.log("dat:"+val);
      this.getDatas();
    });
  }

}
