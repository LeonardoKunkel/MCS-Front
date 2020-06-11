import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { PresionModelPage } from '../presion-model/presion-model.page';

@Component({
  selector: 'app-precion',
  templateUrl: './precion.page.html',
  styleUrls: ['./precion.page.scss'],
})
export class PrecionPage implements OnInit {

  chartData: ChartDataSets[] = [{ data: [], label: 'Stock price'}];
  chartLabel: Label[];
  terminales:any=[
    {
      tad: 'Irapuato',
      estado: 'Guanajuato',
      ciudad: 'Industrial Irapuato',
      cp: 36541,
      calle: 'Av.del Canal Sur',
      numer:'S/N'
    },
    {
      tad: 'Tula',
      estado: 'Hidalgo',
      ciudad: 'Tula De Allende',
      cp: 42820,
      calle: 'Km 18.5 de la Carretera Jorobas-Tula',
      numer:'S/N'
    },
    {
      tad: 'Morelia',
      estado: 'Michoacan',
      ciudad: 'Tarimbaro',
      cp: 58880,
      calle: 'Km 18.5 de la Carretera Morelia-Salamanca',
      numer:'S/N'
    },
    {
      tad: 'Azcapotzalco',
      estado: 'D.F',
      ciudad: 'col.Nueva Argentina,Del.Miguel Hidalgo',
      cp: 11230,
      calle: 'Ing.Militares',
      numer:'75'
    },
    {
      tad: 'Barranca del Muerto',
      estado: 'D.F',
      ciudad: 'col.Merced Gomes,Del.Alvaro Obregon',
      cp: 1600,
      calle: 'Av.centenario',
      numer:'301'
    },
    {
      tad: 'San Juan Ixhuatepec',
      estado: 'Estado de México',
      ciudad: 'col. La presa Tlanepantla',
      cp: 54408,
      calle: 'Av.San Jose',
      numer:'44'
    },
    {
      tad: 'Añil',
      estado: 'D.F',
      ciudad: 'col. Granjas México, Del Iztacalco',
      cp: 8400,
      calle: 'Añil',
      numer:'486'
    },
    {
      tad: 'León',
      estado: 'Guanajuato',
      ciudad: 'León',
      cp: 37440,
      calle: 'Carretera.León-San Francisco Del Rincón',
      numer:'S/N'
    },
    {
      tad: 'Querétaro',
      estado: 'Querétaro',
      ciudad: 'Querétaro',
      cp: 76120,
      calle: 'Zona Industrial. Benito Juaréz . Acceso No.3',
      numer:'S/N'
    },
    {
      tad: 'Toluca',
      estado: 'Estado de México',
      ciudad: 'Toluca',
      cp: 50140,
      calle: 'Carretera México-Toluca Km 59.5',
      numer:'S/N'
    },
    {
      tad: 'Celaya',
      estado: 'Guanajuato',
      ciudad: 'Celaya',
      cp: 38020,
      calle: 'Corredor Induatrial Celaya-Villagran Km.3',
      numer:'S/N'
    },
    {
      tad: 'Uruapan',
      estado: 'Michoacan',
      ciudad: 'Uruapan. Zona Industrial',
      cp: 60220,
      calle: 'Boulevard Industrial',
      numer:'4299'
    },
    {
      tad: 'Zamora',
      estado: 'Michoacan',
      ciudad: 'Zamora',
      cp: 58600,
      calle: 'Carretera.Federal Zamora-La Piedad Km.13.5',
      numer:'S/N'
    },
    {
      tad: 'Cuernavaca',
      estado: 'Morelos',
      ciudad: 'Cuernavaca',
      cp: 62550,
      calle: 'Km.6.2 Paso a Cuahnahuac, Blvd.A Cuautla',
      numer:'S/N'
    },
    {
      tad: 'Iguala',
      estado: 'Guerrero',
      ciudad: 'Iguala',
      cp: 40020,
      calle: 'Periférico Norte y Cruce Via F.F.C.C',
      numer:'S/N'
    },
    {
      tad: 'Pachuca',
      estado: 'Hidalgo',
      ciudad: 'Hidalgo',
      cp: 42080,
      calle: 'Blvd.Ever.Márquez Km.2.5 Carr.Pachuca-Cd.Sahagún',
      numer:'S/N'
    },
    {
      tad: 'Cuautla',
      estado: 'Morelos',
      ciudad: 'Cuautla',
      cp: 62741,
      calle: 'Carretera a Izucar De Matamoros Km.12.5, Parque Industrial Cuautla',
      numer:'S/N'
    },
    {
      tad: 'Salamanca',
      estado: 'Guanajuato',
      ciudad: 'Salamanca',
      cp: 35700,
      calle: 'Av.Faja de Oro, Acceso P.no.4 de Riama',
      numer:'S/N'
    },
  ];

  chartOptions ={
    responsive:true,
    title:{
      display:true,
      text: 'Historic Stock Price'
    },
    pan:{
      enabled: true,
      mode:'xy'
    },
    zoom:{
      enabled: true,
      mode:'xy'
    }
  };
  chartColors: Color[] = [
    {
      borderColor: '#000000',
      backgroundColor: '#3DC192'
    }
  ];
  chartType = 'line';
  showLegend = false;

  stock = 'AAPL';


  place:any={
    terminal:''
  }

  terminalSeleccionada:any[]=[]

  constructor(  
    private http: HttpClient,
    private modalCtrl: ModalController
    ) { 
    this.getData();
  }

  async adddates(){
    const modal = await this.modalCtrl.create({
      component: PresionModelPage
    });
    return await modal.present();
  }

  getData(){
    return this.http.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${this.stock}?from=2018-03-12&to=2019-03-12&apikey=demo`).subscribe(res =>{
      console.log('res:' , res);
      const history = res ['historical'];
      this.chartData[0].data = [];
      this.chartLabel = [];

      for(let entry of history){
        this.chartLabel.push(entry.date);
        this.chartData[0].data.push(entry['close']);
      }
      console.log('data:',this.chartData);
      
    })
  }

  ngOnInit() {
  }

  public optionsFn(item): void { 
    if(this.place.terminal === 'Irapuato'){
      this.terminalSeleccionada = [this.terminales[0]];
    }else if(this.place.terminal === 'Tula'){
      this.terminalSeleccionada = [this.terminales[1]];
    }else if(this.place.terminal === 'Morelia'){
      this.terminalSeleccionada = [this.terminales[2]];
    }else if(this.place.terminal === 'Azcapotzalco'){
      this.terminalSeleccionada = [this.terminales[3]];
    }else if(this.place.terminal === 'Barranca del Muerto'){
      this.terminalSeleccionada = [this.terminales[4]];
    }else if(this.place.terminal === 'San Juan Ixhuatepec'){
      this.terminalSeleccionada = [this.terminales[5]];
    }else if(this.place.terminal === 'Añil'){
      this.terminalSeleccionada = [this.terminales[6]];
    }else if(this.place.terminal === 'León'){
      this.terminalSeleccionada = [this.terminales[7]];
    }else if(this.place.terminal === 'Querétaro'){
      this.terminalSeleccionada = [this.terminales[8]];
    }else if(this.place.terminal === 'Toluca'){
      this.terminalSeleccionada = [this.terminales[9]];
    }else if(this.place.terminal === 'Celaya'){
      this.terminalSeleccionada = [this.terminales[10]];
    }else if(this.place.terminal === 'Uruapan'){
      this.terminalSeleccionada = [this.terminales[11]];
    }else if(this.place.terminal === 'Zamora'){
      this.terminalSeleccionada = [this.terminales[12]];
    }else if(this.place.terminal === 'Cuernavaca'){
      this.terminalSeleccionada = [this.terminales[13]];
    }else if(this.place.terminal === 'Iguala'){
      this.terminalSeleccionada = [this.terminales[14]];
    }else if(this.place.terminal === 'Pachuca'){
      this.terminalSeleccionada = [this.terminales[15]];
    }else if(this.place.terminal === 'Cuautla'){
      this.terminalSeleccionada = [this.terminales[16]];
    }else if(this.place.terminal === 'Salamanca'){
      this.terminalSeleccionada = [this.terminales[17]];
    }
  }

  
}
