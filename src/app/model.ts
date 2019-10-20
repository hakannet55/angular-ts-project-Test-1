export class MyAppModel{
    title:String;
    data:Array<any>;
    constructor(AppName){
        this.title=AppName;
        this.data=[
            new dataItem(1230,"urun1",521),
            new dataItem(152,"urun3",151),
            new dataItem(152,"urun5",131),
            new dataItem(152,"urun6",111),
            new dataItem(152,"urun22",110)
        ];
    }
}

export class dataItem{
    id;urun;fiyat;time;alındı;
    constructor( id,urun,fiyat,time=new Date().getTime(),alındı=false){
        this.id=id;
        this.urun=urun;
        this.fiyat=fiyat;
        this.time=time;
        this.alındı=alındı;
    }
}