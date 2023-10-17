import { Component, OnInit } from '@angular/core';



declare var google: any;

@Component({
  selector: 'app-mapita',
  templateUrl: './mapita.page.html',
  styleUrls: ['./mapita.page.scss'],
})
export class MapitaPage implements OnInit {

  map: any;

  constructor() { }

  ngOnInit() {
    this.initMap();
  }
  
  initMap() {
    var myLatlng = new google.maps.LatLng(-33.68142157785643,-71.22594634660035);
    
    var mapOptions = {
      zoom: 16,
      center: myLatlng
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    
    var marker = new google.maps.Marker({
        position: myLatlng
    });
    
    marker.setMap(map);
  }
}
