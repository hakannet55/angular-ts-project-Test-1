import { Component, OnInit } from '@angular/core';
import { Product } from '../model';
import { element, by } from 'protractor';
import { GetdataService } from '../services/getdata.service';
import { interval, Subscription, empty } from 'rxjs';
import { isArray } from 'util';
import { MatDialog, MatDialogRef } from '@angular/material';
import { modal_ac } from '../dialogs/modal_ac';
import { dialog1 } from '../dialogs/dialog1';

@Component({
  selector: 'app-listeleme',
  templateUrl: './listeleme.component.html',
  styles: [],
  providers: [GetdataService]
})
export class ListelemeComponent implements OnInit {
  content: string;
  dataCopy: Array<any>;
  title: "MyAppName-1";
  data: Product[];
  dataEkleme_heads: Array<any>;
  showEkleBtn: boolean = false;
  private updateSubscription: Subscription;
  constructor(
    private gtdServices: GetdataService,
    public dialog: MatDialog
  ) { }
  columnDefs = [
    { headerName: 'Ürün-id', field: 'id', sortable: true, filter: true },
    { headerName: 'name', field: 'name', sortable: true, filter: true },
    { headerName: 'Time', field: 'time', sortable: true, filter: true },
    { headerName: 'Alındı', field: 'tamam' }
  ];
  ngOnInit() {
    this.updateSubscription = interval(1200)
      .subscribe((val) => {
        this.gtdServices.getDatas().subscribe(val => {
          if (isArray(this.dataEkleme_heads) == false) {
            this.dataEkleme_heads = this.obj_toArray(val[0]);
          }
          if (this.gtdServices.araText == "") {
            //do not update ara
            this.data = val
          }

        })
      });

  }

  obj_toArray(value) {
    let values = [];
    for (let key in value) { values.push({ "key": key, "value": value[key] }); }
    return values
  }

  toggle(a) {
    return (!a) ? a = true : a = false;
  }

  filterItem(target) {
    const valStr = target.target.value;
    this.gtdServices.araText = valStr;
    this.data = this.data.filter(val => val.name.indexOf(valStr) !== -1);
  }

  ekleNew(target) {
    let ary = [];
    //html elementini tara ve array a ekle value
    const elArr = Array.from(document.querySelectorAll(target));
    [].forEach.call(elArr, function (ctl) {
      ary.push(ctl.value);
    });
    let obj = [];
    let val: string;
    let ar_keys = this.obj_toArray(this.data[0]);
    let empty_control = "";
    //array degerini otomatik mevcut data objesindeki şablondaki anahtar kelimeler(keyname) e göre doldur.
    for (let i = 0; i < ary.length; i++) {
      val = ary[i];
      let key = ar_keys[i].key;
      if (val.length < 2 && empty_control == "") { empty_control = key; }
      obj.push(val);
    }
    if (empty_control !== "") {
      alert("boş-alan: " + empty_control);
      return false;
    }
    this.gtdServices.sendAddData(obj);
    this.showEkleBtn = false;
    //doldurulan yeni array obje data ya ilave et
    //this.data.push(obj);
    //alert(controls);
  }
  modal_ac(title: String, content: String) {
    this.dialog.open(
      dialog1,
      {data:{"title":title,"content":content}}
    );
  }

}



