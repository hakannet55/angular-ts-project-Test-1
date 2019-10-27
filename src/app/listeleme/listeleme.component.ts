import { Component, OnInit } from '@angular/core';
import { Product } from '../model';
import { element, by } from 'protractor';
import { GetdataService } from '../services/getdata.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-listeleme',
  templateUrl: './listeleme.component.html',
  styles: [],providers:[GetdataService]
})
export class ListelemeComponent implements OnInit {
  dataCopy: Array<any>;
  title: "MyAppName-1";
  data: Product[];
  showEkleBtn: boolean;
  constructor(
    private gtdServices:GetdataService
  ) {}
  columnDefs = [
    {headerName: 'Ürün-id', field: 'id' ,sortable: true, filter: true},
    {headerName: 'Time', field: 'time',sortable: true, filter: true },
    {headerName: 'Alındı', field: 'tamam'}
  ];
  ngOnInit() {
    this.gtdServices.getDatas().subscribe(data=>{
      this.data=data;
    });
  }

  obj_toArray(value){
    let values = [];
    for (let key in value) {values.push({"key":key,"value":value[key]});}
    return values
  }

  toggle(a){
    return (!a) ? a=true : a=false;
  }

  filterItem(target){
    let term = "t";
    this.data = this.dataCopy.filter(function(tag) {
        return tag.name.indexOf(term) >= 0;
    });
  }

  ekleNew(target){
    let ary=[];
    //html elementini tara ve array a ekle value
    const elArr = Array.from(document.querySelectorAll(target));
    [].forEach.call( elArr,function (ctl) {
      ary.push(ctl.value);
    });
    let obj=Product;
    let ar_keys=this.obj_toArray(this.data[0]);
    let empty_control="";
    //array degerini otomatik mevcut data objesindeki şablondaki anahtar kelimeler(keyname) e göre doldur.
    for(let i=0; i < ary.length;i++){
      let val=ary[i];
      let key=ar_keys[i].key;
      if(val.length < 2 && empty_control == ""){empty_control=key;}
      obj[ key ] = val ;
    }
    if(empty_control !==""){
      alert("boş-alan: "+ empty_control);
      return false;
    }
    //doldurulan yeni array obje data ya ilave et
    //this.data.push(obj);
    //alert(controls);
  }


}

