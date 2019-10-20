import { Component, OnInit } from '@angular/core';
import { MyAppModel } from '../model';
import { element, by } from 'protractor';

@Component({
  selector: 'app-listeleme',
  templateUrl: './listeleme.component.html',
  styles: []
})
export class ListelemeComponent implements OnInit {
  data: Array<any>;
  dataCopy: Array<any>;
  title: String;
  myapp: MyAppModel;
  showEkleBtn: boolean;
  constructor() { }

  ngOnInit() {
    let myapp = new MyAppModel("MyAppName-1");
    this.data = myapp.data;
    this.dataCopy=this.data;
    this.title = myapp.title;
    this.showEkleBtn=false;
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
    let obj={};
    let ar_keys=this.obj_toArray(this.myapp.data[0]);
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
    this.myapp.data.push(obj);
    //alert(controls);
  }


}

