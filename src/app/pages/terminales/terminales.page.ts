import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminales',
  templateUrl: './terminales.page.html',
  styleUrls: ['./terminales.page.scss'],
})
export class TerminalesPage implements OnInit {
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
      tad: 'Irapuato',
      estado: 'Guanajuato',
      ciudad: 'Industrial Irapuato',
      cp: 36541,
      calle: 'Av.del Canal Sur',
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
  ]
  constructor() { }

  ngOnInit() {
  }

}
