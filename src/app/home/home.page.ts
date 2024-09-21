import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map!: L.Map;

  constructor() {}
  ngOnInit(){

  }

  ionViewDidEnter(){
    // Set proper coordinates for map center (e.g., London)
    this.map = L.map('mapId').setView([51.505, -0.09], 13);

    const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    const esriWorldImageryLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 18,
      attribution: 'Tiles © Esri'
    });

    const openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)'
  });
    

   // Kontrol Layer
   const baseMaps = {
    "OpenStreetMap": osmLayer,
    "Esri World Imagery": esriWorldImageryLayer,
    "Open Topo Map" : openTopoMap
    };
    

   // Menambahkan kontrol layer
    L.control.layers(baseMaps).addTo(this.map);

    var circle = L.circle([51.508, -0.13], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500
     }).addTo(this.map);

    circle.bindPopup("London.").openPopup();


  }
}
